(()=>{
	
	let slideIdx = 0;

	let selectSlide = ()=>{
		let slide = document.querySelector('.slide-contents');
		slide.style.transitionDuration = '1s';
		slide.style.transform=`translateX(-${slideIdx * 50}vw)`;
	}
	
	let changeBtnColor = ()=>{
		document.querySelectorAll('.btn_nav').forEach((btn)=>{
			btn.style.backgroundColor = 'white';
			if(btn.dataset.slideIdx == slideIdx){
				btn.style.backgroundColor = 'red';
			}
		})
	}
	
	document.querySelectorAll('.btn_nav').forEach((e)=>{
		e.addEventListener('click',()=>{
			slideIdx = e.dataset.slideIdx;
			changeBtnColor();
			selectSlide();
		})
	})
	
	document.querySelector('.left-arrow').addEventListener('click',()=>{
		slideIdx--;
		if(slideIdx < 0){
			slideIdx = 3;
		}
		changeBtnColor();
		selectSlide();
	})
	
	document.querySelector('.right-arrow').addEventListener('click',()=>{
		slideIdx++;
		if(slideIdx > 3){
			slideIdx = 0;
		}
		
		changeBtnColor();
		selectSlide();
	})
})();









