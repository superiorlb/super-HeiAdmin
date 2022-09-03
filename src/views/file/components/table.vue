<template>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="序号" align="center"/>
      <el-table-column prop="date" label="上传时间" align="center"/>
      <el-table-column prop="name" label="上传地址" align="center"/>
      <el-table-column prop="date" label="上传人" align="center"/>
      <el-table-column prop="date" label="文件大小" align="center"/>
      <el-table-column prop="name" label="文件类型" align="center"/>
      <el-table-column prop="address" label="操作" align="center">
        <template #="scope">
          <DeleteButton />
        </template>
      </el-table-column >
    </el-table>
    <div class="pagination">
        <el-pagination background v-model:currentPage="currentPage" v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import DeleteButton from "../../../components/button/DeleteButton.vue";
  const currentPage=ref(1)
  const pageSize=ref(10)

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
  const handleSizeChange=()=>{

  }
  const handleCurrentChange=()=>{

  }
  </script>
  <style lang="scss" scoped></style>
  