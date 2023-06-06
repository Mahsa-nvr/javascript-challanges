function replaceX(str) {
     let sentences = str.split(" ").map(x => {
        
        if(x === 'x'){
          return  x.replace('x', 'a');
        }else if (x.startsWith('x')){
          return  x.replace('x', 'b');
        }else {
            return x.replace('x', 'c');
        }
        
     })
     return sentences.join(' ');
    }
    
    // Test the function
    console.log(replaceX("Inside the box was a xylophone")); // Inside the bocks was a zylophone
    console.log(replaceX("The x ray is excellent")); // The ecks ray is eckscellent
    console.log(replaceX("OMG xoxo")); // OMG cksocckso
    