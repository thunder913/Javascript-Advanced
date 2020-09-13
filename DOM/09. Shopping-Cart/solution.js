function solve() {
   let products = document.getElementsByClassName('product');
   let totalMoney = Number(0)
   let checkOut = document.querySelector('textarea');
   let boughtProducts = new Set();
   products[0].querySelector('button').addEventListener('click', onClickBread);
   products[1].querySelector('button').addEventListener('click', onClickMilk);
   products[2].querySelector('button').addEventListener('click', onClickTomatoes);
            
   let button = document.getElementsByClassName('checkout')[0];
   button.addEventListener('click', onClickButton);

   function onClickButton() {
      let array = new Array();
      for (const item of boughtProducts) {
         array.push(item);
         
      }
      let boughtProductString = array.join(', ');
      checkOut.innerHTML = checkOut.innerHTML + `You bought ${boughtProductString} for ${totalMoney.toFixed(2)}.\n`;
      let buttons = document.querySelectorAll('button');
      for (const curr of buttons) {
         curr.disabled = true;
      }
   }

      function onClickBread() {
         let name = document.getElementsByClassName('product')[0].getElementsByClassName('product-title')[0].innerText
         let price = document.getElementsByClassName('product')[0].getElementsByClassName('product-line-price')[0].innerText
         addToCheckout(products[0],name,price)
         boughtProducts.add(name);
      }
      function onClickMilk() {
         let name = document.getElementsByClassName('product')[1].getElementsByClassName('product-title')[0].innerText
         let price = document.getElementsByClassName('product')[1].getElementsByClassName('product-line-price')[0].innerText
         addToCheckout(products[1],name,price)
         boughtProducts.add(name);
      }
      function onClickTomatoes() {
         let name = document.getElementsByClassName('product')[2].getElementsByClassName('product-title')[0].innerText
         let price = document.getElementsByClassName('product')[2].getElementsByClassName('product-line-price')[0].innerText
         addToCheckout(products[2],name,price)
         boughtProducts.add(name);
      }
      

      function addToCheckout(product, name,price)
      {
         checkOut.innerHTML = checkOut.innerHTML + `Added ${name} for ${price} to the cart.\n`
         totalMoney += Number(price);
      }
   

   
}