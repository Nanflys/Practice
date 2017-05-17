//1、点击左右按钮切换图片
//2、点击下面的小圆点切换图片



window.onload = function(){
	//获取元素
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	var arrImg = ['img/nth6.jpg','img/nth7.jpg','img/nth8.jpg','img/nth9.jpg','img/nth10.jpg'];
	var spans = document.querySelectorAll('.nav span');
	var pic = document.querySelector('.pic');
	var small = document.querySelectorAll('.nav span img');
	var n = 0;
	var len = spans.length;





	//点击切换上一张
		prev.onclick = function(){
			n--;
			if(n<0){
				//判断当n小于0的时候，需要循环到最后一个，为数组的长度减一
				n = arrImg.length-1;
			}
			pic.src = arrImg[n];
				m.style.background = '';	//设置上一个的背景色为空
				spans[n].style.background = 'red';	//点击哪个小圆点，就给哪个圆点添加背景色
				m = spans[n];	//把当前的背景色赋值给上一个
			console.log(n)
		};
	//点击按钮下一张
		next.onclick = function(){
			n++;
			if(n>arrImg.length-1){
				//判断当n大于0的时候，切换到第一个，而第一个在图片数组中编码为0
				n = 0;
			}
			pic.src = arrImg[n];
				m.style.background = '';
				spans[n].style.background = 'red';
				m = spans[n];
			console.log(n)
		};

	//点击下面的小圆点切换图片（控制一组元素需要用到for循环）


	var m = spans[0];
	var h = small[0];
	for( var i = 0 ; i < len ; i++){
		spans[i].index = i;
		spans[i].onclick = function(){
			m.style.background = ''; 
			this.style.background = 'red';
			m = this;
			pic.src = arrImg[this.index];
			console.log(this.index)
		};
		spans[i].onmouseover = function (){
			// m.style.background = '';
			h.className = 'small';
			small[this.index].className = 'active';
			// this.style.background = '#3a9dfa';
			// m = this;
			h = small[this.index];
		};
		spans[i].onmouseout = function(){
			h.className = 'small';
			small[this.index].className = 'small';
			h = small[this.index];
		};
	}
	console.log(this.index)



};