### DOM
: 각 태그에 대한 정보를 지니고 있는 JS객체.
> html에서 id 값을 설정해주면 JS에서 쉽게 해당 DOM을 선택할 수 있다.
#### DOM에 이벤트 설정
: on이벤트이름 값에 함수를 설정해주면 된다.
``` js
plus.onclick = ()=>{
    console.log("plus 클릭");
};
```
### 모달
: 기존의 내용을 가리고 나타나는 메세지박스 같은 형태의 UI
#### 모달 열고 닫기
: display 스타일을 사용.
- style = "display: non;" : 화면에서 숨겨짐.

