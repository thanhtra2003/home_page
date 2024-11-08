function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const cartItemsContainer = document.getElementById('cart-items')
  const subtotalElement = document.getElementById('subtotal')

  cartItemsContainer.innerHTML = ''
  let subtotal = 0

  cart.forEach((product, index) => {
    const productTotal = product.price * product.quantity
    subtotal += productTotal

    const row = document.createElement('tr')

    row.innerHTML = `
        <td class="product_cart">
        <img src="${product.thumbnail}" alt="${product.name}" class="cart-img">
         <img src="/assest/Group 43.jpg" class="remove-btn" data-index="${index}">
        <div class="contain_pro">
              <span>${product.name}</span>
              <p> Color: Blue </p>
              <p> NSX: Việt Nam </p>  
        </div>
        </td>
        <td class="price">$${product.price.toFixed(2)}</td>
        <td>
        <div class="quantity-control">
          <button class="quantity-btn minus" data-index="${index}">-</button>
          <input class="quantity-input" value="${product.quantity}" data-index="${index}">
          <button class="quantity-btn plus" data-index="${index}">+</button>
        </div>
        
      </td>
        <td class="product-total">$${productTotal.toFixed(2)}</td>
    `

    cartItemsContainer.appendChild(row)

    row.querySelector('.minus').addEventListener('click', () => updateQuantity(index, -1))
    row.querySelector('.plus').addEventListener('click', () => updateQuantity(index, 1))
    row.querySelector('.quantity-input').addEventListener('input', (e) => updateQuantityInput(index, e.target.value))
  })

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`

  const removeButtons = document.querySelectorAll('.remove-btn')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeItemFromCart)
  })
}

function removeItemFromCart(event) {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const productIndex = event.target.getAttribute('data-index')

  cart.splice(productIndex, 1)

  localStorage.setItem('cart', JSON.stringify(cart))

  displayCartItems()
}

window.onload = displayCartItems

document.querySelector('.checkout-btn').addEventListener('click', function () {
  localStorage.removeItem('cart')
  window.location.href = '/order_complete.html'
})

function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  const product = cart[index]

  product.quantity = Math.max(1, product.quantity + change)
  cart[index] = product

  localStorage.setItem('cart', JSON.stringify(cart))
  displayCartItems()
}

// Hàm cập nhật số lượng từ ô input và thay đổi tổng tiền
function updateQuantityInput(index, value) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  const product = cart[index]

  const newQuantity = Math.max(1, parseInt(value) || 1)
  product.quantity = newQuantity
  cart[index] = product

  localStorage.setItem('cart', JSON.stringify(cart))
  displayCartItems()
}

// Nút "Clear All" để xóa toàn bộ sản phẩm trong giỏ hàng
const clearAllButton = document.getElementById('clear_button')
clearAllButton.addEventListener('click', () => {
  localStorage.removeItem('cart')
  displayCartItems()
})
