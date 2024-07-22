// ============검색창 팝업
$("header .search .pp").click(function(){
  $("#SEARCH").show()
})
$("#SEARCH>button").click(function(){
  $("#SEARCH").hide()
})

// ============탭메뉴
$("section .conbox>ul>li:gt(0)").hide()
$("section .titel ul li a").click(function(){
  $("section .titel ul li a").removeClass("on")
  $(this).addClass("on")
  return false;
})
$("section .titel ul li a").click(function(){

  $("section .conbox>ul>li").hide()
  $($(this).attr("href")).show()
  return false;
})
$(".contents,section,footer,header .r_menu,header .search,header .l_menu li:not(:nth-child(2)),.sideBox ul li:not(:nth-child(2))").click(function(){
  return false;
})

   // =================사이드 메뉴창
   $("header .material-symbols-outlined").click(function(){
    $(".sideBox").addClass("on")
})

$(".sideBox .material-symbols-outlined").click(function(){
    $(".sideBox").removeClass("on")
})
