<template>
  <el-row :gutter="24">
    <el-col :span="6">
      <el-card shadow="never" :body-style="bodyStyle">
        <template #header>
          <span>
            <el-icon :size="20">
              <Suitcase />
            </el-icon>
            今日工作时长
          </span>
        </template>
        12 小时
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never" :body-style="bodyStyle">
        <template #header>
          <span>
            <el-icon :size="20">
              <View />
            </el-icon>访问人数
          </span>
        </template>
        7756 人
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never" :body-style="bodyStyle">
        <template #header>
          <span>
            <el-icon :size="20">
              <Tickets />
            </el-icon>注册人数
          </span>
        </template>
        3389 人
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never" :body-style="bodyStyle">
        <template #header>
          <span>
            <el-icon :size="20">
              <Coin />
            </el-icon>今日收益
          </span>
        </template>
        105400 ￥
      </el-card>
    </el-col>
  </el-row>
  <div id="main"></div>
</template>
<script setup>
import { nextTick } from 'vue';
import setEcharts from '@/utils/echarts.js'
const bodyStyle = {
  'font-size': '22px',
  display: 'flex',
  'justify-content': 'center',
}
nextTick(() => {
  setEcharts()
})

</script>
<style scoped lang="scss">
#main {
  margin-top: 15px;
  width: 100%;
  height: 400px;
  background-color: #fff;
  padding: 15px;
  cursor: pointer;
  transition: all .5s ease;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 14px 24px #ccc;
    transform: scale(1.02);

  }
}

.el-card {
  cursor: pointer;
  transition: all .5s ease;
  height: 140px;

  span {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-weight: 500;

    i {
      margin: 0 10px;
    }
  }

  &:hover {
    box-shadow: 0 14px 24px #ccc;
    transform: scale(1.05);
    color: #409eff;


  }

}
</style>
