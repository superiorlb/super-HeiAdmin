<template>
    <el-drawer size="40%" v-model="visible" title="查看日历" :with-header="false" :before-close='handleClose'>
        <el-calendar>
            <template #dateCell="{ data }">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }}
                    {{ data.isSelected ? '✔️' : '' }}
                </p>
            </template>
        </el-calendar>
    </el-drawer>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
        required:true
    }
})
const visible = computed(()=>props.show)
const emits = defineEmits(['close'])
const handleClose = () => {
    emits('close', false)
}
</script>
<style scoped>
.is-selected {
    color: #1989fa;
}
</style>