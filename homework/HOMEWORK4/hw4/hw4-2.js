
function arrayMin(a){
    var min=a[0];
    for(let i=0;i<a.length;i++){
        if(a[i]<min){
            min=a[i];
        }
        //console.log(min);
        
    }
    return min;

}

var a=[6,2,5,9,6,3];
console.log(arrayMin(a));