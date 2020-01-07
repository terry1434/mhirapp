<template>
  <div class="sub_main">
    <div class="model"></div>
    <div class="container">
      <transition name="left">
        <div class="subTitle" v-if="!isLogin">
          <h2>{{lang.msg1}}</h2>
          <p>{{lang.msg2}}</p>
        </div>
      </transition>

      <transition name="right">
        <div class="login" v-if="!isLogin">
          <h2>{{lang.msg3}}</h2>
          <span class="errmsg">{{errmsg}}</span>
          <div class="row100">
            <div class="col">
              <div class="inputBox">
                <input type="text" name required="required" v-model="userinfo.username" />
                <span class="text">{{lang.msg4}}</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <div class="inputBox">
                <input :type="type" name required="required" ref="password" />
                <span class="text">{{lang.msg5}}</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <input type="submit" :value="lang.msg6" v-if="btnShow" @click="submit" />
              <div class="waiting" v-if="!btnShow">
                <!-- <i class="fa-li fa fa-spinner fa-spin fa-2x"></i> -->
                <svg class="svg">
                  <circle class="circle" cx="15" cy="15" r="7.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import session from "../store/session";
export default {
  name: "login",
  data() {
    return {
      show: false,
      userinfo: {
        username: "",
        token: ""
      },
      btnShow: true,
      errmsg: "",
      type: "password"
    };
  },
  computed: {
    isLogin() {
      console.log(this.$store.state.userinfo.token);
      return this.$store.state.userinfo.token;
    },
    lang() {
      return this.$store.state.lang.Login;
    }
  },
  mounted() {
    console.log("Login mounted");
  },
  methods: {
    submit() {
      if (this.userinfo.username == "") {
        this.errmsg = this.lang.err1;
        return;
      } else if (this.$refs.password.value == "") {
        this.errmsg = this.lang.err2;
        return;
      }

      this.btnShow = false;
      this.errmsg = "";
      // setTimeout(() => {
      //   this.btnShow = true;
      //   this.errmsg = "";
      //   this.$store.commit({
      //     type: "saveuser",
      //     payload: {
      //       username: this.userinfo.username,
      //       token: "1234567890"
      //     }
      //   });
      //   session.setSession("token", "1234567890");

      //   //1秒后跳转到ok页面
      //   setTimeout(() => {
      //     this.$router.push("/menu")
      //   }, 1000);
      // }, 100);
    }
  }
};
</script>

<style scoped>
.left-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}
.right-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
.left-leave-active,
.right-leave-active {
  transition: all 1.5s linear;
}

.sub_main {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.model {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #2b3137;
  opacity: 0.9;
  position: absolute;
  top: 60px;
  left: 0;
}
.sub_main .row100 {
  width: 240px;
  display: block;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container .subTitle {
  position: relative;
  width: 600px;
  height: 500px;
  padding: 20px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.container .subTitle h2 {
  color: #fff;
  font-size: 48px;
  text-align: left;
}
.container .subTitle p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
}
.container .login {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 600px;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.container .login h2 {
  position: relative;
  color: #45f3ff;
}

.waiting {
  width: 100%;
  height: 37.5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.waiting i {
  position: relative;
  left: 0;
  top: 0;
  color: #45f3ff;
}
.errmsg {
  color: #f40;
  overflow: auto;
  width: 80%;
  height: 55px;
  text-align: center;
}
@keyframes round {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (max-width: 684px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container .subTitle {
    display: none;
  }
}

svg {
  position: relative;
  width: 30px;
  height: 30px;
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 3;
  stroke: #00a1ff;
  stroke-linecap: round;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: round 2s linear infinite;
}
@keyframes round {
  0%{
    stroke-dashoffset: 48;
  }
  100% {
    stroke-dashoffset: -48;
  }
}
</style>

