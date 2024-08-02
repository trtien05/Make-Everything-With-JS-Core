import { drawCategory } from "./drawCategory.js"
import { drawProducts } from "./drawProducts.js"
import { paginationNext, paginationNumber, paginationPrev, params, searchButton, searchInput } from "./variable.js"

drawCategory()

drawProducts()

//Search
const search = () => {
  params.q = searchInput.value;
  drawProducts()
}

searchInput.addEventListener('keyup', function (e) {
  if (e.key === "Enter") {
    search()
  }

})

searchButton.addEventListener('click', function () {
  search();
})

//End Search

//Pagination

paginationNext.addEventListener('click', function () {
  params.page = params.page + 1;
  paginationNumber.innerHTML = params.page
  drawProducts()
})
paginationPrev.addEventListener('click', function () {
  if (params.page > 1) {
    params.page = params.page - 1;
    paginationNumber.innerHTML = params.page
    drawProducts()
  }

})