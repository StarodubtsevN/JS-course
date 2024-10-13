
// функция возвращает булевое зн-ие если второй аргумент, переданный в функцию равен последним символам первого аргумента
// function solution(str,ending){

//   const strToAToS = str.split('').reverse().join('');
//   const endingToAToS = ending.split('').reverse().join('');

//   return result = strToAToS.slice(0, ending.length) === endingToAToS ? true : false;
// };

// console.log(solution('abc', 'bc'));// true
// console.log(solution('abc', 'd'));// false

// function solution(str,ending){
// 	return str.endsWith(ending);
// }
// console.log(solution('abc', 'bc'));// true
// console.log(solution('abc', 'd'));// false


function phoneCall(min1, min2_10, min11, s) {
  //coding and coding..
  var min = 0;
  
  if(1<= min1 <=10 && 1<= min2_10 <=10 && 1<= min11 <=10 && 2 <= s<=100){
    if(s !== 0){
      s = s - min1;min += 1;
    }else {
      return Math.ceil(min);
    }  
    
    if(s !== 0){
      s = s - (min2_10 * 9);min += 9;
      }else {
      return Math.ceil(min);
    }
      
    if(s !== 0){
      s = s/min11;min += s;
     }else {
      return Math.ceil(min);
    }
    
  } else{
    return 0;
  }
  return  Math.ceil(min);
}

console.log(phoneCall(2,2,1,2));