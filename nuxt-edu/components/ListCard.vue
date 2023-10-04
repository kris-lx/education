<template>
    <div>
        <div class="flex">
            <span class="text-lg">{{ title }}</span>
            <n-button quaternary class="ml-auto">show more</n-button>
        </div>
        <div>
            <n-grid x-gap="12" :cols="4">
                <n-gi v-for="(item, index) in pdata" :key="index">
                    <CourseList :data="item" />
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>

<script setup>
import { NButton, NGi, NGrid } from 'naive-ui'

const prop = defineProps({
    title: String,
    data: Array,
    type: {
        type: String,
        default:'course'
    }
})

const pdata = ref(prop.data || [])

if(pdata.type ==='group'){
    const {data} = await useFetch('group/list?page=1&usable=1&limit=8',{
    key:"groupData",
    baseURL:'http://demonuxtapi.dishait.cn/pc/',
    headers: {
        appid:'bd9d01ecc75dbbaaefce'
    },
    transform:(res)=> {
        return res.data
    },
    initialCache:false
   })

   pdata.value = data.value?.rows ?? []
}


</script>