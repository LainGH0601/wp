function sumPrime(n){
    var a=0;
    for(let i=2;i<n;i++){
    if (isPrime(i)===1) a=a+i;
    }
    console.log(a);
}

function isPrime(n){
    if(n<2)return 0;
    if(n===2)return 1;
    for(let i=2;i<n;i++){
      if(n%i===0) {
          // console.log(n,"是",i,"的倍數");
          return 0;
          
      }
      if(i===n-1) {
          // console.log("是質數");
          return 1;
          
      }
    }
  
  }

  sumPrime(14);
