<template>
  <el-container>
    <Sidebar />
    <el-container direction="vertical">
      <Header />
      <el-scrollbar>
        <el-main>
          <router-view #="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script setup>
import Sidebar from "./components/sidebar.vue";
import Header from "./components/header.vue";
</script>
<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
</style>
