<template>
  <div class="logo">
    <span v-if="!isCollapse">HeiAdmin</span>
    <el-icon :size="20" @click="handleIsCollapse" color="#409eff">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>
<script setup>
import { ref } from "vue";

const emits = defineEmits(["handle"]);
const isCollapse = ref(false);

const handleIsCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emits("handle", isCollapse.value);
};
</script>
<style lang="scss" scoped>
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
</style>
