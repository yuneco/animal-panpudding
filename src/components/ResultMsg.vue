<script setup lang="ts">
import type { Panpudding } from '@/logics/panpudding/createPanPuddings'
import { computed } from 'vue'
import OutlineText from './OutlineText.vue'

const props = withDefaults(
  defineProps<{
    result?: Panpudding | undefined
  }>(),
  {
    result: undefined,
  }
)

const visible = computed(() => !!props.result)
const enter = async (root: Element, done: () => void) => {
  const els = [...root.querySelectorAll('.appear')]
  await Promise.all(
    els.map(
      (el, index) =>
        el.animate(
          [
            {
              transform: `translateY(30px) scale(1.1)`,
              filter: `blur(4px)`,
              opacity: 0,
            },
            {
              transform: `translateY(0px) scale(1)`,
              filter: `blur(0px)`,
              opacity: 1,
            },
          ],
          {
            duration: 1400,
            delay: index * 400,
            fill: 'backwards',
            easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
          }
        ).finished
    )
  )
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

const weather = computed(() =>
  props.result
    ? {
        fine: '晴れ',
        cloudy: '曇り',
        rainy: '雨',
      }[props.result?.weather]
    : ''
)

const probability = computed(() =>
  props.result ? Math.round(props.result.probability * 100) + '%' : ''
)
</script>

<template>
  <div class="ResultMsg" :class="{ visible }">
    <Transition @enter="enter" @leave="leave">
      <div v-if="result" class="main">
        <div class="weatherLabel appear"><OutlineText>今日の天気は</OutlineText></div>
        <div class="weatherResult appear">
          <div class="weather">
            <OutlineText>{{ weather }}</OutlineText>
          </div>
          <div class="probability">
            <OutlineText>{{ `（確率${probability}）` }}</OutlineText>
          </div>
        </div>
        <div class="nameLabelPre appear"><OutlineText>おすすめの動物パンプリンは</OutlineText></div>
        <div class="nameBox appear">
          <div class="name">
            <OutlineText>{{ result.name }}</OutlineText>
          </div>
        </div>
        <div class="nameLabelPost appear"><OutlineText>です</OutlineText></div>
        <div class="msg appear">{{ result.msg }}</div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.ResultMsg {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;

  --font-l: 48px;
  --font-m: 24px;
  --font-s: 18px;
  @include mixin.sp {
    height: 70%;

    --font-l: 24px;
    --font-m: 16px;
    --font-s: 13px;
  }

  .main {
    display: grid;
    grid-template-rows: 5% 20% 5% 30% 5% 30%;
    position: relative;
    height: 100%;
    padding: 16px;
    @include mixin.sp {
      grid-template-rows: 5% 20% 10% 20% 10% 30%;
      padding: 8px;
    }
    .weatherLabel {
      text-align: center;
      padding-left: 50%;
      font-size: var(--font-m);
    }
    .weatherResult {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-align: center;
      padding-left: 40%;
      .weather {
        font-size: var(--font-l);
        font-weight: bold;
      }
      .probability {
        font-size: var(--font-m);
        font-weight: bold;
      }
    }
    .nameLabelPre {
      text-align: right;
      padding-right: 5%;
      font-size: var(--font-m);
    }
    .nameBox {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-align: center;
      padding-left: 10%;
      padding-right: 10%;
      font-size: var(--font-l);
      line-height: 1.25;
      .name > * {
        background: linear-gradient(
          transparent 65%,
          var(--theme-light) 65%,
          var(--theme-light) 85%,
          transparent 85%
        );
      }
    }
    .nameLabelPost {
      text-align: center;
      padding-left: 50%;
      font-size: var(--font-m);
    }
    .msg {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 5%;
      font-size: var(--font-m);
      @include mixin.sp {
        line-height: 1.2;
      }
    }
  }
}
</style>
