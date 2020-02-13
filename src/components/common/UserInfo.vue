<template>
  <div class="container">
    <!-- <el-button class="copy_leftSlideBtn">
      <i class="fa fa-user"></i>
    </el-button> -->
    <div class="title">
      <h1>个人信息</h1>
    </div>
    <div class="user">
      <div class="userimg">
        <img src="../../imgs/backmove.jpg" alt="头像" />
      </div>
      <div class="username">
        <span>{{username}}</span>
        <!-- <router-link to="/userinfoedit">修改</router-link> -->
      </div>
    </div>
    <div class="info">
      <div class="author">
        <label>权限:</label>
        <span class="infovalue">超级管理员</span>
      </div>
      <div class="age">
        <label>入社龄:</label>
        <span class="infovalue">N年N月</span>
      </div>
      <div class="lastTime">
        <label>最近登录:</label>
        <span class="infovalue">2018-12-16 14:25:20</span>
      </div>
      <!-- <div class="badgebox">
        <span>贡献：</span>
        <span>-</span>
      </div>-->
      <!-- <div class="adminCtl">
         <router-link to="/" @click="cancelForm">
          <i class="fa fa-cog"></i>管理
        </router-link> 
        
         <a href="javascript:void(0)" @click="cancelForm"><i class="fa fa-cog"></i>管理</a> 
      </div>-->
      <el-button @click="cancelForm" class="adminCtl">管 理</el-button>
    </div>
    <div class="history"></div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.state.userinfo.username;
    }
  },
  methods: {
    cancelForm() {
      this.$emit("cancelForm");
      //页面跳转事件写在父组件App.vue的cancelForm事件中。
    }
  }
};
</script>

<style scoped>
.container {
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: grid;
  /* width: 100%; */
  min-width: 90%;
  margin: 0 auto;
  overflow: hidden;
  grid-template-rows: 60px 260px 260px 1fr;
  grid-template-areas: "title" "user" "info" "history";
  background-color: #e7f0f3;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: auto;
}
.title {
  grid-area: title;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.user {
  grid-area: user;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px;
  /* border:1px solid #636e72; */
}

.user > .userimg {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}
.user > img {
  height: 100%;
}
.user > .username {
  margin-top: 20px;
}
.user > .username > span {
  font-size: 18px;
  font-weight: 600;
  color: #2d3436;
}
.user > .username > a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: #0984e3;
}
.info {
  grid-area: info;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 600;
  position: relative;
}
.info > div {
  margin-top: 15px;
}
.info .infovalue {
  margin-left: 4px;
  font-weight: normal;
}
.info .adminCtl {
  position: relative;
  justify-self: flex-end;
  margin-left: -20px;
  margin-top: 10px;
  width: calc(100% + 20px);
  height: 40px;
  background-color: #e17055;
  text-align: center;
  transition: all 0.35s linear;
  color: #dfe6e9;
  font-size: 1.25em;
  border-radius: 0;
}
.info .adminCtl:hover {
  background-color: #d63031;
}
.info .adminCtl a {
  display: block;
  text-decoration: none;
  line-height: 40px;
  height: 40px;
  width: 100%;
  color: #dfe6e9;
  font-size: 1.25em;
}
.info .adminCtl a i {
  margin-right: 5px;
  transition: all 0.35s linear;
}
.info .adminCtl:hover i {
  transform: rotateZ(90deg);
}
.history {
  grid-area: history;
}
label {
  width: 80px;
}

/* .copy_leftSlideBtn {
  padding: 0;
  margin: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: fixed;
  top: 70px;
  left: 340px;
  z-index: 3;
  height: calc(30% - 80px);
  width: 30px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in;
  background-color:#15017E;
  border-color:#15017E;
  color:#FFF;
  pointer-events: none;
} */
/* @media screen and (max-width: 684px) {
  div.container {
    display: none;
  }
} */
</style>