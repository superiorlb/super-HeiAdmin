<template>
  <div>
    <el-result
    icon="error"
    title="404"
    sub-title="404 NOT FOUND"
  >
    <template #extra>
      <el-button type="primary" @click="goBackHome">Back</el-button>
    </template>
  </el-result>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBackHome = () => {
  router.push("home");
};
</script>
<style scoped>
  div{
    background-color: #fff;
    height: 100%;
  }
</style>
