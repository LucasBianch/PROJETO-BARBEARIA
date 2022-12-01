$('#logo-button').click(function(){
  $('#logo-button').fadeOut("slow",function(){
    $("#LOG").fadeIn();
    TweenMax.from("#LOG", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#LOG", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#LOG", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#LOG", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#LOG, #forgotten-LOG, #cadastro").fadeOut(800, function(){
    $("#logo-button").fadeIn(800);
  });
});

/* Forgotten Password */
$('#forgotten').click(function(){
  $("#LOG").fadeOut(function(){
    $("#forgotten-LOG").fadeIn();
  });
});

/* novo cadastro */
$('#new').click(function(){
  $("#LOG").fadeOut(function(){
    $("#cadastro").fadeIn();
  });
});