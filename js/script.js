$(document).ready(function(){
    $(".Products-carousel").owlCarousel({
        margin:66,
        loop: true,
        autoplay: true,
        autoplayTimeout:50000,
        autoplayHoverPause:true,
        nav:true,
        dots: false,

        responsive:{ 
            0:{
                items:1
            },
            400:{
                items:1
            },
            700:{
                items:1
            },
            900:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4,
            }

        },
        navText:[
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'                        
        ]  
    });
  });
  $(document).ready(function(){
    $("#slider").owlCarousel({
        dots:false,
        loop: true,
        nav: false,
        items:1,
        autoHeight:true,
    });
  });
  $(document).ready(function(){
    $("#brands").owlCarousel({
        dots:false,
        loop: true,
        nav: false,
        responsive:{ 
            0:{
                items:1
            },
            750:{
                items:2
            },
            1200:{
                items:3
            },
            1400:{
                items:4,
            }
        }
    });
  });



$(document).ready(function() {
	$('.btn1').click(function() {
		$('.Products-carousel').removeClass('active1')
        let num = $(this).attr('data-num');
		$('.carouselChange'+num).addClass('active1');
    $( ".btn1" ).each(function( index ) {
            $(this).removeClass('active')
        });
        $(this).addClass('active');
	});
    $('.pad.nav-item').click(function() {
        $('.pad.nav-item').each(function () {
            $(this).removeClass('active')
        })  
        $(this).addClass('active')      
    })
});

