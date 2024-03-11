<template>
  <div class="gradientText">
    <h1>Hello, world!</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
$firstGradientColor: #00f2ff;
$secondGradientColor: #ff0000;
$thirdGradientColor: #00ff7b;
$fourthGradientColor: #ff00b7;
$fifthGradientColor: #e1ff00;
.gradientText {
    background: linear-gradient(90deg, $firstGradientColor, $secondGradientColor, $thirdGradientColor, $fourthGradientColor, $fifthGradientColor);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textflow 5s linear infinite;
}

@keyframes textflow {
    from {
        background-position: 0% center
    }
    to {
        background-position: 200% center
    }
}
</style>