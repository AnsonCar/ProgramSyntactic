// 輸出時間
function Time() {
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("Time").innerHTML = t;
}
let myVar = setInterval(function () { Time() }, 1000);

function NowDate() {
    let date = new Date();
    let Year = date.getFullYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    document.getElementById("Date").innerHTML = Year + "年" + Month + "月" + Day + "日";
}
NowDate();

// 小Function, For我寫方便啲
// 一个函数如果没有使用 return 语句指定返回值，就会返回一个 undefined 值。
function print(data) {
    document.write(data);
    return data;
}
function println(data) {
    document.write(data + "<br>");
    console.log(data);
    return data;

}

// forLoop
println("ForLoop");
for (let i = 0; i < 10; i++) {
    println(i);
}






