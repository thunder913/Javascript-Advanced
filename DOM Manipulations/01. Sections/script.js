function create(words) {
   for (const word of words) {
      let div = document.createElement('div');
      let child = document.createElement('p');
      child.style.display = 'none';
      div.appendChild(child);
      let content = document.querySelector('#content');
      child.innerText = word;
      div.addEventListener('click', onClick);
      
      content.appendChild(div);

   }

   function onClick()
   {
      let p = this.querySelector('p');
      p.style.display = 'block';
   }
}