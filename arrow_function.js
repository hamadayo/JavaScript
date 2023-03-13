/*===============================================
アロー関数
2つの理由によってアロー関数は導入された
1. 関数を短く書きたい
2. thisを束縛したくない(こっちのほうが大事)
https://qiita.com/10mi8o/items/2da84ab650f4caffdeea
=================================================*/

// 従来の関数の書き方
function func1(str) {
  return str;
}

// 関数を変数の中に入れる書き方もある
const func2 = function(str) {
  return str;
}

// アロー関数(変数の中に入れている)
const func3 = (str) => {
  return str;
}

//引数が1つの場合は()を省略できる
const func4 = str => {
  return str;
}

// 処理が一行の場合は{}とreturnを省略できる
const func5 = (str) => str;

// 引数が2つのアロー関数
const addNumber = (num1, num2) => {
  return num1 + num2;
};

console.log(func1("func1です"));
console.log(func2("func2です"));
console.log(func3("func3です"));
console.log(func4("func4です"));
console.log(func5("func5です"));
console.log(addNumber(10, 20));