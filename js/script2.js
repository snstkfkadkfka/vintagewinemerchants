$("footer,header .r_menu,header .search,header .l_menu li:not(:nth-child(2)),.contents .top,.contents .bottom, .showcase>ul>li:not(:nth-child(8)),.number,.sideBox ul li:not(:nth-child(2)) ").click(function(){
    return false;
})

// ================가격별 바
const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

// 초기 값 설정
rangeValue.textContent = numberWithCommas(rangeInput.value);

// input 값이 변경될 때마다 호출되는 함수
rangeInput.addEventListener('input', function() {
  const formattedValue = numberWithCommas(rangeInput.value);
  rangeValue.textContent = formattedValue;
  
  // 값에 따라 바의 색 변경
  const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  rangeInput.style.background = `linear-gradient(to right, #EDB9B9 ${value}%, #ffffff ${value}%)`;
});

// 숫자에 천 단위 쉼표를 붙이는 함수
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// =============콘텐츠
$(".contents .select .top ul li").click(function () {
    $(".contents .select .top ul li").removeClass("on")
    $(this).addClass("on")
    return false
})
$(".contents .select .bottom ul li").click(function () {
    $(".contents .select .bottom ul li").removeClass("on")
    $(this).addClass("on")
    return false
})

// ============검색창 팝업
$("header .search .pp").click(function () {
    $("#SEARCH").show()
})
$("#SEARCH>button").click(function () {
    $("#SEARCH").hide()
})

// ==============스크롤 애니메이션
$(window).scroll(function(){
    let value=$(this).scrollTop();
    console.log(value);
  
   
    if(value>700){
    $(".winw-titel .img").hide()
    }else{   $(".winw-titel .img").show()
    }
    })

    // =================사이드 메뉴창
    $("header .material-symbols-outlined").click(function(){
        $(".sideBox").addClass("on")
    })
    
    $(".sideBox .material-symbols-outlined").click(function(){
        $(".sideBox").removeClass("on")
    })
    