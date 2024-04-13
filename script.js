var chatForm = document.querySelector(".chat-form");
var chatInput = document.querySelector("input");
var chatContainer = document.querySelector(".chat-container");

var dialog = [
   {
      patterns: ["kntl", "anjg", "ajg", "mmk", "kontol", "memek", "jembut"],
      responses: ["dih kasar", "kok lu kasar sih", "heh toxic, dosa!", "astagfirullah toxic", "ketikannya dijaga y.", "toxic lo yee!"]
   },
   {
      patterns: ["oi", "woi"],
      responses: ["apaan?", "knp sihh", "ngapaa sihh"]
   },
   {
      patterns: ["hai", "halo", "hi"],
      responses: ["iyaa haii", "haloo haloo", "halo desu", "hai user bot~"]
   },
   {
      patterns: ["fatih"],
      responses: ["kamu cariin fatih? ketik 'info'"]
   },
   {
      patterns: ["info"],
      responses: ["untuk info pemilikku bisa ke https://tih.is-a.dev"]
   },
   {
      patterns: ["assalamualaikum", "assalamu'alaikum"],
      responses: ["waalaikumussalam, ada apa?", "waalaikumussalam knp nih?", "waalaikumussalam, eh elu lagi"]
   },
   {
      patterns: ["syalom", "shalom", "salom"],
      responses: ["shalom, ada apa kak?", "shalom, knp ka", "shalom ada apa kakandaa??"]
   },
   {
      patterns: ["selamat pagi", "good morning", "morning"],
      responses: ["pagii kakakk", "selamat pagi desu~", "morning desu~"]
   },
   ];
   
chatForm.addEventListener("submit", function(e){
   e.preventDefault();
   
   var inputValue = chatInput.value.toLowerCase().trim();
   
   if (inputValue !== ""){
      var userChat = document.createElement("div");
      
      userChat.className = "chat user";
      userChat.innerHTML = "<p>" + chatInput.value + "</p>";
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
        var apiUrl = 'https://dikaardnt.com/api/tool/openai';
        var postData = 'message=' + encodeURIComponent(inputValue);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', apiUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayBotResponse(response);
            }
        };
        xhr.send(postData);
   }
}

function displayBotResponse(response){
   var botChat = document.createElement("div");
   
   botChat.className = "chat fatih-ai";
   botChat.innerHTML = "<p>" + response + "</p>";
   
   // delay response bot every 1 second
   setTimeout(function(){
      chatContainer.appendChild(botChat);
   }, 1000); // 1000 = 1 second
}