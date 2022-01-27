const op_bt = document.querySelector("#sidebar");
const nav_bar = document.querySelector("#nav");
const close_bt = document.querySelector("#nav_bt_close");
const sideBarWidth = document.querySelector("#body")

//sidebar의 동작을 담당하는 함수
function active_sideBar() {
  // op_bt.addEventListener("click", op_nav);
  // close_bt.addEventListener("click", cl_nav);
  console.log(document.body.marginLeft);
  
}

function op_nav() {
  console.log(sidebarWidth);
  op_bt.setAttribute("aria-pressed", "true");
  nav_bar.style.width = `${sideBarWidth}px`;
  document.querySelector("#body").style.marginLeft = `-${sideBarWidth}px`;
  
}

function cl_nav() {
  op_bt.setAttribute("aria-pressed", "false");
  nav_bar.classList.remove("active");
}


active_sideBar();
