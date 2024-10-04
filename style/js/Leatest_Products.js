//4 sản phẩm
async function load() {
  const url = 'https://dummyjson.com/products?limit=4'
  const response = await fetch(url)
  const data = await response.json()

  const productsContainer = document.getElementById('products')
  productsContainer.innerHTML = ''

  data.products.forEach(product => {
    productsContainer.innerHTML += `
              <div class="product_leatest">
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
              </div>
          `
  })
}
load()
//mỗi cagetory là 6 sản phẩm
async function fetchProducts(category) {
  let url
  if (category === 'new-arrival') {
    url = 'https://dummyjson.com/products?limit=5'
  } else if (category === 'best-seller') {
    url = 'https://dummyjson.com/products?limit=5&sort=desc'
  } else if (category === 'featured') {
    url = 'https://dummyjson.com/products?limit=5&skip=10'
  } else if (category === 'special-offer') {
    url = 'https://dummyjson.com/products?limit=5&skip=20'
  }

  const response = await fetch(url)
  const data = await response.json()
  const productsContainer = document.getElementById('products')
  productsContainer.innerHTML = ''

  data.products.forEach(product => {
    productsContainer.innerHTML += `
              <div class="product_leatest">
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
              </div>
          `
  })
}
