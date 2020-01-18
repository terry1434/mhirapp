<template>
  <div class="index">
    <div class="nav">
      <dropdown
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
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>

    <div class="foot">
      <h4>MHIR社员满意度调查 更新于2020年1月21日</h4>
      <p>版权所有：瑞穗信息系统（上海）有限公司</p>
    </div>
  </div>
</template>

<script>
import CN from "../lang/_CN";
import JP from "../lang/_JP";
import EN from "../lang/_EN";
import dropdown from "../components/Dropdown";
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
        showClose: true,
        message: "退出成功。",
        type: "success",
        duration: 0,
        onClose: function() {
          self.$store.commit({
            type: "signOut"
          });
          self.$router.push("/");
        }
      });

      // setTimeout(() => {
      //   console.log(this);
      //   this.$router.push("/");
      // }, 1000);
    }
  },
  components: {
    dropdown
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
  width: 100%;
  height: 100%;
}

.index .nav {
  position: relative;
  width: 100vw;
  height: 55px;
  background-color: #000;
  z-index: 98;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.index .container {
  position: relative;
  width: 100vw;
  height: calc(100vh - 55px); /*减号左右必须有空额，否则谷歌浏览器报错*/
  padding: 0;
  background-image: url("../imgs/simple-codelines.svg");
  background-repeat: repeat;
  background-size: contain;
}

.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 18px 0;
  background-color: #f6f9fa;
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
}
</style>
