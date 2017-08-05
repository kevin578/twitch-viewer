$(document).ready(function(){

var channels = ['freecodecamp', 'ESL_SC2', 'EJ_SA'];
 
console.log(channels)

for (chan in channels) {
	$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+ channels[chan] + '?callback=?', function(data) {
  	console.log(data);

  var template = $('#template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, {
  	logo: data.logo
  });
  
  $('#target').append(rendered);

});
}

  
});
