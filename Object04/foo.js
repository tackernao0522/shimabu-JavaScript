// オブジェクトリテラル
let youtuber = {
    list: {
        business: {
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() { } },
                { name: "あっちゃん", age: 37, teachHistory() { } }
            ],
            teach() { }
        },
        entertainment: {
            youtuber: [
                { name: "ヒカキン" }, { name: "はじめしゃちょー" }
            ],
            makeSmile() { return "( ´ ▽ ` )" }
        }
    },
    plan() { },
    uploadVideo() { }
}

window.console.log(); // window.は省略可能
window.alert();
let test = window.document.getElementById('app')

export default youtuber;
