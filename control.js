
// root, header 선언
const root = document.getElementById("root");
// console.log(root);
const header = document.querySelector("header");
// console.log(header);


// header 위치 조정
header.style.position='fixed';
header.style.top='5vh';

// main 선언, 크기, 위치 조절
const main = document.querySelector("main");
main.style.width='50vw';
main.style.height='80vh';

const target= document.getElementById("target");
// console.log(target);

const colorArray =["gray","darkslategray","lightgray","darkgray","dimgray","slategray","lightslategray","black"];

target.style.width='1000px';
target.style.height='600px';
target.style.position='fixed';
target.style.top='60vh';
target.style.display='flex';
target.style.justifyContent='space-between';
target.style.alignItems='center'

//크기와 모양제어
for(let index=0; index<8; index++){
	target.children[index].style.width='100px';
	target.children[index].style.height='70px';
	// target.children[index].style.backgroundColor=colorArray[index];
}

// Todo