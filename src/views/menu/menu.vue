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
                    <el-form-item label="菜单名称">
                        <el-input v-model="formInline.user" placeholder="请输入菜单名称" />
                    </el-form-item>
                    <el-form-item label="菜单状态">
                        <el-select v-model="formInline.region" placeholder="请选择菜单状态">
                            <el-option label="显示" :value="1" />
                            <el-option label="隐藏" :value="2" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="路由地址">
                        <el-input v-model="formInline.user" placeholder="请输入路由地址" />
                    </el-form-item>
                    <el-form-item>
                        <el-button :icon="Search" type="primary" @click="onSubmit">Search</el-button>
                        <el-button :icon="Brush" type="primary" @click="onSubmit">Rest</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-collapse-item>
    </el-collapse>
    <el-button style="margin-top:15px" type="primary" :icon="Plus" @click="handleAdd">新增菜单</el-button>
    <el-table v-loading="loading" :data="tableData" border style="width: 100%;margin:15px 0"
        :indent="10" :tree-props="defaultProps" row-key="id">
        <el-table-column prop="name" label="菜单名称" align="center" />
        <el-table-column prop="icon" label="菜单图标" align="center" />
        <el-table-column label="是否隐藏" align="center">
            <template #="scope">
                <el-tag effect="dark" :type="scope.row.is ? 'success' : 'danger'">{{ scope.row.is ? '是' : '否' }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="menuUrl" label="菜单路径" align="center" />
        <el-table-column prop="url" label="路由地址" align="center" />
        <el-table-column label="操作" align="center">
            <template #="scope">
                    <EditButton @edit="handleEdit" />
                    <DeleteButton @delete="handleDelete(scope.$index)" />
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="list.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
    <AddDialog :title="title" :dialogVisible="dialogVisible" @handleClose="handleClose" />
</template>
<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { Search, DocumentAdd, FolderAdd, Brush, Plus } from '@element-plus/icons-vue'
import AddDialog from './components/AddDialog.vue';
import DeleteButton from '../../components/button/DeleteButton.vue';
import EditButton from '../../components/button/EditButton.vue';
import { getMenuList } from '../../api';
const formInline = reactive({
    user: '',
    region: '',
    value2: ''
})
const dialogVisible = ref(false)
const currentPage = ref(1)
const pageSize = ref(10)
const defaultProps = { children: 'children', hasChildren: 'hasChildren' }
const title = ref('')
const tableData = ref([])
const loading = ref(false)
const list = ref([])
const onSubmit = () => {
    console.log('search');
}
const handleSizeChange = (val) => {
    pageSize.value = val
}
const handleCurrentChange = (val) => {
    currentPage.value = val
}

const handleAdd = () => {
    title.value = '新增菜单'
    dialogVisible.value = true
}
const handleClose = (e) => {
    dialogVisible.value = e
}
const handleEdit = () => {
    title.value = '修改菜单'
    dialogVisible.value = true
}

const handleDelete = (index, scope) => {
    console.log(index);
}
const getList = async () => {
    loading.value = true
    const res = await getMenuList()
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

.pagination {
    display: flex;
    justify-content: flex-end;
}
</style>