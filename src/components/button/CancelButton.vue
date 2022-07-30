<template>
    <el-popconfirm title="内容未保存，是否继续?" @confirm="confirm" confirm-button-text="是" cancel-button-text="否">
        <template #reference>
            <el-button type="default">
                <slot>取 消</slot>
            </el-button>
        </template>
    </el-popconfirm>
</template>
<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    }
})
const emits = defineEmits(['cancel'])
const confirm = () => {
    emits('cancel')
}
</script>