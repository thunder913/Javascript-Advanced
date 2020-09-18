function getArticleGenerator(articles) {

   function returnFunc() {
   let articlesOnPage = document.querySelectorAll('#content article').length;
   if (articlesOnPage >= 0 &&articlesOnPage < articles.length) {
      let div = document.querySelector('#content');
      let newDiv = document.createElement('article');
      newDiv.innerText = articles[articlesOnPage];
      div.appendChild(newDiv);
   }
   articlesOnPage++;
}
   return returnFunc;
}
