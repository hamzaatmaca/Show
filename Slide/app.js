const slide = document.getElementById('slide');
const img = document.getElementsByTagName('IMG');
const eksi = document.getElementById('prevBtn');
const arti = document.getElementById('nextBtn');

function goster(){

	var i;
	var x ;
	for(var i =0; i<img.length;i++){
		img[i].style.opacity = 0;
		img[i].style.transition=.75+"s";

		
	}

	x=[Math.floor(Math.random()*img.length)];

	img[x].style.opacity =1;
	img[x].style.transition=.75+"s";

	eksi.addEventListener('click',()=>{
			
		y=[Math.floor(Math.random()*img.length)];

		img[x].style.opacity =0;

		img[y].style.opacity =1;
		img[y].style.transition=.75+"s";
		
	});

	arti.addEventListener('click',()=>{
			
		y=[Math.floor(Math.random()*img.length)];

		img[x].style.opacity =0;

		img[y].style.opacity =1;
		img[y].style.transition=.75+"s";
		
	});

	
}	
setInterval(goster,2000);


