<script setup lang="ts">
import { usePanpuddingForImage } from '@/logics/panpudding/usePanpuddingForImage'
import { ref } from 'vue'
import ImageSelect from './ImageSelect.vue'
import ImageSelectDescription from './ImageSelectDescription.vue'
import ProcessingMsg from './ProcessingMsg.vue'
import ResultMsg from './ResultMsg.vue'

const inputImgSrc = ref<string>('')
const onchange = (src: string) => {
  inputImgSrc.value = src
}
const { isProcessing, panpudding } = usePanpuddingForImage(inputImgSrc)
</script>

<template>
  <div class="MainStage">
    <div class="inputLayer">
      <div class="direction">
        「あしのさきの動物パンプリン占い」は脚の先をカメラで撮影して、その映像から天気を判定し、その天気に合ったパンプリンの占いをするクソアプリです。AIが考えました。
      </div>
      <ImageSelect @imageChange="onchange" class="inputImage" :class="{ hasResult: !!panpudding }">
        <ImageSelectDescription />
      </ImageSelect>
    </div>
    <div class="processingLayer">
      <ProcessingMsg :visible="isProcessing"></ProcessingMsg>
    </div>
    <div class="resultLayer">
      <ResultMsg :result="panpudding"></ResultMsg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.MainStage {
  display: contents;
  .inputLayer {
    display: grid;
    padding: 32px;
    height: 100%;
    grid-template-rows: 20% 1fr;
    gap: 16px;
    align-items: center;
    @include mixin.sp {
      padding: 16px;
      grid-template-rows: 25% 1fr;
      font-size: 14px;
      line-height: 1.3;
    }
    .inputImage {
      transition: transform 1s;
      &.hasResult {
        transform: translate(-30%, -30%) rotate(-20deg) scale(0.5);
        box-shadow: 0 0 0 6px var(--theme-mid), 0 0 0 8px #fff;
        @include mixin.sp {
          transform: translate(-30%, -50%) rotate(-20deg) scale(0.5);
        }
      }
    }
  }
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
