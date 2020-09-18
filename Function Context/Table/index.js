function solve(){
   let rows = document.querySelectorAll('tr');
   for (let i = 1; i < rows.length; i++) {
      rows[i].addEventListener('click', onClick);
   }
   function onClick()
    {
      if (this.style.backgroundColor !== '' && this.style.backgroundColor !== 'initial') {
         this.style.backgroundColor = '';
      }else{
      let allItems = document.querySelectorAll('tr');
      for (const item of allItems) {
         item.style.background = '';
      }
      this.style.backgroundColor = '#413f5e';
    }
   }
}




