<template>
  <div class="zq-drop-list" @mouseover="onDplOver($event)" @mouseout="onDplOut($event)">
    <span>
      {{dplLable}}
      <i class="fa fa-angle-down"></i>
    </span>
    <ul v-dpl>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        @click="onLiClick(index, $event)"
      >{{item[labelProperty]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDownList",
  data() {
    return {
      activeIndex: 0
    };
  },
  props: ["dataList", "labelProperty"],
  directives: {
    dpl: {
      bind(el) {
        el.style.display = "none";
      }
    }
  },
  methods: {
    onDplOver(event) {
      let ul = event.currentTarget.childNodes[2];
      ul.style.display = "block";
    },
    onDplOut(event) {
      let ul = event.currentTarget.childNodes[2];
      ul.style.display = "none";
    },
    onLiClick(index) {
      let path = event.path || (event.composedPath && event.composedPath()); //兼容火狐和safari
      path[1].style.display = "none";
      this.activeIndex = index;
      this.$emit("change", {
        index: index,
        value: this.dataList[index]
      });
    }
  },
  computed: {
    dplLable() {
      return this.dataList[this.activeIndex][this.labelProperty];
    }
  }
};
</script>


<style scoped>
.zq-drop-list {
  display: inline-block;
  width: 100%;
  max-width: 100px;
  position: relative;
  cursor: pointer;
  z-index:99;
  margin-left:5px;
}
span {
  display: block;
  height: 35px;
  line-height: 35px;
  background: #ced6e0;
  font-size: 14px;
  text-align: center;
  color: #333333;
  border-radius: 4px;
}
i {
  margin-left: 6px;
  display: inline-block;
}
ul {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height:auto;
  max-height: 210px;
  margin: 0;
  padding: 0;
  border: solid 1px #f1f1f1;
  border-radius: 4px;
  overflow-y: auto;
}
li {
  list-style: none;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  border-bottom: solid 1px #f1f1f1;
  background: #ffffff;
  text-align: center;
  transition: all 0.35s ease-in-out;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  font-weight: 700;
}
</style>