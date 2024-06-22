作業3
第六題參考//https://ithelp.ithome.com.tw/m/articles/10247892
第七題修改自第六題
其他為原創
複製function
  function matrixAddition(a, b){
  return a.map((sub_a, index_a) => 
    sub_a.map((i, index_sub) => i + b[index_a][index_sub])
  )
}
