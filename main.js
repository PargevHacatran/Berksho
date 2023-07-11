var time = 10000; //sec
var step = 1;

function outNum(num, elem){
    var l = document.querySelector("#" + elem);
    var t = Math.floor(time/(num/step));
    var n = 0;
    var int = setInterval(()=>{
        n = n + step
        if(n === num){
            clearInterval(int);
        }
        l.innerHTML = n;
    }, t);
}

outNum(26, "num1");
outNum(26, "num2");
outNum(26, "num3");
outNum(26, "num4");