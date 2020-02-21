<template>
  <el-tabs :tab-position="tabPosition" class="conatiner">
    <!-- <el-tab-pane>
      <span slot="label" class="tabspan">个人管理</span>
    </el-tab-pane>-->
    <el-tab-pane label="问卷管理"></el-tab-pane>
    <el-tab-pane label="用户管理"></el-tab-pane>
    <el-tab-pane label="个人管理">
      <keep-alive>
        <userinfoedit></userinfoedit>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import userinfoedit from "../pages/UserInfoEdit";
export default {
  data() {
    return {
      tabPosition: "left"
    };
  },
  methods: {
    setTabPosition() {
      const mode = this.$store.state.mode;
      if (mode == "mobile") {
        this.tabPosition = "top";
      } else {
        this.tabPosition = "left";
      }
    }
  },
  mounted() {
    this.setTabPosition();
  },
  components: {
    userinfoedit
  }
};
</script>

<style scoped>
.conatiner {
  width: auto;
  height: auto;
  margin: 20px 20px 0 20px;
  box-sizing: border-box;
}

.el-tabs__item.is-active {
  font-weight: 700;
  color: #15017e;
}
</style>