<template>
    <n-card class="cursor-pointer mb-5 shadow-md border-0" footer-style="padding:0">
        <template #cover>
            <img :src="data.cover" class="w-[100%] h-[9.375rem]">
        </template>
        <div class=" pt-2">
            <span class="font-bold w-full truncate font-semibold">{{ data.title }}</span>
        </div>
        <div class="mt-2 flex items-end">
            <Prices :value="data.price" />
            <Prices :value="data.t_price" through class="ml-2" />
        </div>
        <template #footer v-if="data.group_id || data.flashsale_id">
            <div class="bg-yellow-500 text-white p-3 text-xs flex items-center rounded-b">
                {{data.group_id? "拼团":"秒杀中"}}
                <div class="ml-auto flex items-center">
                    end : 
                   <CountDown :time="data.end_time"/>
                </div>
            </div>
        </template>
    </n-card>
</template>

<script setup>
import { NCard } from 'naive-ui'
defineProps({ data: Object })
</script>