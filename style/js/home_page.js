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

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const randomProduct = data.products[Math.floor(Math.random() * data.products.length)]

    // Tính toán giá giảm
    const discountPercentage = 20 // Tùy chỉnh theo ý bạn
    const discountedPrice = randomProduct.price - (randomProduct.price * discountPercentage) / 100

    // Hiển thị sản phẩm
    const productHTML = `
        <div class="product_item">
          <div class='content_product'>
            <h2>20% Discount Of All Products</h2>
            <h3>${randomProduct.title}</h3>
            <p>${randomProduct.description}</p>
            <div class = 'icon_pro'>
              <div class='flex'>
              <i class="fa-solid fa-check">Material expose like metals</i>
               <i class="fa-solid fa-check">Material expose like metals</i>
              </div>
              
              <div class='flex'>
               <i class="fa-solid fa-check">Material expose like metals</i>
                <i class="fa-solid fa-check">Material expose like metals</i>
              </div>
            </div>
          </div>
          <img src="${randomProduct.thumbnail}" alt="${randomProduct.title}" />
        </div>
      `
    document.getElementById('container_item').innerHTML = productHTML
  })
  .catch(error => console.error('Lỗi khi lấy sản phẩm:', error))

// Fetch tất cả sản phẩm từ API
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const categories = data.products.map(product => product.category)
    const uniqueCategories = [...new Set(categories)] // Lấy danh sách danh mục duy nhất
    const firstCategory = uniqueCategories[0] // Lấy danh mục đầu tiên

    // Lọc ra sản phẩm thuộc danh mục đầu tiên
    const topCategoryProducts = data.products.filter(product => product.category === firstCategory)

    // Hiển thị sản phẩm
    const categoriesHTML = topCategoryProducts
      .map(
        product => `
    <div class="product_top">
      <div class='contain_pro'>
      <img src="${product.thumbnail}" alt="${product.title}" />
      </div>
      <h3>${product.title}</h3>
      <p> $${product.price}</p>
       <button class="btn_view_detail">View Detail</button>
        <div class="hover"></div>
    </div>
    
  `
      )
      .join('')

    document.getElementById('categories_container').innerHTML = categoriesHTML
  })
  .catch(error => console.error('Lỗi khi lấy sản phẩm:', error))
