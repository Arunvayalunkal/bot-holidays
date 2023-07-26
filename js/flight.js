//---------------flight search-----------------------------

$("#rtn-date").hide();
$("#add-rtn-date").show();		
$(".rtn-close").on("click", function (e) { 
	$("#rtn-date").hide();
	$("#add-rtn-date").show();
	$("#calendar_pop_rtn").hide();
	$("#radio-1").prop("checked",true);
	e.stopPropagation();
});	
$("#add-rtn-date").on("click", function (e) { 
	$("#rtn-date").show();
	$("#add-rtn-date").hide();
	$("#calendar_pop_rtn").show();
	$("#radio-2").prop("checked",true);
	e.stopPropagation();
});	



$("#radio-2").on("click", function () {
	$(this).prop("checked",true);
	$("#rtn-date").show();
	$("#add-rtn-date").hide();
	
	$("#rtn-col").show();
	$("#dep-col").addClass("col-lg-6");
	$("#dep-col").removeClass("col-lg-12");
	$("#date-sel-col").addClass("col-lg-3");
	$("#date-sel-col").removeClass("col-lg-2");
	$("#tclass-col").addClass("col-lg-2");
	$("#tclass-col").removeClass("col-lg-4");
	$(".but-hide").show();
	$("#multicity-1").hide();
	$("#multicity-2").hide();
	$("#multicity-3").hide();
	$("#multicity-4").hide();
});	

$("#radio-1").on("click", function () {
	$(this).prop("checked",true);
	$("#rtn-date").hide();
	$("#add-rtn-date").show();
	
	$("#rtn-col").show();
	$("#dep-col").addClass("col-lg-6");
	$("#dep-col").removeClass("col-lg-12");
	$("#date-sel-col").addClass("col-lg-3");
	$("#date-sel-col").removeClass("col-lg-2");
	$("#tclass-col").addClass("col-lg-2");
	$("#tclass-col").removeClass("col-lg-4");
	$(".but-hide").show();
	$("#multicity-1").hide();
	$("#multicity-2").hide();
	$("#multicity-3").hide();
	$("#multicity-4").hide();
});	


$("#multicity-1").hide();
$("#multicity-2").hide();
$("#multicity-3").hide();
$("#multicity-4").hide();

$("#radio-3").on("click", function () {
	$(this).prop("checked",true);
	$("#rtn-col").hide();
	$("#dep-col").removeClass("col-lg-6");
	$("#dep-col").addClass("col-lg-12");
	$("#date-sel-col").removeClass("col-lg-3");
	$("#date-sel-col").addClass("col-lg-2");
	$("#tclass-col").removeClass("col-lg-2");
	$("#tclass-col").addClass("col-lg-4");
	$(".but-hide").hide();
	$("#multicity-1").show();
	$(".swap-icon").hide();
	$("#add-mcity-1").show();
});	

$("#add-mcity-1").on("click", function () {
	$("#multicity-2").show();
	$(this).hide();
	$("#remove-mcity-1").show();
	$("#remove-mcity-1-col").attr("style", "display: flex !important");
});

$("#remove-mcity-1").on("click", function () {
	$("#multicity-2").hide();
	$("#add-mcity-1").show();
	$("#add-mcity-2").show();
});	

$("#add-mcity-2").on("click", function () {
	$("#multicity-3").show();
	$("#remove-mcity-1").hide();
	$("#remove-mcity-1-col").attr("style", "display: none !important");
	$(this).hide();
	
});

$("#remove-mcity-2").on("click", function () {
	$("#multicity-3").hide();
	$("#add-mcity-2").show();
	$("#remove-mcity-1-col").attr("style", "display: flex !important");
	$("#remove-mcity-1").show();
	
});	

$("#add-mcity-3").on("click", function () {
	$("#multicity-4").show();
	$("#remove-mcity-2").hide();
	$("#remove-mcity-2-col").attr("style", "display: none !important");
	$(this).hide();
	$("#add-mcity-4").hide();
});

$("#remove-mcity-3").on("click", function () {
	$("#multicity-4").hide();
	$("#add-mcity-3").show();
	$("#remove-mcity-2-col").attr("style", "display: flex !important");
	$("#remove-mcity-2").show();
	
});	
	//multi city script
	
	
	
	 var $sec = $("[id^='mc_']").slice(1); // Get all but first 
	$( ".multi-add-but" ).click(function() {
		$sec.find("multinew-box").first().removeClass("hidden");
	});

//add remove button
	jQuery(function ($) {
	
		var $sec = $("[id^='mc_']").slice(1); 
	
		$sec.filter(":visible").last().addClass("hidden");
	   
			$('.multi-add-but').click(function(){
				$sec.filter(":hidden").first().show().removeClass("hidden");
				$( ".multi-remove-but" ).show();
			});
			
			$('.multi-remove-but').click(function(){
    			$sec.filter(":visible").last().addClass("hidden");
  			});
   
	});


//---------------from destination script-----------------
	$("#dep_pop").hide();
	$("#dep_row").on("click", function (e) {
		$("#dep_pop").show("fast", function () {
			$("#departinput").focus();
		});
		$("#arv_pop").hide();
		$("#calendar_pop_dep").hide();
		$("#calendar_pop_rtn").hide();
		$("#trav_pop").hide();
		e.stopPropagation(); 
		
		
	});

$("#dep_pop").click(function(e){
  e.stopPropagation(); 
});

$(document).click(function(){
    $("#dep_pop").hide("fast");
});

  $("#departinput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#departDropdown li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
	
  });
  



	$("li[name=dep]").on("click", function () { 
		$("#dep_pop").hide();
		var a = $(this).data("index"); 
		$('#dep-dest-head').text(a);
		$('#dep-dest').text(a);
		
		var b =  $(this).children('span').text();
		$('#dep-airport').html( b );
		
		$("#arv_pop").show();
		
	});


//-------------------------------------------- Arrival airport script------------------------------------
	$("#arv_pop").hide();
	$("#arv_row").on("click", function (e) { 
		$("#arv_pop").show("fast", function () {
			$("#arvinput").focus();
		});
		$("#dep_pop").hide();
		$("#calendar_pop_dep").hide();
		$("#calendar_pop_rtn").hide();
		$("#trav_pop").hide();
		e.stopPropagation();
		
		
	});

$("#arv_pop").click(function(e){
  e.stopPropagation(); 
  
});

$(document).click(function(){
    $("#arv_pop").hide("fast");
});

$(document).ready(function(){
  $("#arvinput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#arvDropdown li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
	
	$("li[name=arv]").on("click", function () { 
		$("#arv_pop").hide();
		var ara = $(this).data("index"); 
		$('#arv-dest-head').text(ara);
		$('#arv-dest').text(ara);
		
		var arb =  $(this).children('span').text();
		$( '#arv-airport' ).html( arb );
		
		$("#calendar_pop_dep").show();
		
	});


//-----------------------------------------------Calendar flight script---------------------------------------------
$("#calendar_pop_dep").hide();
$("#calendar_pop_rtn").hide();
$("#dep-date").on("click", function (e) { 
$("#calendar_pop_dep").show();
$("#calendar_pop_rtn").hide();
$("#dep_pop").hide();
$("#arv_pop").hide();
$("#trav_pop").hide();
e.stopPropagation();


	});
	
$(document).click(function(){
    $("#calendar_pop_dep").hide();
});

$("#rtn-date").on("click", function (e) { 
$("#calendar_pop_rtn").show();
$("#calendar_pop_dep").hide();
$("#dep_pop").hide();
$("#arv_pop").hide();
$("#trav_pop").hide();
e.stopPropagation();
	});	

$(document).click(function(){
    $("#calendar_pop_rtn").hide();
});



//calendar hotel script	
$("#chkin-date").on("click", function () { 
$("#calendar_pop").show();
	});
$("#chkout-date").on("click", function () { 
$("#calendar_pop").show();
	});

//get the current date/month/year
    var todaysDate  = new Date();
	
    var tDate = ("0" + (todaysDate .getDate()+1)).slice(-2);

	var tmonths = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
               "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

	var tMonthName = tmonths[todaysDate.getMonth()];
	
	var cyear =  todaysDate.getFullYear();
	var getTwodigitcYear = cyear.toString().substring(2);
	
	var cweekday=new Array(7);
				cweekday[0]="Sunday";
				cweekday[1]="Monday";
				cweekday[2]="Tuesday";
				cweekday[3]="Wednesday";
				cweekday[4]="Thursday";
				cweekday[5]="Friday";
				cweekday[6]="Saturday";
				
				var cdayOfWeek = cweekday[(todaysDate.getUTCDay()+1)+1];
    //set the input value
    $('#dDate').html(tDate); 
	$("#dMonth").html(tMonthName);
	$("#dyear").html(getTwodigitcYear);
	$("#dname").html(cdayOfWeek);
	
	$('#aDate').html(tDate); 
	$("#aMonth").html(tMonthName);
	$("#ayear").html(getTwodigitcYear);
	$("#aname").html(cdayOfWeek);
   

	$(".datepicker1").datepicker({
			minDate: 0,
			numberOfMonths: [12,1],
		
				onLoad: function(dateText, inst){
						var rr_dateToday = dateText.split("/");
						currentday = rr_dateToday;
						$("#dDate").html(currentday);
				},
				onSelect: function(dateText, inst) {
					
				
				$("#calendar_pop_dep").hide();
				
				
				
				var rr_dateText = dateText.split("/");
				
				
				startday = rr_dateText[1];
				
				
				
				var months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
               "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

var selectedMonthName = months[$(".datepicker1").datepicker('getDate').getMonth()];


				var weekday=new Array(7);
				weekday[0]="Sunday";
				weekday[1]="Monday";
				weekday[2]="Tuesday";
				weekday[3]="Wednesday";
				weekday[4]="Thursday";
				weekday[5]="Friday";
				weekday[6]="Saturday";
				var date = $(this).datepicker('getDate');
				var dayOfWeek = weekday[date.getUTCDay()+1];

				var year =  date.getFullYear();
				var getTwodigitYear = year.toString().substring(2);
				
				//var dDate=$("#input1").val();
				//flight calendar fileds
				$("#dDate").html(startday);
				$("#dMonth").html(selectedMonthName);
				$("#dname").html(dayOfWeek);
				$("#dyear").html(getTwodigitYear);
				
			},
			
			
		});
		
		$(".datepicker2").datepicker({
			minDate: 0,
			numberOfMonths: [12,1],
		
				onSelect: function(dateText, inst) {
					
				
				$("#calendar_pop_rtn").hide();
				
				
				
				var rr_dateText = dateText.split("/");
				
				
				startday = rr_dateText[1];
				
				
				
				var months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", 
               "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

var selectedMonthName = months[$(".datepicker2").datepicker('getDate').getMonth()];


				var weekday=new Array(7);
				weekday[0]="Sunday";
				weekday[1]="Monday";
				weekday[2]="Tuesday";
				weekday[3]="Wednesday";
				weekday[4]="Thursday";
				weekday[5]="Friday";
				weekday[6]="Saturday";
				var date = $(this).datepicker('getDate');
				var dayOfWeek = weekday[date.getUTCDay()+1];

				var year =  date.getFullYear();
				var getTwodigitYear = year.toString().substring(2);
				
				//var dDate=$("#input1").val();
				//flight calendar fileds
				//$("#dDate").html(startday);
//				$("#dMonth").html(selectedMonthName);
//				$("#dname").html(dayOfWeek);
//				$("#dyear").html(getTwodigitYear);
				
				
				$("#aDate").html(startday);
				$("#aMonth").html(selectedMonthName);
				$("#aname").html(dayOfWeek);
				$("#ayear").html(getTwodigitYear);
				
			},
			
			
			
			
			
		});

	
	
//------------------------------------------------Traveller pop script----------------------------------	
	
	$("#trav_pop").hide();
	$("#trav-link").on("click", function (e) { 
		$("#trav_pop").show();
		$("#calendar_pop_dep").hide();
		$("#calendar_pop_rtn").hide();
		$("#dep_pop").hide();
		$("#arv_pop").hide();
		e.stopPropagation();
	});	


	
	$(function() {
		  registerEvents();
		});
		
		function registerEvents(){
		  $('.button-group .plus').on('click', function(){
			var input = $(this).closest('li').prev()
			input.val(+input.val() + 1);
			updateTravellerCount();
			return false;
		  })
		  $('.button-group .minus').on('click', function(){
			var input = $(this).closest('li').next()
			var val = +input.val() > 0 ? +input.val() - 1 : 0
			input.val(val);
			updateTravellerCount();
			return false;
		  });
		}
		
		function updateTravellerCount(){
		  var total = 0;
		  $.each($('.button-group input'), function(){
			total += +$(this).val();
		  });
		  
		 
		  $("#tTrav").html(total);
		}
		
			
		
	//-------------------------------------------------Add class script----------------------------------------	
		
		var chkval = $('input[name=class_type]:checked', '#cls-form').val();
		$("#mClass").html(chkval);
		 $('#cls-form input').on('change', function(e) {
		   var chkval = $('input[name=class_type]:checked', '#cls-form').val();
		   $("#mClass").html(chkval);
		   e.stopPropagation();
		});
		
		
	
 //-------------------------------------------------Prefered airline script----------------------------------------
	 	
	$(document).ready(function(){
  $("#preairinput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#preairDropdown li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});		
	
		
	$("li[name=preair]").on("click", function () { 
		
		var a = $(this).data("index"); 
		$('#pre-airline').text(a);
		//$("li.pair-active").removeClass("pair-active"); 
		$(this).toggleClass("pair-active"); 
		e.stopPropagation();
	});


 $("#done-trav-btn").on("click", function () { 
		$("#trav_pop").hide();
		});			
//---------------flight footer show hide-----------------------------

$('.inner-footer').hide();
$(window).scroll(function() {
 
    if ($(this).scrollTop()>0)
     {
        $('.inner-footer').show();
     }
    else
     {
      $('.inner-footer').hide();
     }
 });
//---------------flight list header show hide-----------------------------
/*$(window).scroll(function() {
 
    if ($(this).scrollTop()>0)
     {
        $('.inner-header').addClass('animateHeadtop');
		$('.s-result-topbar').addClass('animatesbartop');

     }
    else
     {
      $('.inner-header').removeClass('animateHeadtop');
	  $('.s-result-topbar').removeClass('animatesbartop');
	
     }
	 
 });*/
 
 //---------------flight details pop .card-row-----------------------------
 $("#flightdtl-pop").hide();
	$(".vd-link,.vd-but").on("click", function () {
	$("#flightdtl-pop").show();
	});	
	
//---------------more option pop-----------------------------
 $("#moreoption-pop").hide();
	$(".mo-link").on("click", function () {
	$("#moreoption-pop").show();
	});
	
	$(".back-arrow-fdtls").on("click", function () {
	$("#flightdtl-pop").hide();
	});

//---------------modify search-----------------------------
$(".modify-search-con").hide();
	$(".modify-search").on("click", function () {
	$(".modify-search-con").slideToggle();
	 $('html, body').animate({scrollTop: 0}, 800);
	 return false;
	
	});

//---------------filter window-----------------------------	
$(".mob-overlay").hide();
$(".filter-but").on("click", function () {
	$(".mob-overlay").show();
	$(".filter-slide").animate({"left":"0px"}, 300);
});
$(".mob-overlay, .fltr-apply-btn").on("click", function () {
	$(".mob-overlay").hide();
	$(".filter-slide").animate({"left":"-80%"}, 300);
});
/*price range slider*/

function showProducts(minPrice, maxPrice) {
    $("#flightlist .search-result-bx").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
	
}

$(function() {
    var options = {
        range: true,
        min: 0,
        max: 500,
        values: [10, 300],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#amount").val("$" + min + " - $" + max);
            showProducts(min, max);
        }
    }, min, max;

    $("#slider-range").slider(options);

    min = $("#slider-range").slider("values", 0);
    max = $("#slider-range").slider("values", 1);

    $("#amount").val("$" + min + " - $" + max);

    showProducts(min, max);
});

//plus minus collapse

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("cactive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//terms popup
$("#payaccept_pop").hide();
$("#pravacypolicy_pop").hide();
$("#guarantee_pop").hide();
$("#cvv_pop").hide();
	 
	  $("#pay-accept").on("click", function () { 
		$("#payaccept_pop").show();
		});	
		$(".pplolicy").on("click", function () { 
		$("#pravacypolicy_pop").show();
		});	
		$("#guarantee").on("click", function () { 
		$("#guarantee_pop").show();
		});	
		
		$(".cvv-link").on("click", function () { 
		$("#cvv_pop").show();
		});	
		
		 $(".com-back-arrow").on("click", function () { 
			$("#payaccept_pop").hide();
			$("#pravacypolicy_pop").hide();
			$("#guarantee_pop").hide();
			$("#cvv_pop").hide();
		});	
		
//domestic split select

$(".dom-depart").on("click", function () {
	var dprice =$(this).find('.price').text(); 	
	$('.departSelect').removeClass('departSelect');
    $(this).find('.split-select').addClass('departSelect');
    $('.price-display').show();	
	$('#depart-price').text(dprice);
	
	$.fn.addFunction();
			
});	
$(".dom-return").on("click", function () {
	var rprice =$(this).find('.price').text(); 	 
	$('.returnSelect').removeClass('returnSelect');
    $(this).find('.split-select').addClass('returnSelect');
    $('.price-display').show();	
	$('#return-price').text(rprice);
	
	$.fn.addFunction();
	
});	

$.fn.addFunction = function(){ 
    var sum = 0;
	$('.tprice').each(function()
	{
		sum += parseFloat($(this).text());
	});
	var n = sum.toString();
	document.getElementById("total-price").innerHTML = n;
 }

$(".flight-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });