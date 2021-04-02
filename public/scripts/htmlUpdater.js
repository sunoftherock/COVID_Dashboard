var document = window.document;


// const api_url = 'https://api.covid19tracker.ca/summary';
const api_url = 'https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true';
var province = 'Ontario';

// Total cases Canada
async function getDATA(country_selected) {
    //result == "ON"

    const response = await fetch(api_url);
    const data = await response.json();

    
  
    result = typeof country_selected !== 'undefined' ? country_selected : 'Ontario';

    var regionIndexMap = new Map();
    regionIndexMap.set("Newfoundland and Labrador", [1, 520998, 11]);
    regionIndexMap.set("Prince Edward Island", [2, 159713, 0]);
    regionIndexMap.set("Nova Scotia", [3, 979115, 1]);
    regionIndexMap.set("New Brunswick", [4, 781315, 7]);
    regionIndexMap.set("Quebec", [5, 8575779, 812]);
    regionIndexMap.set("Ontario", [6, 14733119, 763]);
    regionIndexMap.set("Manitoba",[7, 1379584, 230])  ;
    regionIndexMap.set("Saskatchewan",[8, 1177884, 187]);
    regionIndexMap.set("Alberta", [9, 4428112, 371]);
    regionIndexMap.set("British Columbia", [10, 5145851, 226]);
    regionIndexMap.set("Yukon", [11, 42176, 0]);
    regionIndexMap.set("Northwest Territories", [12, 45074, 0]);
    regionIndexMap.set("Nunavut",[13, 39285, 0]);
    
    console.log(regionIndexMap.get(result)[0])

    var infected = data.infectedByRegion[regionIndexMap.get(result)[0]]["infectedCount"]
    var deaths = data.infectedByRegion[regionIndexMap.get(result)[0]]["deceasedCount"]
    var hospitalizations = regionIndexMap.get(result)[2]

    console.log(deaths)
    console.log(regionIndexMap.get(result)[1])
    
    var percent = infected / regionIndexMap.get(result)[1] * 100 + 7;
    var rounded = percent.toFixed(2)

    
    document.getElementById('main-title').innerHTML = `You have a <a>${rounded}%</a> chance of getting COVID when going out in <a>${result}</a>`;


    document.getElementById('Fact2').innerHTML = `Join <a>${hospitalizations}</a> other people in hospitals near you if you get COVID-19`;
    if (deaths == 1) {
        document.getElementById('Fact3').innerHTML = `<a>${deaths}</a> person has already died in`  + result;
    } else {
        document.getElementById('Fact3').innerHTML = `<a>${deaths}</a> people have already died in ` + result;
    }
    

   //  const {infected} = data;
   //  document.getElementById('main title').textContent = `There have been a total of ${infected} cases in Canada`;
}

temp = getDATA();

var result;

var paragraphElement = document.createElement('h1');

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
//creates <h1></h1>


// paragraphElement.innerHTML = `There's a ${temp}% chance you will die if you go out`
//creates <h1>`there's a ${chance}% chance you will die if you go out`</h1>


//var element = document.getElementById('Fact2');
//looks for the 'main title' tag inside the document


//element.appendChild(paragraphElement);
//<div id= "main title"><h1>`there's a ${chance}% chance you will die if you go out`</h1></div>
