<template>
  <div class="options">
    <el-badge :value="4">
      <el-icon :size="24" @click="goMessage">
        <ChatLineSquare />
      </el-icon>
    </el-badge>
    <el-icon :size="24" @click="handleScreenFull">
      <FullScreen />
    </el-icon>
    <el-icon :size="24" @click="checkDay">
      <Calendar />
    </el-icon>
    <el-dropdown @command="handleCommand">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <template #dropdown>
        <el-dropdown-menu command="">
          <el-dropdown-item command="user">查看</el-dropdown-item>
          <el-dropdown-item command="/login">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import screenfull from "screenfull";
import { useRouter } from "vue-router";
import { removeToken } from "../../../../utils/token";
import { useTokenStore } from "../../../../store";
const router = useRouter();
const emits = defineEmits(["handle"]);
const { setToken } = useTokenStore();
const goMessage = () => {
  router.push("message");
};

const handleScreenFull = () => {
  screenfull.toggle();
};

const handleCommand = (e) => {
  router.push(e);
  if (e === "/login") {
    router.push(e);
    loginOut();
  }
};

const loginOut = () => {
  removeToken();
  setToken(null);
};

const checkDay = () => {
  emits("handle");
};
</script>
<style lang="scss" scoped>
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px #ccc;
  height: 50px;
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;

  i {
    cursor: pointer;
  }
}
</style>
