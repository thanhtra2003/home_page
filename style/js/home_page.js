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
    const productCard = `
    <div class="product_card">
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
    <!-- Icons giỏ hàng và yêu thích -->
      <div class="icons">
        <img src="/assest/fluent_cart-24-regular.png">
        <img src="/assest/uil_heart-alt (1).png">
        <img src="/assest/uil_search-plus (1).png">
      </div>
    <!-- Button View Detail -->
      <button class="btn_view_detail">View Detail</button>
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

// trending products
async function trendingProducts() {
  const url = `https://dummyjson.com/products`
  const response = await fetch(url)
  const data = await response.json()

  const productsContainer = document.getElementById('container_trending')
  productsContainer.innerHTML = ''
  const products = data.products.slice(0, 4)
  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product_trend">
        <div class="pading">
          <div class="image_trend">
            <img src="${product.images[0]}" alt="${product.title}" />
          </div>
        </div>
        
        <div class="infor_pro">
          <h3 class="title">${product.title}</h3>
          <div class="price_trend">
            <p class="discount">$${product.discountPercentage}</p>
            <p class="origin">$${product.price}</p>
          </div>
        </div>
         <!-- Icons giỏ hàng và yêu thích -->
        <div class="icons">
          <img src="/assest/fluent_cart-24-regular.png">
          <img src="/assest/uil_heart-alt (1).png">
          <img src="/assest/uil_search-plus (1).png">
        </div>
    <!-- Button View Detail -->
        <button class="btn_view_detail">View Detail</button>
      </div>
    `
  })
}
trendingProducts()

// trending list
async function trendingList() {
  const url = `https://dummyjson.com/products`
  const response = await fetch(url)
  const data = await response.json()

  const productsContainer = document.getElementById('container_trendList')
  productsContainer.innerHTML = ''
  const products = data.products.slice(0, 3)
  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="trend_list">
          <div class="image_list">
            <img src="${product.images[0]}" alt="${product.title}" />
          </div>
        <div class="infor_list">
          <h3 class="title_list">${product.title}</h3>
          <p class="origin_list">$${product.price}</p>
        </div>
      </div>
    `
  })
}
trendingList()
