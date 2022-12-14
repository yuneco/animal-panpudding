<script lang="ts" setup>
import { appear } from '@/logics/animations/appear'
import { disappear } from '@/logics/animations/disappear'

withDefaults(
  defineProps<{
    visible?: boolean
  }>(),
  {
    visible: false,
  }
)

const enter = async (el: Element, done: () => void) => {
  await appear(el)
  done()
}

const leave = async (el: Element, done: () => void) => {
  await disappear(el)
  done()
}
</script>

<template>
  <div class="ProcessingMsg" :class="{ visible }">
    <Transition @enter="enter" @leave="leave">
      <div v-if="visible" class="main">あしのさきの天気からおすすめのパンプリンを考えています</div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.ProcessingMsg {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: backdrop-filter 1s 0.2s;
  &.visible {
    backdrop-filter: blur(3px);
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100px;
    background-color: #fff;
    @include mixin.progressStripe;

    padding: 16px 24px;
    border-radius: 8px;
    border: 2px solid #fff;
  }
}
</style>
