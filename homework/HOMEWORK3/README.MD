作業3
第五題參考//https://ithelp.ithome.com.tw/m/articles/10247892
其他為原創
複製function
  function matrixAddition(a, b){
  return a.map((sub_a, index_a) => 
    sub_a.map((i, index_sub) => i + b[index_a][index_sub])
  )
}
