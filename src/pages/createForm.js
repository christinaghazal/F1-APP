export function createForm() {
      function createElement(tag, attributes = {}) {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach((key) => {
          element[key] = attributes[key];
        });
        return element;
      }
    
      const selectBox = createElement("div", { className: "select_box" });
      const selectForm = createElement("form", { id: "select_form" });
      const selectContainer = createElement("div", { className: "select_container" });
    
      // Seasons Select
      const seasons = createElement("select", { id: "seasons" });
      const defaultSeasonsOption = createElement("option", {
            textContent: "select season",
            selected: true,
      });
            seasons.appendChild(defaultSeasonsOption);
    
      // Categories Select
      const categories = createElement("select", { id: "categories" });
      const defaultCatOption = createElement("option", {
            textContent: "select category",
            disabled: true,
            selected: true,
      });
      categories.appendChild(defaultCatOption);
    
        const categoriesOptions = ["drivers", "teams", "races", "companions"];
              categoriesOptions.forEach((option) => {
        const optionEle = createElement("option", {
              value: option,
              textContent: option,
        });
              categories.appendChild(optionEle);
      });
    
               selectContainer.appendChild(seasons);
               selectContainer.appendChild(categories);
    
      const messagesDiv = createElement("div", { className: "messages" });
      const validationError = createElement("h4", { className: "validation_error" });
      const loadingElement = createElement("h2", { className: "loading_element" });
    
            messagesDiv.appendChild(validationError);
            messagesDiv.appendChild(loadingElement);
    
      const submitButton = createElement("button", {
            type: "submit",
            id: "submit_btn",
            textContent: "submit",
      });
    
      selectForm.appendChild(selectContainer);
      selectForm.appendChild(messagesDiv);
      selectForm.appendChild(submitButton);
    
      selectBox.appendChild(selectForm);
      return selectBox;
    }
    