$(document).ready(function() {

$(".login-module").css( "display", "none" );
    
$(".button-login").click(function(){
       $(".login-module").fadeToggle("fast");
    });
    
var mouse_is_inside = false;

$(document).ready(function()
{
    $('.login-module').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside) $('.login-module').hide();
    });
});
    
});

/**** Skriv om taget från mitt youtube iframe resizer ****/
// Responsiv graph

// hitta alla grafer // byt till class? Kommer vi har fler grafer?
var $allVideos = $("iframe[src^='http://10.50.0.21:5601/app/kibana']"),

    // Containern skall få plats i // probably double-content i detta fallet
    $fluidEl = $(".content-wrap");

// Hämta aspect ration
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // Tar bort height o width från dem
    .removeAttr('height')
    .removeAttr('width');

});

// När vi resizar körs denna funktionen
$(window).resize(function() {
    console.log("Window is being resized and resize function is running");
  var newWidth = $fluidEl.width();
    console.log(newWidth);
  // Resiza alla videos
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kör när vi resizar
}).resize();


// SCRIPT CHANGE BG COL OF LOGIN

// find the height of the header

// Find a breakpoint for when the login-module css needs to change i.e something like header.length - login-module.length

// Function for the color change

//When user enters that breakpoint again this time header.length + login-module.length from the top change the BG to transparent again




