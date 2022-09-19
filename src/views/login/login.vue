<template>
    <div id="main">
        <div class="content">
            <h1>HeiAdmin</h1>
            <el-input v-model.trim="user.name" :prefix-icon="User" placeholder="请输入用户名" clearable />
            <el-input v-model.trim="user.password" :prefix-icon="Unlock" placeholder="请输入用户密码" show-password clearable
                @keydown.enter="Login" />
            <el-button type="primary" @click="Login">登 录</el-button>
        </div>
    </div>
</template>
<script setup>
import { login } from '../../api';
import { setToken } from '../../utils/token';
import { ElNotification } from 'element-plus'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useTokenStore } from '../../store/index'
import { User, Unlock } from '@element-plus/icons-vue'
const user = reactive({
    name: null,
    password: null
})
const router = useRouter()
const store = useTokenStore()
const Login = async () => {
    if (user?.name) {
        if (user?.password) {
            if (user.name === 'admin' && user.password === '123456') {
                const res = await login()
                setToken(res.data.token)
                store.setToken(res.data.token)
                router.push('dashboard')
                ElNotification.success({
                    title: `${res.data.time}`,
                    message: ` Hello ${res.data.name} 欢迎回来！ `,
                    offset: 100,
                })
            } else {
                ElNotification({
                    title: 'Error',
                    message: `用户名或密码错误`,
                    type: 'error'
                })
            }

        } else {
            ElNotification({
                title: 'Warning',
                message: `用户密码不能为空`,
                type: 'warning'
            })
        }
    } else {
        ElNotification({
            title: 'Warning',
            message: `用户名不能为空`,
            type: 'warning'
        })
    }
}
</script>
<style lang="scss" scoped>
#main {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        width: 400px;
        height: 400px;
        box-shadow: 0 0 15px #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h1 {
            color: #409eff;
        }

        display: flex;
        align-items: center;

        .el-input {
            width: 250px;
        }

        .el-button {
            width: 250px;
            border-radius: 15px;

        }
    }
}
</style>
