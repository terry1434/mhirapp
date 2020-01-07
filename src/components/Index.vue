<template>
  <div class="index">
    <div class="nav">
      <dropdown
        :icon_before="'fa fa-language fa-2x'"
        :title="navtitle"
        :icon_after="'fa fa-angle-down'"
        :itemlist="languages"
        @callback="changeLanguage"
      ></dropdown>
    </div>
    <!-- <div class="loginarea" v-if="!isLogin"> -->
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.index .nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  background-color: #000;
  z-index: 98;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.index .container {
  width: 95%;
  height: 80%;
  padding: 0 20px;
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
