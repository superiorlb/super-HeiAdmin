<template>
  <el-scrollbar>
    <el-menu
      active-text-color="#409eff"
      class="el-menu-vertical-demo"
      :default-active="route.path.split('/')[1]"
      unique-opened
      router
      :collapse="collapse"
    >
      <el-menu-item index="dashboard">
        <el-icon><Odometer /></el-icon>
        <span>Dashboard</span>
      </el-menu-item>
      <el-sub-menu index="setting">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-sub-menu index="power">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="admin">
            <template #title>
              <el-icon><Avatar /></el-icon>
              <span>管理员管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="menu">
            <template #title><el-icon><Menu /></el-icon>
              <span>菜单管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="role">
            <template #title>
              <el-icon><User /></el-icon>
              <span>角色管理</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="histogram">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>数据管理</span>
        </template>
        <el-menu-item index="order">
          <template #title>
            <el-icon><Tickets /></el-icon>
            <span>订单管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="product">
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>商品管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="folder">
        <template #title>
          <el-icon><Folder /></el-icon>
          <span>文件管理</span>
        </template>
        <el-menu-item index="file">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>文件列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="upload">
          <template #title>
            <el-icon><UploadFilled /></el-icon>
            <span>文件上传</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import { useRoute } from "vue-router";
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
    required: true,
  },
});
const route = useRoute();
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  border-right: none;

  &:not(.el-menu--collapse) {
    width: 200px;
    transition: none;
  }
}
</style>
