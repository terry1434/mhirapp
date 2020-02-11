<template>
  <div class="container">
    <div class="user">
      <div class="userimg">
        <img src="../../imgs/backmove.jpg" alt="头像" />
      </div>
      <div class="username">
        <span>{{username}}</span>
        <router-link to="/userinfoedit">修改</router-link>
      </div>
    </div>
    <div class="info">
      <div class="author">
        权限:
        <span class="infovalue">超级管理员</span>
      </div>
      <div class="age">
        社龄:
        <span class="infovalue">N年N月</span>
      </div>
      <div class="lastTime">
        最近登录:
        <span class="infovalue">2018-12-16 14:25:20</span>
      </div>
      <div class="badgebox">
        <span>贡献：</span>
        <span>-</span>
      </div>
      <div class="adminCtl">
        <router-link to="/">
          <i class="fa fa-cog"></i>管理
        </router-link>
      </div>
    </div>
    <div class="history"></div>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  computed: {
    username() {
      return this.$store.state.userinfo.username;
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-rows: 260px 260px 1fr;
  grid-template-areas: "user" "info" "history";
  background-color: #e7f0f3;
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
  position: absolute;
  left: 0;
  bottom: 0;
  margin-top: auto;
  justify-self: flex-end;
  width: 100%;
  height: 40px;
  background-color: #e17055;
  text-align: center;
  transition: all 0.35s linear;
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
  transition:all 0.35s linear;
}
.info .adminCtl:hover i{
    transform:rotateZ(90deg);
}
.history {
  grid-area: history;
}

@media screen and (max-width: 684px) {
  div.container {
    display: none;
  }
}
</style>