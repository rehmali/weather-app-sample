/*HTML Code**/

const mainHTML = `
    <section class="main-section">
       <div class="search">
           <input type="text" placeholder="Search City Sui/Quetta/Karachi/Lahore" class="main-search">
           
           <img src="images/logo-3.png" alt="Search" class="search-logo-main">
       </div>

       <img src="images/sun.webp" alt="Sunny" class="sunny">

       <div class="tempratue">
        <p class="degrees"> 00\u00B0CC</p>
        <p class="weather">---</p>
       </div>
        
       
           <div class="bottom-section">
               <div class="left"> 
                   <img src="images/drop.png" alt="drop">
                    <div class="text-humi">
                        <p class="humdidity-perentage"> 00%</p>
                        <p class="humidity">Humidity</p>                  
                    </div>
               </div>
           
               <div class="right"> 
                <img src="images/fire-hose.png" alt="drop" class="image">
                 <div class="text-wind">
                     <p class="wind-speed"> 00.0Km/H<p>
                     <p class="wind">Wind Speed</p>                  
                 </div>
            </div>
            </div>
    </section> `
const DOM = {

    search : document.querySelector('.search-logo'),
    searchPlace: document.querySelector('.first-search-text'),
    main: document.querySelector('.main'),
    mainSearch: document.querySelector('.main-search'),   
    searchlogoMain: document.querySelector('.search-logo-main'),  
};


function search (DOM){

    DOM.search.addEventListener('click', event =>{

            console.log('Working');
            const userSearch = DOM.searchPlace.value;
            if (userSearch) {
                
                const element = document.querySelector('.first-search');
                element.remove();
                DOM.main.insertAdjacentHTML('afterbegin',mainHTML);
                
            }

    });

    DOM.main.addEventListener('click', event => {
        if (event.target.classList.contains('search-logo-main')) {
            // const userSearch=DOM.mainSearch.value; 
            const userSearch = document.querySelector('.main-search').value;
        
             if (userSearch=='Karachi' || userSearch=='karachi' ) {karachiWeather(); }
             else if (userSearch=='Sui' || userSearch=='sui') {suiWeather(); }
             else if (userSearch=='Lahore' || userSearch=='lahore') {lahoreWeather(); }
             else if (userSearch=='Quetta' || userSearch=='quetta') {quettaWeather(); }
             else  {errorWeather();}

        }
      });
}

search(DOM);


//Sui Weather Funciton 
function suiWeather(){
    document.querySelector('.degrees').textContent='30\u00B0C';
    document.querySelector('.weather').textContent="Rainy";
    document.querySelector('.humdidity-perentage').textContent="30%";
    document.querySelector('.wind-speed').textContent="3.3Km/H";
   
    const oldChild = document.querySelector('.sunny');
    const oldParent = oldChild.parentNode;

    const newChild = document.createElement('img');
    

    newChild.src = 'images/raining.jpg';
    newChild.alt = 'Cloudy';
    newChild.className = 'sunny';
   oldParent.replaceChild(newChild,oldChild);
    }

//Karachi Weather 
function karachiWeather(){
    document.querySelector('.degrees').textContent='35\u00B0C';
    document.querySelector('.weather').textContent="Cloudy";
    document.querySelector('.humdidity-perentage').textContent="48%";
    document.querySelector('.wind-speed').textContent="2.0Km/H";
   
    const oldChild = document.querySelector('.sunny');
    const oldParent = oldChild.parentNode;

    const newChild = document.createElement('img');
    

    newChild.src = 'images/cloud.png';
    newChild.alt = 'Cloudy';
    newChild.className = 'sunny';
   oldParent.replaceChild(newChild,oldChild);
    }

//Lahore Weather 
function lahoreWeather(){
    document.querySelector('.degrees').textContent='42\u00B0C';
    document.querySelector('.weather').textContent="Sunny";
    document.querySelector('.humdidity-perentage').textContent="55%";
    document.querySelector('.wind-speed').textContent="1.0Km/H";
   
    const oldChild = document.querySelector('.sunny');
    const oldParent = oldChild.parentNode;

    const newChild = document.createElement('img');
    

    newChild.src = 'images/sun.webp';
    newChild.alt = 'Sunny';
    newChild.className = 'sunny';
   oldParent.replaceChild(newChild,oldChild);
    }

    //Quetta  
function quettaWeather(){
    document.querySelector('.degrees').textContent='-1\u00B0C';
    document.querySelector('.weather').textContent="Snowy";
    document.querySelector('.humdidity-perentage').textContent="80%";
    document.querySelector('.wind-speed').textContent="1.0Km/H";
   
    const oldChild = document.querySelector('.sunny');
    const oldParent = oldChild.parentNode;

    const newChild = document.createElement('img');
    

    newChild.src = 'images/snow.jpg';
    newChild.alt = 'Snowy';
    newChild.className = 'sunny';
   oldParent.replaceChild(newChild,oldChild);
    }

    //Error  
function errorWeather(){
    document.querySelector('.degrees').textContent='-00\u00B0C';
    document.querySelector('.weather').textContent="---";
    document.querySelector('.humdidity-perentage').textContent="-";
    document.querySelector('.wind-speed').textContent="-";
   
    const oldChild = document.querySelector('.sunny');
    const oldParent = oldChild.parentNode;

    const newChild = document.createElement('img');
    

    newChild.src = 'images/error.jpg';
    newChild.alt = 'Error';
    newChild.className = 'sunny';
   oldParent.replaceChild(newChild,oldChild);
    }
    