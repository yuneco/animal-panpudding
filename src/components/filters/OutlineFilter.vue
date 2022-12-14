<template>
  <filter :id="filterId" filterUnits="objectBoundingBox" x="0" y="0" width="110%" height="110%">
    <feMorphology in="SourceAlpha" operator="dilate" radius="4" />
    <feComponentTransfer>
      <feFuncR type="linear" slope="-1" intercept="1" />
      <feFuncG type="linear" slope="-1" intercept="1" />
      <feFuncB type="linear" slope="-1" intercept="1" />
    </feComponentTransfer>
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    filterId?: string
  }>(),
  {
    filterId: 'outline',
  }
)
</script>

<style lang="scss" scoped></style>
