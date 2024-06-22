
function vectorAdd(a,b){

    console.log(a.length);
    
    var len=a.lemgth,result=[];
    for ( var i = 0; i < a.length; i++ ){
        //console.log(i);
        result[i]=a[i]+b[i];
    }
    // result[0]=a[0]+b[0];
    // result[1]=a[1]+b[1];

    return result;
}

const v1 = [2, 3, 4];
const v2 = [8, 4, 5];
console.log(vectorAdd(v1, v2));