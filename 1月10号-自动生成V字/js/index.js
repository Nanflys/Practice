window.onload = function(){
	var oBtn = document.querySelector('.btn');
	var oList = document.querySelector('.list');
	var oDir = ['left','bottom','right','top'];
	var n = 0;
	var onOff = true;
	var str = '';

	oBtn.onclick = function(){
		if(onOff){
			oBtn.value = '变换';
			onOff = false;
		}
		str = '';
		for(var i =0;i<5;i++){
			str += '<li class="item" style="'+oDir[(n%2)*3]+':'+(i*50)+'px;'+oDir[((n+1)%4)]+':'+((5%(i+1))*50)+'px;">'+(i+1)+'</li>';
			// oList.innerHTML += '<li class="item" style="'+oDir[0]+':'+(i*50)+'px;'+oDir[1]+':'+((5%(i+1))*50)+'px;">'+(i+1)+'</li>';
			// oList.innerHTML += '<li class="item" style="'+oDir[3]+':'+(i*50)+'px;'+oDir[2]+':'+((5%(i+1))*50)+'px;">'+(i+1)+'</li>';
			// oList.innerHTML += '<li class="item" style="'+oDir[0]+':'+(i*50)+'px;'+oDir[3]+':'+((5%(i+1))*50)+'px;">'+(i+1)+'</li>';
			// oList.innerHTML += '<li class="item" style="'+oDir[3]+':'+(i*50)+'px;'+oDir[0]+':'+((5%(i+1))*50)+'px;">'+(i+1)+'</li>';
			oList.innerHTML = str;
		}
		n++;
		if(n>3){
			n=0;
		}
	}
};
/*
*

第一次（点击出现）：
左下角
x:left		y:bottom

1、0*50		0*50
2、1*50		1*50
3、2*50		2*50
4、3*50		1*50
5、4*50		0*50

第二次：
右上角
x：top	y：right

1、0*50		0*50
2、1*50		1*50
3、2*50		2*50
4、3*50		1*50
5、4*50		0*50

第三次：
左上角
x：left		y：top

1、0*50		0*50
2、1*50		1*50
3、2*50		2*50
4、3*50		1*50
5、4*50		0*50

第四次：
左上角
x:top		y:left

1、0*50		0*50
2、1*50		1*50
3、2*50		2*50
4、3*50		1*50
5、4*50		0*50


*/

