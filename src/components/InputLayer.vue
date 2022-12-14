<script lang="ts" setup>
import ImageSelect from './ImageSelect.vue'
import ImageSelectDescription from './ImageSelectDescription.vue'

withDefaults(
  defineProps<{
    hasResult?: boolean
  }>(),
  {
    hasResult: false,
  }
)

const emit = defineEmits<{
  (e: 'imageChange', src: string): void
}>()
</script>

<template>
  <div class="InputLayer">
    <div class="direction">
      「あしのさきの動物パンプリン占い」は脚の先をカメラで撮影して、その映像から天気を判定し、その天気に合ったパンプリンの占いをするクソアプリです。AIが考えました。
    </div>
    <ImageSelect
      @imageChange="(src) => emit('imageChange', src)"
      class="inputImage"
      :class="{ hasResult }"
    >
      <ImageSelectDescription />
    </ImageSelect>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.InputLayer {
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
      transform: translate(-30%, -15%) rotate(-20deg) scale(0.5);
      box-shadow: 0 0 0 6px var(--theme-mid), 0 0 0 8px #fff;
    }
  }
}
</style>
