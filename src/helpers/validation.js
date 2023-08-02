

// [4] Validate Selected Values
export function validateSelectedValues(selectedSeason, selectedCategory, errorMsg) {
    if (
      selectedSeason === "select season" ||
      selectedCategory === "select category"
    ) {
        errorMsg.innerText = "please select season and category!";
      return true;
    }
  
    // Reset
    errorMsg.innerText = "";
    return false;
  }