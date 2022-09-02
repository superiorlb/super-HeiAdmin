<template>
  <el-scrollbar ref="scrollbarRef">
    <div class="navTab">
      <span
        v-for="(item, index) in tagList"
        :key="item.path"
        ref="spanList"
        @click="changeTag(item.path)"
      >
        {{ item.title }}
        <el-icon
          @click.stop="closeTag(item.path, index)"
          v-if="tagList.length > 1"
        >
          <Close />
        </el-icon>
      </span>
      <div class="box" :style="activeBoxStyle"></div>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { ref, reactive, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { childrenRoutes } from "../../../../router";

const router = useRouter();
const route = useRoute();
const tagList = ref([]);
const spanList = ref();
const activeIndex = ref(0);
const scrollbarRef = ref();
const activeBoxStyle = reactive({
  width: "0",
  transform: "translateX(0px)",
});

watch(
  () => route.path,
  (nVal) => {
    nextTick(() => {
      handleTag(nVal);
    });
  },
  { immediate: true }
);

// 处理标签
const handleTag = (nVal) => {
  childrenRoutes.forEach((item) => {
    if (item.path === nVal.split("/")[1]) {
      tagList.value.push({ path: item.path, title: item.meta.title });
    }
  });
  const is = {};
  tagList.value = tagList.value.reduce((arr, item) => {
    is[item.path] ? null : (is[item.path] = true && arr.push(item));
    return arr;
  }, []);
  tagList.value.forEach((item, index) => {
    if (item.path === nVal.split("/")[1]) {
      setActiveBoxStyle(index);
    }
  });
};

// 关闭标签
const closeTag = (path, i) => {
  handleActiveIndex();
  if (0 < i < activeIndex.value) {
    nextTick(() => {
      activeBoxStyle.transform = `translateX(${spanList.value[i].offsetLeft}px)`;
    });
  }
  tagList.value.splice(i, 1);

  // 关闭选中时，选中前一个标签页
  if (path === route.path.split("/")[1]) {
    router.push(tagList.value[i ? i - 1 : i].path);
  }

  // 当选中标签页为第一个时，需要重新获取一下选中标签页的clientWidth
  handleActiveIndex();
  if (activeIndex.value === 0) {
    nextTick(() => {
      activeBoxStyle.width = spanList.value[0].clientWidth + "px";
    });
  }
};

// 获取当前选中的标签页
const handleActiveIndex = () => {
  tagList.value.forEach((item, index) => {
    if (item.path === route.path.split("/")[1]) {
      activeIndex.value = index;
    }
  });
};

// 切换标签页
const changeTag = (path) => {
  router.push(path);
};

// 设置选中标签
const setActiveBoxStyle = (i) => {
  nextTick(() => {
    activeBoxStyle.width = spanList.value[i].clientWidth + "px";
    activeBoxStyle.transform = `translateX(${spanList.value[i].offsetLeft}px)`;
    scrollbarRef.value.setScrollLeft(spanList.value[i].offsetLeft);
  });
};
</script>
<style lang="scss" scoped>
.el-scrollbar {
  width: calc(100% - 200px);
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
}
</style>
