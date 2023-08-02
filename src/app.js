
import { createHeader } from  "./views/header.js";
import { createFormulaBlock } from "./pages/formulaBlock.js";
import { createFooter } from "./views/footer.js"
import { renderSeasonsOptions } from "./helpers/renderHelpers.js";
import { validateSelectedValues } from "./helpers/validation.js";
import { updateUrl } from "./helpers/renderHelpers.js"
import { renderFormulaData } from "./helpers/renderHelpers.js";
import { renderFormulaOneNews } from "./views/displayCard.js";
import { url , newsUrl} from "./constants.js";
import { scrollButtonFn } from "./views/scrollBtn.js";
//?================================
// Formula One Api

let baseUrl = "https://api-formula-1.p.rapidapi.com/";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "92a78f9457msh194f086dba7a0e7p1e95d6jsnc74693522574",
    "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
  },
};



//?=====================================================================

createHeader();

createFormulaBlock();

scrollButtonFn();

createFooter();
 
//?=====================================


 const selectForm = document.getElementById("select_form");
 const seasons = document.getElementById("seasons");
 const categories = document.getElementById("categories");
 const validationError = document.querySelector(".validation_error");
 const loadingElement = document.querySelector(".loading_element");
 const httpErrorMsg = document.querySelector(".http_error_msg");
 const formulaContent = document.querySelector(".formula-content");
 const formulaNewsContainer = document.querySelector(".news_container");
       
//?====================================

fetch(newsUrl)
  .then((res) => res.json())
  .then((newsData) => {
    console.log(newsData);
    const filteredNews = newsData.articles.filter(
      (item) =>
         
        (item.title.includes("Formula One") ||
        item.title.includes("Formula 1") ||
        item.title.includes("F1")) && item.urlToImage 
     );

    renderFormulaOneNews(filteredNews, formulaNewsContainer);
  })
  .catch((error) => {
    console.log(error);
  });

//?====================================
fetch(url, options)
  .then((res) => res.json())
  .then((results) => {
    
  const data = results.response;
  renderSeasonsOptions(data, seasons);

  });

  selectForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Read selectedSeason And selectedCategory
    const selectedSeason = seasons.value;
    const selectedCategory = categories.value;
    //console.log(selectedCategory);
  
    // Call validateSelectedValues function
    if (validateSelectedValues(selectedSeason, selectedCategory, validationError)) {
      return;
    }
  
   const url = updateUrl(selectedCategory, selectedSeason);   


  
    // Send Request And Fetch The Data
    fetch(url, options)
      .then((res) => {
        loadingElement.innerText = "loading...";
        return res.json();
      })
      .then((results) => {
        let loadedData = [...results.response];
  
        if (results.get === "races") {
          // Filter Races Data
          loadedData = results.response.filter((race) => {
            const {
              fastest_lap: { driver },
            } = race;
  
            return driver.id;
          });
        }
  
        console.log(loadedData);
  
        // Reset loadingElement and httpErrorMsg
        loadingElement.innerText = "";
        httpErrorMsg.innerText = "";
  
        const selectedData = {
          results: loadedData,
          category: selectedCategory,
        };
      
  
        renderFormulaData(selectedData, formulaContent);
      })
      .catch((error) => {
        // Reset loadingElement And formulaContent
        loadingElement.innerText = "";
        formulaContent.innerHTML = "";
        httpErrorMsg.innerText = `${error.message}!`;
      });
  });

  window.addEventListener("scroll", scrollButtonFn);







 



