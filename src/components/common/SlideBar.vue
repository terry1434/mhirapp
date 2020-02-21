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
        <li title="首页">
          <router-link to="/home">
            <i class="fa fa-home"></i>
          </router-link>
        </li>
        <li title="修改个人信息">
          <router-link to="/sitemanage/useredifinfo">
            <i class="fa fa-pencil fa-fw"></i>
          </router-link>
        </li>
        <li title="快速问卷">
          <i class="fa fa-file-text-o"></i>
        </li>
        <li title="网站管理">
          <i class="fa fa-wrench"></i>
        </li>
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
div.slidebar > div.slideMenus > ul > li:hover {
  box-shadow: 0 0 5px #636e72;
  background-color: #f5f6fa;
  /* color: #dfe6e9; */
  cursor: pointer;
}
div.slidebar > div.slideMenus > ul > li:hover i {
  font-size: 18px;
}

div.slidebar > div.slideMenus > ul > li a,
div.slidebar > div.slideMenus > ul > li a:link,
div.slidebar > div.slideMenus > ul > li a:visited,
div.slidebar > div.slideMenus > ul > li a:hover,
div.slidebar > div.slideMenus > ul > li a:active {
  color: inherit;
  display:block;
  width: 100%;
  height: 100%;
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