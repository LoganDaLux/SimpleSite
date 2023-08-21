'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click',  function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme")  {
        console.log('current class name: ' + className);
        this.textContent = "Dark";
    }
    
    else {
        this.textContent = "Light";
    }
    
});
