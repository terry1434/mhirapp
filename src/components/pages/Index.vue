<template>
  <div class="index" :class="{notLogin:!isLogin}">
    <div class="nav">
      <div class="logo"></div>
      <dropdown
        v-if="!isLogin"
        :icon_before="'fa fa-language fa-1x'"
        :title="navtitle"
        :icon_after="'fa fa-angle-down'"
        :itemlist="languages"
        :dropWidth="'100px'"
        @callback="changeLanguage"
      ></dropdown>
      <dropdown
        v-if="isLogin"
        :icon_before="'fa fa-address-book fa-1x'"
        :title="loginUser"
        :icon_after="'fa fa-angle-down'"
        :itemlist="getLoginMenu"
        :dropWidth="'120px'"
        @callback="signOut"
      ></dropdown>
    </div>
    <div class="userinfo" v-if="isLogin">
      <userinfo></userinfo>
    </div>
    <div class="slideLeft" v-if="isLogin">
      <slidebar></slidebar>
    </div>
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>

    <div class="foot">
      <h4>MHIR社员满意度调查 更新于2020年1月21日</h4>
      <p>版权所有：©2020 瑞穗信息系统（上海）有限公司 MHIRSH</p>
    </div>
  </div>
</template>

<script>
import CN from "../../lang/_CN";
import JP from "../../lang/_JP";
import EN from "../../lang/_EN";
import dropdown from "../common/Dropdown";
import slidebar from "../common/SlideBar";
import userinfo from "../common/UserInfo";
import userinfoedit from "../common/UserInfoEdit"
export default {
  name: "index",
  data() {
    return {
      languages: [
        { key: "CN", value: "简体中文" },
        { key: "JP", value: "日本語" },
        { key: "EN", value: "English" }
      ]
    };
  },
  computed: {
    loginUser() {
      return this.$store.state.userinfo.username;
    },
    navtitle() {
      return this.$store.state.lang.title;
    },
    isLogin() {
      return this.$store.state.userinfo.token;
    },
    lang() {
      return this.$store.state.lang.Login;
    },
    getLoginMenu() {
      let arr = [];
      let obj = this.$store.state.lang.usermenu;

      for (let item in obj) {
        arr.push({ key: item, value: obj[item] });
      }
      console.log(arr[0]);
      return arr;
    }
  },
  methods: {
    changeLanguage(value) {
      let language = null;
      switch (value) {
        case "CN":
          language = CN;
          break;
        case "JP":
          language = JP;
          break;
        case "EN":
          language = EN;
          break;
        default:
          language = CN;
      }
      this.$store.commit({
        type: "setLanguage",
        payload: { value: value, language }
      });
    },
    signOut() {
      const self = this;
      this.$message({
        message: this.lang.msg8,
        type: "success",
        duration: 1000
      });

      self.$store.commit({
        type: "signOut"
      });
      self.$router.push("/");

      // setTimeout(() => {
      //   console.log(this);
      //   this.$router.push("/");
      // }, 1000);
    }
  },
  components: {
    dropdown,
    userinfo,
    slidebar,
    userinfoedit
  }
};

</script>

<style scoped>
/* .v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
} */

.index {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr 3fr 120px;
  grid-template-areas:
    "nav nav nav"
    "userInfo main slideLeft"
    "foot foot foot";
  row-gap: 10px;
  background-color:#f5f6f7;
}
.notLogin {
  grid-template-columns: 1fr 10fr 1fr;
}
.index .nav {
  grid-area: nav;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: rgba(21, 1, 126, 1);
  z-index: 1;
}
.index .nav div.logo {
  width: 150px;
  height: 100%;
  margin-right: auto;
  justify-self: flex-start;
  align-self: flex-start;
  background-image: url(../../imgs/logo2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.index .userinfo{
  grid-area:userInfo;
  padding:0 25px;
  border-radius:10px;
  transition:all 0.5s linear;
  transform:rotateY(0deg);
}


.index .slideLeft {
  grid-area: slideLeft;
  background-color: transparent;
  margin: 0 10px;
  /* border:1px solid #e0e0e0; */
  border-radius: 5px;
}
.index>.container {
  grid-area: main;
  position: relative;
  width: 100%;
  height: 100%;
  /* border-radius: 5px; */
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.foot {
  grid-area: foot;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 18px 0;
  background-color: #eee;
}
.foot h4,
.foot p {
  font: 13px "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  font-weight: normal;
  color: #999;
  margin-bottom: 6px;
}
@media screen and (max-width: 684px) {
  .index .nav .dropdown a {
    margin-right: 4em;
  }
  .index {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
