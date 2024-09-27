async function fetchProducts() {
  const url = await fetch('https://dummyjson.com/products')
  const data = await url.json()
  document.getElementById('products-container').innerHTML = data.products
    .slice(0, 12)
    .map(
      product =>
        `
          <div class="product-card">
            <img src="${product.thumbnail}">
            <h3>${product.title}</h3>
            <p>Code:${product.sku}</p>
            <div class="price">$${product.price}</div>
          </div>`
    )
    .join('')
}

fetchProducts()
