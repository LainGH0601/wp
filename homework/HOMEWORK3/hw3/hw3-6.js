//https://ithelp.ithome.com.tw/m/articles/10247892
function matrixAdd(a,b){

    console.log(a.length);
    
    return a.map((sub_a, index_a) => 
        sub_a.map((i, index_sub) => i + b[index_a][index_sub])
      )
}


const v1 = [[2, 3],
            [3, 2]];
const v2 = [[1, 3],
            [4, 2]];
console.log(matrixAdd(v1, v2));