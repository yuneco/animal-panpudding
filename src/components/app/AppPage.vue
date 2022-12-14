<script setup lang="ts">
import AppTitle from './AppTitle.vue'
import MainStage from '../MainStage.vue'
</script>

<template>
  <div class="AppPage">
    <div class="title">
      <AppTitle />
    </div>
    <div class="stage"><MainStage /></div>
    <div class="footer">2022 yuneco & support by ChatGPT</div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/mixin.scss';

.AppPage {
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 900px;
  max-height: 1024px;
  max-width: 640px;
  border: 3px solid var(--theme-mid);
  background-color: var(--theme-mid);
  border-radius: 8px;
  //overflow: hidden;
  grid-template-rows: 60px 1fr 30px;
  box-shadow: 8px 8px 0 rgba(80, 56, 88, 0.248);
  //filter: url("#fulful");
  @include mixin.sp {
    min-height: 100%;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme-mid);
  }
  .stage {
    background-color: #fff;
  }
  .footer {
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 8px;
    color: white;
    background-color: var(--theme-mid);
  }
}
</style>
