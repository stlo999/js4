/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $msg = $(".container__message");
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");

  $msg.hide();

  $btn.mouseover(
    function(){
      $(this).css("background","teal");
    }
  );

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ){
      count = 0;
      $msg.show();
      $msg.text("これ以上は減りません");
    }
    if( count > maxCount ){
      count = maxCount;
      $msg.show();
      $msg.text("これ以上は増えません");
    }
    $txt.text(count);
  })


})//end function
