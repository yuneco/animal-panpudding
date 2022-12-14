import { ref, type Ref } from 'vue'
import { computedAsync } from '@vueuse/core'
import { createPanpudding, type Panpudding } from './panpudding'
import { detectWeather } from './detectWeather'
import { createImage } from '../core/createImage'

/**
 * 足元の画像refをもとに、写真に対応する動物パンプリン占いの結果を提供するコンポジションです。
 * @param src 足元の写真のURL
 */
export const usePanpuddingForImage = (src: Ref<string>) => {
  const isProcessing = ref(false)

  const panpudding = computedAsync<Panpudding | undefined>(
    async () => {
      if (!src.value) return undefined
      const img = await createImage(src.value)
      const weather = await detectWeather(img)
      if (!weather) return undefined
      return createPanpudding(weather.weather, weather.probability)
    },
    undefined,
    isProcessing
  )

  return { panpudding, isProcessing }
}
