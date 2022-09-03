<template>
  <el-steps :active="active" simple>
    <el-step title="第一步" :icon="Upload" />
    <el-step title="第二步" :icon="View" />
    <el-step title="完成" :icon="CircleCheck" />
  </el-steps>
  <SetupOne v-show="active === 1" />
  <SetupTwo v-show="active === 2" />
  <SetupThree @back="handleBack" v-show="active === 3" />
  <el-divider />
  <el-button-group style="float: right">
    <el-button v-show="active < 3" type="primary" :icon="ArrowLeft" @click="handleBack">返 回</el-button>
    <el-button v-show="active < 3" type="primary" @click="handleStep">下一步
      <el-icon class="el-icon--right">
        <ArrowRight />
      </el-icon>
    </el-button>
  </el-button-group>
</template>
<script setup>
import { ref } from "vue";
import {
  View,
  CircleCheck,
  Upload,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";
import SetupOne from "./components/upload/setupOne.vue";
import SetupTwo from "./components/upload/setupTwo.vue";
import SetupThree from "./components/upload/setupThree.vue";
const active = ref(1);
const handleStep = () => {
  active.value++;
  active.value = Math.min(active.value, 4);
};
const handleBack = () => {
  active.value = 1;
};
</script>
<style scoped>
.el-steps {
  margin-bottom: 10px;
  background-color: #fff;
}
</style>