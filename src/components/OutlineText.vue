<template>
  <span class="OutlineText">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.OutlineText {
  padding: 8px;
  filter: url('#outline');
}
</style>
