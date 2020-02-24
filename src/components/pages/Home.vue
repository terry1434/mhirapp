<template>
  <div class="container">
    <div class="carousel">
      <el-carousel
        trigger="click"
        indicator-position="outside"
        :type="carousleOption.carouselType"
        :height="carousleOption.height"
        :arrow="carousleOption.arrow"
      >
        <el-carousel-item v-for="(item,index) in carousleImgs" :key="index">
          <img :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <menu></menu>
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
      },
      carousleImgs: [
        { url: require("../../assets/RO_1.jpg") },
        { url: require("../../assets/RO_2.jpg") },
        { url: require("../../assets/RO_3.jpg") },
        { url: require("../../assets/RO_4.jpg") }
      ]
    };
  },
  computed: {
    // getBrowerWidth(){
    //   return this.clientWidth;
    // }
  },
  created() {
    // console.log(`Home.vue created.`)
  },
  mounted() {
    // console.log(`Home.vue mounted,${this.mode}`);
    // this.$nextTick(function() {
    //   console.log(`nextTick Home.vue mounted,${this.clientMode}`);
    //   this.setCarouselOptions();
    // });

    // this.setCarouselOptions();
    // const self = this;
    // window.onresize = () => {};
    // window.addEventListener("resize", () => {
    //   console.log(`home.vue ${document.body.clientWidth}`);
    //   this.setCarouselOptions();
    //   self.reload();
    // });
    // this.$nextTick(() => {
    //   this.setCarouselOptions();
    // });

    // if (session.getSession("token") == "") {
    //   this.$router.push("/login");
    // }
  },
  watch: {
    "$store.state.clientWidth": {
      handler: function(val, oldVal) {
        // console.log(`Home.vue watch ${val}`);
        this.setCarouselOptions(val, oldVal);
      },
      immediate: true
    }

    // mode(val){
    //   console.log(`Home.vue watch mode : ${val}`);
    // }
    // getBrowerWidth() {
    //   // console.log(`watch clientWidth ${this.clientWidth}`);
    //   this.carousleOption.carouselType =
    //     this.userAgent == "mobile" ? "" : "card";
    //   this.carousleOption.height =
    //     this.userAgent == "mobile" ? "200px" : "300px";
    //   this.carousleOption.arrow =
    //     this.userAgent == "mobile" ? "hover" : "always";
    // }
    // userAgent: {
    //   deep: true,
    //   handler() {
    //     this.setCarouselOptions();
    //   }
    // }
  },
  methods: {
    setCarouselOptions(val, oldVal) {
      const width = this.$store.state.clientWidth;
      // console.log(width);
      this.carousleOption.carouselType = width < 684 ? "" : "card";
      this.carousleOption.height = width < 684 ? "200px" : "300px";
      this.carousleOption.arrow = width < 684 ? "always" : "hover";
      if ((val < 684 && oldVal >= 684) || (val >= 684 && oldVal < 684)) {
        this.reload();
      }
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
  height: auto;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-areas: "main main";
}
.carousel {
  grid-area: main;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.el-carousel__item img {
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>