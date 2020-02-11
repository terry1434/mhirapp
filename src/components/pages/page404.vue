<template>
  <div class="page404">
    <div class="container" ref="page404">
      <h1>404</h1>
      <div class="msg1">Opps!Page not found</div>
      <div
        class="msg2"
      >This page you were looking for doesn't exist.You may have mistyped the address or the page may have moved.</div>
      <div class="back">
        <router-link to="/home">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page404",
  mounted() {
    const bg = this.$refs.page404;
    bg.addEventListener("mousemove", function(e) {
      const event = e || window.event;
      let x = -event.clientX / 25;
      let y = -event.clientY / 25;
      bg.style.backgroundPositionX = x + "px";
      bg.style.backgroundPositionY = y + "px";
    });
  }
};
</script>

<style scoped>
div.page404 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background: linear-gradient(45deg, #8500ff, #5acaff);
  position: relative;
  margin: 0;
  padding: auto;
  color: #fff;
}
div.page404 > div.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  border-radius: 10px;
  height: 90vh;
  background-image: url(../../imgs/backmove.jpg);
  background-repeat: no-repeat;
  background-size: 120%;
}
h1 {
  font-size: 12em;
  color: #fff;
  text-align: center;
  letter-spacing: 10px;
  padding-top: 0;
}
div.msg1 {
  width: auto;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: #e0e0e0;
  font-size: 1.2em;
  text-align: center;
  color: #0e0e0e;
}
div.msg2 {
  width: 50%;
  text-align: center;
  margin-top: 20px;
  line-height: 25px;
}
div.back {
  background-color: #d63031;
  height: 40px;
  width: auto;
  padding: 0 15px;
  line-height: 40px;
  text-align: center;
  border-radius: 25px;
  margin-top: 25px;
}
div.back a {
  text-decoration: none;
  color: #fff;
}
</style>