function solve() {
   
  let inputArea = document.querySelector('textarea');
  document.querySelector('button').addEventListener('click', onClickGenerate);
 document.querySelectorAll('button')[1].addEventListener('click', onClickBuy);

 function onClickBuy() {
   let boughtProducts = new Array();
   let price = 0;
   let averageDecor = 0;
   let inputs = document.querySelectorAll('tr');
   for (let i = 2; i < inputs.length; i++) {
     if (inputs[i]
       .querySelector('input[type=checkbox]')
       .checked) {
         
         let current = inputs[i].querySelectorAll('td');
         boughtProducts.push(current[1].innerText);
         price += Number(current[2].innerText)
         averageDecor += Number(current[3].innerText);
     }
   }

   let textBox = document.querySelectorAll('textarea')[1];
   textBox.innerText = `Bought furniture: ${boughtProducts.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${averageDecor/boughtProducts.length}`;
 }
 
 function onClickGenerate() {
   let obj = JSON.parse(inputArea.value);
   let table = document.querySelector('table tbody');
   for (let i = 0; i < obj.length; i++) {
     let row = document.createElement('tr');

     let picture = document.createElement('td');
     let img = document.createElement('img');
     img.setAttribute('src', obj[i].img);
     picture.appendChild(img);
     row.appendChild(picture);

     let name = document.createElement('td');
     let namePar = document.createElement('p');
     namePar.innerText = obj[i].name;
     name.appendChild(namePar);
     row.appendChild(name);

     let price = document.createElement('td');
     let pricePar = document.createElement('p'); 
     pricePar.innerText = obj[i].price;
     price.appendChild(pricePar);
     row.appendChild(price);

     let decor = document.createElement('td');
     let decorPar = document.createElement('p');
     decorPar.innerText =obj[i].decFactor;
     decor.appendChild(decorPar);
     row.appendChild(decor);

     let check = document.createElement('td');
     let inputCheckBox = document.createElement('input');
     inputCheckBox.setAttribute('type', 'checkbox');
     check.appendChild(inputCheckBox);
     row.appendChild(check);

     table.appendChild(row);
   }
 }
  
}