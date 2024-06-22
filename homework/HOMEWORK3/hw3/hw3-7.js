function matrixMul(a,b){

    console.log(a.length);

    // map產生陣列 index代表陣列中的第幾個元素  index_a=y index_sub=x b[y][x]
    return a.map((sub_a, index_a) => 
        sub_a.map((i, index_sub) => i=martrixMul_sub(index_a,index_sub,sub_a.length,a,b)
            )
      )
}
function martrixMul_sub(y,x,length,a,b){
    var result=0
    for ( var i = 0; i < length; i++ ){
        result+=a[y][i]*b[i][x]
        
    }
    return result;
}



const v1 = [[2, 3],
            [3, 2]];
const v2 = [[1, 3],
            [4, 2]];
console.log(matrixMul(v1, v2));
// console.log(v2[0][1]);