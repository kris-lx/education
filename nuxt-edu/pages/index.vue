<template>
    <div>
        <template v-if="pending">
            <span>Loading...</span>
        </template>
        <template v-else-if="error">
            {{ error.message }}
        </template>
        <template v-else>
            <template v-for="(item, index) in data" :key="index">
                <Banner :data="item.data" v-if="item.type == 'swiper'" />
                <ImageNav :data="item.data" v-else-if="item.type == 'icons'" />
                <ImageAd :data="item.data" v-else-if="item.type == 'imageAd'" />
                <ListCard :data="item.data" :title="item.title" v-else-if="item.type == 'list'" />
                <ListCard :data="item.data" :type="item.listType" :title="item.title" v-else-if="item.type == 'promotion'" />
            </template>

        </template>

    </div>
</template>

<script setup>
import { throwError } from 'naive-ui/es/_utils';

useHead({
    title:'Home'
})

const { pending, data, refresh, error } = await useFetch('index', {
    key: "IndexData",
    baseURL: 'http://demonuxtapi.dishait.cn/pc/',
    headers: {
        appid: 'bd9d01ecc75dbbaaefce'
    },
    transform: (res) => {
        return res.data
    },
    initialCache: false,
    lazy: true
})

if (process.server && error.value) {
    throwError(error.value?.data?.data)
}
</script>