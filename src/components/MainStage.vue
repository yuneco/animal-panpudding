<script setup lang="ts">
import { blob2uri } from '@/logics/core/Blob2Uri'
import { detectWeather } from '@/logics/detection/detectWeather'
import { reactive, ref } from 'vue'

const fileSelectorRef = ref()
const imageRef = ref()
const state = reactive({
  imageDataUrl: '',
})

const fileSelected = async () => {
  const file = fileSelectorRef.value?.files?.[0]
  if (!file) {
    return
  }
  state.imageDataUrl = await blob2uri(file)
}

const selectImage = () => {
  const sel = fileSelectorRef.value
  if (!sel || state.imageDataUrl) {
    return
  }
  sel.click()
}

const onImgLoaded = () => {
  const el = imageRef.value
  if (!el) return
  detectWeather(el)
}
</script>

<template>
  <div class="MainStage" @click="selectImage">
    <img
      ref="imageRef"
      v-if="state.imageDataUrl"
      class="ref-image"
      :src="state.imageDataUrl"
      @load="onImgLoaded"
    />
    <label v-show="!state.imageDataUrl"
      >Select Image File
      <input type="file" @change="fileSelected" ref="fileSelectorRef" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.MainStage {
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border: 1px solid gray;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
