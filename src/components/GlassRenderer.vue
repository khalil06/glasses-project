<template>
  <div class="glass-list">
    <div v-for="glass in glasses" :key="glass.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <item :title="glass.name" :glass="glass.glass_variants"/>
    </div>
  </div>
</template>

<script setup>
// @ts-ignore
import Item from "./Item.vue";
import { inject } from "@vue/runtime-core";
const props = defineProps(["glasses"]);
</script>

<style>
.glass-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    background: blueviolet;
}
</style>