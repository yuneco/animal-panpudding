<script setup lang="ts">
import AppPage from './components/app/AppPage.vue'
import FulfulFilte from './components/filters/FulfulFilter.vue'
import OutlineFilter from './components/filters/OutlineFilter.vue'
</script>

<template>
  <svg class="invisible">
    <defs>
      <FulfulFilte filterId="fulful" :frequency="0.001" :scale="5" :animated="true" />
      <OutlineFilter filterId="outline" />
    </defs>
  </svg>
  <AppPage />
</template>

<style lang="scss">
.invisible {
  display: none;
}
</style>
