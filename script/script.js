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


const URL_STRING ="http://13.54.206.174/api/pmadhav279@gmail.com"
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
   <b> ${d.creator} </b>
   <br>
    ${d.createdAt}
  </div>

<div class="card-body">


   ${d.title}
 
 </div>
<div class = "card-footer">
 <form method="get"  target = "_none" action="http://www.pblog.online/${d._id}">
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