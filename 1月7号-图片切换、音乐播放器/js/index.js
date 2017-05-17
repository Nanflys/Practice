window.onload = function(){
	var oContent = document.querySelector('.content');
	var oBox = document.querySelector('.box');
	var oCir = document.querySelector('.one');
	var oOrd = document.querySelector('.two');
	var oPrev = document.querySelector('.prev');
	var oAbove = document.querySelector('.above');
	var oNext = document.querySelector('.next');
	var oAbove1 = document.querySelector('.above1');
	var oPicture = document.querySelector('.picture');
	var oFew = document.querySelector('.few');
	var oDescri = document.querySelector('.descri');
	var oInfo = document.querySelector('.info');
	var oPop = document.querySelector('.pop');
	var oBtn = document.querySelector('.btn');
	var oItem = document.querySelector('.item');
	var oHome = document.querySelector('.home');
	var oPoptext = document.querySelector('.poptext');
	var oClose = document.querySelector('.close');
	var arrText = ['哼！','哈！','嗯！','哇！','哦！'];
	var arrWarn = ['这已经是第一张了，别点了大哥！！！请点击右上角或者确定键关闭','这已经是最后一张了，兄弟！！！请点击右上角或者确定键关闭'];
	// var arrUrl = ['img/nth1.jpg','img/nth2.jpg','img/nth3.jpg','img/nth4.jpg','img/nth5.jpg']
	var num = 0;
	var onOff = true;
	var flag = true;
	
	// oItem.onclick = function(){
	// 	// oBox.style = 'transform:scale(0);';
	// 	if(onOff){
	// 		oBox.style = 'transform:scale(1);';
	// 		onOff = false;
	// 	}else{
	// 		oBox.style.transform = 'scale(0)';
	// 		onOff = true;
	// 	}
	// };
	// oHome.onclick = function(){	
	// 	if(flag){
	// 		oBox.style = 'transform:scale(1) rotate(720deg);';
	// 		flag = false;
	// 	}else{
	// 		oBox.style = 'transform:scale(0) rotate(0deg);';
	// 		flag = true;
	// 	}
	// };
	// oContent.onclick = function(){
	// 	if(guanKai){
	// 		oContent.style.transform = 'rotate(90deg)';
	// 		guanKai = false;
	// 	}else{
	// 		oContent.style.transform = 'rotate(0deg)';
	// 		guanKai = true;
	// 	}
	// };
	oPrev.onmouseover = function(){
		oPrev.style = 'opacity:0.7;';
	};
	oPrev.onmouseout = function(){
		oPrev.style = 'background:rgba(0,0,0,.5);';
	};
	oNext.onmouseover = function(){
		oNext.style = 'opacity:0.7;';
	};
	oNext.onmouseout = function(){
		oNext.style = 'background:rgba(0,0,0,.5);';
	};


	oCir.onclick = cir;
	function cir(){
		oCir.style = 'background:#fff;color:#000;';
		oOrd.style = 'background:#000;color:#fff;';
		onOff = true;
		oInfo.innerHTML = '循环轮播 ：图片可从最后一张跳转到第一张循环切换';
	};
	oOrd.onclick = ord;
	function ord(){
		oOrd.style = 'background:#fff;color:#000;';
		oCir.style = 'background:#000;color:#fff;';
		onOff = false;
		oInfo.innerHTML = '顺序：图片只能到最后一张或只能到第一张切换';
	};
	oPrev.onclick = prev;
	function prev(){
		num--;
		if(num < 0){
			if(onOff){
				num = arrText.length - 1;
			}else{
				num = 0;
				oPop.style.transform = 'scale(1)';
				oPoptext.innerHTML = arrWarn[0];
				ban();
			}
		}
		change();
	};
	oNext.onclick = next;
	function next() {
		num++;
		if(num > arrText.length - 1){
			if (onOff){
				num = 0;
			}
			else{
				num = arrText.length - 1;
				oPop.style.transform = 'scale(1)';
				oPoptext.innerHTML = arrWarn[1];
				ban();
			}
		}
		change();
	};


	function change(){
			oPicture.src = 'img/nth'+(num+1)+'.jpg';
			oDescri.innerHTML = arrText[num];
			oFew.innerHTML = (num+1)+'/'+arrText.length;
	}

	function ban (){
		oCir.onclick = '';
		oOrd.onclick = '';
		oPrev.onclick = '';
		oNext.onclick = '';
	};
	function set(){
		oPop.style.transform = 'scale(0)';
		oCir.onclick = cir;
		oOrd.onclick = ord;
		oPrev.onclick = prev;
		oNext.onclick = next;
	};
	oBtn.onclick = function(){
		set();
	};
	oClose.onclick = function(){
		set();
	};
};