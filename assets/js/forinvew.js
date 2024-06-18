//$(".tech li")　は　document.querySelectorAll(".tech li")
//.on("click",function(){}) は　.addEventListner("click",function(){})

$(".inview-cont").on("inview",function(){
  $(this).addClass("app");
});