$("#trav-click").click(function(e){
	  $(".traveller-pop").show();
	
    
	});
	
	$(".search-toggle li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');

    });



//modify search
$( "#list-search" ).hide();
$( "#m-but" ).click(function() {
  $( "#list-search" ).show();
  $( "#modify-search" ).hide();
  
});

$( ".mod-search-btn" ).click(function() {
  $( "#list-search" ).show();
   $( "#filterWrap" ).hide();
  $(this).addClass("red-bg-btn");
  $( ".fltr-search-btn" ).removeClass("red-bg-btn");
});

$( ".close-btn" ).click(function() {
  $( "#list-search" ).hide();
  $( "#modify-search" ).show();
   $( ".mod-search-btn" ).removeClass("red-bg-btn");
   $( ".fltr-search-btn" ).removeClass("red-bg-btn");
   if (window.matchMedia('(max-width: 450px)').matches) {
       $( "#filterWrap" ).hide();
    } 
   
  
});

$( "#return" ).hide();
$( "#depart" ).addClass('col-sm-6');
$( "#oneway" ).click(function() {
  $( "#return" ).hide();
  $( "#depart" ).addClass('col-sm-6');
  
});

$( "#roundtrip" ).click(function() {
  $( "#return" ).show();
  $( "#depart" ).removeClass('col-sm-6');
  
});
//filter mobile 

$( ".fltr-search-btn" ).click(function() {
  $( "#filterWrap" ).show();
  $( "#list-search" ).hide();
  $(this).addClass("red-bg-btn");
  $( ".mod-search-btn" ).removeClass("red-bg-btn");
  
});
//multicity

$( "#mc-2" ).hide();
$( "#mc-3" ).hide();
$( "#mc-4" ).hide();
$( "#mc-5" ).hide();

$( "#multicity" ).click(function() {
  $( "#mc-2" ).show();
});

$( "#ad-btn-2" ).click(function() {
  $( "#mc-3" ).show();
  $( "#btn-con-2" ).hide();
});




$( "#ad-btn-3" ).click(function() {
  $( "#mc-4" ).show();
  $( "#btn-con-3" ).hide();
});
$( "#rem-btn-3" ).click(function() {
	$( "#mc-3" ).hide();
  $( "#mc-4" ).hide();
  $( "#btn-con-2" ).show();
});



$( "#ad-btn-4" ).click(function() {
  $( "#mc-5" ).show();
  $( "#btn-con-4" ).hide();
});
$( "#rem-btn-4" ).click(function() {
	$( "#mc-4" ).hide();
  $( "#mc-5" ).hide();
  $( "#btn-con-3" ).show();
});


$( "#rem-btn-5" ).click(function() {
	$( "#mc-5" ).hide();
  $( "#btn-con-4" ).show();
});

$( "#roundtrip" ).click(function() {
	$( "#mc-2" ).hide();
	$( "#mc-3" ).hide();
	$( "#mc-4" ).hide();
	$( "#mc-5" ).hide();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
});

$( "#oneway" ).click(function() {
	$( "#mc-2" ).hide();
	$( "#mc-3" ).hide();
	$( "#mc-4" ).hide();
	$( "#mc-5" ).hide();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
  $( "#btn-con-2" ).show();
  $( "#btn-con-3" ).show();
  $( "#btn-con-4" ).show();
  $( "#btn-con-5" ).show();
});




