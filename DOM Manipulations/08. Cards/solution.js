function solve() {
      let images = document.querySelectorAll('img');
      let topValue = '';
      let bottomValue = '';
      let topCard, bottomCard;
      for (const img of images) {
         img.addEventListener('click', onClick);
      }
      
      function onClick()
      {
         if (this.src.includes('images/card.jpg')) {
            this.src = 'images/whiteCard.jpg';
            if (this.parentElement.id === 'player1Div') {
               topValue = Number(this.name);
               topCard = this;
            }else if(this.parentElement.id === 'player2Div'){
               bottomValue = Number(this.name);
               document.querySelectorAll('#result span')[2].innerText = bottomValue;
               bottomCard = this;
            }
            if (topValue !== '' && bottomValue !== '') {
               if (topValue > bottomValue) {
                  topCard.style.border = '2px solid green';
                  bottomCard.style.border = '2px solid red';
               }else
               {
                  bottomCard.style.border = '2px solid green';
                  topCard.style.border = '2px solid red';
               }
               document.querySelector('#history').innerText = `${document.querySelector('#history').innerText}[${topValue} vs ${bottomValue}] `;
               topValue = ''; bottomValue = '';
            }
            document.querySelectorAll('#result span')[2].innerText = bottomValue;
            document.querySelectorAll('#result span')[0].innerText = topValue;
         }

      }
}