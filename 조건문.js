//if(조건){ 코드 ;}

//다른 블록범위에서는 똑같은 이름으로 선언 가능
const a= 1;
if(ture){
    const a= 2;
    console.log('a는 2이지롱');
}
console.log('if문 밖에 a는 1이지롱');

//switch/case문:특정값이 무엇이냐에 따라 다른작업을하고싶을때 사용
const device = 'apple';
switch (device){
    case 'apple':
        console.log('사과');
        break;
    case 'melon':
        console.log('메론');
        break;
    case 'pare':
        console.log('배');
        break;
    default:
        console.log('몰라');
}
//device가 애플이면 사과 나오고 메론이면 메론 배면 배 다른거면 몰라로 나옴

