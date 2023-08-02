import { renderCardWithData } from "../views/displayCard.js";

export function renderSeasonsOptions(options, seasonSelect) {
  seasonSelect.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
}

export function renderFormulaData(formulaData, formulaContent) {
  const { category, results } = formulaData;

  // Reset Formula Content
  formulaContent.innerHTML = "";

  // Looping On formula Items And Create The Cards
  results.forEach((item) => {
    renderCardWithData(category, item, formulaContent);
  });
}

export function updateUrl(selectedCategory, selectedSeason) {
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
