<template>
  <div class="container">
      <el-carousel
        trigger="click"
        indicator-position="outside"
        :type="carousleOption.carouselType"
        :height="carousleOption.height"
        :arrow="carousleOption.arrow"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>



<script>
import session from "../../store/session";
import userinfo from "../common/UserInfo";
export default {
  name: "home",
  inject: ["reload"],
  data() {
    return {
      carousleOption: {
        carouselType: "card",
        height: "300px",
        arrow: "always"
      }
    };
  },
  mounted() {
    this.setCarouselOptions();
    const self = this;
    window.onresize = () => {
      this.setCarouselOptions();
      self.reload();
    };
    if (session.getSession("token") == "") {
      this.$router.push("/login");
    }
  },
  methods: {
    setCarouselOptions() {
      const clientWidth = document.body.clientWidth;
      this.carousleOption.carouselType = clientWidth <= 684 ? "" : "card";
      this.carousleOption.height = clientWidth <= 684 ? "200px" : "300px";
      this.carousleOption.arrow = clientWidth <= 684 ? "hover" : "always";
    }
  },
  components: {
    userinfo
  }
};
</script>

<style scoped>
div.container {
  padding: 10px 20px 10px;
  box-sizing: border-box;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>