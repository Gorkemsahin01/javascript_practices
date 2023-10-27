
//  let veri;

//  veri=document.getElementById("header");
// veri=document.getElementById("header").id;


// veri=document.getElementById("header");

// veri.style.color ="blue";
// veri.style.fontSize="40px";


// document.getElementById("header").innerText= "YAPILACAKLAR";

// document.querySelector("li:last-child").style.color="red";

// console.log(veri);





// ÇOKLU ELEMENT SEÇİMİ


// let veri;

// veri=document.getElementsByClassName("list-group-item");
// veri=document.getElementsByClassName("list-group-item")[1];


// veri=document.getElementsByClassName("list-group-item");

// veri[1].style.color = "red";
// veri[2].style.fontSize="30px";

// for(let i=0; i<veri.length; i++){
//     console.log(veri[i].textContent="New İtem");
//     console.log(veri[i].style.color="red");
// }


 // veri=document.getElementsByTagName("li");
 // veri=document.getElementsByTagName("a");




// console.log(veri);




// ELEMENT SEÇİMİ




// let value;

// const todoList= document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const card=document.querySelector(".card");



// value=todoList;
// value=todo;
// value=card;



// Child Nodes

// value=todoList.childNodes;
// value=todoList.children;
// value=todoList.children[2];
// value=todoList.children[1].textContent="New İtem";

// value=card.parentElement;

// console.log(value);




// ELEMENT OLUŞTURMA 


// const li=document.createElement("li");


// add class

// li.className="list-group-item list-group-item-secondary";


// attribute

// li.setAttribute("title","New item");

// const text = document.createTextNode("New İtem");

// li.appendChild(text);

// const a=document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML='<i class="fas fa-times"></i>';

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);


// console.log(li);







// ELEMENT SİLME 





// const taskList=document.querySelector("#task-list");


// taskList.remove();  Tüm listeyi sildi

// taskList.children[2].remove();


// console.log(taskList);





// EVENT LİSTENERS VE EVENT OBJESİ   
// Bir yere tıkladığımda bir fonksiyonun çalışması ya da bir işlevi yerine getirmek istiyorum





//  const btn=document.querySelector("#btnDeleteAll");
//  const btn2=document.querySelector("#btnAddNewTask");




//  function btnClick(){
//      console.log("butona tıklandı");
//  }

//  btn.addEventListener("click",btnClick);
//  btn2.addEventListener("click",btnClick);



// Aşağıdaki kodu yazmayıp butona tıkladığımızda sayfa refresh oluyor ve en üste çıkıyor. Ancak aşğıdaki kod sayesinde butona tıkladığımızda sayfa hareket etmiyor

// btn.addEventListener("click",function(a){

//     let value;

//     value=a;
//     value=a.target;
//     value=a.type;

//     a.preventDefault();

//     console.log(value);

// });











