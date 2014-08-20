$(document).ready(function() {


   function blockMenu(Evt){//disable 右鍵menu
      // window.event 是IE才有的物件
      if(window.event){
         Evt = window.event;
         Evt.returnValue = false;//取消IE預設事件
      }else
         Evt.preventDefault();//取消DOM預設事件
   }
   document.oncontextmenu = blockMenu; 
  var rightButtonDown =false;
  var rightButtonUp =false;
  var mouse_press_timestamp=0;
$(window).mousedown(function(e){
   // Left mouse button was pressed, set flag
   if(rightButtonDown) return;
   if(e.which == 3) {
      rightButtonDown = true;
      mouse_press_timestamp = new Date().getTime();
   }
});
$(window).mouseup(function(e){
   // Left mouse button was pressed, set flag
   if(rightButtonUp) return;
   if(rightButtonDown){
      if(e.which == 3){
         var timediff = new Date().getTime() - mouse_press_timestamp;
         if(timediff < 500)
         {
               rightButtonUp = true;
               $.alert("你想做甚麼!!",function()
               {
                  rightButtonUp =false;
                  rightButtonDown = false;
               });
         }
         else
            rightButtonDown =false;

      }
   }
});

   $(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
      var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
      if( scrollt >200 ){  //判断滚动后高度超过200px,就显示
         $("#gotop").fadeIn(400); //淡出
         $(".navbar").stop().fadeTo(400, 0.2);
      }else{
         $("#gotop").fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
         $(".navbar").stop().fadeTo(400, 1);
      }
   });
   $("#gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
      $("html,body").animate({scrollTop:"0px"},200);
   });
   $(".navbar").mouseenter(function(){
      $(".navbar").fadeTo(100, 1);
   });
   $(".navbar").mouseleave(function(){
      var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
      if ( scrollt > 200) {
         $(".navbar").fadeTo(100, 0.2);
      }
   });
});
