
const api_url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';
async function getDATA() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.infected);
    return toString(data.infected);
}
temp = getDATA();

var result;

temp = 10

var paragraphElement = document.createElement('h1');
//creates <h1></h1>
line-height: 3rem;

paragraphElement.innerHTML = `${temp} people are dead`
//creates <h1>`there's a ${chance}% chance you will die if you go out`</h1>


var element = document.getElementById('main title');
//looks for the 'main title' tag inside the document


element.appendChild(paragraphElement);
//<div id= "main title"><h1>`there's a ${chance}% chance you will die if you go out`</h1></div>
