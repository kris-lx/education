<template>
    <div class="!pt-[6.25rem]">
        <n-result
      status="500"
      title="Internal Error"
      :description="error.message"
    >
      <template #footer>
        <n-button @click="handleError">Back to home</n-button>
      </template>
    </n-result>
    </div>
  </template>

<script setup>
import {NResult, NButton} from 'naive-ui'
const prop = defineProps({
    error:Object
})

const handleError = () => clearError({redirect:'/'})
</script>