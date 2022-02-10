//1.팝업

$(".box img").click(function(){
    $("#popup").fadeIn(500);
    $(".close").click(function(){
        $("#popup").fadeOut(500);  
    })
    //반투명한 배경 클릭시 팝업 닫기
    $("#popup").click(function(){
        $(this).fadeOut(500);
    });
    $(".modal").click(function(e){
        e.stopPropagation(); //이벤트가 상위로 전파되는 현상 막기
    })
});

//2.슬라이더 - 좌우로 자동 2초간격으로 돌아가기
let imgNum=$(".top_banner li").length;; //3 li 개수 
let imgWidth=$(".top_banner li").width(); //한칸의 너비
$(".top_banner").width( imgWidth * imgNum);

setInterval(roll, 2000); //setInterval(함수,2000)
function roll(){
    $(".top_banner").animate({left: -imgWidth}, 1000, "swing", function(){
        // $(".top_banner>li").eq(0).appendTo(".top_banner"); ->기준점이 부모요소 안쪽 뒤에 추가
        // $(이동할 요소 선택).insertAfter(기준점이 형제요소); 
        $(".top_banner>li:first").insertAfter(".top_banner>li:last");
        $(".top_banner").css("left", 0)

    });
}

//3.서브메뉴 슬라이드 다운 대메뉴에 마우스 엔터하면 서브메뉴 슬라이드 다운
// $(".gnb>li").on({
//     "mouseenter": function(){
//         $(".submenu").css("transition","none")
//         $(this).children(".submenu").stop().slideDown(500);
//     },
//     "mouseleave": function(){
//         $(this).children(".submenu").stop().slideUp(500)
//     }
// })

$("header").append("<div class='bg'></div>")
$(".gnb>li").on({
    "mouseenter": function(){
        $(".bg, .submenu").stop().slideDown(500);
    },
    "mouseleave": function(){
        $(".bg, .submenu").stop().slideUp(500)
        // $(".submenu").stop().slideUp(500)
    }
});



//4.탭메뉴
//id="tab_menu>a"


$("#tab_menu>a").click(function(){
    let idx=$(this).index();
    console.log(idx);
    $(this).addClass("on").siblings("a").removeClass("on");
    $("#tab_box>.list").eq(idx).show().siblings(".list").hide();
    
});

//5.Ajax 공지사항 게시판 글 연동하기

$.ajax({
    url:"data/notice.json",
    dataType:"json",
    success:function(data){
        console.log(data)
        let list="<ul class='list'>";
        $.each(data, function(index, object){
            list +="<li>"+object.title + "<span>"+object.date +"</span>"+"</li>";
  
        });
        list +="</ul>";
        $("#tab_box").prepend(list);
    },
        error:function(){
        alert("데이터 연동 실패");
    }
})

