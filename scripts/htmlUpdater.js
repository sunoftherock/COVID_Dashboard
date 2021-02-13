var document = window.document;

var hi;

// const api_url = 'https://api.covid19tracker.ca/summary';
const api_url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';
async function getDATA() {
const response = await fetch(api_url);
const data = await response.json();
response.then(hi => data.infected, console.log(':(')).catch(console.log(':\'('));
console.log(data.infected);

return toString(data.infected);
}
//temp = getDATA();

var result;
 

fetch('https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true', {})
    .then(response => response.json());
    .then(data => console.log(data))

//var chance = total_cases.GET('https://api.covid19tracker.ca/summary');

//var chance = 10;


var paragraphElement = document.createElement('h1');
//creates <h1></h1>


paragraphElement.innerHTML = hi //`There's a ${temp}% chance you will die if you go out`
//creates <h1>`there's a ${chance}% chance you will die if you go out`</h1>


var element = document.getElementById('main title');
//looks for the 'main title' tag inside the document


element.appendChild(paragraphElement);
//<div id= "main title"><h1>`there's a ${chance}% chance you will die if you go out`</h1></div>



