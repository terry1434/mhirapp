<template>
  <div class="index">
    <div class="nav">
      <dropdown
        :icon_before="'fa fa-language fa-1x'"
        :title="navtitle"
        :icon_after="'fa fa-angle-down'"
        :itemlist="languages"
        @callback="changeLanguage"
      ></dropdown>
    </div>
    
    <div class="container">
      <transition>
        <router-view />
      </transition>
    </div>

    <div class="foot"></div>
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
    navtitle() {
      return this.$store.state.lang.title;
    },
    isLogin() {
      return this.$store.state.userinfo.token;
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
    }
  },
  components: {
    dropdown
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.index {
  position:relative;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.index .nav {
  position: relative;
  width: 100vw;
  height: 70px;
  background-color: #000;
  z-index: 98;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.index .container {
  position:relative;
  width: 100vw;
  height: calc(100vh - 70px);/*减号左右必须有空额，否则谷歌浏览器报错*/
  padding: 0;
  background-image: url("../imgs/simple-codelines.svg");
  background-repeat: repeat;
  background-size: contain;
}

@media screen and (max-width: 684px) {
  .index .nav .dropdown a {
    margin-right: 4em;
  }
}
</style>
