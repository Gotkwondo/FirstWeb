let state = document.querySelector("#sidebar");

//sidebar의 동작을 담당하는 함수
function SideBar() {
  state.addEventListener("click", function () {
    //default상태
    if (state.ariaPressed === "false") {
      state.setAttribute("aria-pressed", "true");
      state.classList.add("active")
      console.log(state.classList)
    }
    //sidebar가 열린 상태
    else if (state.ariaPressed === "true") {
      state.setAttribute("aria-pressed", "false");
      state.classList.remove("active")
      console.log(state.classList)
    }
  });
}
SideBar();
