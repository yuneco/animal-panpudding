import * as tmImage from '@teachablemachine/image'
import modelUrl from '@/assets/model.json?url'
import metaUrl from '@/assets/metadata.json?url'

let modelLoader: ReturnType<typeof tmImage.load> | undefined = undefined

const loadModel = () => {
  if (!modelLoader) {
    modelLoader = tmImage.load(modelUrl, metaUrl)
  }
  return modelLoader
}

export const detectWeather = async (imageElement: HTMLImageElement) => {
  // 学習済みの分類器モデルをロードする
  const model = await loadModel()
  const result = await model.predict(imageElement)
  result.sort((a, b) => b.probability - a.probability)
  console.log(result[0])
}
