 jQuery(function($) {
    $('#service').circleProgress({
	 value: 0.30,
     fill:'#42CA8B',
     animation:{
        duration: 5000,
         easing: "circleProgressEasing" 
      },
      thickness:8,
      startAngle:-1.5,
      
        
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
      });

  });