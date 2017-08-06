$(document).ready(function(){

var channels = ['freecodecamp', 'ESL_SC2', 'EJ_SA', 'timmac'];
 

channels.forEach(function(channel){
	$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+ channel + '?callback=?', function(data) { 	
		render(data);
});

	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ channel + '?callback=?', function(data) { 	
	var id = channel.toLowerCase();

	isStreaming(id)
});
	});


function render(data){

	var template = $('#template').html();
  	Mustache.parse(template);
  	
  	var rendered = Mustache.render(template, {
  	logo: data.logo,
  	name: data.display_name,
  	link: data.url,
  	status: data.status,
  	banner: data.profile_banner,
  	id: data.name
  });
  
  $('#target').append(rendered);

}

function isStreaming(id) {

	$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ id + '?callback=?', function(data) { 
	console.log(id)
	if (data.stream != null) {
		$('#' + id).addClass('online');
		$('#' + id + ' .status').html("Online")

	}
	else {
		$('#' + id).addClass('offline');
		$('#' + id + ' .status').html("Offline")
	}

	});
}

  
});
