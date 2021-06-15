 // 어떤 종류의 변수와 데이터인지 설정을 해줘야한다는 것
 
 const sayHi = (name:string, age:number, gender:string): string => {
     return `Hello ${name}, you are ${age}, you are a ${gender}!`
 };
 
 console.log(sayHi("Glen", 31, "male"));
 // 만약 여기서 인자를 두개받게 못받으면 에러가 난다. 근데 js는 그런거없어! ts가 더 안정성을 준다는 것!


 export {};