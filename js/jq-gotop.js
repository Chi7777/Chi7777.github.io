// 超简洁代码 jQuery goTop(返回顶部)
$(function() {
  // var $goTop = $('<div id="goTop" style="border-radius:50%;background:#333;color:#fff;text-align:center;padding:7px 13px;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;"><i style="font-size:24px" class="fa">&#xf106;</i></div>').appendTo('body');
var $goTop = $('<div id="goTop" style="width:137px;height:178px;background:url(images/gotop.png);background-size:cover;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;"></div>').appendTo('body');
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $goTop.fadeIn();
    } else {
      $goTop.fadeOut();
    }
  });

  $goTop.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 200);
  });
});