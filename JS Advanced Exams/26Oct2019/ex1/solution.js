function solve() {
   let addProductInputs = document.querySelectorAll('form input');
   let nameInput = addProductInputs[0];
   let quantityInput = addProductInputs[1];
   let priceInput = addProductInputs[2];
   let addButton = document.querySelector('form button');
   let availableProductsList = document.querySelector('section ul'); 
   let filterButton = document.querySelector('button');
   let filterText = document.querySelector('input');
   let myProductsList = document.querySelector('#myProducts ul');
   let totalPrice = document.querySelectorAll('h1')[1];
   let buyButton = document.querySelectorAll('button')[2];
   filterButton.addEventListener('click', onFilterButtonClick);
   addButton.addEventListener('click', onAddButtonClick);
   buyButton.addEventListener('click', onBuyButtonClick);
   function onAddButtonClick(e){
      e.preventDefault();
      let liItem = document.createElement('li');
      let span = document.createElement('span');
      span.innerText = nameInput.value;
      
      let strong = document.createElement('strong');
      strong.innerText = `Available: ${quantityInput.value}`;

      let divToAdd = document.createElement('div');
      let priceStrong = document.createElement('strong');
      priceStrong.innerText = Number(priceInput.value).toFixed(2);
      
      let button = document.createElement('button');
      button.innerText = 'Add to Client\'s List';
      button.addEventListener('click', onAddToClientListButtonClick);

      divToAdd.appendChild(priceStrong);
      divToAdd.appendChild(button);

      liItem.appendChild(span);
      liItem.appendChild(strong);
      liItem.appendChild(divToAdd);

      availableProductsList.appendChild(liItem);

      function onAddToClientListButtonClick(e){
         let currentItem = e.target.parentElement.parentElement;
         let currentPrice = currentItem.querySelector('div strong').innerText;
         let price = Number(totalPrice.innerText.replace('Total Price: ', ''));
         price += +currentPrice;

         totalPrice.innerText = `Total Price: ${price.toFixed(2)}`;
      
         let strongAvailable = currentItem.querySelector('strong');
         let available = Number(strongAvailable.innerText.replace('Available: ', ''));
         available -= 1;
         if (available === 0) {
            availableProductsList.removeChild(currentItem);
         }
         strongAvailable.innerText = `Available: ${available}`;
         let newNode = document.createElement('li');
         newNode.innerText = currentItem.querySelector('span').innerText;
         let strong = document.createElement('strong');
         strong.innerText = currentPrice;
         newNode.appendChild(strong);
         myProductsList.appendChild(newNode);
      }
   }

   function onFilterButtonClick(){
      let filterValue = filterText.value;
      for (const liItem of availableProductsList.querySelectorAll('li')) {
         let name = liItem.querySelector('span');
         if (!name.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
            liItem.style.display = 'none'
         }else{
            liItem.removeAttribute('style');
         }
      }
   }

   function onBuyButtonClick(){
      while(myProductsList.firstChild){
         myProductsList.removeChild(myProductsList.firstChild);
      }
      totalPrice.innerText = `Total Price: 0.00`;
   }
}
