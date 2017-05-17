window.onload = function(){
	var wrap = document.querySelector('.wrap')
	var count = 144;
	var a = new Array();
	var arr = {};
	var arr2 = {};
	var off = true;
	var last = 0;
	for(var i = 0;i<144;i++){
		a[i] = i+1;
	}
	a.sort(function(){
		return 0.5 - Math.random()
	})
	console.log(a)
	var n = 0;
	var str = '';
	for(var i = 0; i<144 ; i++){
		n = a[i]
		str +='<div style="left:'+(i%16*105)+'px;top:'+((i/16+'')[0]*105)+'px;background-position:-'+(n%16*100)+'px -'+((n/16+'')[0]*100)+'px"></div>';
		
		}
	wrap.innerHTML = str;
	var divs = wrap.querySelectorAll('div');
	for(var i= 0; i<144;i++){
		divs[i].index = i;
		divs[i].onclick=function(){
			if(off){
				arr = {
					left:css(this,'left'),
					top:css(this,'top')
				}
				last = this.index;
			}else{
				arr2 ={
					left:css(this,'left'),
					top:css(this,'top')
				}
				css(this,{
					left:arr.left,
					top:arr.top
				})
				css(divs[last],{
					left:arr2.left,
					top:arr2.top
				})
			}
			off=!off
			console.log(arr)
			this.style.opacity='1';
		};
	}
	
	
	
	
};
