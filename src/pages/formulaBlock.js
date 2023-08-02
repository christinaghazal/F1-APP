import { createForm } from "./createForm.js";

export function createFormulaBlock() {
  const createSection = (id) => {
    const section = document.createElement("section");
    section.id = id;
    return section;
  };

  const createDiv = (className) => {
    const div = document.createElement("div");
    div.className = className;
    return div;
  };

  const createHeading = (className) => {
    const heading = document.createElement("h1");
    heading.className = className;
    return heading;
  };

  const section = createSection("formula-block");
  const divContainer = createDiv("container");
  const selectForm = createForm();
  const httpErrorMsg = createHeading("http_error_msg");
  const formulaContent = createDiv("formula-content");
  const formulaNewsDiv = createDiv("formula-news");
  const formulaNewsContainer = createDiv("news_container");

  formulaNewsDiv.appendChild(formulaNewsContainer);

  divContainer.appendChild(selectForm);
  divContainer.appendChild(httpErrorMsg);
  divContainer.appendChild(formulaContent);
  divContainer.appendChild(formulaNewsDiv);

  section.appendChild(divContainer);

  document.body.appendChild(section);
}
