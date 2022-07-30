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
    <el-table default-expand-all :data="tableData" border style="width: 100%;margin:15px 0" :indent="20"
        :tree-props="defaultProps" row-key="id">
        <el-table-column prop="date" label="Date" width="180" align="center" />
        <el-table-column prop="name" label="Name" width="180" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column label="操作" align="center">
            <template #="scope">
                <el-button-group>
                    <EditButton @edit="handleEdit" />
                    <DeleteButton @delete="handleDelete(scope.$index)" />
                </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[1, 2, 3, 4]"
            layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
    <AddDialog :title="title" :dialogVisible="dialogVisible" @handleClose="handleClose" />
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Search, DocumentAdd, FolderAdd, Brush, Plus } from '@element-plus/icons-vue'
import AddDialog from './components/AddDialog.vue';
import DeleteButton from '../../components/button/DeleteButton.vue';
import EditButton from '../../components/button/EditButton.vue';
const formInline = reactive({
    user: '',
    region: '',
    value2: ''
})
const dialogVisible = ref(false)
const currentPage = ref(1)
const pageSize = ref(2)
const defaultProps = { children: 'children', hasChildren: 'hasChildren' }
const title = ref('')
const tableData = ref([
    {
        id: 1,
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 11,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 12,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 13,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 21,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 22,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 23,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 24,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 31,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 32,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 33,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 41,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 42,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 43,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    },
    {
        id: 5,
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 51,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 52,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 53,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]
    },
])
const onSubmit = () => {
    console.log('search');
}
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
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