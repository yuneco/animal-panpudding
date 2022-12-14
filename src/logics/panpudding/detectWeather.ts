import * as tmImage from '@teachablemachine/image'
import modelUrl from '@/assets/model.json?url'
import metaUrl from '@/assets/metadata.json?url'
import { WEATHER_NAMES } from './weather'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import binUrl from '@/assets/weights.bin?url'

let modelLoader: ReturnType<typeof tmImage.load> | undefined = undefined

/**
 * 学習済みの分類器モデルをロードする
 * @returns モデルを返すPromise
 */
const loadModel = () => {
  if (!modelLoader) {
    modelLoader = tmImage.load(modelUrl, metaUrl)
  }
  return modelLoader
}

/**
 * 足元の画像から天気を推定して返します
 * @param imageElement 足元の画像
 * @returns 判定結果の天気
 */
export const detectWeather = async (imageElement: HTMLImageElement) => {
  const model = await loadModel()
  const result = await model.predict(imageElement)
  result.sort((a, b) => b.probability - a.probability)
  const { className, probability } = result[0]
  const weather = WEATHER_NAMES.find((w) => w === className)
  if (!weather) return undefined
  return { weather, probability }
}
