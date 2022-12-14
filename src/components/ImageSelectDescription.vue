<template>
  <div class="ImageSelectDescription">
    <div class="title">
      <OutlineText>写真を選択</OutlineText>
    </div>
    <div class="note">
      <OutlineText
        >撮影または選択した写真はこのスマートフォン・パソコン内で処理されます。写真や占い結果はどこにも送信されません。</OutlineText
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import OutlineText from './OutlineText.vue'
</script>

<style lang="scss" scoped>
.ImageSelectDescription {
  padding: 24px;
  text-align: center;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
