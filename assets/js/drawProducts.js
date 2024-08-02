import { fetchApi } from "./fetchApi.js"
import { product } from "./variable.js"
import { params } from "./variable.js"
export const drawProducts = () => {
  const api = `http://localhost:3000/products?q=${params.q}`
  fetchApi(api)
    .then(data => {
      const arrayHTML = data.map((item) => {
        return `
        <div class="product__item">
          <div class="product__image">
            <img src=${item.thumbnail} alt="anh">
          </div>
          <div class="product__content">
            <div class="product__title">
              ${item.title}
            </div>
            <div class="product__meta">
              <div class="product__price">
                ${item.price}$
              </div>
              <div class="product__des">
                Còn lại: ${item.stock} sp
              </div>
            </div>
          </div>
        </div>
      `
      })
      const stringHTML = arrayHTML.join("");
      product.innerHTML = stringHTML
    })
}
