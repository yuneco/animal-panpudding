<script setup lang="ts">
import { useImageSelect } from '@/logics/core/useImageSelect'
import { ref } from 'vue'

const fileSelectorRef = ref()
const imageRef = ref()
const { imageDataUrl, selectFile, loadSelected } = useImageSelect(fileSelectorRef)

const emit = defineEmits<{
  (e: 'imageChange', src: string): void
}>()

const load = async () => {
  await loadSelected()
  if (!imageDataUrl.value) return
  emit('imageChange', imageDataUrl.value)
}
</script>

<template>
  <div class="ImageSelect" @click="selectFile">
    <img ref="imageRef" v-if="imageDataUrl" class="ref-image" :src="imageDataUrl" />
    <div class="description" v-if="!imageDataUrl"><slot /></div>
    <label class="inputArea"
      >Select Image File
      <input type="file" @change="load" ref="fileSelectorRef" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.ImageSelect {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: 1px solid #fff;
  border-radius: 8px;
  cursor: pointer;

  @include mixin.progressStripe;

  .description {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputArea {
    visibility: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
