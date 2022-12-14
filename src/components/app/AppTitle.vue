<script setup lang="ts"></script>

<template>
  <div class="AppTitle">
    <span class="large">あし</span>
    <span class="small">の</span>
    <span class="large">さき</span>
    <span class="small">の</span>
    <span class="large">動物パンプリン占い</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';
.AppTitle {
  --font-l: 24px;
  --font-s: 16px;

  @include mixin.sp {
    --font-l: 18px;
    --font-s: 13px;
  }
  font-weight: bold;
  color: #fff;
  .large {
    font-size: var(--font-l);
  }
  .small {
    font-size: var(--font-s);
  }
}
</style>
