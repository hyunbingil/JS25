## 1. 변수와 상수
### 변수
: 바뀔수 있는 값
``` js
let value = 1;
```
> var은 이제 쓰지 마세오 . .

### 상수
: 바뀔 수 없는 값
``` js
const a = 1;
```

### 데이터 타입
1. 숫자 (Number)
2. 문자열 (String)
3. 참/거짓 (Boolean)
4. 없음 
- null\
: 값이 없다.
``` js
const friend = null;
```

- undefined\
: 값이 설정되지 않았다.
> 변수 선언했지만 값 지정 X.
``` js
let criminal;
```

## 2. 연산자
### 산술 연산자
- +,-,*,/
- ++a, a++ : 1 더하기 직접 값, 1 더한 다음 값

### 대입 연산자
- +=, -=, *=, /=

### 논리 연산자
: Boolean형을 위한 연산자
- !(not), &&(and), ||(or)
> 연산 순서도 이 순서대로!

### 비교 연산자
: 두 값을 비교할 때 사용할 수 있음.
#### 1) 두 값이 일치하는지 확인
- ===
> ==은 타입 검사까지는 하지 않는다. (자료형 검사X)

#### 2) 두 값이 일치하지 않는지 확인
- !==
>!= 타입 검사X.

#### 3) 크고 작음
: >,<,>=,<=

### 주석
: //, /**/

### 문자열 붙이기
: +로 붙일 수 있다. (python도 되는거같은데 찾아봐야겠당)
``` js
const a = "펩시가";
const b = "짱이야";
console.log(a+b);
```

## 3. 조건문
### if 문    
``` js
if(조건){
    코드;
}
```
### if-else 문
``` js
if(조건){
    코드;
} else{
    코드;
}
```
### if-else if 문
``` js
if(조건1){
    코드;
} else if(조건2){
    코드;
} else{
    
}
```
### switch/case 문
``` js
switch(변수){
    case 변수값1:
    코드;
    break;

    case 변수값2:
    코드;
    break;

    default:
}
```
## 4. 함수
: 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능.
``` js
function add(a,b){
    return a + b; //함수의 결과물 지정 & 함수 끝!
}
```

### 화살표 함수
: function 키워드 대신에 => 문자를 사용해 함수를 구현.
``` js
const add = (a,b) => {
    return a+b;
}
console.log(add(1,2));
```
> 화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점은 화살표 함수에서 가르키는 this 와 function 에서 가르키는 this 가 서로 다르다!
>> 화살표 함수에는 this가 없음. 외부에 있는 것을 가리킴.

## 5. 객체
: 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.
``` js
const dog = {
    name: "앵두",
    age: 2
};

console.log(dog.name);
console.log(dog.age);
```
 > 키: 원하는 값 (파이썬 딕셔너리랑 비슷한듯..?)\
 > 파라미터로 string 사용하라고 하네 ``이거에 ${}이거 쓰는거 ㅎㅎ

 ### 객체 비구조화 할당
 : 객체 구조 분해라고도 한다.
 > ironMan.name 이런식으로 다 해주어야하는데 이거 사용하면 안해도 된당.
``` js
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨' 
};

function print(hero){
    const {alias, name, actor} = hero; //객체에서 값들을 추출해 새로운 상수로 선언
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
}

print(ironMan);
```
#### 파라미터 단계에서 객체 비구조화 할당
``` js
function print({alias, name, actor}){
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
}
```
### 객체 안에 함수 넣기
``` js
const dog = {
    name: "앵두",
    sound: "앙!",
    say: function say(){
        console.log(this.sound);
    }
};
dog.say();
```
 > 출력 결과 : 앙!

 : 함수가 객체안에 들어가면 this는 자신이 속해있는 객체를 가리키게 된다.\
 => 함수 선언 시 이름 없어도 괜춘.!

 <u>여기서 화살표 함수로 선언하면 작동 X.</u>

### Getter 함수와 Setter 함수
: const로 객체를 정의했어도 객체안의 값은 수정가능!\
특정 값을 바꾸려고 하거나, 특정 값을 조회하려고 할 때 이 함수들을 사용하면 원하는 코드를 실행시킬 수 O.
#### 1) Getter 함수
: 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환.
``` js
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
```
 > numbers.sum()을 하지 않고 numbers.sum을 조회했는데 함수가 실행되고 그 결과값이 출력된다.   

#### 2) Setter 함수
: 함수 앞부분에 set 키워드를 붙인다.
``` js
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```
: Setter 함수를 설정하고 나면, numbers.a = 5 이렇게 값을 설정했을 때 5 를 함수의 파라미터로 받아오게 된다.\
: 위 코드에서는 객체 안에 _a, _b 라는 숫자를 선언해주고, 이 값들을 위한 Getter 와 Setter 함수를 설정해주었다.\
=> 아까 전에는 만든 객체에서는 numbers.sum 이 조회 될 때마다 덧셈이 이루어졌었지만, 이제는 a 혹은 b 값이 바뀔 때마다 sum 값을 연산함.

## 6. 배열
: 여러개의 항목들이 들어있는 리스트와 같다.
``` js
const array = [1,2,3,4,5];
const objects = [{name: "앵두"}, {name: "애옹이"}];
```
> 객체 배열도 가능\
objects[0]; 이렇게 조회가능   

### 배열에 새 항목 추가하기
: 내장 함수 push 사용하기.
``` js
objects.push({name: "연두"});
```
### 배열의 크기 알아내기
: ```objects.length``` 이런식으로 값 알아낼 수 있음.

## 7. 반복문
: 특정 작업을 반복적으로 할 때 사용

### for
``` js
for (let i =0; i<10; i++){
    console.log(i);
}
```
``` js
for(초기 구문; 조건 구문; 변화 구문;){
    코드
}
```

#### 1) 배열과 for
``` js
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}
```
#### 2) 객체를 위한 반복문 for...in
``` js
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy)); // [Array[2], Array[2], Array[2]]
console.log(Object.keys(doggy)); // ["name", "sound", "age"]
console.log(Object.values(doggy)); // ["멍멍이", "멍멍", "2"]
```
- Object.entries\
: [[키, 값], [키, 값]] 형태의 배열로 변환
- Object.keys\
: [키, 키, 키] 형태의 배열로 변환
- Object.values\
: [값, 값, 값] 형태의 배열로 변환
> 이 함수 사용해도 되고 for...in 구문 사용해도 된당.
``` js
for(let key in 객체명){
    console.log(`${key}: ${doggy[key]}`);
}
```
### while
: 특정 조건이 참이라면 계속해서 반복하는 반복문    
``` js
let i = 0;
while (i<10){
    console.log(i);
    i++;
}
``` 
#### break와 continue
: 반복문 안에서 break와 continue를 이용해 반복문에서 벗어나거나(break) 그 다음 루프를 실행 할 수 있음(continue).

## 8. 배열 내장함수
### forEach
: for문 대체
> 함수형태의 파라미터를 전달하는 것을 콜백함수라 부름.
``` js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
```
``` js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
    console.log(hero);    
});
```
> forEach 함수의 파라미터 hero는 각 원소를 가리키게 된다.

### map(변화함수)
: 배열 안의 각 원소를 변환 할 때 사용\
ex) 각 배열 안의 원소를 제곱시킨 새로운 배열을 만들래
``` js
const array = [1,2,3];
const square = n => n*n;
const squared = array.map(squre);
console.log(squared);
```

### indexOf
: 원하는 항목이 몇번째 원소인지 찾아준다.
``` js
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
```
> 결과 : 2

### findIndex
: 배열 안에 있는 값이 객체거나 배열이면 indexOf로 찾을 수 X
``` js
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
```

### find
: findIndex랑 비슷하지만 몇번째인지 알아내는게 X ~> 찾아낸 값 자체 반환.
``` js
const todo = todos.find(todo => todo.id === 3);
console.log(todo);
```
> 출력결과 : {id: 3, text: "어쩌구", done: true}        

### filter
: 배열에서 특정 조건을 만족하는 값들만 따로 추출해 새로운 배열을 만든다.
``` js
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(taskNotDone);
```
> 출력결과 : [{id: 4, text: "저쩌구", done: flase}];

### splice
: 배열에서 특정 항목을 제거할 때 사용\
: .splice(어떤 인덱스부터 지울래, 그 인덱스부터 몇개 지울래)
``` js
const numbers = [10,20,30];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
```
### slice
: 배열을 잘라낼 때 사용\
: .slice(어디서부터 자를래, 어디까지 자를래)
``` js
const sliced = numbers.slice(0,2);
```
> 0부터 1까지만 남긴다는 뜻..! 난 맨날이게 헷갈리더라\
python에서도 비슷한거 있는데 거기서도 똑같이 앞에 0은 살아있고 뒤에 2는 잘려나간다고 생각하면 쉽다...\
=> 그러니까 총 0,1만 남는거.... 헷갈리지 말기.!

### shift와 pop
- shift\
: 첫번째 원소를 배열에서 추출
> 배열에서 해당 원소 사라짐
``` js
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.log(numbers);
```
- pop\
: 마지막 원소를 배열에서 추출(push 반대)
> 배열에서 해당 원소 사라짐
``` js
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);
```

### unshift
: shift의 반대.!\
~> 배열의 맨 앞에 새 원소 추가.
``` js
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);
```

### concat
: 여러개의 배열을 하나의 배열로 합쳐줌
``` js
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concated = arr1.concat(arr2);
```
> concated 배열 = [1,2,3,4,5,6]

### join
: 배열 안의 값들을 문자열 형태로 합쳐줌
- 배열이름.join()\
: 1,2,3,4,5
- 배열이름.join(' ')\
: 1 2 3 4 5
- 배열이름.join(', ')\
: 1, 2, 3, 4, 5
``` js
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

### reduce
: reduce 함수에는 두개의 파라미터를 전달한다. 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이고, 두번째 파라미터는 reduce 함수에서 사용 할 초기값이다.
> accumulator : 누적된 값
``` js
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);
```
``` js
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```
   

## 9. 프로토타입과 클래스
### 객체 생성자
: 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현 할 수 있게 해줌.
``` js
function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    };
}

const dog = new Animal('개','멍멍이','멍멍');
dog.say();
```
> 객체 생성자 사용 시 함수 이름 대문자, 새로운 객체 만들경우에는 new 키워드 앞에 붙이기

### 프로토타입
: 같은 객체 생성자 함수를 사용할 경우, 특정 함수 또는 값을 재사용 할 수 있음
``` js
.prototype.원하는키 = 코드
```
- 예시
``` js
function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

    Animal.prototype.say = function(){
        console.log(this.sound);
    };

const dog = new Animal('개','멍멍이','멍멍');
dog.say();    
```
### 객체 생성자 상속받기
``` js
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```
> 새로 만든 Dog 와 Cat 함수에서 Animal.call 을 호출해주고 있는데, 여기서 첫번째 인자에는 this 를 넣어주어야 하고, 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야한다.
>> 추가적으로 prototype 을 공유해야 하기 때문에 상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해주었다.

### 클래스
: 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 가능.. 상속도 훨씬 쉽게 해줌.
``` js
Class Animal{
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.sound);
    }
}
    
const dog = new Animal("개","앵두","왕!");

dog.say();
```
: 클래스 내부의 함수를 '메서드'라고 부름. 메서드 만들면 자동으로 prototype로 등록된다.

### 클래스 상속
: extends를 사용해서 상속하고 super() 함수가 상속받은 클래스의 생성자를 가리킴.
``` js
Class Dog extends Aniaml{
    constructor(name, sound){
        super('개',name,sound);
    }
}
    
const dog = new Dog("앵두", "왕!");

dog.say();
```