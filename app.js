var Name, Age, gender, Skip;
alert("Please enter all the required spaces");
Name = prompt("Give me your  Name");
Age = Number(prompt("Give me your Age"));
gender = prompt("Give me your Gender");
Skip = confirm("Skip welcoming Message");

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
    return prompt("Hello Mr " + Name);
    
    }
    else{
        alert("welcome");

    }
}
var myarr = []; 
 
function addTo() { 
    for(i = 0; i <= 2;i++){
   myarr.push(document.getElementById(i)); 
   }
   console.log(myarr);
} 
addTo();
  age();
Gender();