async function load() {
  const url = 'https://dummyjson.com/products/categories'
  const response = await fetch(url)
  const categories = await response.json()

  const categoryContainer = document.getElementById('menu_cagetory') // Phần tử HTML chứa danh mục
  categoryContainer.innerHTML = '' // Xóa nội dung cũ nếu có

  // Lấy 4 danh mục đầu tiên
  const FourCategories = categories.slice(0, 4) // Chỉ lấy 4 danh mục đầu tiên

  // Hiển thị các danh mục lên giao diện
  FourCategories.forEach(category => {
    categoryContainer.innerHTML += `
      <div class="menu" onclick="loadProducts('${category.slug}')">
        <span>${category.name}</span>
      </div>
    `
  })

  // Mặc định hiển thị sản phẩm của danh mục đầu tiên
  loadProducts(FourCategories[0].slug)
}

async function loadProducts(categorySlug) {
  const url = `https://dummyjson.com/products/category/${categorySlug}` // Lấy sản phẩm theo danh mục
  const response = await fetch(url)
  const data = await response.json()

  const productsContainer = document.getElementById('products') // Phần tử HTML chứa sản phẩm
  productsContainer.innerHTML = '' // Xóa nội dung cũ nếu có

  // Lấy 6 sản phẩm đầu tiên
  const products = data.products.slice(0, 6)

  // Hiển thị các sản phẩm lên giao diện
  products.forEach(product => {
    console.log(product.image) // Kiểm tra giá trị của product.image
    productsContainer.innerHTML += `
      <div class="product"> 
        <div class="image">
          <img src="${product.images}" />
        </div>
        <div class="infor">
          <h3>${product.title}</h3>
          <div class="price">
            <p>$${product.discountPercentage}</p>
            <p class="sale">$${product.price}</p>
          </div>
        </div>
        <div class="icons">
          <img src="/assest/fluent_cart-24-regular.png">
          <img src="/assest/uil_heart-alt (1).png">
          <img src="/assest/uil_search-plus (1).png">
        </div>
      </div>
    `
  })
}

load()
