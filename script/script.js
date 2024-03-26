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


const URL_STRING ="https://www.p-blog.online/api/pmadhav279@gmail.com"
const getData = async ()=>{
  let postCard = document.querySelector(".postCard");
  let html = "";
  let loader = document.querySelector(".loader");


  try{
let res =  await fetch(URL_STRING);
if(res){
  loader.style.display = "none";
}
if(res.status>299){
  postCard.innerHTML = `<b>Something went wrong, couldn't fetch the data </b>`;
  return
}else{
  let data = await res.json();
  data.forEach((d)=>{
    html += `
    <div class="card card-shadow">

<div class = "card-header">
<div class = "user-info">
<img class = "userPic" src ="https://www.p-blog.online${d.uid.profileURL}"
   <b> ${d.uid.name} </b>
   </div>
 
    <hr/>
  </div>

<div class="card-body">


   ${d.title}
 
 </div>
<div class = "card-footer">
 <form method="get"  target = "_none" action="https://www.p-blog.online/${d._id}">
<button class="btn" type="submit">Read More</button>
</form>
</div>

</div>
    `;
    
  })
}


postCard.innerHTML = html;

}catch(err){
  loader.style.display = "none";
  postCard.innerHTML = `<b>Something went wrong, couldn't fetch data </b>`;

  return
}

}


getData()


const arrowContainer = document.querySelector(".arrowContainer");


const calculateScrollValue = () =>{
  
  const scrollHeight = document.documentElement.scrollHeight
  const clietHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop


let totalHeight = scrollHeight - clietHeight;
let scrollPositionPercentage = Math.round(scrollTop*100/totalHeight)

//show scrollToTop Button
if(scrollPositionPercentage>20){
arrowContainer.style.display = "flex"
arrowContainer.style.background = `conic-gradient(#1134A6 ${scrollPositionPercentage}%, #FFDEAD 30%)`

arrowContainer.addEventListener("click", ()=>{
  document.documentElement.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

}else{
  arrowContainer.style.display = "none"
}


}


window.onload = calculateScrollValue;
window.onscroll = calculateScrollValue;
