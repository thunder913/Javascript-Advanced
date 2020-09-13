function solve() {
   let button = document.getElementById('send');
   button.addEventListener('click', onClick);

   function onClick()
   {
      let chatBox = document.getElementById('chat_input');
      let message = chatBox.value;
      let divToUpload = document.createElement('div');
      let div = document.getElementById("chat_messages");
      divToUpload.innerText = message;
      divToUpload.setAttribute("class", "message my-message");
      div.appendChild(divToUpload);
      chatBox.value = '';
   }
}