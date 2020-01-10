<template>
  <div class="dropdown">
    <a href="javascript:void(0)">
      <i :class="icon_before" v-if="icon_before"></i>
      {{title}}
      <i :class="icon_after" v-if="icon_after"></i>
    </a>
    <ul class="dropdownItems">
      <li v-for="item in itemlist" :key="item.key" class="dropdownItem">
        <a href="javascript:void(0)" @click="returnValue(item.key)">{{item.value}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["icon_before", "icon_after", "title", "itemlist"],
  methods: {
    returnValue(value) {
      this.$emit("callback", value);
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 120px;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  float: right;
  margin-right: 1em;
}
.dropdown a {
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
}
.dropdown a:hover + .dropdownItems {
  display: block;
  position: relative;
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
  display: none;
  position: relative;
  width: 100px;
  height: auto;
  background-color: #f8f8f8;
  border:1px solid #e1e4e8;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: -10px;
  transform:translateX(-30%);
}
.dropdownItems:hover {
  display: block;
  position: relative;
}

.dropdownItems .dropdownItem {
  position: relative;
  width: 100%;
  height: 25px;
  line-height: 25px;
}
.dropdownItems .dropdownItem a {
  position: absolute;
  color: #000;
  text-decoration: none;
  transition: transform 0.3s linear;
}
.dropdownItems .dropdownItem a:hover {
  transform: translateX(6px);
  color: #113;
  font-weight: 700;
}
</style>