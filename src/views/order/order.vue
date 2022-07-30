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
    <el-table :data="tableData" border style="width: 100%;margin:15px 0">
        <el-table-column type="index" label="index" width="80" align="center" />
        <el-table-column prop="date" label="Date" width="180" align="center" />
        <el-table-column prop="name" label="Name" width="180" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column label="操作" align="center">
            <template #="scope">
                <el-button-group>
                    <el-button type="primary" :icon="View" />
                </el-button-group>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[1, 2, 3, 4]"
            layout="total, sizes, prev, pager, next, jumper" :total="tableData.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Search, Brush,View } from '@element-plus/icons-vue'
const formInline = reactive({
    user: '',
    region: '',
    value2: ''
})
const currentPage = ref(1)
const pageSize = ref(2)
const title = ref('')
const tableData = ref([
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