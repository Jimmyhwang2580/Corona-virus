

 // 1. SELECT ELEMENTS
// search country (because we need to know what country someone is searching for)
const searchCountry = document.querySelector(".search-country");

// cases (because we need somewhere to show the amount of cases that we get from our API)
const cases = document.querySelector("#cases");

// deaths (because we need somewhere to show the amount of cases that we get from our API)
const deaths = document.querySelector("#deaths");

// % of deaths (same as above)
const percent = document.querySelector("#percent");

// country (same as above)
const country = document.querySelector("#country");

// population (same as above)
const population = document.querySelector("#population");

// last updated (same as above)
const lastUpdated = document.querySelector("#update");

// form (because we need to listen for when the send button is pressed)
const form = document.querySelector(".submit")

// 2. CREATE OUR EVENT HANDLERS
// create an async function that can request the API and change the information in our HTML
cont async() = document.querySelector.innerHTML

  // 2a. GET INFORMATION FOR REQUEST
  // get searchCountry's current value and save it into a variable
const searchCountry = async () => {
  try {

    

 // 2b. MAKE API CALL AND SAVE INTO VARIABLE
  // use the searchCountry's current value to get the data from our API and save it into a variable (so we have our response)
   
  const response = await axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/");


  // 2c. UPDATE THE HTML / TEXT TO SHOW INFORMATION FROM API
  // change our cases inner text to be the cases from our response
  // do the same as the cases with deaths, % of deaths, etc.

  const casesHandler = () => {
    console.log(casesHandler)
    }
    
    const deathsHandler = () => {
    console.log(deathsHandler)
    }
    
    const percentHandler = () => {
    console.log(percentHandler)
    }
    
    const countryHandler = () => {
    console.log(countryHandler)
    }
    
    const lastUpdatedHandler = () => {
    console.log(lastUpdatedHandler)
    }
    
    const formHandler = () => {
    console.log(formHandler)
    }

  }
 

}

 

// 3. ATTACH OUR EVENT LISTENERS
// attach our async function with an event listener to our form on the submit event

cases.addEventListener("click", casesHandler); 
deaths.addEventListener("click", deathsHandler); 
percent.addEventListener("click", percentHandler); 
country.addEventListener("click", countryHandler); 
lastUpdated.addEventListener("click", lastUpdatedHandler); 
form.addEventListener("click", formHandler); 














