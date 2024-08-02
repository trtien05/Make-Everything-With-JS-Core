import { drawProducts } from "./drawProducts.js"
import { fetchApi } from "./fetchApi.js"
import { category, params } from "./variable.js"

export const drawCategory = () => {
  fetchApi(`http://localhost:3000/category`)
    .then(data => {
      const arrayHTML = data.map((item) => {
        return `
        <div class="category__item">${item}</div>
      `
      })
      const stringHTML = arrayHTML.join("");
      category.innerHTML = stringHTML;
      const categoryList = document.querySelectorAll('.category__item')
      categoryList.forEach((item) => {
        const categoryItem = item.textContent
        item.addEventListener('click', function () {
          params.category = categoryItem;
          drawProducts()
        })
      })
    })
}

