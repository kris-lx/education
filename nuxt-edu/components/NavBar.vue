<template>
    <div class="navbar">
        <div class="container flex items-center h-[3.75rem]">
            <n-button text class="!text-xl font-bold">Hmongit</n-button>
            <ui-menu>
                <ui-menu-item v-for="item in menu" :key="item" :active="isMenuActive(item)" @click="handelClick(item.path)">
                    {{ item.name }}
                </ui-menu-item>
            </ui-menu>
            <n-button circle class="ml-auto mr-3">
                <template #icon>
                    <n-icon>
                        <Search />
                    </n-icon>
                </template>
            </n-button>
            <!-- <n-button  secondary strong>Login</n-button> -->
            <n-dropdown :options="userOptions">
                <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            </n-dropdown>
        </div>
        <div></div>
    </div>
</template>
<script setup>
import { NButton, NIcon, NDropdown, NAvatar } from 'naive-ui'
import { Search } from '@vicons/ionicons5'

const route = useRoute()

const handelClick = (e) => {
    navigateTo(e)
}

const isMenuActive = (e) => {
    if (e.match) {
        let i = e.match.findIndex(o => {
            let res = true
            if (o.params && typeof o.params === "object") {
                res = (Object.keys(o.params).findIndex(k => route.params[k] == o.params[k])) != -1
                res = o.params.type === route.params.type
            }
            return o.name == route.name && res
        })
        return i != -1
    }
    return e.path == route.path
}

const userOptions = [{
    label: 'User',
    key: 'profile',
}, {
    label: 'Logout',
    key: 'logout',
}]

const menu = [{
    name: 'home',
    path: '/'
}, {
    name: 'coure',
    path: '/list/page/1',
    match: [{
        name: 'paper-page',
        params: { type: 'coure' }
    }]
},
{
    name: 'blog',
    path: '/paper/1',
    match: [{
        name: 'paper-page',
        params: { type: 'blog' }
    }]
}, {
    name: 'class',
    path: '/page/1',
    match: [{
        name: 'paper-page',
        params: { type: 'class' }
    }]
}, {
    name: "Test",
    path: "/page/1",
    match: [{
        name: 'paper-page',
        params: { type: 'test' }
    }]
}]
</script>
<style>
.navbar {
    @apply bg-white flex top-0 left-0 ring-0 shadow-sm;
}
</style>