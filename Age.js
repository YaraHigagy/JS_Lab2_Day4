var ageInput;

// function ageComment(){
//   if(ageInput === null){
//     return;
//   }else{
//     age();
//   }
// }

//age();
//ageComment();

function age(){
  ageInput = prompt("What is your age?");
  //ageInput = parseInt(prompt("What is your age?"));  // breakes the program into an infinite loop, when there is an else statement
  if(ageInput === null){
    return;
  }
  if(ageInput > 0){
    sTatus();
    age();
  }else{ 
    alert("Please enter a valid & positive number!");   
    age();
  }
  // }else if(ageInput <= 0 || ageInput == String(ageInput)){
  //   alert("Please enter a valid & positive number!");   
  //   age();
  // }
  return ageInput;
}

function sTatus(){
  var statusInput;

  if(ageInput >= 1  && ageInput <= 10){
    statusInput = "Child";
  }else if(ageInput >= 11  && ageInput <= 18){
    statusInput = "Teenager";
  }else if(ageInput >= 19  && ageInput < 50){
    statusInput = "GrownUp";
  }else if(ageInput >= 50  && ageInput < 120){
    statusInput = "Old";
  }else if(ageInput >= 120){
    statusInput = "... What? Are you kidding me? You are ancient!";
  }
  
  if (statusInput == "Old" || ageInput >= 120){
    alert(`You are an ${statusInput}`);
  }else{
    alert(`You are a ${statusInput}`);
  }
}


