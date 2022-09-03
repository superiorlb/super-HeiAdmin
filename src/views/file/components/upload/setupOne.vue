<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
  </el-upload>
</template>
<script setup>
import { UploadFilled } from "@element-plus/icons-vue";
</script>
<style lang="scss">
  .el-upload-dragger{
    height: 300px;
  }

</style>
