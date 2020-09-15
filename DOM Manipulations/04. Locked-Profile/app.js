function lockedProfile() {
    let divProfile = document.querySelectorAll('div[class=profile]');
    for (const element of divProfile) {
        element.addEventListener('click', onClick);
    }

    function onClick(e)
    {
        const target = e.target.tagName.toLowerCase();
        // if (target === 'radio') {
        //     const etarget = e.target.checked;
        //     if (e.target.value === 'lock') {

        //     }
        // }
        let buttonText = e.target.innerText;
        if (target === 'button' && buttonText === 'Show more') {
            if (this.querySelector('input[value=unlock]').checked) {
                let toShow = this.querySelectorAll('input[type=email]');
                for (const obj of toShow) {
                    this.querySelector('div').style.display = 'block';
                    e.target.innerText = 'Hide it';
                }
            }
        }else if(target === 'button' 
        && buttonText === 'Hide it')
        {
            if((this.querySelector('input[value=unlock]').checked)){
            let toHide = this.querySelectorAll('input[type=email]');
                for (const obj of toHide) {
                    this.querySelector('div').style.display = 'none';
                    e.target.innerText = 'Show more';
                }
        }}
            
    }
}