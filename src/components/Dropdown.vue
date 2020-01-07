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
      console.log(value);
      this.$emit("callback", value);
    }
  }
};
</script>

<style scoped>
.dropdown {
  width: 160px;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  float: right;
  margin-right: 6em;
}
.dropdown a {
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
}
.dropdown a:hover + .dropdownItems {
  display: block;
}
.dropdownItems {
  display: none;
  width: 8em;
  height: auto;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: -10px;
}
.dropdownItems:hover {
  display: block;
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