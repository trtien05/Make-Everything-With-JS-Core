import { fetchApi } from "./fetchApi.js"
import { product } from "./variable.js"
import { params } from "./variable.js"

export const drawProducts = () => {
  let category = '';
  if (params.category !== '') {
    category = `&category=${params.category}`
  }
  const api = `http://localhost:3000/products?q=${params.q}&_page=${params.page}&_limit=${params.limit}&_sort=${params.sort}&_order=${params.order}${category}`
  fetchApi(api)
    .then(data => {
      const arrayHTML = data.map((item) => {
        return `
        <div class="product__item">
          <div class="product__image">
            <img src=${item.thumbnail} alt="anh">
            <div class="product__discount">${item.discountPercentage}</div>
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
