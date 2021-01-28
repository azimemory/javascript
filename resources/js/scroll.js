document.addEventListener('wheel',()=>{
	let contentDiv = document.createElement('div');
	if(scrollY > document.querySelector('body').clientHeight - screen.availHeight){
		if(document.querySelector('.wrapper').lastElementChild.className == 'IU content'){
			contentDiv.className = 'JO content';
		}else{
			contentDiv.className = 'IU content';
		}
		document.querySelector('.wrapper').appendChild(contentDiv);
	}
})