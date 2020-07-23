### 1. 삼항 연산자
``` js
조건 ? true이면 : false이면
```
### 2. Truthy and Falsy
: 파라미터가 null이거나 undefined 등 Falsy인 상황을 대비할 때 사용 (0," ", Not A Number)
``` js
(person === undefined || person === null)
```
: 두개가 같다.
``` js
!person
```    
 > null과 undefined는 Falsy한 값이기 때문에 !붙여서 Truthy 한 값으로 바꿔주면 조건문이 돌아간다.

### 3. 단축 평가(Short-Circuit-Evaluation) 논리 계산법
: 논리 연산자를 조금 더 유용하게 사용하는 방법
> && : 모두 true여야 true, || : 모두 false여야 false
#### && 연산자로 단축
: A&&B에서 A가 Truthy한 값이면 B가 결과값이 된다. 반면에 A가 Falsy한 값이면 결과는 A가 된다.
``` js
true && 'hello'; // hello
false && 'hello'; // false
'hello' && 'bye'; // bye
null && 'hello'; // null
undefined && 'hello'; // undefined
'' && 'hello'; // ''
0 && 'hello'; // 0
1 && 'hello'; // hello
```
#### || 연산자로 단축
: A||B에서 A가 Truthy한 값이면 A가 결과값이 된다. 반면에 A가 Falsy한 값이면 결과는 B가 된다.    

### 4. 함수의 기본 파라미터
: 함수의 파라미터의 값이 주어지지 않았을 때 기본 값을 지정해줄 수 있음.
``` js
function calculateCircleArea(r=1){
    return Math.PI * r * r;
}

const area = calculateCircleArea();
```
: 함수의 기본 파라미터 문법은 화살표 함수에서도 사용 가능!
``` js
function calculateCircleArea(r=1) => return Math.PI * r * r;
const area = calculateCircleArea();
```

### 5. 조건문 더 똑똑하게 쓰기
#### 특정 값이 여러 값 중 하나인지 확인해야할 경우
- includes 함수 사용
``` js
function isAnimal(name){
    const animals = ["고양이", "개", "토끼", "너구리"];
    return animals.includes(name);
}

console.log(isAnimal("개")); // true
```
: isanimals 배열 선언하는 것 생략하고 화살표 함수로 작성 가능!    
``` js
const isAnimal = name => ["고양이","개"];
```

#### 값에 따라 다른 결과물을 반환해야할때
``` js
function getSound(animal){
    const sounds = {
        개: "왈!",
        고양이: "냥!"
    };
    return sounds[animal] || "모얌..?";
}
```
: 값에 따라 실행해야 하는 코드 구문이 다를경우엔..?\
~> 객체에 함수를 넣으면 된다.
``` js
function getSound(animal){
    const tasks = {
        개(){
            console.log("왈!");
        },
        고양이(){
            console.log("냥!");
        }
    };
    if(!tasks[animal]){
        console.log("모얌..?");
        reutrn;
    }
    tasks[animal]();
}

getSound("개");
```
### 6. 비구조화 할당(구조분해) 문법
: 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언가능.

#### 비구조화 할당시 기본값 설정
- 함수에서
``` js
const object = {a: 1};
    
function print({a,b = 2}){
    console.log(a);
    console.log(b);
}
print(object);
```
- 객체에서
``` js
const object = {a: 1};

const {a,b = 2} = object;
console.log(a);
console.log(b);
```

#### 비구조화 할당시 이름 바꾸기
``` js
const animal = {
    name: "앵두",
    type: "개"
};

const nickname = animal.name;
console.log(nickname);
```
> 이름이 다르다구 name이 아니라 nickname이라구 ... 어쩌지?

: ```:```문자를 사용해서 이름 바꿀 수 있습니다.
``` js
const animal = {
    name: "앵두",
    type: "개"
};

const {name: nickname} = animal
console.log(nickname);
```
> animal 객체 안에 있는 name을 nickname이라고 선언하겠다!

#### 배열 비구조화 할당
: 객체에서만 할 수 있는게 아니라9~
``` js
const array = [1,2];
const [one, two] = array;

console.log(one);
console.log(two);
```
- 기본값 지정도 가능.
``` js
const [one, two = 2] = array;
```
#### 깊은 값 비구조화 할당
: 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
- 비구조화 할당 문법을 두번 사용
``` js
const deepObject = {
    state:{
        information:{
            name: "hyunbin",
            languages: ["korean","english","chinese"]
        }
    },
    value: 5
};

const {name, languages} = deepObject.state.information;
const {value} = deepObject;

const extracted = {
    name, languages, value
        // name: name, languages: languages, value: value
}

console.log(extracted);
```
- 한번에 모두 추출하는 방법(이거쓰겠지 뭐,,,)
``` js
const{
    state:{
        information:{name, languages}
    },
    value
} = deepObject;

const extracted = { name, languages, value};

console.log(extracted);
```
### 7. spread와 rest
#### spread
: 객체 혹은 배열을 펼칠 수 있음.
> 핵심 : 기존의 것을 건들이지 않고 새로운 객체를 만든다
``` js
const slime = {
    name = "슬라임"
};

const cuteSlime = {
    ...slime,
    attribute: "귀요밍"
};

const blueCuteSlime = {
    ...cuteSlime,
    color:  "blue"
};
```
: 배열에서도 가능하다9!
``` js
const chicken = ["뿌링클", "스노윙치즈","허니콤보"];
const anotherChicken = [...chicken, "블랙알리오"];
```
> 여러번 사용 가능

#### 함수 인자와 spread
> 파라미터랑 함수 인자랑 다르다9..
``` js
const myFunction(a){// a = 파라미터
    console.log(a); // a = 인자
}

myFunction("너무 추워진짜..."); // hello world = 인자

function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0);
}//rest 사용

const numbers = [1,2,3,4,5,6];
const result = sum(...numbers); //spread사용

console.log(result);
```

#### rest
: 객체, 배열, 함수의 파라미터에서 사용 가능.
> spread랑 비슷한데 역할이 매우 다름.
#### 객체에서의 rest
: 비구조화 할당 문법과 함께 사용
``` js
const blueCuteSlime = {
    name: "슬라임",
    attribute: "귀요밍",
    color : "blue"
};

const {color, ...cuteSlime} = blueCuteSlime;
console.log(color); //blue
console.log(cuteSlime); //color제외한 name이랑 attributee 출력
```
#### 배열에서의 rest
``` js
const numbers = [0,1,2,3];
const [one, ...rest] = numbers;

console.log(one); //0
console.log(rest); //[1,2,3]
```
> 이때 const [...rest, last] = numbers는 불가능! 앞에꺼만 된다는말인듯?!?

#### 함수 파라미터에서의 rest
: 함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 굉장히 유용 ^^
``` js
function sum(...rest){
    return rest.reduce((acc, current) => acc + current, 0); //reduce는 jsIntroduction.md 8. 보세용
}

const result = sum(1,2,3,4,5,6);
console.log(result); //21
```
##### 예제
: 완료 ㅎ.ㅎ

### 8. 자바스크립트의 Scope에 대한 이해
#### Global(전역) Scope
: 코드의 모든 범위에서 사용 가능
#### Function(함수) Scope
: 함수 안에서만 사용 가능
#### Block(블록) Scope
: if, for, switch 등 특정 블록 내부에서만 사용 가능

#### Hoisting
: 자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서 사용할 수 있는 자바스크립트의 작동 방식.
``` js
myFunction();

function myFunction(){
    console.log("hello world!);
}
```
 > const와 let은 hoisting 발생 X!!!!!!!!!!!
 
     