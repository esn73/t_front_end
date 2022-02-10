// 1. 팝업
var banner = document.querySelector(".banner .box img");
var popup = document.getElementById("popup");
var close = document.querySelector(".close");

banner.addEventListener("click", function(){
    popup.style.display = "block";
});
close.onclick = function(){
    popup.style.display = "none"; 
}

// 2. 서브메뉴 슬라이드 다운
var mainMenu = document.querySelectorAll(".gnb>li");
var subMenu = document.querySelectorAll(".gnb>li>.submenu");
console.log(subMenu);

for ( var i = 0; i < mainMenu.length; i++ ) {
    mainMenu[i].addEventListener("mouseenter", function(){

        for ( var j = 0; j < mainMenu.length; j++ ) {
            mainMenu[j].classList.remove("on");
            subMenu[j].classList.remove("on");
        }

        this.classList.add("on");
        this.children[1].classList.add("on");
    });

    mainMenu[i].addEventListener("mouseleave", function(){
        this.classList.remove("on");
        this.children[1].classList.remove("on");
    });

}

// 3. 슬라이더
var topBanner = document.querySelector(".top_banner");    // ul
var num = 0;

// setInterval(function(){
//     num++;
//     if ( num > 2 ) { num = 0; }
//     console.log(num);  // 1, 2, 0    -1200px, -2400px, 0px
//     topBanner.style.transition = "left 1s";
//     topBanner.style.left = num * -1200 + "px";
// }, 3000);

setInterval(function(){
    topBanner.style.transition = "left 1s";
    topBanner.style.left = "-1200px";
    
    // 첫번째 a자리 박스를 때다가 b 마지막 인덱스 번호
    setTimeout(function(){
        topBanner.insertBefore(topBanner.children[0], topBanner.children[3]); 
        topBanner.style.transition = "none";
        topBanner.style.left = "0px";
    }, 1000);
}, 3000);

// 4. 탭메뉴
var tabBtn = document.querySelectorAll("#tab_menu>a");  // 탭메뉴 두개
var tabCon = document.querySelectorAll("#tab_box>.list");  // 탭컨텐츠 박스 두개

for ( let i = 0; i < tabBtn.length; i++ ) {
    
    tabBtn[i].addEventListener("click", function(){
        console.log(i);  // 0, 1  ---> 2
        // 초기화 
        for( let j = 0; j < tabBtn.length; j++ ){
            tabBtn[j].classList.remove("on"); 
            tabCon[j].style.display = "none";
        }

        this.classList.add("on"); 
        tabCon[i].style.display = "block";
        // this.parentElement.nextElementSibling.children[i].style.display = "block";
       
    });
}

// tabBtn[0].addEventListener("click", function(){

//     // 초기화 
//     // for( var j = 0; j < tabBtn.length; j++ ){
//     //     tabBtn[j].classList.remove("on"); 
//     // }
//     tabBtn[1].classList.remove("on"); 
//     tabBtn[0].classList.add("on");

//     tabCon[1].style.display = "none";
//     tabCon[0].style.display = "block";
// });

// tabBtn[1].addEventListener("click", function(){

//     tabBtn[0].classList.remove("on"); 
//     tabBtn[1].classList.add("on");

//     tabCon[0].style.display = "none";
//     tabCon[1].style.display = "block";
// });