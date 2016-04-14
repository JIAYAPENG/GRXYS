$(function(){
	// $('.dh-sm-right a').click(function(){

	// 	$('.ycdh').css({'display':'block'})

	// })
	var flag=true;
	$('.dh-sm-right').click(function(){
		if(flag){
			$('.ycdh').show();
			flag=false;

		}else{
			$('.ycdh').hide();
			flag=true;
		}
		
	})
	$('.ycdh').mouseleave(function(){
		flag=true;
		$(this).css({'display':'none'})
	})
	var flag=true;
	$(window).resize(function(){
		if($(window).width()>970){
			$('.ycdh').hide();
		}
		// console.log($(window).width())
		// console.log(12121)
		// alert()
	 // if(){}
	});
	// $('.dh-sm-right a').click(function(){

	// 	$('.ycdh').css({'display':'none'})
	// })
})