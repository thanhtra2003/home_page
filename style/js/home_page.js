let limit = 4
let skip = 0
const totalProducts = 12
const totalPages = Math.ceil(totalProducts / limit)

async function fetchFeaturedProducts() {
  const response = await fetch(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
  const data = await response.json()
  displayProducts(data.products)
  createPaginationDots()
}

function displayProducts(products) {
  const container = document.getElementById('products-containers')
  container.innerHTML = ''
  products.forEach(product => {
    const productCard = `<div class="product_card">
                <img class="img_pro" src=${product.thumbnail}>
                <div class="infor_pro">
                    <span class="name">${product.title}</span>
                    <div class="line">
                      <div class ="line_color1"></div>
                       <div class ="line_color2"></div>
                        <div class ="line_color3"></div>
                    </div>
                    <span class="code">Code - ${product.sku}</span>
                    <span class="price">$${product.price}</span>
                </div>
            </div>`
    container.innerHTML += productCard
  })
}

function createPaginationDots() {
  const dotsContainer = document.getElementById('pagination-dots')
  dotsContainer.innerHTML = ''

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span')
    dot.classList.add('dot')
    dot.dataset.page = i

    if (i === skip / limit) {
      dot.classList.add('active')
    }

    dot.addEventListener('click', () => {
      skip = i * limit
      fetchFeaturedProducts()
    })

    dotsContainer.appendChild(dot)
  }
}
fetchFeaturedProducts()
