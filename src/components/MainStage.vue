<script setup lang="ts">
import { usePanpuddingForImage } from '@/logics/panpudding/usePanpuddingForImage'
import { ref } from 'vue'
import InputLayer from './InputLayer.vue'
import ProcessingLayer from './ProcessingLayer.vue'
import ResultLayer from './ResultLayer.vue'

const inputImgSrc = ref<string>('')
const onchange = (src: string) => {
  inputImgSrc.value = src
}
const { isProcessing, panpudding } = usePanpuddingForImage(inputImgSrc)
</script>

<template>
  <div class="MainStage">
    <div class="inputLayer">
      <InputLayer :hasResult="!!panpudding" @imageChange="onchange"></InputLayer>
    </div>
    <div class="processingLayer">
      <ProcessingLayer :visible="isProcessing"></ProcessingLayer>
    </div>
    <div class="resultLayer">
      <ResultLayer :result="panpudding"></ResultLayer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.MainStage {
  display: contents;
  .processingLayer {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .resultLayer {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
