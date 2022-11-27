// 1. 배열 두배 만들기

numbers = [1,2,3,4];

// 1 정석 for문 이용.
function solution1(numbers) {
    var answer = [];
    for(var i = 0;i<numbers.length;i++){
        answer[i] = numbers[i]*2;
    }
    return answer;
}
console.log("1)",solution1(numbers));

// 2 Map 함수 이용
function solution2(numbers){
    return numbers.map(i=>i*2);
}
console.log("2)",solution2(numbers));
function solution(numbers){
    return numbers.map(i)
}

// 3 화살표 함수 이용
function solution3(numbers){
    return numbers.reduce((a,b) => 
    [...a,b*2],[]);
}
console.log("3)",solution3(numbers));