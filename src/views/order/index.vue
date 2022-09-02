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
                        <el-button :icon="Printer" type="primary" @click="exportList">导出</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-collapse-item>
    </el-collapse>
    <el-table v-loading="loading" :data="tableData" border style="width: 100%;margin:15px 0">
        <el-table-column type="index" label="编号" width="80" align="center" />
        <el-table-column prop="orderSn" label="订单编号" width="180" align="center" />
        <el-table-column prop="time" label="下单时间" width="180" align="center" />
        <el-table-column label="订单金额" align="center">
            <template #="scope">
                {{ scope.row.money + '￥' }}
            </template>
        </el-table-column>
        <el-table-column label="用户名称" align="center">
            <template #="scope">
                <el-tag>{{ scope.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="address" label="收货地址" align="center" />
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
import { Search, Brush, View, Printer } from '@element-plus/icons-vue'
import { getOrderList } from '../../api/index.js'
import exportExcel from '@/utils/exportExcel'
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
    const res = await getOrderList()
    loading.value = false
    list.value = res.data
    handelTableData()
}
onMounted(getList())
const handelTableData = () => {
    const start = pageSize.value * (currentPage.value - 1)
    const end = pageSize.value * currentPage.value
    tableData.value = list.value.slice(start, end)
}
watch([pageSize, currentPage], () => {
    handelTableData()
})

const exportList = () => {
    exportExcel('订单列表', Array.from(list.value))
}
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