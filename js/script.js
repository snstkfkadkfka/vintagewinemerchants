$("header .search, .r_menu, .l_menu ul li:not(:nth-child(2)),footer,.sideBox ul li:not(:nth-child(2))").click(function(){
    return false;
})


// ==============스크롤 애니메이션
$(window).scroll(function(){
    let value=$(this).scrollTop();
    console.log(value);
  
   
    if(value>50){
        $("header").addClass("on")
    }
     else{ $("header").removeClass("on")}

   
    if(value>200){
        $(".text1 p,.text2 p").css({opacity:"1"})
    }
    else{ $(".text1 p,.text2 p").css({opacity:"0"})}

    if(value>2397){
        $(".vanner ul li").css({transform: "translateY(0px)",opacity:"1"})
    }
    else{ $(".vanner ul li").css({transform: "translateY(100px)",opacity:"0"})}

    })
    $("header .search .pp").click(function(){
        $("#SEARCH").show()
    })
    $("#SEARCH>button").click(function(){
        $("#SEARCH").hide()
    })
        // =================사이드 메뉴창
        $("header .material-symbols-outlined").click(function(){
            $(".sideBox").addClass("on")
        })
        
        $(".sideBox .material-symbols-outlined").click(function(){
            $(".sideBox").removeClass("on")
        })
        
        // ===========슬라이드 스와이프
        
        const swiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'horizontal',
    centeredSlides: true,
    speed: 1500, // 슬라이드 전환 속도
    effect: "coverflow", // 슬라이드 효과
    slidesPerView: 'auto',
    // slideActiveClass: 'on',
    slideToClickedSlide: true,
    grabCursor: true, // 커서 변경
    effect: 'coverflow',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable : true,
        
        
      },
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        depth: 500, // 슬라이드 깊이
        stretch: -200,
        
      },
      autoplay: {
        delay: 1500, // 자동 슬라이드 딜레이
        
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView:"auto" , // 화면 크기 600px 이상에서 한 번에 보이는 슬라이드 수
          spaceBetween: 10, // 슬라이드 간격
          grabCursor: true, 
          
        },
        750: {
          slidesPerView:"auto", // 화면 크기 768px 이상에서 한 번에 보이는 슬라이드 수
          spaceBetween: 40, // 슬라이드 간격
        },
      },
     
  });
  

  $(".swiper-wrapper>li").addClass(".swiper-slide-active",function(){
      $(".swiper-wrapper .swiper-slide-active").addClass("on")
  })
  
  $(".swiper-wrapper>li").removeClass(".swiper-slide-active",function(){
      $(".swiper-wrapper .swiper-slide-active").addClass("on")
  })
  
