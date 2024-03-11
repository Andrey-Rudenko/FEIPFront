<template>
  <div>
    <div class="banner">
      <p>Banner</p>
    </div>
    <HelloWorld />
    <p>Look at my website</p>

    <div class="cards">
      <template v-for="item in items" v-bind:key="item.name">
        <div class="card" @click="cardFunction(item.link)">
          <p>{{item.name}}</p>
        </div>
      </template>
    </div>

  </div>
</template>

<script lang="ts" setup>
  function cardFunction(link: string) {
    alert("move to " + link + " page")
  }
  const items = [
    {name: "here", link: "~/1/"},
    {name: "and here", link: "~/2/"}
  ]

  definePageMeta({
    layout: 'custom'
  })
</script>

<style lang="scss">
@mixin stylesBlock($color, $background) {
  font-family: var(--font-title);
  color: $color;
  background-color: $background;
  padding: 10px;
  font-size: large;
  
}
.cards {
  display: flex;
}
.card {
  padding:10px;
  margin-right: 5vh;
  cursor: pointer;
  width: 10vh;
  @include stylesBlock(black, #D5FDD1);
}
.banner {
  @include stylesBlock(white, #009C00)

}
</style>