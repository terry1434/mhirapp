<template>
  <div class="container">
    <h3>修改个人资料</h3>
    <hr />
    <form action class="editform">
      <div class="inputgroup">
        <label>用户名</label>
        <div class="inputline">
          <input type="text" v-model="forminput.username" disabled />
        </div>
      </div>
      <div class="inputgroup">
        <label>头像上传</label>
        <div class="inputline">
          <!-- <upload id="imgload"></upload> -->
          <elUpload :action="'http://localhost:8080'"></elUpload>
        </div>
      </div>
      <div class="inputgroup">
        <label>入职年月</label>
        <div class="inputline">
          <!-- <sel :dataList="years" labelProperty="name" @change="setYear" selWidth="100"></sel>
          <sel :dataList="months" labelProperty="name" @change="setMonth" selWidth="60"></sel>-->
          <elDatepick
            :type="'month'"
            :placeholder="'请选择'"
            :editable="false"
            :clearable="false"
            @returnVal="setFromTime"
          ></elDatepick>
          <div class="sofar" ref="sofar">入社：{{sofar}}</div>
        </div>
      </div>
      <!-- <div class="inputgroup">
        <div class="inputline">
          
        </div>
      </div>-->
      <div class="inputgroup">
        <label>个人简介</label>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="forminput.usermarks"
          maxlength="100"
          show-word-limit
        ></el-input>
      </div>
      <div class="inputgroup">
        <div class="inputline">
          <!-- <input type="submit" value="提交" /> -->
          <el-button type="submit">提交</el-button>
          <!-- <router-link to="/home" class="btnback">返回</router-link> -->
          <el-button @click="back">返回</el-button>
        </div>
      </div>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="340px">
        <span>有项目已更新，确定返回？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="goback">确 定</el-button>
        </span>
      </el-dialog>
    </form>
  </div>
</template>

<script>
import sel from "../common/Select";
import upload from "../common/FileUpload";
import elDatepick from "../common/EL_DateSelect";
import elUpload from "../common/EL_Upload";
export default {
  name: "userinfoedit",
  data() {
    return {
      dialogVisible: false,
      ischange: false,
      forminput: {
        username: "",
        fromTime: "",
        usermarks: ""
      },
      sofar: ""
    };
  },
  computed: {
    getUsername() {
      return this.forminput.username;
    },
    getFromTime() {
      return this.forminput.fromTime;
    },
    getUsermarks() {
      return this.forminput.usermarks;
    }
  },
  watch: {
    getUsername() {
      this.ischange = true;
    },
    getFromTime() {
      this.ischange = true;
    },
    getUsermarks() {
      this.ischange = true;
    }
  },
  // computed: {
  //   getFromTime() {
  //     return this.forminput.fromTime;
  //   }
  // },
  methods: {
    setFromTime(dtime) {
      console.log("setFromTime", dtime);
      this.forminput.fromTime = dtime;
      let nowDate = new Date();
      let y, m;
      y = nowDate.getFullYear() - dtime.getFullYear();
      m = nowDate.getMonth() - dtime.getMonth() + 1;
      console.log(`y:${y},m:${m}`);
      if (m < 0) {
        m = 12 - dtime.getMonth() + nowDate.getMonth() + 1;
        y = y - 1;
      }
      this.sofar = `${y}年${m}个月`;
      this.$refs.sofar.style.display = "block";
    },
    back() {
      if (this.ischange) {
        this.dialogVisible = true;
      } else {
        this.$router.go(-1);
      }
    },
    goback() {
      this.$router.go(-1);
    }
  },
  components: { elDatepick, elUpload }
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
  background-color: #f1f2f6;
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
  margin-top: 20px;
  width: 100%;
  min-width: 240px;
  height: 100%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 2px solid #ececec;
  border-radius: 4px;
}
.inputgroup {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.inputgroup label {
  display: inline-block;
  min-width: 80px;
  height: 40px;
  /* background-color: #1e90ff; */
  text-align: left;
  padding: 0 12px 0 0;
  line-height: 40px;
  border-radius: 4px;
  /* margin-right: 15px; */
  font-size: 14px;
  box-sizing: border-box;
  color: #606266;
  align-self: flex-start;
}
.inputgroup .inputline {
  width: 100%;
  /* max-width: 250px; */
  height: auto;
  /* border:1px solid black; */
  position: relative;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
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
  max-width: 180px;
  -webkit-tap-highlight-color: transparent;
  color: #0e0e0e;
}

/* .fileload {
  height: 220px;
  max-height: 220px;
  line-height: 60px;
  justify-content: center;
  align-items: flex-start;
} */

#imgload {
  align-self: flex-start;
}
.inputgroup .inputline .sofar {
  flex-shrink: 0;
  font-size: 14px;
  color: #576574;
  justify-content: center;
  align-self: center;
  text-align: center;
  width: auto;
  display: none;
  padding-left: 10px;
  box-sizing: border-box;
}
.inputgroup .inputline button[class$="submit"] {
  opacity: 1;
  width: 70px;
  background-color: #0984e3;
  color: #dfe6e9;
  margin-right: 10px;
  flex-shrink: 1;
  border-radius: 4px;
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
  border-radius: 4px;
  letter-spacing: 2px;
  text-align: center;
  flex-shrink: 1;
}
/* .datalist {
  height: 40px;
  line-height: 40px;
} */

.inputgroup:nth-last-child(1) .inputline {
  margin-left: 80px;
}

@media screen and (max-width: 684px) {
  .container {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
  }
  .container .subTitle {
    display: none;
  }
  .inputgroup:nth-last-child(1) .inputline {
    margin-left: 0;
    justify-content: center;
  }
  .sofar {
    margin-top: 7px;
  }
}
</style>

