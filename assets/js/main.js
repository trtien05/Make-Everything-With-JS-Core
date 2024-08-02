import { drawCategory } from "./drawCategory.js"
import { drawProducts } from "./drawProducts.js"
import { params, searchButton, searchInput } from "./variable.js"


drawCategory()

drawProducts()

// searchInput.addEventListener('change', function (e) {
//   params.q = e.target.value;
//   drawProducts()

//   console.log(params.q)
// })

searchButton.addEventListener('click', function (e) {

  params.q = searchInput.value;
  drawProducts()

})