5-1
複製題目的參考程式，加上高變長

5-2
複製題目的參考程式

5-3
5-2加上網路參考
https://www.lccnet.com.tw/lccnet/article/details/1932
複製
<!--建立變數儲存發生事件-->
var myparam;
<!--點選按鈕時執行-->
function mytouch() {
<!--呼叫事件執行間隔-->
myparam = setInterval(myevent, 5000);
}
<!--執行事件-->
function myevent() {
  alert("您好");//改為5-2移動程式
}
要點一下才會開始動
