const pro = document.querySelector("#profile").offsetTop;
const portfolio = document.querySelector("#portfolio").offsetTop;
const link = document.querySelector("#link").offsetTop;
const proBt = document.querySelector("profileBt");
const portfolioBt = document.querySelector("portfolioBt");
const linkBt = document.querySelector("linkBt");
const a = [proBt, portfolioBt, linkBt];
let i;
function scrollEvent() {
  for (i = 0; i > a.length; i++){
    addEventListener("click", a[i]);
  }
  if (EventTarget.id === "profile") {
    window.scrollTo({ top: pro, behavior: 'smooth' });
  } else if (EventTarget.id === "portfolio") {
    window.scrollTo({ top: portfolio, behavior: 'smooth' });
  } else if (EventTarget.id === "link") {
    window.scrollTo({ top: link, behavior: 'smooth' });
  }
}