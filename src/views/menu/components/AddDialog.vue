<template>
    <el-dialog v-model="dialogVisible" :title="title" width="55%" :before-close="handleClose">
        <el-form :inline="true" :model="form" label-width="120px">
            <el-form-item label="上级菜单">
                <el-select v-model="form.value" placeholder="请选择上级菜单">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="菜单图标">
                <el-select v-model="form.value" placeholder="请选择上级菜单">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="菜单名称">
                <el-input v-model="form.password" placeholder="请输入菜单名称" clearable />
            </el-form-item>
            <el-form-item label="菜单路径">
                <el-input v-model="form.password" placeholder="请输入菜单路径" clearable />
            </el-form-item>
            <el-form-item label="路由地址">
                <el-input v-model="form.name" placeholder="请输入路由地址" clearable />
            </el-form-item>
            <el-form-item label="菜单状态">
                <el-radio-group v-model="form.radio">
                    <el-radio border label="1">显示</el-radio>
                    <el-radio border label="2">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <CancelButton @cancel="handleClose" />
                <el-button type="primary" @click="handleClose">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { reactive } from 'vue';
import CancelButton from '../../../components/button/CancelButton.vue';
const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: '新增菜单'
    }
})
const emits = defineEmits(['handleClose'])
const form = reactive({
    name: '',
    password: '',
    code: '',
    address: '',
    type: [],
    url: '',
    radio: '',
    value: ''
})
const handleClose = () => {
    emits('handleClose', false)
}
const defaultProps = {
    children: 'children',
    label: 'label',
    disabled: 'disabled',
}
const options = [
    {
        value: 'Option1',
        label: '系统设置',
    },
    {
        value: 'Option2',
        label: '商城管理',
    },
    {
        value: 'Option3',
        label: '订单管理',
    },
    {
        value: 'Option4',
        label: '营销活动',
    },
    {
        value: 'Option5',
        label: '数据统计',
    },
]
const data = [
    {
        id: 1,
        label: '请选择',
        children: [
            {
                id: 3,
                label: 'Level two 2-1',
                children: [
                    {
                        id: 4,
                        label: 'Level three 3-1-1',
                    },
                    {
                        id: 5,
                        label: 'Level three 3-1-2',
                        disabled: true,
                    },
                ],
            },
            {
                id: 2,
                label: 'Level two 2-2',
                disabled: true,
                children: [
                    {
                        id: 6,
                        label: 'Level three 3-2-1',
                    },
                    {
                        id: 7,
                        label: 'Level three 3-2-2',
                        disabled: true,
                    },
                ],
            },
        ],
    },
]
const handleAvatarSuccess = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL()
}
const beforeAvatarUpload = () => {

}
</script>
<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
