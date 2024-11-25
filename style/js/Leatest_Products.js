fetch('https://dummyjson.com/products/categories')
  .then(response => response.json())
  .then(categories => {
    const limitedCategories = categories.slice(0, 4)
    const categoryContainer = document.getElementById('categories')
    let firstCategorySlug = null
    limitedCategories.forEach((category, index) => {
      const categoryElement = document.createElement('span')
      categoryElement.textContent = category.name
      if (index === 0) {
        categoryElement.classList.add('active-category')
        firstCategorySlug = category.slug
      }

      categoryElement.addEventListener('click', () => {
        document.querySelectorAll('#categories span').forEach(span => {
          span.classList.remove('active-category')
        })
        categoryElement.classList.add('active-category')
        showProducts(category.slug)
      })

      categoryContainer.appendChild(categoryElement)
    })

    if (firstCategorySlug) {
      showProducts(firstCategorySlug)
    }
  })
  .catch(error => console.error('Error:', error))
function showProducts(categorySlug) {
  fetch(`https://dummyjson.com/products/category/${categorySlug}`)
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.getElementById('products')
      productsContainer.innerHTML = ''
      const limitedProducts = data.products.slice(0, 6)
      limitedProducts.forEach(product => {
        const productElement = document.createElement('div')
        productElement.classList.add('product')
        productElement.innerHTML = `
          <div class="image-container">
              <img src="${product.thumbnail}" alt="${product.title}" />
          <div class="icon-container">
              <img class="cart-icon" data-product-id="${product.id}" 
             data-product-name="${product.title}" 
             data-product-price="${product.price}" 
             data-product-thumbnail="${product.thumbnail}"
              src="/assest/fluent_cart-24-regular.png" alt="Cart" />
              <img class="heart-icon" src="/assest/uil_heart-alt (1).png" alt="Heart" />
              <img class="search-icon" src="/assest/uil_search-plus (1).png" alt="Search" />
          </div>
        </div>
          <h2><a href="detail_products.html?id=${product.id}">${product.title}</a></h2>
          <div class="price-container">
            <p class="discount-price">$${product.discountPercentage}</p>
            <p class="original-price">$${product.price}</p>
        </div>
        `

        productsContainer.appendChild(productElement)
      })
      const cartIcons = document.querySelectorAll('.cart-icon')
      cartIcons.forEach(icon => {
        icon.addEventListener('click', addToCart)
      })
    })
    .catch(error => console.error('Error loading products:', error))
}
function addToCart(event) {
  const icon = event.target
  const product = {
    id: icon.getAttribute('data-product-id'),
    name: icon.getAttribute('data-product-name'),
    price: parseFloat(icon.getAttribute('data-product-price')),
    thumbnail: icon.getAttribute('data-product-thumbnail'),
    quantity: 1
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  const existingProductIndex = cart.findIndex(item => item.id === product.id)
  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1
  } else {
    cart.push(product)
  }

  localStorage.setItem('cart', JSON.stringify(cart))

  alert(`${product.name} đã được thêm vào giỏ hàng!`)
}
