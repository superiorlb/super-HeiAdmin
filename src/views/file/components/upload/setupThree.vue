<template>
  <el-result icon="success" title="上传成功" sub-title="点击下面按钮返回">
    <template #extra>
      <el-button :icon="ArrowLeft" type="primary" @click="submit">返 回</el-button>
    </template>
  </el-result>
</template>
<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
const emits = defineEmits(["back"]);
const submit = () => {
  emits("back");
};
</script>
<style scoped>
  .el-result{
    background-color: #fff;
  }
</style>
