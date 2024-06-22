function isPrime(n){
  if(n<2)return 0;
  if(n===2)return 1;
  for(let i=2;i<n;i++){
    if(n%i===0) {
        // console.log(n,"是",i,"的倍數");
        return 0;
        break;
    }
    if(i===n-1) {
        // console.log("是質數");
        return 1;
        break;
    }
  }

}

var x;
x=67;
if(isPrime(x)===0)console.log(x,"不是質數");
if(isPrime(x)===1)console.log(x,"是質數");
