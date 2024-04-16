<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

let header = "SECRETOCHKA"


let curRoute = '';

const router = useRouter();
const route = useRoute();

const pageStack: string[] = [];
route.fullPath.split('/').forEach((item) => {

    if(item === '') return;

    console.log(item);

    curRoute += `/${item}`;
    pageStack.push(curRoute);
});

onBeforeRouteUpdate((to) => {
})

</script>

<template>
    <h1>
        {{ header }} {{ $route.fullPath }}
    </h1>

    <h1 v-for="item in pageStack">{{ item }}</h1>
</template>

<style scoped>
h1{
    background-color: white;
    color: gray;
    width: fit-content;
    padding-top: 0px;
    padding-right: 8px;
    padding-bottom: 3px;
    padding-left: 8px;
    box-sizing: border-box;
}
</style>
