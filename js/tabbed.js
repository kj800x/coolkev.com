$(function(){

  function setActive(s){
    $(".contentdiv").removeClass("active");
    $(".triggera").removeClass("active");
    $(".triggera[href=#"+s+"]").addClass("active");
    $("#"+s).addClass("active");
  }

  $(".triggera").click(function(t){
    setActive($(t.target).attr("href").substring(1));
  });

  if (window.location.hash){
    setActive(window.location.hash.substring(1));
  }
});