


export function createForm() {
    const selectBox = document.createElement("div");
    selectBox.className = "select_box";
  
    const selectForm = document.createElement("form");
    selectForm.id = "select_form";
  
    const selectContainer = document.createElement("div");
    selectContainer.className = "select_container";
  
    // seasons Select
    const seasons = document.createElement("select");
    seasons.id = "seasons";
  
    // Default Seasons Option
    const defaultSeasonsOption = document.createElement("option");
    defaultSeasonsOption.textContent = "select season";
    // defaultSeasonsOption.disabled = true;
    defaultSeasonsOption.selected = true;
    seasons.appendChild(defaultSeasonsOption);
  
    // categories Select
    const categories = document.createElement("select");
    categories.id = "categories";
  
    // Default Categories Option
   const defaultCatOption = document.createElement("option");
         defaultCatOption.textContent = "select category";
         defaultCatOption.disabled = true;
         defaultCatOption.selected = true;
         categories.appendChild(defaultCatOption);

    const categoriesOptions = ["drivers", "teams", "races", "companions"]
          categoriesOptions.forEach((option) => {
    const optionEle = document.createElement("option");
          optionEle.value = option;
          optionEle.textContent = option;
      
        // Append optionEle To categories
           categories.appendChild(optionEle);
      });

           selectContainer.appendChild(seasons);
           selectContainer.appendChild(categories);
           
  
    const messagesDiv = document.createElement("div");
    messagesDiv.className = "messages";
  
    const validationError = document.createElement("h4");
    validationError.className = "validation_error";
  
    const loadingElement = document.createElement("h2");
    loadingElement.className = "loading_element";
  
    messagesDiv.appendChild(validationError);
    messagesDiv.appendChild(loadingElement);
  
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.id = "submit_btn";
    submitButton.textContent = "submit";
  
    selectForm.appendChild(selectContainer);
    selectForm.appendChild(messagesDiv);
    selectForm.appendChild(submitButton);
  
    selectBox.appendChild(selectForm);
    return selectBox;
  }
