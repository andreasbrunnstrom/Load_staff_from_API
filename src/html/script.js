/* Testkod
import result from './persondata';

var test = new result();
test.name.first = "Anders";
test.name.last = "Leander";

console.log(test.name.first);
*/

// Här hade jag velad skapat en generic list som i C# <personclass> minlista.
var myList1 = [];
var myList2 = [];
var myList3 = [];
var myList4 = [];
var myList5 = [];

const url = ("https://javascript-grunder-2021.netlify.app/.netlify/functions/users");

function updateCards() {
    fetch(url)
    .then((svar) => (svar.ok ? svar.json() : Promise.reject(svar.status)))
    .then((svar) => {
        svar.results.forEach(element => {
            console.log(element);
            myList1.push(element.name.first + " " + element.name.last);
            myList2.push(element.picture.large);
            myList3.push(element.email);
            myList4.push(element.phone);
            myList5.push(element.login.username);             
        });
        // Här finns skulle man behöva göra en kompaktare metod som är generell alternativt lägga in i egen class.js.
        document.getElementById("name1").innerHTML = myList1[0];
        document.getElementById("pic1").src = myList2[0];
        var str = myList3[0];
        var result = str.link('mailto:'+myList3[0]);
        document.getElementById("mail1").innerHTML = "Telefon: "+myList4[0]+"<br>"+result;
        document.getElementById("git1").href = "https://github.com/"+myList1[0].replace(/ /g,'');
        document.getElementById("fac1").href = "https://facebook.com/"+myList1[0].replace(/ /g,'');
        document.getElementById("inst1").href = "https://www.instagram.com/"+myList1[0].replace(/ /g,'')+"/"; 
               
        document.getElementById("name2").innerHTML = myList1[1];
        document.getElementById("pic2").src = myList2[1];
        var str = myList3[1];
        var result = str.link('mailto:'+myList3[1]);
        document.getElementById("mail2").innerHTML = "Telefon: "+myList4[1]+"<br>"+result;
        document.getElementById("git2").href = "https://github.com/"+myList1[1].replace(/ /g,'');
        document.getElementById("fac2").href = "https://facebook.com/"+myList1[1].replace(/ /g,'');
        document.getElementById("inst2").href = "https://www.instagram.com/"+myList1[1].replace(/ /g,'')+"/"; 

        document.getElementById("name3").innerHTML = myList1[2];
        document.getElementById("pic3").src = myList2[2];
        var str = myList3[2];
        var result = str.link('mailto:'+myList3[2]);
        document.getElementById("mail3").innerHTML = "Telefon: "+myList4[2]+"<br>"+result+"<br>I´m Awesome!<br>Tested but try and add more text and see for yourself";
        document.getElementById("git3").href = "https://github.com/"+myList1[2].replace(/ /g,'');
        document.getElementById("fac3").href = "https://facebook.com/"+myList1[2].replace(/ /g,'');
        document.getElementById("inst3").href = "https://www.instagram.com/"+myList1[2].replace(/ /g,'')+"/"; 

        document.getElementById("name4").innerHTML = myList1[3];
        document.getElementById("pic4").src = myList2[3]; 
        var str = myList3[3];
        var result = str.link('mailto:'+myList3[3]);
        document.getElementById("mail4").innerHTML = "Telefon: "+myList4[3]+"<br>"+result;
        document.getElementById("git4").href = "https://github.com/"+myList1[3].replace(/ /g,'');
        document.getElementById("fac4").href = "https://facebook.com/"+myList1[3].replace(/ /g,'');
        document.getElementById("inst4").href = "https://www.instagram.com/"+myList1[3].replace(/ /g,'')+"/";                   
    });
};

updateCards();

document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelectorAll('a').forEach(function(el, i) {
        el.setAttribute('target', '_blank');
    });
});

const epost = document.querySelector("#exampleInputEmail1");
const button = document.querySelector("button");
const valideraEpostadress = (epost) => epost.length > 6 && epost.includes('@');
button.disabled = false;

epost.addEventListener("input", (tangent) => {
    const nuvarandeVärde = tangent.target.value;   
    if (valideraEpostadress(nuvarandeVärde)) {
      button.disabled = false;
      document.getElementById('emailform').action = "körscript.php.js.eller.vad.du.vill?";
      button.addEventListener("click" , (e) => {
        alert("Success! You will now receive our newsletter.");
    });
    } else {
        button.disabled = true;
    }
});

//Lägga till en länk om man hade haft ? Evt selecta img taggen istället så inte sociala medieknapparna krockar isådantfall.
const card = document.querySelectorAll(".card");
card.forEach(box => 
    box.addEventListener("mouseover", () => box.title = "Pointed target")
);
