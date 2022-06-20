<template>
<GlassRendered :glasses="glasses" v-if="glasses.length"/>
<div v-else><span>Loading...</span></div>
</template>

<script setup>
import GlassRendered from "../components/GlassRenderer.vue"
import getGlasses from "../composables/getGlasses";
const {glasses,load}=getGlasses();
load()
</script>

<style>

</style>
