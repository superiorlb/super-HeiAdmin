<template>
  <el-row :gutter="12" class="top-content">
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
  <el-row :gutter="12" class="center-content">
    <el-col :span="18">
      <div id="main"></div>
    </el-col>
    <el-col :span="6">
      <el-card shadow="never">
        <template #header>
          <div class="header-title">
            <el-icon>
              <Odometer />
            </el-icon>
            <span>
              Dashboard
            </span>
          </div>
        </template>
        <div id="dashboard"></div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="12">
    <el-col :span="12">
      <div id="left"></div>
    </el-col>
    <el-col :span="12">
      <div id="right"></div>
    </el-col>
  </el-row>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="今日订单" name="order" v-loading="loading">
      <el-scrollbar height="400px">
        <el-row class="bottom-content">
          <el-col :span="24" v-for="(item, index) in list" :key="index">
            <el-card shadow="never">
              <div class="wrap">
                <el-tag> {{ item.name }} </el-tag>
                <span>
                  {{ item.time }}
                </span>
                <el-tag type="danger">
                  ￥{{ item.money }}
                </el-tag>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-tab-pane>
    <el-tab-pane label="Config" name="config">
      <el-empty :image-size="200" />
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { setEcharts, setDashboard, setLeft, setRight } from '@/utils/echarts.js'
import { getOrderList } from '../../api';
const bodyStyle = {
  'font-size': '22px',
  display: 'flex',
  'justify-content': 'center',
}
const list = ref([])
const activeName = ref('order')
const loading = ref(false)
const handleClick = (tab, event) => {
}
nextTick(() => {
  setEcharts()
  setDashboard()
  setLeft()
  setRight()
})
const getList = async () => {
  loading.value = true
  const res = await getOrderList()
  loading.value = false
  const { data } = res
  list.value = data
}
onMounted(()=>{
  getList()
})
</script>
<style scoped lang="scss">
#main {
  width: 100%;
  height: 400px;
}

#dashboard {
  width: 100%;
  height: 300px;
  box-shadow: 0 14px 24px #ccc;

}

#left,
#right {
  width: 100%;
  height: 320px;
}

#left,
#right,
#dashboard,
#main {
  background-color: #fff;
  padding: 15px;
  cursor: pointer;
  transition: all .5s ease;
  border-radius: 5px;
  box-sizing: border-box;

}

#left,
#right,
#main{
  &:hover {
    box-shadow: 0 14px 24px #ccc;
    transform: scale(1.02);

  }
}
.el-row {
  margin-bottom: 15px;
}

.top-content {
  .el-card {
    cursor: pointer;
    transition: all .5s ease;

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
}

.center-content {
  .el-card {
    cursor: pointer;

    .header-title {
      display: flex;
      color: #409eff;
      justify-content: center;
      align-items: center;

      .el-icon {
        font-size: 20px;
        margin-right: 5px;
      }

    }

    .order {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
    }
  }

}

.el-tabs {
  &:deep(.el-tabs__nav-scroll) {
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
  }

  .bottom-content {
    .el-card {
      margin-bottom: 10px;
      cursor: pointer;

      .wrap {
        display: flex;
        justify-content: space-between;
      }
    }


  }
}
</style>
