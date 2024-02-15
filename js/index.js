$(document).ready(function () {

  /* 메인메뉴 */
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });



// 햄버거메뉴
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".modal").slideToggle("fast");
  });




// 로그인
  $(".modal-notice").click(function(){
    $(".modal2").fadeIn();
  });

  $(".btn-close").click(function(){
    $(".modal2").fadeOut();
  });





/* 메인 컨텐츠1슬라이드  */
  let banner_w= $(".ban ul .ct1_b_t").width()+10;  //배너간 오른쪽여백이 있는 겨우 여백만큼(10px) 더해줌
  
  $(".ban ul .ct1_b_t:last").prependTo(".ban ul");
  //목록 마지막 이미지를 목록 안의 가장 앞으로 배치
  $(".ban ul").css({ left:-banner_w});
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기


  //자동으로 슬라이드 함수생성
  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul .ct1_b_t:first-child").appendTo(".ban ul"); 
			$(this).css({left:-banner_w}); 
		});
  };

  bauto = setInterval(bannerAuto,2000);

  //다음보기
  $(".ban_btn .ban_right").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".ban ul .ct1_b_t:first-child").appendTo(".ban ul"); //첫번째 이미지가 맨뒤로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
    bauto = setInterval(bannerAuto,2000);
  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
			$(".ban ul .ct1_b_t:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
			$(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
		});	
    bauto = setInterval(bannerAuto,2000);
  });

  //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
  $(".ban").hover(function(){ 
    clearInterval(bauto);
  }, function(){
    bauto = setInterval(bannerAuto,2000);
  });



// 이벤트
// MORE 버튼
  $(".more").click(function(){
    $(".more_view").show();
    $(this).hide();
});



// 자주묻는질문
/* sec6 */
$(".btn2 li").click(function(){

  $(this).addClass("active");  
  $(this).siblings().removeClass("active"); 
  
  let result = $(this).attr("data-alt");
  $(".tabContents div").removeClass("active");
  $("#"+result).addClass("active").hide().fadeIn();
});

/* 아코디언 */
$(".title").click(function(){

  $(this).siblings(".title").removeClass("on");
  $(this).toggleClass("on");/* 화살표방향이바뀜 */
  $(this).siblings(".content").stop().slideUp();
  $(this).next().stop().slideToggle();
});



});