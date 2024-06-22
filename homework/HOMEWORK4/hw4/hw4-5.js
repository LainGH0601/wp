function countChar(str){
    var a=[]; //字元
    var b=[]; //數量
    for(let j=0;j<str.length;j++){
        
        for(let i=0;i<a.length;i++){
            
            if (str[j]===a[i]){
                // console.log(str[j],":",b[i]);
                b[i]+=1;
                break;
            }
            else if(i==a.length-1){
                
                a.push(str[j])
                b.push(1)
                break;//沒有這個break的話，i迴圈就會因為a push再跑一次造成結果多1
            }
        }
        if(a.length==0){
            a.push(str[j])
            b.push(1)
            
        }
        
    }
    for(let i=0;i<a.length;i++){
        console.log(a[i],":",b[i]);
    }
    
}

var str="aabccadeaac"
 countChar(str)