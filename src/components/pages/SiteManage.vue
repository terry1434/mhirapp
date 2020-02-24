<template>
  <el-tabs :tab-position="tabPosition" class="conatiner">
    <!-- <el-tab-pane>
      <span slot="label" class="tabspan">个人管理</span>
    </el-tab-pane>-->
    <el-tab-pane label="问卷管理"></el-tab-pane>
    <el-tab-pane label="用户管理"></el-tab-pane>
    <el-tab-pane label="个人管理">
      <!-- <keep-alive> -->
      <userinfoedit @goback="back"></userinfoedit>
      <!-- </keep-alive> -->
    </el-tab-pane>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="340px">
      <span>有项目已更新，确定返回？</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="goback">确 定</el-button>
      </span>
    </el-dialog>
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
  computed: {
    dialogVisible: {
      get() {
        return this.$store.state.dialogVisible;
      },
      set() {}
    }
  },
  methods: {
    setTabPosition() {
      const mode = this.$store.state.mode;
      if (mode == "mobile") {
        this.tabPosition = "top";
      } else {
        this.tabPosition = "left";
      }
    },
    cancelDialog() {
      this.$store.commit({
        type: "setDialogVisible",
        payload: false
      });
    },
    goback() {
      console.log('goback');
      this.$store.commit({
        type: "setIsEdited",
        payload: false
      });
      this.cancelDialog();
      this.$router.push('/home');
    },
    back() {
      if (this.$store.state.isEdited) {
        this.showDialog();
      } else {
        this.$router.go(-1);
      }
    },
    showDialog() {
      this.$store.commit({
        type: "setDialogVisible",
        payload: true
      });
    }
  },
  mounted() {
    this.setTabPosition();
  },
  components: {
    userinfoedit
  },
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   console.log(`beforeRouteEnter`);
  //   next(vm => {
  //     // 通过 `vm` 访问组件实例
  //     if (vm.$store.state.dialogVisible) {
  //       vm.$store.commit({
  //         type: "setDialogVisible",
  //         payload: false
  //       });
  //     }
  //   });
  // },
  // beforeRouteLeave(to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log(`beforeRouteLeave`);
    
    
  // }
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