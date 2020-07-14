$(function(){
	
	for (var i=0;i<10;i++) {
		var $particle = $('<i class="particle"/>').append('<i class="item" />');
		//변수 $particle = particle 클래스를 가진 i태그 안에 item 클래스를 가진 i태그 를 생성
		$particle.css({'animation-delay': randomFunc(5e3) + 'ms', 'left': randomFunc(99) + '%', 'animation-duration':(randomFunc(3e3, 7e3)) + 'ms'});
		// particle 클래스를 가진 i태그에 css 추가 
		// animation-delay : randomFunc에 8000전달 Math.random(0~1난수)*8000ms [1~8000ms 세팅]
		// left : randomFunc에 99전달 Math.random(0~1난수)*99% [1~99% 세팅]
		// animation-duration : randomFunc에 3000,7000전달 7000+Math.random(0~1난수)*3000ms [7000~10000ms 세팅]
		$particle.find('.item').css({'animation-duration':$particle.css('animation-duration')}).css({'animation-name': 'sakura' + (randomFunc(2)+1)});
		// particle 클래스를 가진 i 태그안에 item 클래스를 가진 i 태그에 animation-duration css 추가 (.particle 값과 같은값) , animation-name:sakura1~2 추가
		$particle.appendTo('.header');
		// header 클래스에 추가하기 css추가된 i태그 10개 넣기 
	};

	function randomFunc(num, def) {
		var randomResult = (def) ? def + Math.floor(Math.random() * num) : Math.floor(Math.random() * num)
		// 파라미터 값이 두개 일때 def + Math.floor(Math.random() * num)
		// 파라미터 값이 한개 일때 Math.floor(Math.random() * num)
		return randomResult;
	}
	


	$('.layer_open_btn').on('click',function(){
		var $thisTxt = $(this).text();
		// .layer_open_btn 클래스를 가진 요소 클릭시 해당 텍스트 변수에 저장 ex)평강식물원 정보
		var $thisImg = $(this).closest('li').attr('class').replace('checked','').replace(' ','');
		// .layer_open_btn 클래스를 가진 요소 클릭시 가까운 li요소의 class값 을가져옴
		// area_pick01 checked 체크드가 있을시 checked를 -> ''로 리플레이스 area_pick01(공백) 저장
		// area_pick01(공백) 공백 ' ' -> '' 로제거 area_pick01저장
		var $layerWrap = 
			'<div class="pick_layer_wrap">'
			+ '<p class="picker_layer_title">출석체크가<br><strong>완료되었습니다.</strong></p>'
			+ '<img src="images/'+$thisImg+'.jpg" alt="'+$thisTxt+'" />'
			+ '<p class="picker_layer_desc">이번주말 가벼운 마음으로 떠나보세요!</p>'
			+ '<button type="button" class="js_layer_ok_btn">확인</button>'
			+ '<button type="button" class="js_layer_close_btn">닫기</button>'
			+ '</div>'
			+ '<span class="layer_dim"></span>';
			//alert($layerWrap);
			
		$('.area_wrap').append($layerWrap);
			/* 
				ex) area_pick01클래스를가진 > layer_open_btn클릭시 layer open

				<div class="pick_layer_wrap">
					<p class="picker_layer_title">출석체크가<br><strong>완료되었습니다.</strong></p>
					<img src="images/area_pick01.jpg" alt="평강식물원 정보" />
					<p class="picker_layer_desc">이번주말 가벼운 마음으로 떠나보세요!</p>
					<button type="button" class="js_layer_ok_btn">확인</button>
					<button type="button" class="js_layer_close_btn">닫기</button>
				</div>
				<span class="layer_dim"></span>

				를 .area_wrap에 추가
			*/
		$('.js_layer_close_btn , .js_layer_ok_btn').on('click',function(){
			$(this).closest('.area_wrap').find('.pick_layer_wrap, .layer_dim').remove();
			//alert(1);
			// class js_layer_close_btn , js_layer_ok_btn 클릭시 .pick_layer_wrap 와 .layer_dim 제거
		});
	});

});