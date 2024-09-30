
function burgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMobile = document.querySelector('#mobile-menu');
    let checker = 0


    burgerMenu.addEventListener('click', () => {
        
        burgerMenu.classList.toggle('active');
        
    });

    burgerMenu.addEventListener('click', ()=>{

        /* Check if burger menu closed of opened */
        if(checker === 0){
            checker = 1
        } else if(checker === 1){
            checker = 0
        }
        
        if(checker === 1){
            /* creating and appending DRINKS ELEMENT IN MOBILE NAV */
            const newDrinks = document.createElement('li');
            const newDrinksLink = document.createElement('a')
            newDrinksLink.textContent = 'Drinks'
            newDrinksLink.href = '#drinks-id'
            newDrinks.id = 'drinks'
            newDrinks.appendChild(newDrinksLink)
            
            /* creating and appending SHISHAS element in mobile nav */
            const newShishas = document.createElement('li');
            const newShishasLink = document.createElement('a')
            newShishasLink.textContent = 'Shishas'
            newShishasLink.href = '#shishas-id'
            newShishas.id = 'shishas'
            newShishas.appendChild(newShishasLink)
        
            /* creating and appending COCKTAILS element in mobile nav */
            const newCocktails = document.createElement('li');
            const newCocktailsLink = document.createElement('a')
            newCocktailsLink.textContent = 'Cocktails'
            newCocktailsLink.href = '#cocktails-id'
            newCocktails.id = 'cocktails'
            newCocktails.appendChild(newCocktailsLink) 

            /* creating and appending MENU ELEMENT IN MOBILE NAV */
            /* const newMenu = document.createElement('li');
            const newMenuLink = document.createElement('a')
            newMenuLink.textContent = 'Menu'
            newMenuLink.href = '#food-id'
            newMenu.id = 'menu'
            newMenu.appendChild(newMenuLink) */            
              
            /* creating and appending CONTACT element in mobile nav */
            const newContact = document.createElement('li');
            const newContactLink = document.createElement('a')
            newContactLink.textContent = 'Contact'
            newContactLink.href = '#contact-id'
            newContact.id = 'contact'
            newContact.appendChild(newContactLink) 
            
            /* adding all elements in UL */
            navMobile.appendChild(newDrinks)
            navMobile.appendChild(newShishas)
            navMobile.appendChild(newCocktails)
            /* navMobile.appendChild(newMenu) */
            navMobile.appendChild(newContact)
            
    
        } else if(checker === 0){
            
            const newDrinks = document.querySelector('#drinks');
            const newShishas = document.querySelector('#shishas');
            const newCocktails = document.querySelector('#cocktails');
            /* const newMenu = document.querySelector('#menu'); */
            const newContact = document.querySelector('#contact');

            if(newDrinks && newShishas && newCocktails && newContact /* && newMenu */){
                newDrinks.classList.add('disappearing');
                newShishas.classList.add('disappearing');
                newCocktails.classList.add('disappearing');
                newContact.classList.add('disappearing');
                /* newMenu.classList.add('disappearing'); */
            }
            newDrinks.addEventListener('animationend', function() {
                navMobile.removeChild(newDrinks);
            });
            newShishas.addEventListener('animationend', function() {
                navMobile.removeChild(newShishas);
            });
            newCocktails.addEventListener('animationend', function() {
                navMobile.removeChild(newCocktails);
            });
            newContact.addEventListener('animationend', function() {
                navMobile.removeChild(newContact);
            });
            /* newMenu.addEventListener('animationend', function() {
                navMobile.removeChild(newMenu);
            }); */
            
    
            /* CLEAR MOBILE NAV  */
            setTimeout(function() {
                navMobile.innerHTML = '';
            }, 500);
        }
    })
    
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 1125){
            burgerMenu.classList.remove('active');
            navMobile.innerHTML = ''
        }
    })
    
}

burgerMenu()



