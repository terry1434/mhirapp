<template>
  <div class="menuArea">
    <div class="model"></div>
    <div class="menuItem">
      <div class="item">社员意识调查</div>
    </div>
  </div>
</template>

<script>
import session from "../store/session";
export default {
  name: "menus",
  mounted() {
    console.log("menu mounted");
    if (session.getSession("token") == "") {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.menuArea {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left:0;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.model {
  content: "";
  width: 100%;
  height: 100%;
  background-color: #2b3137;
  opacity: 0.1;
  position: absolute;
  top: 60px;
  left: 0;
}

.menuItem {
  width: 100px;
  height: 100px;
  position: relative;
}
.menuItem .item {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: red;
  transition: 0.3s linear;
}
.menuItem:hover .item {
  transform: translateY(-10px);
}

.menuItem:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 100%;
  box-shadow: 0 5px 2px #000;
  transition: all 0.2s linear;
}
.menuItem:hover:after {
  height: 0;
}
</style>