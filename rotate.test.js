const root = document.getElementById("root");
console.log(root);


// rotate 를 사용하여 원형의 토글메뉴를 만들어보자

/* 1. 해볼만한 시도. ratate 360' 를 target.children.length 만큼 나눠준 뒤
	배열의 순서 * 나눈 값으로 하면 rotate값은 알아낼 수 있을 것만 같음

*/
const target= document.getElementById("target");
// console.log(target);

const colorArray =["gray","darkslategray","lightgray","darkgray","dimgray","slategray","lightslategray","black"];
console.log(colorArray);

const rotateValue = ["0","45","90","135","180","225","270","315","360"];
console.log(rotateValue);
// Todo : 360을 target.children.length로 나눈다음 배열 순서 *0 해보기
// console.log(colorArray);
console.dir(target.children[3]);
root.style.width='100vw';
root.style.maxWidth='100%';
root.style.maxHeight='100%';
root.style.height='100vh';
root.style.display='flex';
root.style.justifyContent='center';
root.style.alignItems='center';
target.style.width='80vw';
target.style.height='80vh';
target.style.marginTop='20vh';

target.style.position='relative';
target.style.marginLeft='30vw';

// const xValue= ["0vw","5vw","5vw","5vw","0vw","-5vw","-5vw","-5vw"];
// const yValue= ["5vw","0vw","-5vw","-5vw","-5vw","0vw","5vw","5vw"];
const xValue= ["0vw","20vw","30vw","20vw","0vw","-20vw","-30vw","-20vw"];
const yValue= ["-5vw","5vw","25vw","45vw","50vw","45vw","25vw","5vw"];
// offset이 4분면이 아니라 왼쪽 상단부터 시작하기 때문에 좌표를 다르게 접근했어야 했다.
// 수를 하나의 변수로 계산한 뒤 x 좌표값의 최소 vw let =(a);
// 														y 좌표값의 최소 vw let =(b);
															// 좌표 이동 범위는 똑같이 vw 여야한다.
															// 똑같으면 a=b 해도 상관없을듯!

//크기와 모양제어
for(let index=0; index<colorArray.length; index++){
	target.children[index].style.width='15vw';
	target.children[index].style.height='10vw';
	target.children[index].style.opacity='0.5';
	target.children[index].style.position='absolute';
	target.children[index].style.marginLeft=xValue[index];
	target.children[index].style.marginTop=yValue[index];
	// console.log(target.children);
	
	target.children[index].style.backgroundColor=colorArray[index];
	target.children[index].style.transform=`rotate(${rotateValue[index]}deg)`;
}

// position 값 제어하기

for(let index2=0; index2<xValue.length; index2++){
	console.log(index2);
	target.children[index2].style.position='absolute';
	target.children[index2].style.left=`${xValue[index2]}vw`;
	target.children[index2].style.top=`${yValue[index2]}vw`;
}


// code review
// 1. x,y 축의 4분면 그래프가 아닌 offset 개념으로 생각했어야 했다.
//  - 접근은 좋았음

// 2. rotate 값을 배열로 잘 써야겠다.
// rotate를 length로 나누는 접근도 괜찮았던 거 같음

// 3. for문과 배열을 통해 한번에 이동시킬 수 있었다.

// 4. ul>li tag를 써서 이미지를 넣고 제어할 수 있다.

// 5. 어차피 gif를 넣을거니까

// 6. 오늘 예제인 슬라이드를 이용하면 활용할 수 있다.


