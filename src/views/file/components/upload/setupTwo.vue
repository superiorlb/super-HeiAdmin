<template>
  <el-table :data="data">
    <el-table-column label="编号" align="center"></el-table-column>
    <el-table-column label="文件名称" align="center"></el-table-column>
    <el-table-column label="文件类型" align="center"></el-table-column>
    <el-table-column label="文件格式" align="center"></el-table-column>
    <el-table-column label="上传时间" align="center"></el-table-column>
    <el-table-column label="上传人" align="center"></el-table-column>
  </el-table>
</template>
<script setup>
import { ref, onMounted } from "vue";
const data = [];
</script>
<style lang="scss" scoped>
</style>
