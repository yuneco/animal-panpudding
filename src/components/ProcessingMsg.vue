<script lang="ts" setup>
withDefaults(
  defineProps<{
    visible?: boolean
  }>(),
  {
    visible: false,
  }
)

const enter = async (el: Element, done: () => void) => {
  await el.animate(
    [
      {
        transform: `translateY(30px)`,
      },
      {
        transform: `translateY(-10px)`,
      },
      {
        transform: `translateY(0px)`,
      },
    ],
    {
      duration: 500,
      easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
    }
  ).finished
  done()
}

const leave = async (el: Element, done: () => void) => {
  await el.animate(
    [
      {
        transform: `scale(1)`,
        filter: `blur(0px)`,
        opacity: 1,
      },
      {
        transform: `scale(1.3)`,
        filter: `blur(8px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
    }
  ).finished
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
