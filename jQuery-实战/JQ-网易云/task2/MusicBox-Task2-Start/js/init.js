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
		}
	});
	
	
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