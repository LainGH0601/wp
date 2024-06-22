function filter(a,f){
    
    var b=[];
    
    for(let i=0;i<a.length;i++){

        if(f(a[i])){
            b.push(a[i])
            
            // console.log(b[i]);
        }
        
           
    }
    return b;
}
var c=filter([1,2,3,4], function (x) { return x%2 == 1; });

console.log(c);