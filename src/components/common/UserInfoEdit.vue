<template>
  <div class="container">
    <h3>修改个人资料</h3>
    <hr />
    <form action class="editform">
      <div class="inputgroup">
        <label for="username">用户名</label>
        <div class="inputline">
          <input type="text" id="username" data-name="6115001" />
        </div>
      </div>
      <div class="inputgroup">
        <label for="username">入职年份</label>
        <div class="inputline">
          <dropdown
            :itemlist="years()"
            dropWidth="80px"
            :title="selYear"
            class="datalist"
            @callback="setYear"
            :options="dropOption"
          ></dropdown>
          <dropdown
            :itemlist="mounths()"
            dropWidth="60px"
            :title="selMounth.value"
            class="datalist"
            @callback="setMounth"
            :options="dropOption"
          ></dropdown>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import dropdown from "../common/Dropdown.vue";
export default {
  name: "userinfoedit",
  data() {
    return {
      dropOption: {
        color: "#4b4b4b"
      },
      selYear: { value: "年份", key: "" },
      selMounth: { value: "月份", key: "" },
      years() {
        return [
          { value: "2015年", key: "2015" },
          { value: "2016年", key: "2016" },
          { value: "2017年", key: "2017" }
        ];
      },
      mounths() {
        return [
          { value: "1月", key: "1" },
          { value: "2月", key: "2" },
          { value: "3月", key: "3" },
          { value: "4月", key: "4" },
          { value: "5月", key: "5" },
          { value: "6月", key: "6" },
          { value: "7月", key: "7" },
          { value: "8月", key: "8" },
          { value: "9月", key: "9" },
          { value: "10月", key: "10" },
          { value: "11月", key: "11" },
          { value: "12月", key: "12" }
        ];
      }
    };
  },
  methods: {
    setYear(key, val) {
      this.selYear = { key: key, value: val };
    },
    setMounth(key, val) {
      this.selMounth = { key: key, value: val };
    }
  },
  components: { dropdown }
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
  width: 350px;
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row wrap;
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
  width: 180px;
  height: 40px;
  /* border:1px solid black; */
  position: relative;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.inputgroup .inputline input[type="text"] {
  outline: none;
  -webkit-appearance: none;
  border: 0;
  border-bottom: 2px solid rgb(118, 118, 122);
  background-color: transparent;
  font-size: 1.2em;
  height: 40px;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
  color: #0e0e0e;
}
.datalist {
  height: 40px;
  line-height: 40px;
}
</style>

