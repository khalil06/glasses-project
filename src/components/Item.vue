<template>
  <div class="item">
    <span class="item-title">{{ title }}</span>
    <img :src="imageSrc" class="image-display"/>
  </div>
</template>
<script setup>
const props = defineProps(["title","colorBg","glass","imageSrc"])
// console.log(props)
</script>
<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffafcc;
  height: 400px;
  width: 450px;
}
.item-title {
  background-color: #219ebc;
  font-size: 24px;
  font-style: bold;
  text-align: center;
  margin-top: 20px;
}
img{
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 200px;
}
</style>