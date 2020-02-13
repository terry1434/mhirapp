<!-- 使用 before-upload 限制用户上传的图片格式和大小 -->
<template>
  <el-upload
    class="avatar-uploader"
    :action="action"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
export default {
  name: "el_upload",
  props:["action"],
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      console.time("beforeAvatarUpload");
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 < 200;
        console.log(`isLt2M:${isLt2M},isLt2M:${isLt2M}`);
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 200KB!");
      }
      console.timeEnd("beforeAvatarUpload");
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.avatar-uploader{
    align-self:flex-start;
    position:relative;
    width:144px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 144px;
  height: 144px;
  line-height: 144px;
  text-align: center;
}
.avatar {
  width: 144px;
  height: 144px;
  display: block;
}
</style>
