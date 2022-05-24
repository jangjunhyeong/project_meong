// * style //
document.body.style.margin='0';
document.body.style.padding='0';
document.body.style.boxSizing='borderBox';

// root, header 선언
const root = document.getElementById("root");
// console.log(root);
const header = document.querySelector("header");
// console.log(header);


// header 위치 조정
header.style.position='fixed';
header.style.top='30px';
// rotate 를 사용하여 원형의 토글메뉴를 만들어보자

/* 1. 해볼만한 시도. ratate 360' 를 target.children.length 만큼 나눠준 뒤
배열의 순서 * 나눈 값으로 하면 rotate값은 알아낼 수 있을 것만 같음
*/

const img1 = './img/fireworks.svg';
// main 선언, 크기, 위치 조절
const main = document.querySelector("main");
main.style.width='1000px';
main.style.height='500px';
main.style.backgroundColor='lightgray';
main.style.position='fixed';
main.style.top='200px';



// 토글이미지 선언

const target= document.getElementById("target");
// console.log(target);

const colorArray =["gray","darkslategray","lightgray","darkgray","dimgray","slategray","lightslategray","black"];
console.log(colorArray);

const rotateValue = ["0","45","90","135","180","225","270","315","360"];
console.log(rotateValue);
// Todo : 360을 target.children.length로 나눈다음 배열 순서 *0 해보기
// console.log(colorArray);
root.style.width='100vw';
root.style.height='100vh';
root.style.overflow='hidden';
root.style.backgroundColor='c8c8c8';
root.style.maxWidth='100%';
root.style.maxHeight='100%';
root.style.display='flex';
root.style.justifyContent='center';
root.style.alignItems='center';
target.style.width='1000px';
target.style.height='600px';
// target.style.backgroundColor='blue'
target.style.position='fixed';
target.style.top='85vh';
target.style.display='flex';
target.style.justifyContent='center';
target.style.alignItems='center'

for(let i=0; i<target.children.length; i++){
	target.children[i].style.backgroundColor='lightgray';
}


// const xValue= ["0vw","5vw","5vw","5vw","0vw","-5vw","-5vw","-5vw"];
// const yValue= ["5vw","0vw","-5vw","-5vw","-5vw","0vw","5vw","5vw"];
const a1 = '100px';
const a10 = 100*3;
// const a2 = '200px';
// const a3 = '300px';
// const a4 = '400px';
// const a5 = '500px';
// const a6 = '600px';
// const a7 = '700px';
// const a8 = '800px';
// const a9 = '900px';

// const xValue= ['450px','600px','650px','600px','450px','300px','250px','300px'];
// const yValue= ['0px','55px','200px','345px','400px','345px','200px','55px'];
// offset이 4분면이 아니라 왼쪽 상단부터 시작하기 때문에 좌표를 다르게 접근했어야 했다.
// 수를 하나의 변수로 계산한 뒤 x 좌표값의 최소 vw let =(a);
// 														y 좌표값의 최소 vw let =(b);
// 좌표 이동 범위는 똑같이 vw 여야한다.
// 똑같으면 a=b 해도 상관없을듯!


// const imgArr = ['./img/fireworks.svg','./img/bonfire.svg','./img/egg.svg',
// './img/fish.svg','./img/won.svg','img/street_lamp.svg','img/cat2.svg',
// 'img/tang.svg'];
// console.log(imgArr[0]);
// fireworks 찍힘
// console.log(typeof imgArr[0]);
// string?
// 이렇게는 안되는듯! 이미지 파일을 불러오는 함수를 만들어줘야 할듯

console.dir(target.children);

//크기와 모양제어
for(let index=0; index<colorArray.length; index++){
	target.children[index].style.width='100px';
	target.children[index].style.height='70px';
	target.children[index].style.position='absolute';
	target.children[index].style.left=xValue[index];
	target.children[index].style.top=yValue[index];
	target.children[index].style.transform=`rotate(${rotateValue[index]}deg)`;
	target.children[index].style.backgroundColor=colorArray[index];
	// console.log(target.children);
	
}

// 일반적인 html 상에서 이미지 불러오기 방식은 이런데...
/* <img src="" width="100%" height="100%" alt=""> */
//


// position 값 제어하기

// for(let index2=0; index2<xValue.length; index2++){
	// 	console.log(index2);
	// 	target.children[index2].style.position='absolute';
	// 	target.children[index2].style.left=`${xValue[index2]}vw`;
	// 	target.children[index2].style.top=`${yValue[index2]}vw`;
	// }
	
	
	Array.from(target.children);
	// console.log(target.children);
	const targetChildren =document.getElementById("target").children;
	// console.log(targetChildren);
	Array.from(targetChildren);
	console.log(Array.from(targetChildren));
	console.log(targetChildren);
	console.dir(targetChildren);
	

	
	const ABC =document.getElementById("A");
	console.log(ABC);
	const imgList = Array.from(targetChildren);
	
	
	// ABC.addEventListener("click", function(){
	// 	imgList.pop();
	// 	console.log(imgList);
	// 	// 여기까지 성공을 했고,
	// 	// li가 줄어드는 콘솔까지는 찍는 걸 확인했다.
	// 	// 
		
	// })
	// 버튼 없애고 휠로 넘어가는 과정
	root.addEventListener("wheel",function(){
		const a = imgList.pop();
		imgList.unshift(a);
		// targetChildren.pop();
		//안됨
		// console.log(targetChildren);
		// 얘는 안 줄고
		console.log(imgList);
		console.log(unshift(a));
		// 얘는 줄고
	})
	// 이렇게 되면 li 태그의 위치도 다 바뀔 것 같은데.
	// img를 배열로 바꿔보든지 해보고,
	// 휠 슬라이드가 안되면 일단 다른 방식으로라도 만들어보자!



	// code review
	// 1. x,y 축의 4분면 그래프가 아닌 offset 개념으로 생각했어야 했다.
	//  - 접근은 좋았음
	
	// 2. rotate 값을 배열로 잘 써야겠다.
	// rotate를 length로 나누는 접근도 괜찮았던 거 같음
	
// 3. for문과 배열을 통해 한번에 이동시킬 수 있었다.

// 4. ul>li tag를 써서 이미지를 넣고 제어할 수 있다.

// 5. 어차피 gif를 넣을거니까

// 6. 오늘 예제인 슬라이드를 이용하면 활용할 수 있다.
// 문제는 텍스트 슬라이드 같은 경우는
// 

