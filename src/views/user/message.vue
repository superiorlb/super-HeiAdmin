<template>
    <el-collapse v-loading="loading">
        <el-collapse-item v-for="(item, index) in list" :key="index" @click.once="handleChang(index)">
            <template #title>
                <el-badge :value="item.is ? 'new' : ''">{{ item.name }} {{ item.date }}</el-badge>
            </template>
            <div class="content">
                {{ item.content }}
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getMessageList } from '../../api';
const list = ref([])
const loading = ref(false)
const getList = async () => {
    loading.value = true
    const res = await getMessageList()
    loading.value = false
    list.value = res.data
}
onMounted(getList())

const handleChang = (i) => {
    list.value[i].is = false
}

</script>
<style lang="scss">
.el-badge {
    margin-left: 25px;
    font-size: 12px;
    font-weight: 500;
}

.content {
    padding: 15px;
    box-sizing: border-box;

}
</style>

