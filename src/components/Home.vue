<template>
  <div class="container">
    <h1>Home page</h1>
    <div class="swiper">此处显示轮播图</div>

  </div>
</template>

<script>
import session from "../store/session";
import userinfo from '../components/UserInfo';
export default {
  name: "home",
  data(){
    return{
      
    }
  },
  cretaed(){
    
  },
  mounted() {
    console.log("home mounted");
    if (session.getSession("token") == "") {
      this.$router.push("/login");
    }
  },
  components:{
    userinfo
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
.swiper{
  width:100%;
  height:50%;
  border:1px solid red;
}
</style>