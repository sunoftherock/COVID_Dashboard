var document = window.document;


// const api_url = 'https://api.covid19tracker.ca/summary';
const api_url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';
var province = 'Ontario';

// Total cases Canada
async function getDATA() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.infected);
    if (province == 'Ontario') {
      const {Ontario, infectedCount} = data;
      document.getElementById('main title').textContent = `There have been a total of ${region} cases in Ontario`;
    }
    
   //  const {infected} = data;
   //  document.getElementById('main title').textContent = `There have been a total of ${infected} cases in Canada`;
}

temp = getDATA();

var result;

var paragraphElement = document.createElement('h1');
//creates <h1></h1>


// paragraphElement.innerHTML = `There's a ${temp}% chance you will die if you go out`
//creates <h1>`there's a ${chance}% chance you will die if you go out`</h1>


//var element = document.getElementById('Fact2');
//looks for the 'main title' tag inside the document


element.appendChild(paragraphElement);
//<div id= "main title"><h1>`there's a ${chance}% chance you will die if you go out`</h1></div>