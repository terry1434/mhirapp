<template>
  <div class="block">
    <el-date-picker class="customWidth"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :editable="editable"
      :clearable="clearable"
      @change="selchange"
      :picker-options="pickerOptions"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "el_dateSelect",
  props: ["type", "placeholder", "editable", "clearable"],
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value: ""
    };
  },
  methods: {
    selchange() {
      // let dt = new Date(val);
      console.log("selchange", this.value);
      this.$emit("returnVal", new Date(this.value));
    }
  }
};
</script>

<style scoped>
.customWidth{
  width:144px;
}
</style>
    
