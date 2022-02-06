const proBt = document.querySelector("#profileBt");
const portfolioBt = document.querySelector("#portfolioBt");
const linkBt = document.querySelector("#linkBt");

const proLoca = document.querySelector("#profile").offsetTop;
const portLoca = document.querySelector("#portfolio").offsetTop;
const linkLoca = document.querySelector("#link").offsetTop;

const menuHeight = document.querySelector("#menu").offsetHeight

const a = [proBt, portfolioBt, linkBt];
const b = [proLoca, portLoca, linkLoca];

for (let i = 0; i < a.length; i++){
  a[i].addEventListener("click", function () {
    scrollTo({ top: b[i] - menuHeight, behavior: 'smooth' });
  })
}



//Loca가 붙은 const들은 모두 해당 태그의 offsetTop의 정보이고 menuHeight는 상단의
//메뉴바의 높이이다. 메뉴바는 fixed되어 있기 때문에 scrollTo하게 되면 margin값을
//포함하여 이동하여서 메뉴바에 해당 태그가 짤리므로 메뉴바의 높이만큼 빼주면 짤리지
//않게 된다.
//두개의 배열을 만들어 for문에서 사용하기 편하게 구성해 보았다.
//for문에서 i값은 변하기 때문에 let으로 선언해주었고, a배열에서 순서대로
//addEventListener("click", function(){~~~})을 해주고 아까 scrollTo로 함수를
//체워주며 원하던 동작을 구성할 수 있었다.