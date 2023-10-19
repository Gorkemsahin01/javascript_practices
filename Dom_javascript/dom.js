
// let veri;

// veri=document.getElementById("header");
// veri=document.getElementById("header").id;


// veri=document.getElementById("header");

// veri.style.color ="blue";
// veri.style.fontSize="40px";


// document.getElementById("header").innerText= "YAPILACAKLAR";

// document.querySelector("li:last-child").style.color="red";

// console.log(veri);





// // ÇOKLU ELEMENT SEÇİMİ


// let veri;

// // veri=document.getElementsByClassName("list-group-item");
// // veri=document.getElementsByClassName("list-group-item")[1];


// // veri=document.getElementsByClassName("list-group-item");

// // // veri[1].style.color = "red";
// // // veri[2].style.fontSize="30px";

// // for(let i=0; i<veri.length; i++){
// //     console.log(veri[i].textContent="New İtem");
// //     console.log(veri[i].style.color="red");
// // }


 // veri=document.getElementsByTagName("li");
 // veri=document.getElementsByTagName("a");




// console.log(veri);




// ELEMENT SEÇİMİ




let value;

const todoList= document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const card=document.querySelector(".card");



value=todoList;
value=todo;
value=card;



// Child Nodes

value=todoList.childNodes;
value=todoList.children;
value=todoList.children[2];
value=todoList.children[1].textContent="New İtem";



console.log(value);



