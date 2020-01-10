<template>
  <div class="menuArea">
    <div class="subNav" v-if="isLogin" />
    <div class="model"></div>
    <div class="menuItem">
      <div class="item">xxxxx</div>
    </div>
  </div>
</template>

<script>
import session from "../store/session";
export default {
  name: "menus",
  data(){
    return{
      
    }
  },
  cretaed(){
    
  },
  mounted() {
    console.log("menu mounted");
    if (session.getSession("token") == "") {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.index .subNav {
  position: relative;
  width: 100vw;
  height: 40px;
  background-color: green;
}
</style>