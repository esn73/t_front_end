//1 메뉴서브메뉴 다운 애니메이션 구현
let mainMenu=document.querySelectorAll(".main_menu>li") //대메뉴 li 배열
let subMenu=document.querySelectorAll(".sub_menu") //서브네뮤 ul 배열

for(let i=0; i < mainMenu.length; i++){
mainMenu[i].addEventListener("mouseenter", function(){
    console.log(i);
    this.children[1].classList.add("on")
    });
    mainMenu[i].addEventListener("mouseleave", function(){
        this.children[1].classList.remove("on")
        });
}


let sliderBox=document.querySelector(".slideBox");
let sliderList=document.querySelectorAll(".slideBox>li");


setInterval(function(){
    sliderBox.style.transition="left 1s" //왼쪽으로 -1200이동하는 애니메이션
    sliderBox.style.left="-1200px";
    setTimeout(function(){
        sliderBox.insertBefore(sliderBox.children[0], sliderBox.children[3]); //1번 이동헤서 3번자리
        sliderBox.style.transition="none"
        sliderBox.style.left="0px";
    },1000);
}, 3000);

//3 탭메뉴
let tabMenu=document.querySelectorAll(".tab_title a");
let tabCon=document.querySelectorAll(".tab_con ul")

for (let i=0; i<tabMenu.length; i++){   
    tabMenu[i].addEventListener("click", function(){
        //초기화
    
    for(let i=0; i<tabMenu.length; i++){
        tabMenu[i].classList.remove("on");
        tabCon[i].style.display="none"
}   
    this.classList.add("on")
    tabCon[i].style.display="block"
});
}


