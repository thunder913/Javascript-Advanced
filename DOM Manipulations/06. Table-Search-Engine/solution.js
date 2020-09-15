function solve() {
   let button = document.querySelector('button');
   
   button.addEventListener('click', onClick);

   function onClick()
   {
      let input = document.querySelector('input');
      let inputText = input.value;
      let rows = document.querySelectorAll('tbody tr');
      //clear previous
      for (const row of rows) {
         row.classList.remove('select');
         let values = row.querySelectorAll('td');
         for (const currentValue of values) {
            if (currentValue.innerText.includes(inputText)) {
               row.classList.add('select');
            }
         }
      }
      input.value = '';
   }
}