function solve() {
   let buttons = document.querySelectorAll('button');
   for (const button of buttons) {
     button.addEventListener('click', onClick);
   }

   function onClick(e)
   {
     let targetText = e.target.innerText;
     if (targetText === 'Generate') {
       let textItems = JSON.parse(document.querySelector('textarea').value);
       document.querySelector('textarea').value = '';
       for (const item of textItems) {
         let table = document.querySelector('table');
         let row = table.insertRow();

         let img = document.createElement('img');
         img.src = item.img;
         row.insertCell().appendChild(img);
       
         let name = document.createElement('p');
         name.innerText = item.name;
         row.insertCell().appendChild(name);
       
         let price = document.createElement('p');
         price.innerText = item.price;
         row.insertCell().appendChild(price);

         let decFactor = document.createElement('p');
         decFactor.innerText = item.decFactor;
         row.insertCell().appendChild(decFactor);

         let mark = document.createElement('input');
         mark.type = 'checkbox';
         row.insertCell().appendChild(mark);
        }
      }else if(targetText === 'Buy')
     {
       let output = '';
       let names = new Array();
       let rows = document.querySelectorAll('tr');
       let price = Number(0);
       let decor = Number(0);
       for (let i = 2; i < rows.length; i++) {
         if (rows[i].cells[4].querySelector('input').checked) {
           names.push(rows[i].cells[1].innerText);
           price += Number(rows[i].cells[2].innerText);
           decor += Number(rows[i].cells[3].innerText);
         }
       }

       decor = decor / (rows.length-2);
       output += `Bought furniture: ${names.join(', ')}
Total price: ${price.toFixed(2)}
Average decoration factor: ${decor}`;
       document.querySelectorAll('textarea')[1].innerHTML = output;
     }
   }
}