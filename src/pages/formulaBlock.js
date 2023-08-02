import { createForm } from "./createForm.js";

export function createFormulaBlock() {
  const createElement = (type, className, id = null) => {
    const element = document.createElement(type);
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    return element;
  };

  const section = createElement("section", null, "formula-block");
  const divContainer = createElement("div", "container");
  const httpErrorMsg = createElement("h1", "http_error_msg");
  const formulaContent = createElement("div", "formula-content");
  const formulaNewsDiv = createElement("div", "formula-news");
  const formulaNewsContainer = createElement("div", "news_container");

  formulaNewsDiv.appendChild(formulaNewsContainer);

  const selectForm = createForm();
  divContainer.append(selectForm, httpErrorMsg, formulaContent, formulaNewsDiv);
  section.appendChild(divContainer);
  document.body.appendChild(section);
}
