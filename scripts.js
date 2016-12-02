$(document).ready(function(){
   
	$('.pointer').animate({ top: '+=60px'} , 1000); 
    $('.pointer').animate({ top: '-=60px'} , 1000);
	$('.pointer').animate({ top: '+=60px'} , 1000); 
    $('.pointer').animate({ top: '-=60px'} , 1000);
	$('.pointer').animate({ top: '+=60px'} , 1000); 
    $('.pointer').animate({ top: '-=60px'} , 1000);
	$('.pointer').animate({ top: '+=60px'} , 1000); 
    $('.pointer').animate({ top: '-=60px'} , 1000);
	
	$(".pointer").hover(  
          function(){  
               	$(this).animate({ top: '+=60px'} , 1000); 
				$(this).animate({ top: '-=60px'} , 1000);
          });
	

	
    window.sr = ScrollReveal();
    sr.reveal('.labels', {
        reset: true,
        delay: 400,
        distance: 0
    });
    sr.reveal('#about h2, #about a, #about p ,#quote h2, #interests h2, #contact h2, #projects h2, #projects h3, #jmagic h2, .put',{
        reset: true,
        delay: 800
    });
	
	$('.my-slider').unslider({
		autoplay: true
	});
	$('.my-demo-slider').unslider({
	delay: 8000,
	speed: 500
    });
	
    $('.content button').click(function(){
        var toAdd = $('input[name=todoItem]').val(); 
        $('.list').append('<div class="thing">' + '<li>' + toAdd + '</li>' + '</div>');
    });
    $(document).on('click', '.thing', function() {
		$(this).remove();
    });
	$('#remove').click(function(){
        $('.thing').remove(); 
        
    });
      
});