$(document).ready(function(){

$("#relax").hide();
$("#move").hide();


//The function which increases the word RELAX with a key press
$(document).mouseup(function() {
    $("#relax").show();
    $("#relax").animate({
      fontSize: "+=5"
    })
  })

 setTimeout(function () {
      $("#relax").hide(2000);
      
    },10000);
 
$("#remind").hide();
// "remind" is the paragraph that says keep you eyes closed!! this only appears on a keypress
$(document).keypress(function(){
       $("#remind").show();
       $("#remind").fadeTo(6000,0);
    });
//hiding the inital instruction to relax, and also hiding the second bit of dialouge
$("#d1").fadeTo(6000,0);

 setTimeout(function () {
      
      $("#d1").hide();
     
     
       
    },8000);

$("#d2").hide();
$(".d2").hide();

 setTimeout(function () {
      
      $("#d2").fadeTo(3000,1);
      $(".d2").fadeTo(3000,1);
     
       
    },25000);

//mousemove funtion
$(document).mousemove(function() {
    $("#move").show();
   $("#move").fadeTo(2000,0);
  })




//Background sound code:
var sound = new Howl({
  src: ['../audio/rain.mp3']
});

// Play returns a unique Sound ID that can be passed
// into any method on Howl to control that specific sound.
var id1 = sound.play();
// var id2 = sound.play();

// Fade out the first sound and speed up the second.
sound.fade(0, 0.8, 8000, id1);
sound.fade(0.8, 0.2, 100000, id1);

});
