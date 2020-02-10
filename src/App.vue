<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import $ from "jQuery";
import session from "./store/session";
export default {
  name: "App",
  data() {
    return {
      precent: 0,
      delLoading: false
    };
  },
  beforeCreate() {
    if (session.getSession("token") == undefined) {
      let element = $(`
                <div class="container_loading">
                <div class="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    `);
      $(document.body).append(element);
    }
  },
  mounted() {
    let loading = document.getElementsByClassName("container_loading")[0];
    if (loading) loading.classList.add("moveup");
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
.container_loading {
  width: 100vw;
  height: 100vh;
  background-color: #46b3e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 99;
}

.loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 45px;
}

.loading div {
  position: relative;
  height: 0;
  width: 30px;
  animation-name: loading;
  animation-iteration-count: infinite;
  animation-duration: 1.2s;
  background-color: #ffffff;
  color: #ffffff;
}

.loading div:nth-child(1) {
  animation-delay: 0.1s;
}

.loading div:nth-child(1):after {
  content: "L";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(2) {
  animation-delay: 0.2s;
}

.loading div:nth-child(2):after {
  content: "o";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(3) {
  animation-delay: 0.3s;
}

.loading div:nth-child(3):after {
  content: "a";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(4) {
  animation-delay: 0.4s;
}

.loading div:nth-child(4):after {
  content: "d";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(5) {
  animation-delay: 0.5s;
}

.loading div:nth-child(5):after {
  content: "i";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(6) {
  animation-delay: 0.6s;
}

.loading div:nth-child(6):after {
  content: "n";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.loading div:nth-child(7) {
  animation-delay: 0.7s;
}

.loading div:nth-child(7):after {
  content: "g";
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50px;
  text-align: center;
  font-size: 28px;
}

.moveup {
  animation: moveup 1s linear;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
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
</style>
