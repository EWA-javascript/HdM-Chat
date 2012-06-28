$(function(){
    var ws;				//The WebSocket
    var username;		//Your Username

    console.log('START');

    //Function to send Text
    function sendText() {
      /*
      TODO: sendText to the Server
      
      - Build Message to Send, eg "Schlauch: Yo what´s up!"
      - Send Message to WebSocket
      - Reset the Input Field
      
      */
    }

    //Click to the Connect Button
    $("#connect").click(function(){
        /*
        TODO: Connect to the Server
        
        - Create WebSocket
        	- Tell the Server your name
        	- Send a Message to the Server eg "Say Hello to Me"
        	- React on incoming messages and write them to the chatlog
        
        */
      });

    //Click on the "Send" Button -> SendText()
    $("#send").click(function(){
        sendText();
      })

    //Hit the Enter Key -> SendText()
    $(document).keydown(function (e) {
        if (/^(input|textarea)$/i.test(e.target.nodeName) || e.target.isContentEditable) {
          if (e.keyCode === 13) {
            sendText()
          }
          return;
        }
      });

  });
