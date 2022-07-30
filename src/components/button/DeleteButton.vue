<template>
    <el-popconfirm @confirm="confirm" title="确认删除吗?" confirm-button-text="是" cancel-button-text="否">
        <template #reference>
            <el-button :size="size" :type="type" :icon="Delete">
                <slot></slot>
            </el-button>
        </template>
    </el-popconfirm>
</template>
<script setup>
/**
 * @param {String} size large || default || small 
 * @param {String} type default || danger || primary || warning
 */
import { Delete } from '@element-plus/icons-vue'
const props = defineProps({
    size: {
        type: String,
        default: 'small'
    },
    type: {
        type: String,
        default: 'danger'
    }
})
const emits = defineEmits(['delete'])
const confirm = () => {
    emits('delete')
}
</script>