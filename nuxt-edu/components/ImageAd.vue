<template>
    <img v-for="(item, index) in data" :src="item.src" :key="index" alt="" class="w-[100%] h-[6.25rem] rounded cursor-pointer mb-6" @click="$commenOpen(item)">
</template>
<script setup>
defineProps({data:Array})
</script>