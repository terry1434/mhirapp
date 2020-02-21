<template>
  <div id="app">
    <el-button @click="drawer = true" type="primary" class="leftSlideBtn" v-if="isLogin">
      <i class="fa fa-user"></i>
    </el-button>
    <el-drawer :visible.sync="drawer" :direction="direction" size="320px">
      <userinfo @cancelForm="cancelForm"></userinfo>
    </el-drawer>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import $ from "jQuery";
import session from "./store/session";
// import userinfo from "../src/components/common/UserInfo";
export default {
  name: "App",
  provide() {
    //provide/inject 祖先元素与子孙元素间的观察者模式
    return {
      reload: this.reload
      // clientWidth: this.clientWidth,
      // mode: this.getClientMode
    };
  },
  data() {
    return {
      isRouterAlive: true,
      drawer: false,
      direction: "ltr"
      // clientWidth: document.body.clientWidth,
      // clientMode: ""
    };
  },
  computed: {
    // getClientMode() {
    //   return this.clientMode;
    // }
  },
  watch: {
    clientMode(val) {
      console.log(`App.vue watch clientMode : ${val}`);
    }
  },
  // beforeCreate() {
  //   if (session.getSession("token") == undefined) {
  //     let element = $(`
  //               <div class="container_loading">
  //               <div class="loading">
  //                   <div></div>
  //                   <div></div>
  //                   <div></div>
  //                   <div></div>
  //                   <div></div>
  //                   <div></div>
  //                   <div></div>
  //               </div>
  //           </div>
  //   `);
  //     $(document.body).append(element);
  //   }
  // },
  created() {
    const reg = new RegExp(
      "Android|webOS|iPhone|iPad|iPod|BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile",
      "i"
    );
    //判断当前响应用户的设备信息（浏览器/手机）
    if (reg.test(navigator.userAgent)) {
      this.$store.commit({
        type: "setAccessMode",
        payload: "mobile"
      });
    } else {
      this.$store.commit({
        type: "setAccessMode",
        payload: "brower"
      });
    }
    // console.log(`App.vue created ${this.clientMode}`);
  },
  mounted() {

    // console.log(`App.vue mounted.`);
    this.clientResize();

    // let loading = document.getElementsByClassName("container_loading")[0];
    // if (loading) loading.classList.add("moveup");
  },
  computed: {
    isLogin() {
      return this.$store.state.userinfo.token;
    }
  },
  watch: {
    // '$store.state.clientWidth':function(val){
    //   console.log(`App.vue watch clientWidth : ${val}`);
    // }
  },
  methods: {
    clientResize() {
      const _self = this;
      _self.$store.commit({
        type: "setClientWidth",
        payload: document.body.clientWidth
      });
      window.onresize = function() {
        const width = document.body.clientWidth;
        // console.log(`App.vue ${width}`);
        // return (() => {
        //   this.clientWidth = document.body.clientWidth;
        // })();
        _self.$store.commit({
          type: "setClientWidth",
          payload: width
        });
        // console.log(`App.vue window.onresize ${width}`);
      };
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    // getClientMode() {
    //   // this.$nextTick(function() {
    //   //   console.log(` nextTick getClientMode : ${this.userAgent}`);
    //   // });
    //   console.log(`getClientMode : ${this.userAgent}`);
    //   return this.userAgent;
    // },
    cancelForm() {
      // console.log("cancelForm");
      this.drawer = false;
      // this.$refs.elDrawer.$el.classList.toggle("slidehidden");
      this.$router.push("/sitemanage");

      // console.dir(this.$refs.elDrawer);
    }
  },
  components: {
    // userinfo
    'userinfo': () => import('../src/components/common/UserInfo')
  }
};
</script>

<style>
* {
  font-family: "Microsoft YaHei", "SF Pro Display", Roboto, Noto, Arial,
    "PingFang SC", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #eee;
}
ul,
li {
  list-style: none;
}


@keyframes loading {
  0% {
    height: 0;
  }

  50% {
    height: 100%;
  }

  100% {
    height: 0;
  }
}

@keyframes moveup {
  0% {
    margin-top: 0;
  }

  100% {
    margin-top: -100vh;
  }
}

.precent {
  font-size: 36px;
  color: #fff;
  pointer-events: none;
}

.container {
  width: 80%;
  /* padding: 20px; */
}

.container h2 {
  width: 100%;
  color: #0984e3;
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
}

.row100 {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.row100 .col {
  position: relative;
  width: 100%;
  padding: 0 10px;
  margin: 30px 0 10px;
  transition: 0.5s;
}

.row100 .inputBox {
  position: relative;
  width: 100%;
  height: 40px;
  color: #0984e3;
}

.row100 .inputBox input,
.row100 .inputBox.textarea textarea {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;
  z-index: 1;
  color: #dfe6e9;
}

.row100 .inputBox .text {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 40px;
  font-size: 18px;
  padding: 0 10px;
  display: block;
  transition: 0.5s;
  pointer-events: none;
}

.row100 .inputBox input:focus + .text,
.row100 .inputBox input:valid + .text {
  top: -35px;
  left: -10px;
  font-weight: bold;
}

.row100 .inputBox .line {
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #0984e3;
  transition-duration: 0.5s;
  border-radius: 2px;
  pointer-events: none;
}

.row100 .inputBox input:focus ~ .line,
.row100 .inputBox input:valid ~ .line {
  height: 100%;
}

.row100 .inputBox input[type="password"]:before {
  content: "";
  position: absolute;
  right: 5px;
  width: 20px;
  height: 20px;
  background-color: #fff;
}

.row100 .inputBox.textarea {
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px 0;
}

.row100 .inputBox.textarea textarea {
  height: 100%;
  resize: none;
}

.row100 .inputBox textarea:focus + .text,
.row100 .inputBox textarea:valid + .text {
  top: -35px;
  left: -10px;
  font-weight: bold;
}

.row100 .inputBox textarea:focus ~ .line,
.row100 .inputBox textarea:valid ~ .line {
  height: 100%;
}

input[type="submit"] {
  -webkit-appearance: none;
  border: none;
  padding: 7px 35px;
  cursor: pointer;
  outline: none;
  background-color: #0984e3;
  color: #dfe6e9;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2px;
  width: 100%;
  opacity: 0.8;
  letter-spacing: 2px;
}

.leftSlideBtn {
  padding: 0;
  margin: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 3;
  height: calc(30% - 80px);
  width: 30px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #dfe6e9;
  transition: all 0.15s ease-in;
}

@media screen and (max-width: 684px) {
  .leftSlideBtn {
    height: 71px;
    width: 20px;

    text-align: center;
  }
}
</style>
