function rot13(str) {

  let input = str;
 
  console.log(input);
  
  let output = "";
  
  
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // A >> N
  // B >> O
  
  let alpha13 = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  
  
  for(let i = 0; i < input.length; i++){

    let pattern = /\W/;
    
    let result = pattern.test(input[i]);
    
    if(result)
    {
      output = output.concat(input[i]);
    }
    else{
      for(let j = 0; j < 26; j++){
  
        if(input[i] === alpha[j]){  
          
          output = output.concat(alpha13[j]);   
          
        }
        else{          
          continue;
        }        
      }  
    }
  }

  console.log(output);
  
  return output;
}

rot13("SERR PBQR PNZC");

// Challenge Complete
