window.onload = function(){
	var oText = document.getElementById('text');
	var btn = document.querySelector('.button');
	var port1 = document.querySelector('.port1');
	var port2 = document.querySelector('.port2');
	var item = document.querySelector('.item');
	var onOff = true;

	port1.style.display = 'block';
	oText.focus();
	port1.onclick = function(){
		port1.style.display = 'none';
		port2.style.display = 'block';
	};
	port2.onclick = function(){
		port1.style.display = 'block';
		port2.style.display = 'none';
	};
	btn.onclick = function(){
		console.log(oText);
		console.log(oText.value);
		if(oText.value==''){
			alert('亲，请输入点内容吧！(￣▽￣)"');
		}
		else if(port1.style.display == 'block'){
			item.innerHTML = '<li class="list">'+'<div class="title">'+'<img src="" />'+'</div>'+'<span class="dialog">'+oText.value+'<i class="arrow"></i>'+'</span>'+'</li>'+item.innerHTML;
			oText.value = '';
			oText.focus();
		}
		else if(port2.style.display == 'block'){
			item.innerHTML = '<li class="one">'+'<div class="titlepic">'+'<img src="" />'+'</div>'+'<span class="dialogleft">'+oText.value+'<i class="arrowleft"></i>'+'</span>'+'</li>'+item.innerHTML;
			oText.value = '';
			oText.focus();
		}
	};
};