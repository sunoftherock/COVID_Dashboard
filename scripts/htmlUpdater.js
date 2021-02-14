var document = window.document;


// const api_url = 'https://api.covid19tracker.ca/summary';
const api_url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';
var province = 'Ontario';


// Total cases Canada
async function getDATA(country_selected) {
    //result == "ON"
    // console.log(country_selected)

    const response = await fetch(api_url);
    const data = await response.json();

    
  
    result = "Newfoundland and Labrador"

    var regionIndexMap = new Map();
    regionIndexMap.set("Newfoundland and Labrador", 1);
    regionIndexMap.set("Prince Edward Island", 2);
    regionIndexMap.set("Nova Scotia", 3);
    regionIndexMap.set("New Brunswick", 4);
    regionIndexMap.set("Quebec", 5);
    regionIndexMap.set("Ontario", 6);
    regionIndexMap.set("Manitoba",7)  ;
    regionIndexMap.set("Saskatchewan",8);
    regionIndexMap.set("Alberta", 9);
    regionIndexMap.set("British Columbia", 10);
    regionIndexMap.set("Yukon", 11);
    regionIndexMap.set("Northwest Territories", 12);
    regionIndexMap.set("Nunavut",13);
    console.log(regionIndexMap);
    
    console.log(country_selected)
    console.log(regionIndexMap.get(result))

    var infected = data.infectedByRegion[regionIndexMap.get(result)]["infectedCount"]
    document.getElementById('main-title').textContent = "There have been a total of " + infected  + " cases of COVID in Ontario";
 
    
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


//element.appendChild(paragraphElement);
//<div id= "main title"><h1>`there's a ${chance}% chance you will die if you go out`</h1></div>