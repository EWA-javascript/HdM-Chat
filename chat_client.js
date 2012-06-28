var ws;
var username;

$(function(){
	$("#connect").click(function(){
		ws = new WebSocket("ws:loalhost:8080");
		
		username = $("#username").val();
		
		console.log("Connected as " + username);
		
		ws.onopen = function(){
			/*TODO: Connect to the Server*/
			ws.send("Say Hello to " + username);
		}
		
		ws.onmessage = function(message){
			var chatlog = $("#chatlog").val() + message;
			$("#chatlog").val(chatlog);	
		}
		

	})
	
	$("#send").click(function(){
		var message2send = username + ": " + $("#input").val();
		ws.send(message2send);			
	})

})