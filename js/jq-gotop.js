// 超简洁代码 jQuery goTop(返回顶部)
$(function() {
  var $goTop = $('<div id="goTop" style="border-radius:50%;background:#333;color:#fff;text-align:center;padding:10px 13px 7px 13px;position:fixed;bottom:10px;right:10px;cursor:pointer;display:none;font-size:22px;"><i class="fal fa-angle-up"></i></div>').appendTo('body');

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