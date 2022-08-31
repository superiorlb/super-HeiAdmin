<template>
  <el-aside :width="asideWidth">
    <div class="logo">
      <span v-if="!isCollapse">HeiAdmin</span>
      <el-icon :size="20" @click="handleIsCollapse" color="#409eff">
        <Expand v-if="isCollapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <el-scrollbar>
      <el-menu
        active-text-color="#409eff"
        class="el-menu-vertical-demo"
        :default-active="route.path.split('/')[1]"
        unique-opened
        router
        :collapse="isCollapse"
      >
        <el-menu-item index="home">
          <el-icon>
            <Odometer />
          </el-icon>
          <span>home</span>
        </el-menu-item>
        <el-sub-menu index="power">
          <template #title>
            <el-icon>
              <Operation />
            </el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="admin">
            <template #title>
              <el-icon>
                <Avatar />
              </el-icon>
              <span>管理员管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="menu">
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>
              <span>菜单管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="role">
            <template #title>
              <el-icon>
                <User />
              </el-icon>
              <span>角色管理</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="shop">
          <template #title>
            <el-icon>
              <Setting />
            </el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="order">
            <template #title>
              <el-icon>
                <Tickets />
              </el-icon>
              <span>订单管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="product">
            <template #title>
              <el-icon>
                <Goods />
              </el-icon>
              <span>商品管理</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script setup>
import { ref, reactive, watch, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isCollapse = ref(false);
const asideWidth = ref("200px");
// 折叠菜单
const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value;
  isCollapse.value ? (asideWidth.value = "60px") : (asideWidth.value = "200px");
};
</script>
<style lang="scss" scoped>
.el-aside {
  overflow: inherit;
  margin: 16px 0 16px 16px;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  transition: all 0.3s;

  .el-menu-vertical-demo {
    border-right: none;

    &:not(.el-menu--collapse) {
      width: 200px;
      transition: none;
    }
  }

  .logo {
    background: #fff;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: #409eff;
    font-weight: 600;
    font-size: 20px;

    i {
      cursor: pointer;
    }
  }
}
</style>
