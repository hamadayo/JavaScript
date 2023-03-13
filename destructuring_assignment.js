/*====================================================================================================
分割代入
オブジェクトのプロパティの値を利用するときに毎回
object名.propertyと書くのは時間がかかる
なのでpropertyの値を一度に変数に代入して、その変数を利用する
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
=======================================================================================================*/

// オブジェクトで分割代入をする
const myProfile = {
  name: "hayato",
  age: 21,
};

const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message);

// name = myProfile.name, age = myProfile.age と同じ
const {name, age} = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 配列でも利用できる
const myProfile2 = ['はやと', 28];

const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);

// name2 = myProfile2[0], age2 = myProfile[1] と同じ
const [name2, age2] = myProfile2;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);