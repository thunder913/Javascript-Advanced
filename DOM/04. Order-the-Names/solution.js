function solve() {
    let button = document.querySelector("button");
    button.addEventListener("click", onClick);
    function onClick()
    {
        let input = document.querySelector('input');
        let name = input.value;
        name = name[0].toUpperCase() + name.substr(1).toLowerCase();
        let lists = document.querySelectorAll('li');
        let startingLetterIndex
                 = name.toLowerCase().charCodeAt(0)
                                        - "a".charCodeAt(0);
        if (lists[startingLetterIndex].textContent.length) {
            lists[startingLetterIndex].textContent =
                lists[startingLetterIndex].textContent + ", " + name;
        } else {
            lists[startingLetterIndex].textContent = name;
        }
            
        input.value = "";
    }

}