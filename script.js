var chatForm = document.querySelector(".chat-form");
var chatInput = document.querySelector("input");
var chatContainer = document.querySelector(".chat-container");

var dialog = [
   {
      patterns: ["kntl", "anjg", "ajg", "mmk"],
      responses: ["dih kasar", "kasar bgt"]
   },
   {
      patterns: ["oi", "woi"],
      responses: ["apaan?", "ada apa?"]
   },
   {
      patterns: ["hai", "halo"],
      responses: ["iyaa haii", "haloo haloo", "halo desu"]
   },
   ];
   
chatForm.addEventListener("submit" function(e){
   e.preventDefault();
   
   var inputValue = chatInput.value.toLowerCase().trim();
   
   if (inputValue !== ""){
      var userChat = document.createElement("div");
      
      userChat.className = "chat user";
      userChat.innerHTMl = "<p>" + chatInput.value + "</p>";
      chatContainer.appendChild(userChat);
      
      var botResponse = generateBotResponse(inputValue);
      
      displayBotResponse(botResponse);
      
      chatInput.value = "";
   }
});

function generateBotResponse(inputValue){
   var matchedResponses = [];
   
   for (var i = 0; i < dialog.length; i++){
      var patterns = dialog[i].patterns;
      var responses = dialog[i].responses;
      
      for (var j = 0; j < patterns.length; j++){
         if (inputValue.includes(patterns[j])){
            matchedResponses = matchedResponses.concat(responses);
         }
      }
   }
   
   if (matchedResponses.length > 0){
      var randomIndex = Math.floor(Math.random() * matchedResponses.length);
      
      return matchedResponses[randomIndex];
   } else {
      var defaultResponses = [
         "hah, blm ngerti", "nda ngerti"
         ];
         var randomIndex = Math.floor(Math.random() * defaultResponses.length);
         
         return defaultResponses[randomIndex];
   }
}

function displayBotResponse(response){
   var botChat = document.createElement("div");
   
   botChat.className = "fatih.ai";
   botChat.innerHTML = "<p>" + response + "</p>";
   
   // delay response bot every 1 second
   setTimout(function(){
      chatContainer.appendChild(botChat);
   }, 1000); // 1000 = 1 second
}