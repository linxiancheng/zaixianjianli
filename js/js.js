$(function () {
	// 搜索显示/隐藏
	$('.nav-li').click(function () {
		$('#sousuo').fadeToggle();
	})


	// 时间钟表
	var divN=$('.nian span'); 
	var divY=$('.yue'); 
	var divXq=$('.xq'); 
	var divS=$('.s');
	var divM=$('.m');
	var divH=$('.h');
	function task(){
			var now=new Date();
			var show_day=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']; 
			var n=now.getFullYear();//年
			var y=now.getMonth()+1;//月
			var r=now.getDate(); //日
			var xq=show_day[now.getDay()];//星期
			var s=now.getSeconds();//秒
			var m=now.getMinutes();// 分钟
			var h=now.getHours();// 小时
			// 时钟角度控制
			var sDeg=s/60*360;
			var mDeg=(m*60+s)/3600*360;
			var hDeg=(h*3600+m*60+s)/(3600*12)*360;
			divS.css('transform','rotate('+ sDeg +'deg'+')');
			divM.css('transform','rotate('+ mDeg +'deg'+')');
			divH.css('transform','rotate('+ hDeg +'deg'+')');
			// 月份样式控制
			 y<10?y='0'+y:y;
			 r<10?r='0'+r:r; 
			divN.text(n);
			divY.text(y+'/'+r);
			divXq.text(xq);
		}
		task();
		/*事件间隔事件*/
		setInterval(task,1000);




		// hover样式添加
		var url=window.location.href;
		var urlArr = url.split('?');
		var k = urlArr[0], appU = k.split('/');
		var L = appU[appU.length - 1];
		if (L=='me.html') {
			$('.nav ul li a[name="me"]').addClass('hover');	
		}
		else if (L=='index.html') {
			$('.nav ul li a[name="index"]').addClass('hover');	
		}
		else if (L=='list.html') {
			$('.nav ul li a[name="pro"]').addClass('hover');	
		}
		else if (L=='neir.html') {
			$('.nav ul li a[name="suibi"]').addClass('hover');	
		}
		else{}



	
})
