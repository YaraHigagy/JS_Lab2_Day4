var h12, h24, pmOrAm;

function clockChange(){
  if(h24 > 0 && h24 < 12){
    h12 = h24;
    pmOrAm = "Am";
  }else if(h24 > 12 && h24 < 24){
    h12 = h24-12;
    pmOrAm = "Pm"
  }else if(h24 == 0){
    h12 = 12;
    pmOrAm = "Am"
  }else if(h24 == 12){
    h12 = 12;
    pmOrAm = "pm"
  }else{
    alert("Please enter a valid value.");
    return;
  }
  // }else if(h24 != Number(h24) || h24 != null){
  //   alert("Please enter a valid value.");
  //   return;
  // }else if(h24 === null){
  //   return;
  // }
  //return h12, pmOrAm;
  alert(`The time is ${h12} ${pmOrAm}.`);
}

function clockStyle(){
  h24 = prompt("Enter the time in 24h clock style:");
  clockChange();
  //alert(`The time is ${h12} ${pmOrAm}.`);
}