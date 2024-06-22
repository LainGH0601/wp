function min(a,b){
    if(a>b) return b;
    else if (a<b) return a;

    else if (a===b) return b;
}

console.log(min(1,2));
console.log(min(3,10));
console.log(min(66,66));