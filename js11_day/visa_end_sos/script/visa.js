let gnbLi=document.querySelectorAll(".gnb>li") //대메뉴 배열
let subMenu=document.querySelectorAll(".submenu") //서브메뉴 배열
let header=document.querySelector("header");

let bg=document.createElement("div");
// let attr=document.setAttribute("class")
// attr.value="bg";

bg.setAttribute("class","bg");
header.appendChild(bg);

for (let i=0; i<gnbLi.length; i++){
    if(gnbLi[i].childElementCount > 1) {
    gnbLi[i].addEventListener("mouseenter" , function(){
        bg.style.height="50px";
        subMenu[i].style.height="50px";
    });
    gnbLi[i].addEventListener("mouseleave" , function(){
        bg.style.height="0px"
        subMenu[i].style.height="0px"
    });
    }   
}

//스크롤 애니메이션-section.on 밑줄긋는 애니 작동
window.onscroll=function(){
    let scroll=document.documentElement.scrollTop;
    console.log(scroll);
//     let hotdeal=document.getElementById("hotdeal");
//     let store=document.getElementById("store");
//     let card=document.getElementById("card");

//     if(scroll>=hotdeal.offsetTop -350){
//         hotdeal.classList.add("on")
//     }else{
//         hotdeal.classList.remove("on");
//     }


let box=document.querySelectorAll("#content > section"); //컨텐츠 박스3개 배열

for(let i=0; i<box.length; i++){
    let boxTop=box[i].offsetTop;

        if(scroll>=boxTop -350){
        box[i].classList.add("on");
        }else{
        box[i].classList.remove("on");
        }
    }


let cardList=document.querySelectorAll(".card_list>li");

for(let i=0; i<cardList.length; i++){
    if(scroll>box[2].offsetTop -500){
        cardList[i].classList.add("on");
    }else{
        cardList[i].classList.remove("on");
    }
}


    let top=document.querySelector(".top");
    if(scroll>=400){
        top.style.display="block"
    }else{
        top.style.display="none";
    }   
    top.onclick=function(e){
        e.preventDefault();
        document.documentElement.scrollTop="0px"
    }
}