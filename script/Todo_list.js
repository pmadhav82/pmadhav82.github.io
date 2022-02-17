const addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");
const showlist = document.getElementById("showlist");



addButton.addEventListener("click", function(){
  if(userInput.value == ""){
    alert("Please, Enter your task..")
    return;
  }
  let list = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  let label = document.createElement("label");
  label.innerText = userInput.value;

  
  let delbtn = document.createElement("button");
  delbtn.className = "delete";
  delbtn.innerText = "Delete";

  let editbtn = document.createElement("button");
  editbtn.className = "edit";
  editbtn.innerText = "Edit";


  let savebtn = document.createElement("button");
  savebtn.className = "save";
  savebtn.innerText = "Save";
  savebtn.style.display = "none";

  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.style.display = "none";



  list.appendChild(checkbox);
list.appendChild(label);
list.appendChild(editbtn);
list.appendChild(savebtn);
list.appendChild(delbtn);
list.appendChild(newInput);


showlist.appendChild(list);
userInput.value = "";



checkbox.addEventListener("click", function() {
  if(!checkbox.checked){
 label.style.textDecoration = "none";
  }else
  label.style.textDecoration = "line-through";

});



delbtn.addEventListener("click", function(){
  showlist.removeChild(list);
})

editbtn.addEventListener("click", function(){
  newInput.style.display = "block";
 newInput.value = label.innerText;
 editbtn.style.display = "none";
 savebtn.style.display = "block";
  

  savebtn.addEventListener("click",function(){
 
 label.innerText = newInput.value;
 editbtn.style.display = "block";
 savebtn.style.display = "none";
 newInput.style.display = "none";
  })

})

})










 





