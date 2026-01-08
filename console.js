prompt("What is your name");
prompt("What is their name");
var loveScore = Math.random() * 100 ;
loveScore = Math.floor(loveScore) + 1;

if (loveScore === 100) 
{alert("Your lovescore is " + loveScore + "%. Wow! You are a perfect match."); }

if (loveScore > 70 ) 
{alert("Your lovescore is " + loveScore + "%. Aww! You are toast to their Chai "); }

if (loveScore >= 30 && loveScore <= 70 ) 
{alert("Your lovescore is " + loveScore + "%. You are like Bread and Jam"); }

if (loveScore < 30) 
{alert("Your lovescore is " + loveScore + "%. You go together like oil ans water "); }
    
else (loveScore === 0)
{
alert("try again");
}



// BMI CALCULATOR AND IF ELSE

function bmiCalculator (weight, height) {
    var bmi= weight / Math.pow(height, 2);
    bmi = Math.round(bmi * 10) / 10;
    if(bmi < 18.5){
        return ("Your BMI is " +bmi+ " , so you are underweight");
    }
     if(bmi >= 18.5 && bmi <= 24.9)
     {return ("Your BMI is " +bmi+ ", so you have a normal weight");
     }
     if(bmi > 24.9)
       {return ("Your BMI is " +bmi+ ", so you are overweight");
        }
}
    bmiCalculator (65, 1.8) ;
   



    //LEAP YEAR ?

function isitaLeapYear (year){
    if(year % 4 === 0 && year % 100 === 0 && year % 400 ===0 ){ 
                return "It is a leap Year."  
    }    
     if(year % 4 === 0 && year % 100 !== 0 ){
        return "It is a leap Year."
    } 
        else{
            return "It is not a leap Year."
        }
}
   isitaLeapYear (1989);



   // ARRAY
var guestList = [ "Palak", "vikas", "lakshya", "pranav"];
lowercasedguestList = guestList.map(function(item){
    return item.toLowerCase();
})
var guestName = prompt("what's your name?");
guestName = guestName.toLowerCase();
lowercasedguestList.includes(guestName);


// // INSERT INTO ARRAY

guestList.push("harsh");
console.log(guestList);



function whosPaying(names) {

   var randomIndex = Math.floor(Math.random() * names.length ) ;
   var whowillPay = names[randomIndex];
   return whowillPay + " " + "is going to pay today!";

}


// FIZZBUZZ QUESTION 
var output= [];
var count = 1;
 function fizzBuzz (){
      
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
     }
    else if(count % 3 === 0){
        output.push("fizz");  
     }
     else if(count % 5 === 0){
        output.push("buzz");
 }
     else{
         output.push(count);
     }
     count++ ;
     console.log(output);
 }
         
    


// FIZZBUZZ using loops

var output= [];
var count = 1;
 function fizzBuzz (){
 while(count <= 100){
      if(count % 3 === 0){
        output.push("fizz");  
     }
     else if(count % 5 === 0){
        output.push("buzz");
 }
     else if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
     }

     else{
         output.push(count);
     }
     count++ ;}
     console.log(output);
 }


// BEER BOTTLE LYRICS
var count = 99;
function beer(){
   while(count>=0){
      if(count > 1){
         console.log(count +" bottles of beer on the wall, "+ count + " bottles of beer."+
                  "Take one down and pass it around, " + (count-1) +" bottles of beer left on the wall.");
      }
      else if(count===0){
         console.log("No more bottles of beer on the wall, no more bottles of beer."+
                  "Go to store and buy some more, " + count + " bottles of beer left on the wall.");
      }
      else {console.log(count +" bottles of beer on the wall, "+ count + " bottles of beer."+
                  "Take one down and pass it around, no more bottles of beer left on the wall.");
      }
      
      count-- ;
   }
}


// MAM SOLUTION
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


// FIZZBUZZ using for loop

 var output= [];
 function fizzBuzz (){
 for (var count = 1; count< 101 ; count++ )
 {
      if(count % 3 === 0){
        output.push("fizz");  
     }
     else if(count % 5 === 0){
        output.push("buzz");
 }
     else if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz");
     }

     else{
         output.push(count);
     }
   }
     console.log(output);
 }


// FIBBONACCU FUNCTION


function fibonacciGenerator(n) {
  let series = [0, 1];

  // Generate Fibonacci series up to n terms
  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  let result = series.slice(0, n); // handle case when n = 1
  return result;
}

let output = fibonacciGenerator(9);

console.log(output);


// OBJECTS IN JAVASCRIPT
var houseKeeper={
  name: "Diana",
  age: 23,
  yearsOfExperience: 3,
  ID :101,
};

// CONSTRUCTOR FUNCTION IN JAVASCRIPT
function HouseKeeper (name,age,yearsOfExperience,ID){
  this.name = name;
  this.age= age;
  this.yearsOfExperience= yearsOfExperience;
  this.ID =  ID;
};

// INITIALIZE OBJECTS
var houseKeeper1 = new HouseKeeper("jimmy",23,4,102);
var houseKeeper2 = new HouseKeeper("timmy",23,1,103);
var houseKeeper3 = new HouseKeeper("shimmy",24,2,104);
var houseKeeper4 = new HouseKeeper("pummy",29,5,105);