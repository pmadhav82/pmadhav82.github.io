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


const URL_STRING = "https://pandey-blog.herokuapp.com/api/madhavblogs"
const getData = async ()=>{
  let postCard = document.querySelector(".postCard");
  let html = "";


  try{
let res =  await fetch(URL_STRING);
if(res){
  let loader = document.querySelector(".loader");
  loader.style.display = "none";
}
if(res.status>299){
  postCard.innerHTML = `<b>Something went wrong, couldn't fetch data </b>`;
  return
}else{
  let data = await res.json();
  data.forEach((d)=>{
    html += `
    <div class="post_card">
<p>

   <b> ${d.creator} </b>
   </p>
<div class="post_date">
   
   <p>

   ${d.createdAt}
   </p>
</div>
<div class="post_title">

 <h4>

   ${d.title}
 </h4>
 </div>

 <form method="post"  target = "_none" action="https://pandey-blog.herokuapp.com/post/${d._id}">
<button class="btn" type="submit">Read More</button>
</form>
</div>
    `;
    
  })
}


postCard.innerHTML = html;

}catch(err){
  console.log(err)
}

}


getData()