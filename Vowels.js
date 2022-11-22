var str;
const vowels = ["a", "e", "o", "u", "i"];

function vowelDetector(){
  str = prompt("Write something and see how many vowels in it!");
  vowelsNumber();
}

function vowelsNumber(){
  var countVowels = 0;
  for (var vowel of str.toLowerCase()) {
    if(vowels.includes(vowel)){
      countVowels++;
    }
  }
  alert(`Number of vowels in this text is ${countVowels}`);
}

// function vowelsNumber(){
//   var vowel = 'a' || 'e' || 'o' || 'u' || 'i';
//   var i = 0;
//   var countVowels = 0;
//   while(i < str.length){
//     if(str.includes('a')){
//       countVowels++;
//     }
//     i++
//   }
//   alert(`Number of vowels in this text is ${countVowels}`);
// }

// function vowelsNumber(){
//   const vowelarr = [];
//   const strarr = str.split("");
//   var x, vowel;
//   while(x < strarr.length){
//     if(vowel === "a" || vowel === "e" || vowel === "o" || vowel === "u" || vowel === "i"){
//       vowelarr.push(strarr[x]);
//     }
//     x++;
//   }
//   alert(`Number of vowels in this text is ${vowelarr.length}`);
// }

// function vowelsNumber(){
//   const vowelarr = [];
//   const strarr = str.split("");
//   for(var vowel in str){
//     if(vowel === "a" || vowel === "e" || vowel === "o" || vowel === "u" || vowel === "i"){
//       vowelarr.push(vowel);
//     }
//   }
//   alert(`Number of vowels in this text is ${vowelarr.length}`);
// }

// for(vowel in str){
//   if(vowel === "a" || vowel === "e" || vowel === "o" || vowel === "u" || vowel === "i"){
//     vowel++;
//   } 
// }