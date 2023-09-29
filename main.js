document.onload=function(){
    document.querySelector("h1").style.color="blue";
};
/*
***************************************************************************
let titleCard="alamed",descCard="High School",dateCard="25/10";
// let descCard="High School";

let markUp=`
<div class="card">
  <div class="child">
     <h3> ${titleCard}</h3>
      <p> ${descCard}</p>
    <span>${dateCard}</span>
     </div>
  </div>       
`;
//  function String.repeat()
document.write(markUp.repeat(4));

console.log(10**5);
let x="100";
let y=100;
console.log( +x  +y);

// number function 
console.log(100.55555.toFixed(2));
console.log(parseInt("150"));
console.log(Number("130"));
console.log (parseFloat("500.699"));
console.log(parseInt("150.656"));
console.log(Number.isInteger("1022"));
console.log(Number.isInteger(1022.50));
console.log(Number.isInteger(102));
console.log(Number.isInteger(102));

// String Function

let theText="   Ahmed  ";

console.log(theText);
console.log(theText[1]);
console.log(theText.charAt(1));
console.log(theText.length);
console.log(theText.trim());

// return M UpperCase
console.log(theText.trim().charAt(2).toUpperCase());


let tempText="ahmed web school";


console.log( tempText.indexOf("web"));

console.log( tempText.indexOf("WEB"));//-1  not found

console.log( tempText.toUpperCase().indexOf("Web".toUpperCase() ));


console.log(tempText.split());
console.log(tempText.split(""));
console.log(tempText.split(" "));

console.log(tempText.includes("web"));
console.log(tempText.includes("wrr"));

// Arrays

let myFriends=["ahmed","alasary","alhamadi",["ad","rrrr"]];
console.log(myFriends[0]);
console.log(myFriends[0][1]);
console.log(myFriends[3]);

console.log(myFriends.indexOf("ahme"));
//#######################################################################################################################
*/


// Create an array of products
var myProducts = [
  {
    name: "myProduct 1",
    title: "myTitle 1",
    price: 250,
    description: "myProducts description 1",
    image: "image1.jpg"
  },
  {
    name: "myProduct 2",
    title: "myTitle 2",
    price: 350,
    description: "myProducts description 2",
    image: "image2.jpg"
  },
  {
    name: "myProduct 3",
    title: "myTitle 3",
    price: 750,
    description: "myProducts description 3",
    image: "image3.jpg"
  }
];

/* 
//#######################################################################################################################
** function to calc total price for all products
*/
function getTotalPrice(array) {
  var totalPrice = 0;

  for (var i = 0; i < array.length; i++) {
    totalPrice += array[i].price;
  }

  return totalPrice;
}
/* 
//#######################################################################################################################
**  call function  getTotalPrice()  Calculate the total price for all  products
*/

var totalPrice = getTotalPrice(myProducts);
// console.log("Total Price for all products: " + total);
console.log("########################################################");
console.log("Total Price for all products: " + totalPrice);
console.log("########################################################");

// Function to search for objects based on partial name match
var searchResult = [];
function searchObjectsByName(partialName, array) {

  for (var i = 0; i < myProducts.length; i++) {
    if (myProducts[i].name.toLowerCase().includes(partialName.toLowerCase())) {
      searchResult.push(myProducts[i]);
    }
  }

   
  return searchResult;
}
//#######################################################################################################################
// Search for objects with a partial name match
var partialName = "2";
var p_search = searchObjectsByName(partialName, myProducts);
//console.log(`searchResult ::${p_search}`+ searchResult[0][0]);
// Output searchResult
console.log("Search Results:");
for (var i = 0; i < p_search.length; i++) {
  //console.log("########################################################################");
  console.log("Name: " + p_search[i].name);
  console.log("Title: " + p_search[i].title);
  console.log("Price: " + p_search[i].price);
  console.log("Description: " + p_search[i].description);
  console.log("Image: " + p_search[i].image);
  console.log("########################################################################");
}

//############################## function to add product to array ######################################################################################

function addProduct(p_name, p_title,p_price,p_description, p_image) {
  // Create a new product object
  const newProduct = {
    name: p_name,
    title: p_title,
    price: p_price,
    description: p_description,
    image:p_image
  };

  // Add the new product to the array
  myProducts.push(newProduct);
}

// example
addProduct("product4", "title4",3500,"description 4", "image4.jpg");
console.log(`##############Array after add ###############`);
console.log(myProducts);

// Search for objects with a partial name match
/*var searchResult = searchByName("myProduct", myProducts);
console.log(` Result Search ::: ${searchResult} ` );
*/
/*
// Accessing object properties
console.log(myProducts[0].name); // Output: myProduct 1
console.log(myProducts[1].title); // Output: Title 2
console.log(myProducts[2].price); // Output: 30
console.log(myProducts[0].description); // Output: Description 1
*/


/*
// Function to search for objects based on partial name match
function searchByName(partialName, myArray) {
  return myArray.filter(
    
    function(obj) {
    return obj.name.toLowerCase().includes(partialName.toLowerCase());
    }

  );
}
*/
























