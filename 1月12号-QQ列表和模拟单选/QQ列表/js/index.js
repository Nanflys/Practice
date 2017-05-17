window.onload = function(){
	var oItem = document.querySelectorAll('.list .item');
	var oDivs = document.querySelectorAll('.item div');
	var oLis = document.querySelectorAll('.info li');
	var oInfo = document.querySelectorAll('.item .info');
	var oIs = document.querySelectorAll('i');
	var oArrow = document.querySelectorAll('.wrap .arrow');
	var oName = document.querySelectorAll('.info li');
	var onOff = true;
	var flag = true;

	console.log(oName)
	var prev = oDivs[0];
	var rot = oIs[0];
	var oShow = oInfo[0];
	for(i = 0 ; i < oItem.length ; i++){
		oDivs[i].index = i;
		oDivs[i].onOff = true;
		oDivs[i].onclick = function(){
			if(this.onOff){
				prev.className = '';
				prev.onOff = true;
				console.log(this.index);
				this.className = 'wrap1';
				prev = this;
				rot.className = 'arrow';
				rot.onOff = true;
				oIs[this.index].className = 'arrow1';
				rot = oIs[this.index];
				oShow.className = 'info';
				oInfo[this.index].className = 'active';
				oShow = oInfo[this.index];
			}else{
				this.className = '';
				oIs[this.index].className = 'arrow';
				oInfo[this.index].className = 'info';
			}
			this.onOff = !this.onOff;
		};
	}
	var oNow = oName[0];
	for(var j = 0; j < oName.length; j++){
		oName[j].flag = false;
		oName[j].onmouseover = function (){
			if(!this.flag){
				oName.className = 'name';
				this.className = 'now';
			}

		};
		oName[j].onmouseout = function(){
			if(!this.flag){
				this.className = 'name';
			}

		};
		oName[j].onclick = function(){
			oNow.className = 'name';
			this.flag = true;
			this.className = 'click';
			oNow = this;
		};
		
	}
	// }oName[j].onclick = fn;
	// 	function fn(){
	// 		if(this.flag == true){
	// 			oNow.className = 'name';
	// 			this.className = 'click';
	// 			oNow = this;
	// 		}
	// 		else{
	// 			this.className = 'name';
	// 		}
	// 		// this.flag = !this.flag;
	// 	};
	// 	oName[j].onmouseover = function(){
	// 		// oName[j].flag = true;
	// 		if(this == true){
	// 			oNow.className = '';
	// 			this.className = 'now';
	// 			oNow = this;
	// 			onOff = false;
	// 		}
	// 		else{
	// 			this.className = 'click';
	// 			onOff = true;
	// 		}
	// 	}
		// oName[j].onmouseover = function(){
		// 	if(this.className == 'name'){
		// 		oNow.className = 'name';
		// 		this.className = 'now';
		// 		oNow = this;
		// 	}else{
		// 		this.className = 'name';
		// 	}
		// 	console.log(this)
		// };
		// oName[j].onclick = function(){
		// 	if(flag){
		// 		// oNow.className = 'now';
		// 		this.className = 'click';
		// 		this.onmouseover = '';
		// 		// oNow = this;
		// 	}else{
		// 		this.className = 'now';
		// 	}
		// };
	

};