function gcb(a,b){
    var c;
    for(let i=1;i<=a;i++){
        if (i>b) break;
        
        if(a%i===0 && b%i===0){
            c=i;
            // console.log(i)
        }

    }
    return c;
}

console.log(gcb(120,100))