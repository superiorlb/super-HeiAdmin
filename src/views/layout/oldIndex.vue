<template>
  <el-container>
    <el-aside :width="off ? '64px' : '200px'">
      <el-scrollbar>
        <div class="logo">
          <span v-show="!off">HeiAdmin</span>
          <el-icon :size="20" @click="handelOff" color="#409eff">
            <Expand v-show="off" />
            <Fold v-show="!off" />
          </el-icon>
        </div>
        <el-menu
          active-text-color="#409eff"
          background-color="#fff"
          class="el-menu-vertical-demo"
          :default-active="activeMenu"
          text-color="#000"
          unique-opened
          router
          :collapse="off"
          @select="handleSelect($event)"
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
    <el-container>
      <el-header>
        <el-scrollbar ref="scrollbarRef">
          <div class="navTab">
            <span
              v-for="(item, index) in tagList"
              :key="index"
              @click="changTab(item, index)"
              ref="spanList"
            >
              {{ item.title }}
              <el-icon
                @click.stop="closeTab(item.path, index)"
                v-show="tagList.length > 1"
              >
                <Close />
              </el-icon>
            </span>
            <div class="box" :style="activeBoxStyle"></div>
          </div>
        </el-scrollbar>
        <div class="user">
          <el-badge :value="count ? count : ''">
            <el-icon :size="24" @click="handleSelect('message', true)">
              <ChatLineSquare />
            </el-icon>
          </el-badge>
          <el-icon :size="24" @click="handleScreenFull">
            <FullScreen />
          </el-icon>
          <el-icon :size="24" @click="seeDate">
            <Calendar />
          </el-icon>
          <el-dropdown @command="handleSelect($event, true)">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="user">查看</el-dropdown-item>
                <el-dropdown-item command="/login">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-scrollbar>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
    <CalendarDrawer :show="drawer" @close="handleClose" />
  </el-container>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, nextTick, reactive, onMounted } from "vue";
import { childrenRoutes } from "@/router/index";
import CalendarDrawer from "@/components/drawer/calendarDrawer.vue";
import screenfull from "screenfull";
import { getMessageList } from "../../api";
import { removeToken } from "../../utils/token";
import { useTokenStore } from "../../store/index";
const activeMenu = ref("");
const tagList = ref([]);
const route = useRoute();
const router = useRouter();
const off = ref(false);
const spanList = ref();
const drawer = ref(false);
const activeBoxStyle = reactive({
  width: "0",
  transform: "translateX(0px)",
});
const count = ref(0);
const store = useTokenStore();
const scrollbarRef = ref();

const getCount = async () => {
  const res = await getMessageList();
  count.value = res.data.length;
};
onMounted(()=>{
  getCount()
});
const handelOff = () => {
  off.value = !off.value;
};

const handleSelect = (path, flag) => {
  if (path === "/login") {
    loginOut();
  }
  childrenRoutes.forEach((item) => {
    if (item.path === path) {
      const Route = {
        path,
        title: item.meta.title,
      };
      tagList.value.push(Route);
      sessionStorage.setItem("refreshTab", JSON.stringify(Route));
    }
  });
  const is = {};
  tagList.value = tagList.value.reduce((arr, item) => {
    is[item.path] ? null : (is[item.path] = item.path && arr.push(item));
    return arr;
  }, []);

  tagList.value.forEach((item, index) => {
    if (item.path === path) {
      getActiveBoxStyle(index);
    }
  });
  if (flag) {
    router.push(path);
    activeMenu.value = "";
  }
};

const changTab = ({ path, title }, i) => {
  getActiveBoxStyle(i);
  router.push(path);
  activeMenu.value = path;
  sessionStorage.setItem("refreshTab", JSON.stringify({ path, title }));
};

const closeTab = (path, index) => {
  tagList.value.forEach((item, i) => {
    if (item.path === route.path.split("/")[1]) {
      if (index < i) {
        nextTick(() => {
          activeBoxStyle.transform = `translateX(${spanList.value[index].offsetLeft}px)`;
        });
      }
    }
  });
  tagList.value.splice(index, 1);
  tagList.value.forEach((item, i) => {
    if (item.path === route.path.split("/")[1]) {
      nextTick(() => {
        activeBoxStyle.width = spanList.value[i].clientWidth + "px";
      });
    }
  });

  if (path === route.path.split("/")[1]) {
    if (index > 0) {
      router.push(tagList.value[index - 1]);
      activeMenu.value = tagList.value[index - 1].path;
      getActiveBoxStyle(index - 1);
    } else {
      router.push(tagList.value[index]);
      activeMenu.value = tagList.value[index].path;
      getActiveBoxStyle(index);
    }
  }
};

const getRefreshTab = () => {
  const refreshTab = JSON.parse(sessionStorage.getItem("refreshTab")) || null;
  if (refreshTab) {
    tagList.value.push(refreshTab);
    if (refreshTab.path === "message" || refreshTab.path === "user")
      activeMenu.value = "";
    else activeMenu.value = refreshTab.path;
  } else {
    tagList.value.push({
      path: "home",
      title: "首页",
    });
    activeMenu.value = "home";
  }
};
getRefreshTab();

const getActiveBoxStyle = (index) => {
  nextTick(() => {
    activeBoxStyle.width = spanList.value[index].clientWidth + "px";
    activeBoxStyle.transform = `translateX(${spanList.value[index].offsetLeft}px)`;
    scrollbarRef.value.setScrollLeft(spanList.value[index].offsetLeft);
  });
};

getActiveBoxStyle(0);

const seeDate = () => {
  drawer.value = true;
};
const handleClose = (e) => {
  drawer.value = e;
};
const handleScreenFull = () => {
  screenfull.toggle();
};
const loginOut = () => {
  removeToken();
  store.setToken(null);
};
</script>
<style scoped lang="scss">
.el-container {
  height: 100vh;

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
  .el-header {
    margin: 16px 16px 0 16px;
    display: flex;
    justify-content: space-between;
    .el-scrollbar {
      width: calc(100% - 200px);
    }
    .navTab {
      display: flex;
      align-items: center;
      position: relative;
      span {
        flex-shrink: 0;
        padding: 0 8px;
        height: 40px;
        opacity: 0.7;
        font-size: 12px;
        float: left;
        display: flex;
        align-items: center;
        cursor: pointer;
        z-index: 1;

        &:hover {
          opacity: 1;
        }

        i {
          margin-left: 4px;
          border-radius: 50%;

          &:hover {
            background-color: #ccc;
          }
        }
      }

      .box {
        position: absolute;
        left: 0;
        background-color: #fff;
        box-shadow: 0 0 10px #ccc;
        height: 40px;
        border-radius: 4px;
        transition: all 0.4s;
      }
    }

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      box-shadow: 0 0 20px #ccc;
      height: 50px;
      width: 200px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 4px;

      i {
        cursor: pointer;
      }
    }
  }

  .el-main {
    overflow: inherit;
  }
}
</style>
