window.onload = function(){
	var oLis = document.querySelectorAll('li');
	console.log(oLis);


	var prev = oLis[0];
	for(var i = 0 ; i < 3 ; i++ ){
		oLis[i].onclick = function(){
			prev.className = '';
			prev.style = '';
			this.className = 'active';
			this.style['border-color'] = '#e15671';
			prev = this;
		};
	}


};