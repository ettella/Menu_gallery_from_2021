kepek = ["kep1.jpg","kep2.jpg","kep3.jpg","kep4.jpg"]

	var i;

	var felso = document.querySelector(".felso");
	felso.onclick = function(e) 
		{ 
		vaszon.style.display = 'flex'; 
		i = e.target.dataset.index;
		nagykep.src = kepek[i];
		}

		 jobbra.onclick = function() { 
		 	if(i<3) i++;
		 	if(i==3) jobbra.style.color = '#666';
		 	nagykep.src = kepek[i]; 
		 	balra.style.color = '#fff';
		 	 }

		 balra.onclick = function() { if(i>0)i--; 
		 	if(i==0) balra.style.color = '#666'
		 		nagykep.src = kepek[i];
		 		jobbra.style.color='#fff' ;}

	iksz.onclick = function() { vaszon.style.display = 'none' }