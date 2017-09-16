$(document).ready(function () {
  $( "#menublock" ).click(function(){
    if ( $( "#navmenu" ).is( ":hidden" ) ) {
      $( "#navmenu" ).slideDown(200);
    } else {
      $( "#navmenu" ).slideUp(200);
    }
  });
});
