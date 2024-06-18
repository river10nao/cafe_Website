$(".slick01").slick({
  autoplay: true,　
  fade: true,
  arrows: false,
  // dots: true,
  pauseOnHover: false,
  autoplaySpeed: 2000,
});

// $(".slick02").slick({
//   slidesToshow: 5,
//   autoplay: true,
//   // fade: true,
//   autoplaySpeed: 0,
//   speed: 2500,
//   cssEase: "linear",
//   centerMode: true,
//   // arrows: false,
//   // dots: true,
//   pauseOnHover: false,
//   pauseOnFocus: false,
// });


// ヘッダーのナビゲーション固定

let ws = $(this).scrollTop();　　　　　　　　　// 宣言先に入れる
let offsetNav = $("h1").outerHeight();　　　　　

$(window).on("load scroll",function(){
  ws = $(this).scrollTop();
  offsetNav = $("h1").outerHeight();
  //console.log(ws,offsetNav);
  if(ws > offsetNav){
    $("body").addClass("nav-fix");
  }else{
    ws = $(this).scrollTop();
    offsetNav = $(".fixed").offset().top;
    $("body").removeClass("nav-fix");
  }
});

