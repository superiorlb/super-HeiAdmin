<template>
    <el-empty :image-size="800" description="404 Not Found">
        <template #image>
            <img src="../../assets/img/404.jpg" @click="goBackHome">
        </template>
    </el-empty>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goBackHome = () => {
    router.push('home')
}
</script>
<style scoped>
img {
    cursor: pointer;
}
</style>