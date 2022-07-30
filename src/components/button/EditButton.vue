<template>
    <el-button :size="size" :type="type" @click="handleEdit" :icon="Edit">
        <slot></slot>
    </el-button>
</template>
<script setup>
/**
 * @param {String} size large || default || small 
 * @param {String} type default || danger || primary || warning
 */
import { Edit } from '@element-plus/icons-vue'
const props = defineProps({
    size: {
        type: String,
        default: 'small'
    },
    type: {
        type: String,
        default: 'primary'
    }
})
const emits = defineEmits(['edit'])
const handleEdit = () => {
    emits('edit')
}
</script>