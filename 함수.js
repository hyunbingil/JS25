function add(a,b){
    return a+b;
}
const sum = add(a,b);
console.log(sum);
//함수에서 어떤값을 받아올지 정해줄때 이를 파라미터(매개변수)
//라고 한다.
//함수 내부에서 return 키워드를 사용하여 함수 결과물 지정가능
//return을 하게 되면 함수가 끝나므로 추후에 코드가 작성되면 return이 동작한다면 아래의 코드는 실행되지않는다

fucntion hello(name){
    console.log('hello,'+name+'1');

}
hello('velopert')

function hello(name){
    console.log('hello,${name}!');
}
hello('velopert');

#화살표 함수
const add = (a, b)=>{
    return a+b;
}
console.log(add(1,2));
#코드블럭 내에서 return할 경우 아래와 같이 줄일수잇음
const add = (a,b) => a+b;
console.log(add(1,2));
