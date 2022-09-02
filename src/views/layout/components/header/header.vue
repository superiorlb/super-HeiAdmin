<template>
  <el-header>
    <NavTags />
    <Options @handle="checkDay" />
  </el-header>
  <CalendarDrawer :show="show" @close="handleClose" />
</template>
<script setup>
import { ref } from "vue";
import CalendarDrawer from "../../../../components/drawer/CalendarDrawer.vue";
import NavTags from "./navTags.vue";
import Options from "./options.vue";

const show = ref(false);

const handleClose = (e) => {
  show.value = e;
};

const checkDay = () => {
  show.value = true;
};
</script>
<style scoped>
.el-header {
  margin: 16px 16px 0 16px;
  display: flex;
  justify-content: space-between;
}
</style>
