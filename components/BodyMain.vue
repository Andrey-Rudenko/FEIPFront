<template>
  <div class="bodyMain">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
  .bodyMain {
    margin-left: auto;
    margin-right: auto;
    min-height: 70vh;
    max-width: 1100px;
    padding-left: 5vh;
    padding-right: 5vh;
  }
</style>