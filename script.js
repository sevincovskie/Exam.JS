//  Qeydiyyatdan kecmek ucun yas araligina gore qruplara bolunme funksiyasi//

/* var registration = prompt ("Yasinizi qeyd edin");
   var age = registration  ;
   


 if( age < 20 && age >=16 ) {
     console.log("Siz genc qrupuna daxilsiniz!");
 }
  else if (age >= 30 && age <=45 ) {
    console.log("Siz cavan qrupuna daxilsiniz!");
 }
   else if (age > 45 ) {
    console.log("Siz yasli qrupuna daxilsiniz!");
 }
 else {
    console.log("Duzgunluyu bir daha yoxlayin");
 }

 console.log(age); */


 // Kim ? harada ? nece? //


  

/* var ok = confirm ("Davam etmek isteyirsiniz?");
 if (ok) {
   alert("Davam edilir...") ;

 } else {
   alert("Legv edildi")
 } */


 var question = "Zimbabvenin paytaxti haradir?";
var answer = "Harere";

// Kullanıcıya soru sorma
var user = prompt(question);


if (user !== null) {
  if (user === answer) {
    alert("Doğru cavab! Tebrikler!");
  } else {
    alert(" Yanlış cavab. Doğru cavab: " + answer);
  }
}