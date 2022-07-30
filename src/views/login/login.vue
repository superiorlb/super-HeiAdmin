<template>
    <div id="main">
        <div class="content">
            <p>
                <span>账号:</span>
                <el-input v-model="user.name" placeholder="请输入账号">
                </el-input>
            </p>

            <p>
                <span>密码:</span>
                <el-input v-model="user.password" placeholder="请输入密码" type="password" show-password>
                </el-input>
            </p>

            <el-button type="primary">登 录</el-button>
        </div>
    </div>

</template>
<script setup>
import { reactive } from 'vue';
const user = reactive({
    name: '',
    password: ''
})

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
        /* height: 400px; */
        /* box-shadow: 0 0 15px #ccc; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .el-input {
            width: 250px;
            margin: 20px;
        }

        .el-button {
            width: 200px;
            border-radius: 15px;
            margin: 20px;

        }
    }
}
</style>
