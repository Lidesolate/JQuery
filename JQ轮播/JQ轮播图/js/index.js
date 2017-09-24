$(document).ready(function () {
	var timer;
	var on=$('.lunbo-box .lunbo')
	var aimg=$('.lunbo-box .lunbo .imgs a');
	var anum=$('.lunbo-box .lunbo .num li');
	var abtn=$('.lunbo-box .lunbo .btn');
	var pre=$('.lunbo-box .lunbo .left');
	var next=$('.lunbo-box .lunbo .right');
	//初始化
	var index=$('.lunbo-box .lunbo .imgs a').index();
	$('.lunbo-box .lunbo .num li').eq(0).addClass('num-active')
		.siblings().removeClass('num-active');

	function change(index){
		aimg.eq(index).fadeIn(300).siblings().css("display","none");
		anum.eq(index).addClass('num-active')
			.siblings().removeClass('num-active');
	}
	next.click(function(){
		if(index==4){
			index=0;
		}
		else{
			index++;
		}
		change(index);
	})
	pre.click(function(){
		if(index==0){
			index=4;
		}
		else{
			index--;
		}
		change(index);
	})
	anum.click(function(){
		index=$(this).index();
		change(index);
	})

	function play(){
		timer=setInterval(function(){
			next.trigger('click');
		},4000);
		abtn.css('display','none');
	}
	function stop(){
		clearInterval(timer);
		abtn.css('display','block');
	}
	on.hover(stop,play);
	abtn.hover(stop,play);
	anum.hover(stop,play);

	play();
});