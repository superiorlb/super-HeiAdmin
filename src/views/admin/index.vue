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
                        <el-button :icon="Search" type="primary" @click="handelSearch">Search</el-button>
                        <el-button :icon="Brush" type="primary" @click="handelReset">Reset</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-collapse-item>
    </el-collapse>
    <el-button style="margin:15px 0" type="primary" :icon="Avatar" @click="handleAdd">???????????????</el-button>
    <el-table :data="tableData" border style="width: 100%;margin-bottom;:15px" v-loading="loading">
        <el-table-column type="index" label="??????" width="180" align="center" />
        <el-table-column label="??????" width="180" align="center">
            <template #="scope">
                <el-tag>{{ scope.row.name }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="180" align="center" />
        <el-table-column prop="date" label="????????????" width="180" align="center" />
        <el-table-column prop="address" label="??????" align="center" />
        <el-table-column prop="url" label="????????????" align="center" />
        <el-table-column prop="ip" label="IP??????" align="center" />
        <el-table-column label="??????" align="center">
            <template #="scope">
                <EditButton @edit="handleEdit" />
                <DeleteButton @delete="handleDelete(scope.$index)" />
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination background v-model:currentPage="currentPage" v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="list.length"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <AddDialog :title="title" :dialogVisible="dialogVisible" @handleClose="handleClose" />
</template>
<script setup>
import { reactive, ref, onMounted, computed, watch } from 'vue'
import { Avatar, Search, Brush } from '@element-plus/icons-vue'
import AddDialog from './components/AddDialog.vue';
import DeleteButton from '../../components/button/DeleteButton.vue';
import EditButton from '../../components/button/EditButton.vue';
import { getAdminList } from '../../api';
const formInline = reactive({
    user: '',
    region: '',
    value2: ''
})
const dialogVisible = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const title = ref('')
const tableData = ref([])
const loading = ref(false)
const list = ref([])
const getList = async () => {
    loading.value = true
    const res = await getAdminList()
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

const handelSearch = () => {
    console.log('search');
}
const handelReset = () => {
    console.log('search');
}
const handleSizeChange = (val) => {
    pageSize.value = val
}
const handleCurrentChange = (val) => {
    currentPage.value = val
}

const handleAdd = () => {
    title.value = '???????????????'
    dialogVisible.value = true
}
const handleClose = (e) => {
    dialogVisible.value = e
}
const handleEdit = () => {
    title.value = '???????????????'
    dialogVisible.value = true
}

const handleDelete = (index) => {
    tableData.value.splice(index, 1)
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