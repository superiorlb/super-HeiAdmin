<template>
    <el-collapse>
        <el-collapse-item>
            <template #title>
                <span class="search">
                    <el-icon :size="16" color="#409eff">
                        <Search />
                    </el-icon>
                    Search
                </span>
            </template>
            <el-card class="card" shadow="never">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.user" placeholder="Approved by" />
                    </el-form-item>
                    <el-form-item label="Activity zone">
                        <el-select v-model="formInline.region" placeholder="Activity zone">
                            <el-option label="Zone one" value="shanghai" />
                            <el-option label="Zone two" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.user" placeholder="Approved by" />
                    </el-form-item>
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.user" placeholder="Approved by" />
                    </el-form-item>
                    <el-form-item label="Approved by">
                        <el-input v-model="formInline.user" placeholder="Approved by" />
                    </el-form-item>
                    <el-form-item label="Search Time">
                        <el-date-picker v-model="formInline.value2" type="datetimerange" start-placeholder="Start Date"
                            end-placeholder="End Date" />
                    </el-form-item>
                    <el-form-item>
                        <el-button :icon="Search" type="primary" @click="onSubmit">Search</el-button>
                        <el-button :icon="Brush" type="primary" @click="onSubmit">Rest</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-collapse-item>
    </el-collapse>
    <el-table v-loading="loading" :data="tableData" border style="width: 100%;margin:15px 0">
        <el-table-column type="index" label="编号" width="80" align="center" />
        <el-table-column prop="id" label="商品ID" width="180" align="center" />
        <el-table-column prop="product" label="商品名称" width="180" align="center" />
        <el-table-column prop="time" label="上架时间" width="180" align="center" />
        <el-table-column label="商品单价" align="center">
            <template #="scope">
                {{ scope.row.money + '￥' }}
            </template>
        </el-table-column>
        <el-table-column prop="guid" label="商品标识码" align="center" />
        <el-table-column label="供应商" align="center">
            <template #="scope">
                <el-tag>{{ scope.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template #="scope">
                <el-button size="small" type="primary" :icon="View" />
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="list.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>
<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { Search, Brush, View } from '@element-plus/icons-vue'
import { getProductList } from '../../api/index.js';
const formInline = reactive({
    user: '',
    region: '',
    value2: ''
})
const currentPage = ref(1)
const pageSize = ref(10)
const tableData = ref([])
const list = ref([])
const loading = ref(false)
const onSubmit = () => {
    console.log('search');
}
const handleSizeChange = (val) => {
    pageSize.value = val
}
const handleCurrentChange = (val) => {
    currentPage.value = val
}

const getList = async () => {
    loading.value = true
    const res = await getProductList()
    loading.value = false
    list.value = res.data
    handelTableData()
}
onMounted(()=>{
    getList()
})
const handelTableData = () => {
    const start = pageSize.value * (currentPage.value - 1)
    const end = pageSize.value * currentPage.value
    tableData.value = list.value.slice(start, end)
}
watch([pageSize, currentPage], () => {
    handelTableData()
})
</script>
<style scoped lang="scss">
.search {
    font-size: 16px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    color: #409eff;

    i {
        margin-right: 4px;
    }
}

.card {
    border: none;

    .el-card__body {
        box-sizing: border-box;
    }
}
</style>