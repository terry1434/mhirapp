<template>
  <div class="slidebar">
    <input type="checkbox" name="slide" id="slide" />
    <label for="slide" class="ctlLabel">
      <div class="button">
        <i class="fa fa-bars"></i>
      </div>
    </label>
    <div class="slideMenus">
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
        <li>菜单4</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div.slidebar {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: aqua; */
  transform: scale(1);
}
div.slidebar > label.ctlLabel {
  display: block;
  position: relative;
  background-color: rgba(21, 1, 126, 1);
  border-radius: 7px;
  width: 52px;
  height: 52px;
  top: 0;
  cursor: pointer;
  transition: all 0.35s linear;
}

div.slidebar > label.ctlLabel > div.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
div.slidebar > label.ctlLabel i {
  font-size: 36px;
  color: #fff;
  transition: all 0.35s linear;
  transform: rotate(0turn);
}
div.slidebar > div.slideMenus {
  position: relative;
  width: 52px;
  height: auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.35s linear;
  transform-origin: center top;
  transform: scaleY(0);
}
div.slidebar > div.slideMenus > ul {
  list-style: none;
  box-shadow: 0 0 5px #2f3542;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
div.slidebar > div.slideMenus > ul > li {
  position: relative;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
input[type="checkbox"] {
  display: none;
}

div.slidebar > input[type="checkbox"]:checked + .ctlLabel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 0 5px #2f3542;
}

div.slidebar > input[type="checkbox"]:checked + .ctlLabel i {
  transform: rotate(0.25turn);
}
div.slidebar > input[type="checkbox"]:checked + .ctlLabel i:before {
  content: "\f00d";
}
div.slidebar > input[type="checkbox"]:checked ~ div.slideMenus {
  transform: scaleY(1);
}
@media screen and (max-width: 684px) {
  div.slidebar {
    display: none;
  }
}
</style>