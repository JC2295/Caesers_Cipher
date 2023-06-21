function rot13(str) {

  let inputArr = str.split("");

  let outputArr = [];
  
  
  let alpha = ["A", "B", "C","D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

  // A > N
  // B > O
  
 let alpha13 = ["N", "O", "P","Q","R","S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M"];
  
  
  for(let i = 0; i < inputArr.length; i++){

    for(let j = 0; j < 26; j++){

      if(inputArr[i] === alpha[j]){

        outputArr.push(alpha13[j]);
        
      }
      else{
        
        continue;
      }
      
    }
    
  }

  let outputStr = outputArr.join("");

  console.log(outputStr);
  
  return outputStr;
}

rot13("SERR PBQR PNZC");