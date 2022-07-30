<template>
    <el-descriptions title="基本信息" direction="vertical" :column="4" size="default" border>
        <el-descriptions-item label="Username">曹长卿</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">浙江省杭州市</el-descriptions-item>
        <el-descriptions-item label="Remarks">
            <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
    </el-descriptions>
</template>
<script setup>

</script>

<style scoped>
.el-descriptions {
    margin-top: 20px;
}
</style>
