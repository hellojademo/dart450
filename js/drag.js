

$(document).ready(function(){

// hiding all the p tags and buttons in the beginning of the code

  $( ".draggable" ).draggable();
  $("#drag").hide();
  $("#hidec").hide();

  // $("#dialouge").hide();
  $("#collage").hide();

  // additional dialouge which will appear later
  $(".d1").hide();
  $(".d2").hide();
  $(".d3").hide();
  $("#d1").hide();
  $(".p1").hide();
  $(".talk").hide();
  // $("#d1").fadeTo(5000,1);

  $("#div2").hide();


// the first change in the dialouge
  $(".d1").fadeTo(3500,1);
  $(".p1").fadeTo(8500,1);

  setTimeout(function () {
      $(".d1").hide();
      $(".p1").hide();
    },10000);

//#d1 is the first progression button
  setTimeout(function () {
      $(".d2").show();
      $("#d1").fadeTo(4000,1);
    },10000);

  $("#d1").click(function(){


    $("#collage").fadeTo(1500,1);
    $(".d2").hide();
    $("#d1").hide();
    $(".d3").show();


  });


  // the button which brings up the collage div with the draggable elements, the dialouge is also hidden here
  //the progression button is also shown after an interval

  $("#collage").click(function(){

    setTimeout(function () {
      $("#div2").show();
    },10000);
    
    $(".talk").show();
    $("#drag").show();
    $("#hidec").show();
    $("#div1").hide();
    $(".d2").hide();
    $(".d3").show();
    $("#collage").hide();

  });

  // This hidden code was to hide the collage div if there was going to be a sort of "clean up" aspect of the game

  // $("#hidec").click(function(){


  //   $("#drag").hide();
  //   $("#hidec").hide();
  // });


//Code which makes sure that whatever photo is clicked is on top
  $("img").mousedown(function(){
    $("img").css('z-index',0);
    $(this).css("z-index",1);
  });


});
