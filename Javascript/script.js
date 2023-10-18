
// // Değişkenler

// var ad;
// ad="Yusuf Görkem Şahin";
// console.log(ad);

// yas="25";
// console.log(yas);

// // Const sabittir ve orada ne yazdıysak sadece onu okur başka bir yerde değişkeni değiştirisek onu okumaz


// const email="gorkemsahin012@gmail.com ";
// console.log(email);



// *******************************************************************************



// // Aritmetik operatörler

// let veri;
// const a=50;
// const b=25;
// let c=5

// veri= a+b;
// veri=a*b;
// veri=c++;


// // Karşılaştırma operatörleri

// veri= a==b; 



// veri =a%b;  

// veri = a!=b;  



// // Mantıksal operatörler

// // && (and) iki önermeninde doğru olması gerekiyor


// veri= (a>b) && (a>c);


// // || (or) iki önermeden biri doğru olsa bile true değerini döndürür


// veri= (b>a) || (a>c)

// // !(not)

// veri= !(a>b);

// console.log(veri);

// console.log( typeof veri);
// console.log(c);




// ************************************************************************


// DATE OBJECT

// let zaman = new Date();
// let birthday=  new Date(1999,8,20);
// // Set Methods zamanı kendimiz belirleyebiliriz.

// zaman.setFullYear(2023);


// //  Get Methods istediğimiz zaman aralığını alabiliriz
// console.log(zaman.getDay());
// console.log(zaman.getMonth());

// console.log(zaman.getFullYear()- birthday.getFullYear());

// console.log(zaman);
// console.log( typeof zaman);



// ************************************************************************



// NUMBERS


// var sayi= 15.56465453;
// //  veri= sayi.toFixed(3); virgülden sonra kaç basamak istiyorsak o kadar yazdırır



// veri=Math.PI;
// // veri=Math.pow(4,3) üs alma

// // veri=Math.sqrt(81); karakök alma

// // veri= Math.abs(-214); eski sayıyı artıya dönüştürür.

// // veri=Math.min(52,35,100,24,21,369,420,15,2,1,8) verdiğimiz sayılarda min bulma en büyük max yazarız

// // veri= Math.floor(Math.random()*10) 0 ile 10 arasında random sayı üretir floor yazmamızın sebebi virgülden sonrasını istemediğimiz için, 10 yerine 100 yazarsakta 0 ile 100  arasında random sayı üretir


// console.log(veri);
// console.log( typeof veri);



// **************************************************************************



// STRİNGS


// const firstname="Görkem";
// const lastname="Şahin";
// const age ="24";


// let veri;


// veri=firstname+" "+lastname;

// // veri=firstname.concat(' ',lastname); Birleştirme

// // veri=veri.toUpperCase();

// // veri=veri.slice(2,8); 2.harften 8. harfe kadarki harfleri ekrana yazdırır.


// // veri=veri.indexOf("R"); İçerisindeki harfi arama işlemi

// // veri=veri.replace( "Görkem", "Bengü") İçerisindeki birşeyi değiştirmek istiyorsak 


// // veri=veri.length; yazdığımız şeyin uzunluğu hakkında bilgi verir. 



// console.log(veri);
// console.log(typeof veri);




// **********************************************************************************



// // ARRAYS


// let name=["Görkem","Bengü","Can","ülkü"];
// let years=[2015,1999,1881,1938];


// console.log(name);
// console.log(typeof name);
// console.log(years);


// // get array item   diziden istediğimiz elemana ulşamak için


// console.log(name[1]);


// //  add and Remove item

// name.push("Yaren");
// console.log(name);

// // name.unshift("İlayda");      Dizinin   Başına ekleme 
// console.log(name);



// // years.pop()
// // console.log(years);   dizinin son elamanını çıkardı


// //  İndexof


// // let index = name.indexOf("ülkü");   Eleman aramak istediğimzide bu yapıyı kullanırız
// // console.log("index:" + index);



// // name.reverse();  dizideki elemanları tersten sıralama yapar
// // console.log(name);


// // years.sort()
// // console.log(years);
// //                         //   sort dizinini elemanları küçükten büyüğe ya da alfabetik sıralar.
// // name.sort()
// // console.log(name);



// // let veri =name.concat(years);    iki dizinin elemanlarını birleştirme
// console.log(veri);




// ************************************************************************************



//  İF-ELSE



// const firstname="Görkem"
// const userNAme="gorkemsahin01"
// const age= 24;

// const school ="unıversity"



// if(userNAme=="gorkemsahin01"){

//     console.log("Selamun Aleyküm babbaa");
// }
// else{
//     console.log("sg lann yavsak");
// }


// // if(age==24){
// //     console.log("yaslanmışsın ");
// // }






// *********************************************************************************






// Switch koşul yapısı



// let islem = 5;

// switch (islem) {

//     case 1:
//         console.log("1 nolu islem yapıldı");
//         break;
//     case 2:
//         console.log("2 nolu islem yapıldı");
//         break;

//     case 3:
//         console.log("3 nolu islem yapıldı");
//         break;

//         default:
//             console.log("islem yapılmayacak");




// }


// let day=2;

// switch (new Date().getDay()) {

//     case 0:

//         day="Pazar";

//       break;
//       case 1:

//       day="Pazartesi";

//     break;
//     case 2:

//     day="Salı";

//   break;
//   case 3:

//   day="Carsamba";

// break;



// }

// console.log(day);



// let saat=12;

// switch (true) {


//     case (saat >= 6 && saat <= 12):
//         console.log("Gunaydın yavru");
//         break

//     case (saat >= 13 && saat <= 17):
//         console.log("iyi günler");
//         break

//     case (saat >= 18 && saat <= 24):
//         console.log("iyi akşamlar ");
//         break

//         default:
//             console.log("yanlış zaman");
// }







// *********************************************************************************************






//  OBJECT LİTERALS    Kullanıcların verilerini kolayca takip etmek ve daha kolay erişmek için kullanıyoruz




// let veri;

// let user = {

//     userName:"crazygorkem01",
//     firstName:"Görkem",
//     lastName:"ŞAhin",
//     age:24,
//     hobbies: ["kitap okumak",   "kahve içmke",  "sex"],
         
//     address : {
//         city:"Adana ",
//         country:"Türkiye",
//         phone:  "05454363551",
//     }

// }
// veri=user;
// veri=user.hobbies;
// veri=user.address.country;


// console.log(veri);
// console.log(typeof user);





// *****************************************************************************************









// DÖNGÜLER


//  While Loop


// let i=0;

// while (i<10) {
//     console.log(i);
//     i++;
    
// }


// let i=0;

// while (i<15) {

//     console.log(i);
//     i++;
//     if (i==8) {

        
//         console.log("görkem baba");
//         break
        
//     }
    
// }




//  For Döngüsü



// for(let i=0; i<10; i++){

//     if(i==5){
//         console.log("seçilen rakam:"+i);
//     }
//   console.log(i);
// }



// let toplam=0;

// for(i=0; i<10; i++){

//     // toplam=toplam+i;   toplam=+i de diyebiliriz
//    }
// console.log(toplam);








// ***************************************************************************************






//  DİZİLERDE VE OBJELERDE DÖNGÜ KULLANIMI


// let cities=["adana","istanbul","ankara","izmir"]



// for(let i=0; i<cities.length; i++){
//     console.log(cities[i]);
// }


// cities.forEach(function(item) {

//     console.log(item);
    
// })


// let users=  [
    
    
    
// {firstName:"Görkem", lastName:"Şahin"},
// {firstName:"Dilek", lastName:"Şahin"},
// {firstName:"Can", lastName:"Şavkın"},
// {firstName:"Bengüsu",lastName:"palalı"},

// ]




// // for(let i=0; i<users.length; i++){

// //     console.log(users[i].firstName);
// // }


// let veri= users.map(function(item){

//     return item.firstName+" "+ item.lastName;

// });
// console.log(veri);






// ***********************************************************************************






// FONKSİYONLAR





// function merhaba() {

//     console.log("Görkem Şahin");
    
// }
// merhaba();



// function user(name,age) {

//     console.log(`adınız: ${name}  yaşınız: ${age}`);
    
// }

// user("Dilek",43);
// user("Görkem",24);




// function YasHesaplama(dogumyili) {


//     yas=2023-dogumyili
// console.log(`yaşınız: ${yas}`);
    
// }

// // YasHesaplama(1999);




// function ehliyetAlabilme(name,age) {

//     let yas;


//     console.log(`adınızı giriniz: ${name}  yaşınızı giriniz: ${age}`);

//     if(yas>18){
//         console.log("ehliyeti aldınız");
        
//     }
//      else{
//         console.log("Ehliyet alamazsın daha küçüksün amk çocuğu");
//     }
    
// }

// ehliyetAlabilme("Görkem ",15);
// ehliyetAlabilme("Bengü",35);





// **********************************************************************************************







// WİNDOWS OBJELERİ





// console.log(window);

// // alert
// alert("Selamun Aleyküm");

// // prompt
// var veri=prompt("adınızı giriniz:")

// // confirm
// veri2=confirm("çıkmak istiyonmu cidden")
// console.log(veri2);


// location

// veri=window.location;
// console.log(veri);



//  konsola window.document yazdığımızda tüm sitelerin kodlarını görüyorsun



