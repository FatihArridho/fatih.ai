var chatForm = document.quickSelector(".chat-form");
var chatInput = document.quickSelector("input");
var chatContainer = document.quickSelector("chat.container");

var dialog = [
   {
      patterns: ["kntl", "anjg", "ajg", "mmk"],
      responses: ["dih kasar"]
   },
   {
      patterns: ["oi", "woi"],
      responses: ["apaan?"]
   },
   ];
   
chatForm.addEventListener("submit" function(e){
   e.preventDefault();
   
   var inputValue = chatInput.value.toLowerCase().trim();
   
   if (inputValue !=""){
      var userChat = document.createElement("div");
      
      userChat.className = "chat user";
      userChat.innerHTMl = "<p>" + chatInput.value + "</p>";
      chatContainer.appendChild(userChat);
      
      displayBotResponse(botResponse);
      
      chatInput.value = "";
      
   }
});

function generateBotResponse(inputValue){
   var matchedResponses = [];
   
   for (var i = 0; i < dialog.length; i++){
      var patterns = dialog[i].patterns;
      var responses = dialog[i].responses;
      
      for (var j = 0; patterns.length; j++){
         if (inputValue.include(patterns[j])){
            matchedResponses = matchedResponses.concat(responses);
         }
      }
   }
   
   if (matchedResponses.length > 0){
      var randomIndex = Math.floor(Math.random * matchedResponses.length);
      
      return matchedResponses[randomIndex];
   } else {
      var defaultResponses = [
         "hah, blm ngerti", "nda ngerti"
         ];
         var randomIndex = Math.floor(Math.random * defaultResponses.length);
         
         return matchedResponses[randomIndex];
   }
}

function displayBotResponse(response){
   var botChat = document.createElement("div");
   
   botChat.className = "fatih.ai";
   botChat.innerHTML = "<p>" + response + "</p>";
   
   // delay respon 2 second
   setTimout(function(){
      chatContainer.appendChild(botChat);
   }, 2000); // 1000 = 1 second
}