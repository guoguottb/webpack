import "./banner.js";
import "./tab.js";
import $ from "jquery";
$("#banner").css({
  backgroundColor: "red",
});
import "./styles/index.css";
import "./styles/index.less";

import url1 from "./assets/1.gif";
const img1 = document.createElement("img");
img1.src = url1;
document.body.appendChild(img1);

import url2 from "./assets/logo_small.png";
const img2 = document.createElement("img");
img2.src = url2;
document.body.appendChild(img2);

import "./assets/fonts/iconfont.css";

const getInfo = () => {
  console.log("郭统彪");
};
getInfo();
