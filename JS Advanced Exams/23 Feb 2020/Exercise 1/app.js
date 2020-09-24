function solve(){
      let button = document.getElementsByClassName('btn create')[0];
      button.addEventListener('click', createButtonClick);
      let articles = document.querySelector('h2').parentElement;


      function createButtonClick(){
         let inputs = document.querySelectorAll('input');
         let author = inputs[0];
         let title = inputs[1];
         let category = inputs[2];
         let content = document.querySelector('textarea[name=content]');

         let articleToAdd = document.createElement('article');

         let h1 = document.createElement('h1');
         h1.innerText = title.value;
         articleToAdd.appendChild(h1);

         let paragraph1 = document.createElement('p');
         paragraph1.innerHTML = `Category:<strong>${category.value}</strong>`;
         articleToAdd.appendChild(paragraph1);

         let paragraph2 = document.createElement('p');
         paragraph2.innerHTML = `Creator:<strong>${author.value}</strong>`;
         articleToAdd.appendChild(paragraph2);

         let paragraph3 = document.createElement('p');
         paragraph3.innerText = content.value;
         articleToAdd.appendChild(paragraph3);

         let divToAdd = document.createElement('div');
         divToAdd.setAttribute('class', 'buttons');
         let buttonDelete = document.createElement('button');
         buttonDelete.setAttribute('class', 'btn delete');
         buttonDelete.innerText = 'Delete';

         let buttonArchive = document.createElement('button');
         buttonArchive.setAttribute('class', 'btn archive');
         buttonArchive.innerText = 'Archive';

         buttonDelete.addEventListener('click', onDeleteButtonClick);
         buttonArchive.addEventListener('click', onArchiveButtonClick);

         divToAdd.appendChild(buttonDelete);
         divToAdd.appendChild(buttonArchive);
         articleToAdd.appendChild(divToAdd);

         articles.appendChild(articleToAdd);
      }

      function onDeleteButtonClick(e){
         articles.removeChild(e.target.parentElement.parentElement);
      }

      function onArchiveButtonClick(e){
         let titleArticle = e.target.parentElement.parentElement.querySelector('h1').textContent;
         let titleLI = document.createElement('li');
         titleLI.textContent = titleArticle;
         let archiveUl = document.querySelector('.archive-section ul');
         archiveUl.appendChild(titleLI);
         let sortedLi = Array.from(archiveUl.getElementsByTagName('li'))
            .sort((a, b) => (a.innerHTML).localeCompare(b.innerHTML));
         while (archiveUl.firstChild) {
            archiveUl.removeChild(archiveUl.firstChild);
         }
         for (const element of sortedLi) {
            archiveUl.appendChild(element);
         }
         onDeleteButtonClick(e);
      }
  }
