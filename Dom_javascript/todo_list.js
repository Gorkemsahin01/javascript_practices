

//  TODO ELEMAN EKLEME



const form= document.querySelector("form");
const input= document.querySelector("#txtTaskName");
const btnAddNewTask=document.querySelector("#btnAddNewTask");
const btnDeleteAll=document.querySelector("#btnDeleteAll");
const taskList= document.querySelector("#task-list");
const items= ["görkem 1","görkem 2 ","görkem 3","görkem 4"];

loadItems();

eventListeners();


function eventListeners(){
    //  Submit Event
    form.addEventListener("submit",addNewİtem);
    // Delete event
    taskList.addEventListener("click",deleteItem);
    //  Delete all İtem
    btnDeleteAll.addEventListener("click", deleteAllItem);
    
}


function loadItems(){

     items.forEach(function(item){

        createItem(item);
     })
    
}



function createItem (text){

     // Li Oluşturma

     const li =document.createElement("li");
     li.className="list-group-item list-group-item-secondary";
     li.appendChild(document.createTextNode(text));
 
 //    a oluşturma
 
 
 const a= document.createElement("a");
 a.classList="delete-item float-right";
 a.setAttribute("href","#");
 a.innerHTML='<i class="fas fa-plus"></i>';
 
 li.appendChild(a);
 taskList.appendChild(li);

}

function addNewİtem(e){

    if(input.value===''){
        alert("Add New İtem");

          console.log("submit");
       
    }

    // Create Item

    createItem(input.value);

   




       e.preventDefault();


}

//  Eleman Silme

function deleteItem(e){
    

   if(e.target.className==="fas fa-times"){

     e.target.parentElement.parentElement.remove();

     
   }
   e.preventDefault();


}

// Tüm Elemanları Silme


function deleteAllItem(e){

    taskList.childNodes.forEach(function(item){


        if(item.nodeType===1){
            item.remove();
        }

      
    })
  

    e.preventDefault();
}

