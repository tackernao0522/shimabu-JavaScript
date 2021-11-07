// const unfollow = function () {
//     console.log("フォローを外しました");
// }

// const cancelTweet = function () {
//     console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn) {
//     const input = window.prompt("実行しますか？")
//     // if (window.confirm("実行しますか？")) {
//     //     fn();
//     // }

//     // if (input === '実行') {
//     //     fn();
//     // }

//     fn(input);
// }

// // confirmed(function() {
// //     console.log("ツイートをキャンセルしました")
// // });

// // confirmed(function() {
// //     console.log("フォローを外しました")
// // });

// // confirmed(function () {
// //         console.log("レポジトリを削除");
// // });

// confirmed(function (input) {
//     if (input === '実行') {
//         console.log("レポジトリを削除");
//     }
// });

// const btn = document.getElementById("button");

// btn.addEventListener("click", function() {
//     console.log("フォロー解除");
// });

const foods = ["にんじん", "じゃがいも", "たまねぎ"];

foods.forEach(function (food) {
    console.log(food);
})