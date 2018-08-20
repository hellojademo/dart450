var gameOver = false;

var spokenVoice

$(document).ready(function() {

$(".d2").hide();
$("#d2").hide();
$(".d3").hide();
$(".d4").hide();


 $("#d1").click(function(){


        $(".d1").hide();
        $("#d1").hide();
        $(".d2").show();


});




  if (annyang) {

    var command = {


    // code used here mostly derieved from Pippin's example with addtions.
    //This section is to ensure the user says the right word in order to advance
      'I Am Great': affirm,
      'I\'m great': affirm,
      // '*everything': function (words) { console.log(words); },


    };

    // Now we've defined the command we give it to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();
  }



});



function affirm () {
  // First make sure the "game" isn't already over
  if (gameOver) {
    return;
  }

   $(".d3").show();
    $(".d2").hide();

  setTimeout(function () {
      $(".d3").hide();
      $(".d4").show();

     
       $("#d2").fadeIn(1000);
    },10000);

   
   
  // else {
  //   // If they didn't say 'something', they got it wrong, make
  //   // the page red
  //   $('body').css({
  //     'background-color': 'red'
  //   })
  // }

  gameOver = true;
}
