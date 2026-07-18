
onmessage=(e)=>{

let result =0;
 for (let i = 1; i < 10000000000; i++) {
       result+=i;  
     
    }

    postMessage(result);


}

