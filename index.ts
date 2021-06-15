 // 어떤 종류의 변수와 데이터인지 설정을 해줘야한다는 것
 const name = "glen",
     age = 31,
     gender = "male";
 const sayHi = (name, age, gender?) => {
     console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
 };
 
 sayHi(name, age, gender);
 // 만약 여기서 인자를 두개받게 못받으면 에러가 난다. 근데 js는 그런거없어! ts가 더 안정성을 준다는 것!
 sayHi(name, age);
 // gender에 붙은 ? 이 인자가 필수는 아니라는 표시

 export {};