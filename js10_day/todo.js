// 전역변수 등록 상단
let ltemBox = document.getElementById('item');  // 인풋
let addBtn = document.getElementById("add"); // 등록버튼
let tagUl = document.getElementById("itemList"); // ul 부착지점
let itemList = [];  // 빈배열

// 1. addList() : add버튼을 클릭하면 input 데이터 -> itemList 배열등록
addBtn.addEventListener("click", addList);

function addList() {
    let itemText = ltemBox.value;
    console.log(itemText);

    if ( itemText != "" && itemText != null  ) {
        itemList.push(itemText);  // 배열에 등록
        console.log(itemList);
        ltemBox.value = "";  // 빈문자열로 수정
        ltemBox.focus();     // input 커서가 깜밖이는 효과
    } 
    // 등록된 배열을 리스트로 출력
    showList();
}


// 2. 등록된 배열을 -> 리스트 출력
function showList() {
    let list = "";

    for ( let i = 0; i < itemList.length; i++ ){
        list += "<li>" + itemList[i] 
                       + "<span class='close' data-idx='" + i + "'> X </span>" + "</li>";
    }
    tagUl.innerHTML = list;

    // 버튼 삭제 이벤트 붙이기
    let delBtn = document.querySelectorAll(".close");  // 닫기삭제 버튼 배열

    for ( let i = 0; i < itemList.length; i++ ) {
        delBtn[i].addEventListener( "click", removeBtn );
    }
    
}

// 3. 선택한 리스트 삭제
function removeBtn() {
    let idx = this.getAttribute("data-idx");
    console.log(idx);

    itemList.splice(idx, 1);  // .splice(자를위치 인덱스번호, 자를갯수);
    console.log(itemList);

    showList();  // 편집된 배열을 새로 화면에 출력
}