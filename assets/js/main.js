import { drawCategory } from "./drawCategory.js"
import { drawProducts } from "./drawProducts.js"
import { paginationNext, paginationNumber, paginationPrev, params, searchButton, searchInput, selection } from "./variable.js"

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

//End Pagination

//Select

selection.addEventListener('change', function (e) {
  const option = e.target.value;
  switch (option) {
    case "default":
      params.sort = '';
      params.order = '';
      break;
    case "ascending":
      params.sort = 'price';
      params.order = 'asc';
      break;
    case "descending":
      params.sort = 'price';
      params.order = 'desc';
      break;
    case "discount":
      params.sort = 'discountPercentage';
      params.order = 'desc';
      break;
    default:
      break;
  }
  drawProducts()

})
