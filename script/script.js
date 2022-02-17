let menu = document.querySelector("#mobile-menu");
let menuLink = document.querySelector(".nav-menu");

menu.addEventListener("click",()=>{
menu.classList.toggle("is-active");
menuLink.classList.toggle("active");
})
menuLink.addEventListener("click",(ev)=>{
  if(ev.target.tagName=="A"){
menu.classList = "menu-toggle";
menuLink.classList="nav-menu";
  }

})



