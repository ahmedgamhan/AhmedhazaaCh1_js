function sayHello(userName ="unknown",age ="unknow"){
//    if (age===undefined){
//     age="unknown";
//    }
 
//    age=age||"unknown";

    return console.log(`welcome ${userName}    your age is ${age}`);
}

sayHello('ahmed',38);



//calc sum all parameter reset parameter ... turpple
function calc(...numbers){
let result=0;
for (let i=0;i<numbers.length;i++){
    result+=numbers[i];
}
return `result is ${result}`;
}

console.log(calc(10,20,30,40));
//
function getInfo(user ="unknown",age ="unknown",rate =0 ,show ="Yes",...skills)
{
document.write('<div>');
document.write(`<h2> welecome : ${user} </h2>`);
document.write(`<p> User age: $${age} </p>`);
document.write(`<p> Hour Rate: ${rate} </p>`);
if(show==="Yes"){
    if (skills.length>0){
        document.write(`<p> Your Skills:${skills.join("   | ") .toUpperCase()} `);
    }
    else{
        document.write(`<p> there is no Skills`);
    }
}
else{
    document.write(`<p>show stopped</p> `);
}
document.write('</div>');

}

getInfo( "ahmed hazaa",32,35,"Yes","html","css","js");

// anonymous Function

let calc2=function(num1,num2){
return num1+num2;
}

console.log(calc2(1,80));

function hello(){
    console.log("show");
}

/* ################################################################################################################
#function (element,index,arr  the same array arrayTest)
// Inline callback function
map(function (element) {  })
map(function (element, index) { })
map(function (element, index, array) {  })
map(function (element, index, array ) { }, thisArg)
index and array are Optional 
*/

//////////////////////////////////////////////////
console.log('################# map function ####################################')
var arrayTest=[1,2,3,4,5];
var newArray=[];
for (let i=0;i<arrayTest.length;i++){
    newArray.push(arrayTest[i]+arrayTest[i]);
}
console.log(newArray);


//the same idea in map function

let addMap=arrayTest.map(function (element,index,arr /* the same array arrayTest*/){
   /*
    console.log(`the current element is : ${element}`);
    console.log(`the current index is : ${index}`);
    console.log(`the current array is : ${arr}`);
    */
    return element+element;
},10 /* this agruement*/);

// the same in arrow function

 addMap=arrayTest.map( (element)=>element+element);
 console.log(addMap);
 
 function additionNum(ele){
    return ele+ele;
 }

 addMap=arrayTest.map(additionNum);
 console.log(`addMap array with callback funct : ${addMap}`);

/////////////////////////////////////////////////     

//console.log(document.getElementById("btn").onclick = hello());
//swapping case  map function
/*############################################*/
console.log('#############challange map function  ##############################');
/*
#MAP FUNCTION
-swapping case
-Invented Numbers
-IgnoresBoolean
*/
let swappingcase="AhMed";

let sw=swappingcase.split("").map(function(ele){
    return ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase();
}).join("");

console.log(sw);
//////////////////////// Invented Numbers  /////////////////////////////
let invertedNumbers=[1,-10,25,200,-80,550];
let newNumbers=invertedNumbers.map(function(ele){
    return -ele;
});
console.log(`new numbers ::: ${newNumbers}`);

let IgnoresBoolean="Ah12345me50d";

let ign=IgnoresBoolean.split("").map(function(ele){
    return isNaN(parseInt(ele))? ele: "";
}).join("");

console.log(` ${IgnoresBoolean} the new IgnoresBoolean ignore numbers :${ign }`);

/*#################################### map vs filtter #################################################################################*/
console.log('############# map function vs filter () ##############################');
let numbers=[11,20,5,2,30,25,50];

let addmap=numbers.map(function(ele){
    return ele+ele;
});
console.log(`addmap function : ${addmap}`);

// return new array from Old Array with conditions
let addFilter=numbers.filter(function(ele){
    return ele+ele;
});

console.log(`addFilter function : ${addFilter}`);

let friends=["ahmed","sam","sameh","alaa","basam","yara"];

let newFriends=friends.filter(function(ele){
    return ele.startsWith("a");
});

//  newFriends=friends.map(function(ele){
//     return ele.startsWith("a");
// });
// console.log( `newFriends are:  ${newFriends}`);

/* ************************ challange   map & filter ()**************/
//remove all words greater then 4 leter
let sentence="i love foood code Too Playing Much";
let newSent=sentence.split(" ").filter(function(ele){
    return ele.length<=4;
}).join(" ");

console.log(`new sentence is ::  ${newSent}`);
// strings + multiply

let mix="ahm13me2d";
let resultMix=mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function (ele){
return ele*ele;
}).join("");

console.log(`resultMix is : ${resultMix}`)

//******************************* reduce()********************************************* */

let removeChars=["A","@","H","@","M","E","@","@","D"];

//with join()
let newChars=removeChars.filter(function (ele){
    return !ele.startsWith("@");
}).join("");

//with reduce ()
 newChars=removeChars.filter(function (ele){
    return !ele.startsWith("@");
}).reduce(function(acc,curr){
return `${acc}${curr}`;
});


console.log(newChars);
