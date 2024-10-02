async function fetchProducts(category) {
  // Định nghĩa URL dựa trên danh mục
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

  // Lấy dữ liệu từ URL
  const response = await fetch(url)
  const data = await response.json()

  // Lấy phần tử chứa sản phẩm và xóa nội dung cũ
  const productsContainer = document.getElementById('products')
  productsContainer.innerHTML = ''

  // Thêm sản phẩm mới vào trang
  data.products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product_leatest">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      </div>
    `
  })
}
