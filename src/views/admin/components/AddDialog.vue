<template>
    <el-dialog v-model="dialogVisible" :title="title" width="50%" :before-close="handleClose">
        <el-form :model="form" label-width="120px">
            <el-form-item label="名称：">
                <el-input v-model="form.name" placeholder="请输入名称" style="width:240px" clearable />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input v-model="form.password" placeholder="请输入密码" autocomplete="off" style="width:240px" clearable  show-password/>
            </el-form-item>
            <el-form-item label="上传头像：">
                <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="form.url" :src="form.url" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="权限设置：">
                <el-tree v-model="form.type" :data="data" :props="defaultProps" show-checkbox />
            </el-form-item>
            <el-form-item label="联系方式：">
                <el-input v-model="form.phone" placeholder="请输入联系方式" style="width:240px" clearable />
            </el-form-item>
            <el-form-item label="意见：">
                <el-input v-model="form.textarea1" autosize type="textarea" placeholder="请输入意见" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <CancelButton @cancel="handleClose" />
                <el-button type="primary" @click="handleClose">Confirm</el-button>
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
        default: '添加管理员'
    }
})
const emits = defineEmits(['handleClose'])
const form = reactive({
    name: null,
    password: null,
    code: '',
    address: '',
    textarea1: '',
    type: [],
    url: '',
    phone:null
})
const handleClose = () => {
    emits('handleClose', false)
}
const defaultProps = {
    children: 'children',
    label: 'label',
    disabled: 'disabled',
}
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
