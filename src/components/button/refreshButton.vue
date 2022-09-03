<template>
  <el-button
    :icon="Refresh"
    :type="type"
    :size="size"
    :round="round"
    :circle="circle"
    :plain="plain"
    @click="submit"
  >
    <slot>刷新</slot>
  </el-button>
</template>
<script setup>
/**
 * @param {string} type 按钮类型 primary | success | warning | danger | info
 * @param {string} size 按钮大小 large | default | small
 * @param {boolean} text 是否为文字按钮 true | false
 * @param {boolean} round 是否为圆角按钮 true | false
 * @param {boolean} circle 是否为圆形按钮 true | false
 * @param {boolean} plain 是否为朴素按钮 true | false
 */
import { Refresh } from "@element-plus/icons-vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  text: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["refresh"]);
const submit = () => {
  emits("refresh");
};
</script>
<style lang="scss" scoped></style>
