$(document).ready(function(){

var channels = ['freecodecamp', 'ESL_SC2', 'EJ_SA', 'timmac'];
 

for (chan in channels) {
	$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+ channels[chan] + '?callback=?', function(data) { 	


  	var template = $('#template').html();
  	Mustache.parse(template);
  	var rendered = Mustache.render(template, {
  	logo: data.logo,
  	name: data.display_name,
  	link: data.url,
  	status: data.status,
  	banner: data.profile_banner
  });
  
  $('#target').append(rendered);
});
}

  
});
