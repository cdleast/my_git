$(function() {

	var curIndex=0;
	var audio = $("#audio").get(0);

	$(".play").click(function() {
		if(audio.paused) {
			audio.play();
			changePlayStyle('play');
		} else {
			audio.pause();
			changePlayStyle('pause');
		}
	})
	
	$(".forward").click(function(){
		var songTotals=localStorage.getItem("songTotals");
		curIndex=(curIndex+1>=songTotals)?0:curIndex+1;
		playMusic(curIndex);
	});
	
	$(".backward").click(function(){
		var songTotals=localStorage.getItem("songTotals");
		curIndex=(curIndex-1<0)?songTotals-1:curIndex-1
		playMusic(curIndex);
	});
	
	$("#infoList_playlist").on("dblclick","tr",function(){
		curIndex=parseInt(this.dataset.index);
		playMusic(curIndex);
	});
	
	$("#audio").on("timeupdate",function(){
		var currentTime=formatTime(this.currentTime);
		var duration=formatTime(this.duration);
		
		$("#time_star").html(currentTime.I+":"+currentTime.S);
		$("#time_end").html(duration.I+":"+duration.S);
		
		var prc=(this.currentTime/this.duration*100).toFixed(2);
		$("#process_current").css("width",prc+"%");
		
	});
	
	$("#audio").on("ended",function(){
		var songTotals=localStorage.getItem("songTotals");
		curIndex=curIndex+1;
		if(curIndex>songTotals){
			audio.pause();
			changePlayStyle('pause');
		}else{
			playMusic(curIndex);
		}
	});
	
	
	
	
	function playMusic(index){	
		audio.pause();
		changePlayStyle('pause');
		
		trs=$("#infoList_playlist").find("tr");
		curTR=trs.get(index);
		
		$(audio).prop("src",curTR.dataset.mp3url);
		
		audio.play();
		changePlayStyle('play');
		
		
		$(trs).find("td.index").each(function(i,td){
			$(td).html(td.dataset.num).removeClass("active");
		})
		
		$(curTR).find("td.index").html('<i class="fa fa-volume-up" aria-hidden="true"></i>').addClass("active");
	}
	
	
	function changePlayStyle(type){
		var pauseHtml='<i class="fa fa-pause" aria-hidden="true"></i>';
		var playHtml='<i class="fa fa-play" aria-hidden="true"></i>';
		$(".play").html(type=='play'? pauseHtml: playHtml );
	}
	
})