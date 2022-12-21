<template>
  <div v-loading="loading">
    <el-card v-for="(item, index) in list" :key="index" shadow="never">
      <template #header>
        <div class="card-header">
          <el-badge :value="item.is ? 'new' : ''">
            <el-tag>{{ item.name }}</el-tag
            >{{ item.date }}
          </el-badge>
          <div>
            <el-tooltip content="设置已读" placement="top-start">
              <el-button text type="success" @click.once="handleChang(index)"
                >已读</el-button
              >
            </el-tooltip>
            <el-tooltip content="点击回复" placement="top-start">
              <el-button text type="primary" @click="handleReply(index)"
                >回复</el-button
              >
            </el-tooltip>
            <DeleteButton @delete="handleDelete(index)" text type="danger"
              >删除</DeleteButton
            >
          </div>
        </div>
      </template>
      {{ item.content }}
      <el-divider />
      <span v-show="!item.text">暂无回复</span>
      <div v-show="item.text" class="reply">
        <div>
          <el-tag type="success"> 楼主回复:</el-tag>
          <span>{{ item.text }}</span>
        </div>
        <div>
          <el-tag type="info">评分:</el-tag>
          <el-rate v-model="value" :colors="colors" />
        </div>
      </div>
    </el-card>
    <el-dialog v-model="dialogVisible" width="30%">
      <template #header>
        <div class="dialog-header">
          <el-icon>
            <ChatLineRound />
          </el-icon>
          <span>回复</span>
        </div>
      </template>
      <el-input
        v-model="text"
        :autosize="{ minRows: 6 }"
        type="textarea"
        placeholder="请输入回复内容"
      />
      <template #footer>
        <span class="dialog-footer">
          <CancelButton @cancel="handleCancel" size="small" />
          <el-button type="primary" @click="handleSure()" size="small"
            >发 送</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getMessageList } from "../../api";
import DeleteButton from "../../components/button/DeleteButton.vue";
import CancelButton from "../../components/button/CancelButton.vue";
import Message from "../../utils/message";
const list = ref([]);
const loading = ref(false);
const dialogVisible = ref(false);
const text = ref("");
const value = ref(null);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
const index = ref(0);
const getList = async () => {
  loading.value = true;
  const res = await getMessageList();
  loading.value = false;
  list.value = res.data;
};
onMounted(()=>{
  getList()
});

const handleChang = (i) => {
  list.value[i].is = false;
};
const handleDelete = (i) => {
  list.value.splice(i, 1);
  Message("删除成功", "success", 1500);
};
const handleReply = (i) => {
  index.value = i;
  dialogVisible.value = true;
};
const handleCancel = () => {
  dialogVisible.value = false;
  text.value = "";
};
const handleSure = () => {
  list.value.forEach((item, i) => {
    i === index.value ? (item.text = text.value) : null;
  });
  dialogVisible.value = false;
};
</script>
<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;

  .el-badge {
    margin-left: 25px;
    font-weight: 600;
  }
}
.dialog-header {
  display: flex;
  align-items: center;
  color: #1489ee;
  span {
    margin-left: 5px;
  }
}

.el-card {
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
  transition: all 0.5s;
  opacity: 0.8;
  &:hover {
    box-shadow: 0 0 6px #ccc;
    opacity: 1;
  }

  .reply {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      .el-tag {
        margin-right: 8px;
      }
    }
  }
}
</style>
