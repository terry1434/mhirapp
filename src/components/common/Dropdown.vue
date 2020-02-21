
<template>
  <div class="dropdown" :style="'width:'+dropWidth">
    <a href="javascript:void(0)" ref="dta">
      <i :class="icon_before" v-if="icon_before"></i>
      {{title | snippet}}
      <i :class="icon_after" v-if="icon_after"></i>
    </a>
    <ul class="dropdownItems" ref="dropdownItems">
      <li v-for="item in itemlist" :key="item.key" class="dropdownItem">
        <a
          v-if="item.value.icon"
          href="javascript:void(0)"
          @click="returnValue(item.key,item.value)"
        >
          <i :class="item.value.icon"></i>
          {{item.value.value}}
        </a>
        <a
          v-if="!item.value.icon"
          href="javascript:void(0)"
          @click="returnValue(item.key,item.value)"
        >{{item.value}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: [
    "icon_before",
    "icon_after",
    "title",
    "itemlist",
    "dropWidth",
    "options"
  ],
  mounted() {
    //options选项作为扩展
    if (this.options) {
      this.$refs.dta.style.color = this.options.color
        ? this.options.color
        : this.$refs.dta.style.color;
    }
  },
  computed: {
    menuitem() {}
  },
  methods: {
    returnValue(key, value) {
      this.$emit("callback", key, value);
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  margin-right:10px;
  height: 60px;
  line-height: 60px;
  font-size:14px;
}
.dropdown > a {
  display:block;
  position: absolute;
  color: #fff;
  text-decoration: none;
  right:0;
}
.dropdown a:hover + .dropdownItems {
  display: block;
}
.dropdownItems:before {
  content: "";
  position: absolute;
  border: 7px solid transparent;
  border-bottom-color: #f8f8f8;
  top: -14px;
  right: 14px;
  left: auto;
}
.dropdownItems {
  display: none;/*none*/
  position: absolute;
  top:85%;
  right:0;
  width: auto;
  height: auto;
  background-color: #f8f8f8;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  padding: 5px 10px;
}
.dropdownItems:hover {
  display: block;
}

.dropdownItems .dropdownItem {
  position: relative;
  width: auto;
  height: 25px;
  line-height: 25px;
}
.dropdownItems .dropdownItem a {
  position: relative;
  color: #000;
  text-decoration: none;
  width: auto;
  box-sizing:border-box;
}
.dropdownItems .dropdownItem a:hover {
  font-weight: 700;
}
</style>