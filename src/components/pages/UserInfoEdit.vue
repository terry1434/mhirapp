<template>
  <div class="container">
    <h3>修改个人资料</h3>
    <hr />
    <form action class="editform">
      <div class="inputgroup">
        <label for="username">用户名</label>
        <div class="inputline">
          <input type="text" id="username" v-model="forminput.username" disabled />
        </div>
      </div>
      <div class="inputgroup fileload">
        <label for="imgload">头像上传</label>
        <div class="inputline">
          <upload id="imgload"></upload>
        </div>
      </div>
      <div class="inputgroup">
        <label for="username">入职年份</label>
        <div class="inputline">
          <sel :dataList="years" :labelProperty="'name'" @change="setYear"></sel>
          <sel :dataList="months" :labelProperty="'name'" @change="setMonth"></sel>
          <div class="sofar">至今：{{sofar}}</div>
        </div>
      </div>
      <div class="inputgroup">
        <input type="submit" value="提交" />
        <router-link to="/home" class="btnback">返回</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import sel from "../common/Select";
import upload from "../common/FileUpload";
export default {
  name: "userinfoedit",
  data() {
    return {
      forminput: {
        username: "",
        year: "",
        month: ""
      },
      years: [
        { name: "2015年", value: "2015" },
        { name: "2016年", value: "2016" },
        { name: "2017年", value: "2017" }
      ],
      months: [
        { name: "1月", value: "1" },
        { name: "2月", value: "2" },
        { name: "3月", value: "3" },
        { name: "4月", value: "4" },
        { name: "5月", value: "5" },
        { name: "6月", value: "6" },
        { name: "7月", value: "7" },
        { name: "8月", value: "8" },
        { name: "9月", value: "9" },
        { name: "10月", value: "10" },
        { name: "11月", value: "11" },
        { name: "12月", value: "12" }
      ],
      sofar: ""
    };
  },
  computed: {
    selYear() {
      return this.forminput.year;
    },
    selMonth() {
      return this.forminput.month;
    }
  },
  methods: {
    setYear(rst) {
      console.log("setYear", rst);
      this.forminput.year = rst.value.value;
    },
    setMonth(rst) {
      console.log("setMonth", rst);
      this.forminput.month = rst.value.value;
    }
  },
  watch: {
    selYear(val) {
      if (this.selMonth == "") return;
      let dt = new Date();
      let y, m;
      y = dt.getFullYear() - val;
      m = dt.getMonth() - this.forminput.month + 1;
      if (m < 0) {
        m = 12 - this.forminput.month + dt.getMonth() + 1;
        y = y - 1;
      }
      this.sofar = `${y}年${m}个月`;
    },
    selMonth(val) {
      console.log("text", this.selMonth);
      if (this.selYear == "") return;

      let dt = new Date();
      let y, m;
      y = dt.getFullYear() - this.forminput.year;
      m = dt.getMonth() - val + 1;
      if (m < 0) {
        m = 12 - val + dt.getMonth() + 1;
        y = y - 1;
      }
      console.log("获取年月", dt.getFullYear(), val);
      this.sofar = `${y}年${m}个月`;
    }
  },
  components: { sel, upload }
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 10px 20px 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
h3 {
  margin-bottom: 10px;
  align-self: flex-start;
}
hr {
  width: 100%;
  align-self: center;
  justify-self: center;
}
.editform {
  margin: 20px;
  width: 80%;
  height: 100%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid #ececec;
  border-radius: 5px;
}
.inputgroup {
  width: 480px;
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.inputgroup label {
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color: #e7f0f3;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  margin-right: 15px;
  box-sizing: border-box;
  font-weight: 600;
  color: #505050;
}
.inputgroup .inputline {
  width: 100%;
  height: 40px;
  /* border:1px solid black; */
  position: relative;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1;
}
.inputgroup .inputline input[type="text"] {
  outline: none;
  -webkit-appearance: none;
  border: 0;
  border-bottom: 2px solid rgb(118, 118, 122);
  background-color: transparent;
  font-size: 1.2em;
  height: 40px;
  width: 180px;
  -webkit-tap-highlight-color: transparent;
  color: #0e0e0e;
}

/* .inputgroup .inputline select {
  outline: none;
  -webkit-appearance: none;
  width: 30%;
  min-width: 75px;
  height: 40px;
  text-align: center;
  padding: 0 12px;
  position: relative;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid rgb(118, 118, 122);
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
} */
/* .inputgroup .inputline select:nth-child(3) {
  width: 20%;
  min-width: 55px;
}
.inputgroup .inputline select + span {
  margin-left: -10px;
} */

.fileload {
  height: 180px;
  line-height: 60px;
  justify-content: flex-start;
  align-items: flex-start;
}

.inputgroup .inputline .sofar {
  flex-shrink: 0;
  font-size: 13px;
  color: #576574;
  margin-left: 5px;
  margin-top: 10px;
  align-self: flex-start;
}
.inputgroup input[type="submit"] {
  opacity: 1;
  width: 120px;
  margin-right: 10px;
}
.inputgroup a {
  text-decoration: none;
  width: 120px;
  border: none;
  padding: 7px 35px;
  cursor: pointer;
  outline: none;
  background-color: #0984e3;
  color: #dfe6e9;
  font-size: 18px;
  font-weight: bold;
  border-radius: 2px;
  letter-spacing: 2px;
  text-align: center;
}
/* .datalist {
  height: 40px;
  line-height: 40px;
} */
</style>

