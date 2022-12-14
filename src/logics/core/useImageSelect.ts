import { ref, type Ref } from 'vue'
import { blob2uri } from './Blob2Uri'

export const useImageSelect = (fileSelectorRef: Ref<HTMLInputElement>) => {
  const imageDataUrl = ref('')
  const loadSelected = async () => {
    const file = fileSelectorRef.value?.files?.[0]
    if (!file) {
      return
    }
    imageDataUrl.value = await blob2uri(file)
    return imageDataUrl.value
  }

  const selectFile = () => {
    const sel = fileSelectorRef.value
    sel.click()
  }

  return {
    selectFile,
    loadSelected,
    imageDataUrl,
  }
}
