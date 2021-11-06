/**
 * Q. 変数とは?
 * A. データを保存しておくための箱
 */

const foo = document.getElementById("foo");
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;
const fooArea = fooWidth * fooHeight;

console.log(fooWidth) // 947
console.log(fooHeight) // 600
console.log(fooArea) // 595200

/**
 * Q. どうやって変数を宣言するのか？
 * A. const 変数名 = 初期値;
 *    let 変数名 = 初期値;
 *    var 変数名 = 初期値;
 */

const foo1 = 100;

let bar = 200;

var baz = 300;

/**
 * const の特徴
 * 再代入できない、再定義できない
 * 
 * letの特徴
 * 再代入できる、再定義できない
 * 
 * var の特徴
 * 再代入できる、際定義できる
 */
