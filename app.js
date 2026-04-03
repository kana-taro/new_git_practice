// document.getElementById("btn").addEventListener("click", function() {
//     const results = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];
//     const random = Math.floor(Math.random() * results.length);
//     document.getElementById("result").textContent = results[random];
// })

// document.getElementByIdで、HTMLからidの要素を取得
// .addEventListener　イベント処理
// Math.random　0～1未満のランダムな少数を返す
// Math.floor　小数点以下を切り捨てて整数にする
// .textContent　テキストの書き換え

// document.getElementById("btn").addEventListener("click", omikuji);
function omikuji() {
    const results = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];
    const result = results[Math.floor(Math.random() * results.length)];
    const resultBox = document.getElementById("result");
    resultBox.classList.remove("show");
    
    resultBox.textContent = result;
    
    // setTimeout(() => {
        resultBox.classList.add("show");
        void resultBox.offsetWidth;
    // }, 50);
}