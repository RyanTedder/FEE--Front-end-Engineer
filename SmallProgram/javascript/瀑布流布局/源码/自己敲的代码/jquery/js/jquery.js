$(function(){
	waterfall();
	var dataInt={"data":[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'}]};
	$(window).on('scroll',function(){
			if(checkScrollSlide){                               //$(...) jQuery对象
			$.each(dataInt.data,function(key,value){
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
    			$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
			});
				waterfall();
			}
	});
});

function waterfall(){
	var $boxs=$("#main>div");
	var w=$boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index, value) {
         var h=$boxs.eq(index).outerHeight();
         if(index<cols){
         	hArr[index]=h;
         }	else{
          var minH=Math.min.apply(null,hArr);
          var minHIndex=$.inArray(minH, hArr);
          $(value).css({
          	'position':'absolute',
          	'top':minH+'px',
          	'left':minHIndex*w+'px'
          });
          hArr[minHIndex]+=h;
         }	
	});

}


function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+$lastBox.outerHeight();
	var scrollTop=$(window).scrollTop();
	var cHeight=$(window).height();
	return (lastBoxDis<(scrollTop+cHeight))?true:false;

}