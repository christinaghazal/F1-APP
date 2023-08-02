import { renderCardWithData } from "../views/displayCard.js";


export function renderSeasonsOptions(options, seasonSelect) {
  // Looping On Options
  options.forEach((option) => {
    const optionEle = `<option value="${option}">${option}</option>`;
    seasonSelect.innerHTML += optionEle;
  });
}

// [5] Render Formula Data
export function renderFormulaData(formulaData, formulaContent) {
  const { category, results } = formulaData;

  // Reset Formula Content
  formulaContent.innerHTML = "";

  // Looping On formula Items And Create The Cards
  for (let i in results) {
    const item = results[i];

  

    renderCardWithData(category, item, formulaContent);
  }
}


   // Check Selected Category

   export function updateUrl(selectedCategory, selectedSeason){
    let url;

    if (selectedCategory === "drivers" || selectedCategory === "teams") {
          url = `https://api-formula-1.p.rapidapi.com/rankings/${selectedCategory}?season=${selectedSeason}`;
        } else if (selectedCategory === "races") {
          url = `https://api-formula-1.p.rapidapi.com/${selectedCategory}?season=${selectedSeason}`;
        } else {
         url = `https://api-formula-1.p.rapidapi.com/${selectedCategory}`;
        }
      return url;
       
} 