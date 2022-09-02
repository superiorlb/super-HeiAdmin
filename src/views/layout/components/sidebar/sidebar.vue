<template>
  <el-aside :width="asideWidth">
    <Logo @handle="handleAsideWidth" />
    <Menu :collapse="collapse" />
  </el-aside>
</template>
<script setup>
import { ref } from "vue";
import Logo from "./logo.vue";
import Menu from "./menu.vue";

const collapse = ref(false);
const asideWidth = ref("200px");

const handleAsideWidth = (isCollapse) => {
  isCollapse ? (asideWidth.value = "60px") : (asideWidth.value = "200px");
  collapse.value = isCollapse;
};
</script>
<style scoped>
.el-aside {
  overflow: inherit;
  margin: 16px 0 16px 16px;
  box-shadow: 0 0 10px #ccc;
  background-color: #fff;
  transition: all 0.3s;
}
</style>
