

//  TODO ELEMAN EKLEME



const form= document.querySelector("form");
const input= document.querySelector("#txtTaskName");
const btnAddNewTask=document.querySelector("#btnAddNewTask");
const btnDeleteAll=document.querySelector("#btnDeleteAll");
const taskList= document.querySelector("task-list");

eventListeners();


function eventListeners(){
    form.addEventListener("submit",addNewİtem)
    
}


function addNewİtem(e){

    if(input.value===''){
        alert("Add New İtem");
        //  console.log("submit");
       
    }


//  Lİ OLUŞTURMA




    e.preventDefault();


}
