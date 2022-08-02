alert("Please enter all the required spaces");
var Name, Age, gender, Skip, Answer,
Name = prompt("Give me your  Name");
Age = Number(prompt("Give me your Age"));
gender = prompt("Give me your Gender");
Skip = prompt("DO you wante skip welcoming Message"),confirm("Skip welcoming Message");


function age() {
  if (Age <= 0 ){
    return prompt("Hello" + Name);
    }
}

function Gender() {
  if (gender === "female"){
    return prompt("Hello Ms " + Name);
    }
  else if (gender === "male"){
    return alert("Hello Mr " + Name);
    
    }
    else{
        alert("welcome");

    }
}
var myArr = [2];
function addTo() { 
    
    var size = 2; // Array size
    var questionArray = [2]
    questionArray[0] = "Do you like python";
    questionArray[1] = "Do you like html";
    questionArray[2] = "Do you like java";
    for(let i=0; i<=size; i++) 
    {
        myArr[i] = prompt( questionArray[i]);
        if (typeof prompt != "yes"||"no"){
            alert("in valid");
        }

    }
   
} 
addTo();
console.log(myArr);
 // age();
//Gender();




