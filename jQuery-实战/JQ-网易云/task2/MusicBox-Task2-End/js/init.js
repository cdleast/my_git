$(function() {

	var user = {
		"nick-name": "IT",
		"playlist": "157182977"
	}
	
	//发送请求
	requestAPI({
		url: window.requestURL,
		data: {
			"API_type": "get_playlist_info",
			"queryString": {
				"id": user.playlist
			}
		},
		callback: function(data) {
			//回调函数
			initPlayList(data.result.tracks);
			refeshDOM()
			
			var songTotals=data.result.tracks.length;
			localStorage.setItem("songTotals",songTotals);
			
			
		}
	});
	
	function refeshDOM(){
		var firstTR=$("#infoList_playlist").find("tr").get(0);
		$("#audio").prop("src",firstTR.dataset.mp3url);
		
		$(firstTR).find("td.index").html('<i class="fa fa-volume-up" aria-hidden="true"></i>').addClass("active");
	}
	
	
	
	function initPlayList(tracks){
		
		var num,name,artists=[],artistName,album,time,tr;
		$.each(tracks, function(index,track) {
		
			num=(index+1<10)?"0"+(index+1):index+1;
			
			name=track.name;
			
			artists=[];
			$.each(track.artists, function(index,artist) {
				artists.push(artist.name);
			});
			artistName=artists.join("/")
			
			album=track.album.name;
			
			time=formatTime(track.duration/1000);
			
			tr=document.createElement("tr");
			tr.dataset.id=track.id;
			tr.dataset.index=index;
			tr.dataset.mp3url="http://music.163.com/song/media/outer/url?id="+track.id+".mp3"
				
			tr.innerHTML='<td class="index" data-num="'+num+'">'+num+'</td>'+
			'<td><i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;'+
'<i class="fa fa-download" aria-hidden="true"></i></td>'+
			'<td>'+name+'</td>'+
			'<td>'+artistName+'</td>'+
			'<td>'+album+'</td>'+
			'<td>'+time.I+':'+time.S+'</td>';
			
			$("#infoList_playlist").append(tr);
		});
		
	}
	
	

})