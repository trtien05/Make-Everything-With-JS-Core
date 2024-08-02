import { fetchApi } from "./fetchApi.js"
import { category } from "./variable.js"

export const drawCategory = () => {
  fetchApi(`http://localhost:3000/category`)
    .then(data => {
      const arrayHTML = data.map((item) => {
        return `
        <div class="category__item">
          ${item}
        </div>
      `
      })
      const stringHTML = arrayHTML.join("");
      category.innerHTML = stringHTML
    })
}

