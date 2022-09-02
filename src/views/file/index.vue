<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date"/>
    <el-table-column prop="name" label="Name"/>
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
<script setup>
import { ref, reactive, watch, computed } from "vue";
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style lang="scss" scoped></style>
