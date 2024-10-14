// let currentActiveMenu = null // Biến để lưu danh mục đang active

// async function load() {
//   const url = 'https://dummyjson.com/products/categories'
//   const response = await fetch(url)
//   const categories = await response.json()

//   const categoryContainer = document.getElementById('menu_category') // Phần tử HTML chứa danh mục
//   categoryContainer.innerHTML = '' // Xóa nội dung cũ nếu có

//   // Lấy 4 danh mục đầu tiên
//   const FourCategories = categories.slice(0, 4) // Chỉ lấy 4 danh mục đầu tiên

//   // Hiển thị các danh mục lên giao diện
//   FourCategories.forEach((category, index) => {
//     categoryContainer.innerHTML += `
//       <div class="menu" onclick="loadProducts('${category.slug}', this)">
//         <span>${category.name}</span>
//       </div>
//     `
//   })

//   // Mặc định hiển thị sản phẩm của danh mục đầu tiên
//   loadProducts(FourCategories[0].slug)

//   // Đặt màu cho danh mục đầu tiên là màu đỏ
//   currentActiveMenu = categoryContainer.querySelector('.menu') // Lưu danh mục đầu tiên
//   currentActiveMenu.style.color = 'red' // Đặt màu đỏ cho danh mục đầu tiên
// }

// async function loadProducts(categorySlug, clickedElement) {
//   const url = `https://dummyjson.com/products/category/${categorySlug}` // Lấy sản phẩm theo danh mục
//   const response = await fetch(url)
//   const data = await response.json()

//   const productsContainer = document.getElementById('products') // Phần tử HTML chứa sản phẩm
//   productsContainer.innerHTML = '' // Xóa nội dung cũ nếu có

//   // Lấy 6 sản phẩm đầu tiên
//   const products = data.products.slice(0, 6)

//   // Hiển thị các sản phẩm lên giao diện
//   products.forEach(product => {
//     productsContainer.innerHTML += `
//       <div class="product">
//         <div class="image">
//           <img src="${product.thumbnail}" />
//         </div>
//         <div class="infor">
//           <h3>${product.title}</h3>
//           <div class="price">
//             <p>$${product.discountPercentage}</p>
//             <p class="sale">$${product.price}</p>
//           </div>
//         </div>
//         <div class="icons">
//           <img src="/assest/fluent_cart-24-regular.png">
//           <img src="/assest/uil_heart-alt (1).png">
//           <img src="/assest/uil_search-plus (1).png">
//         </div>
//       </div>
//     `
//   })

//   // Cập nhật phần active cho danh mục
//   const menus = document.querySelectorAll('.menu') // Lấy tất cả các danh mục
//   menus.forEach(menu => {
//     menu.style.color = '' // Khôi phục màu sắc mặc định cho tất cả các danh mục
//   })

//   // Đặt màu cho danh mục được nhấn
//   clickedElement.style.color = 'red' // Đặt màu chữ cho danh mục được nhấn

//   // Cập nhật currentActiveMenu
//   currentActiveMenu = clickedElement // Cập nhật danh mục đang active
// }

// // Gọi hàm load khi DOM đã được tải
// document.addEventListener('DOMContentLoaded', load)
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
              <img class="cart-icon" src="/assest/fluent_cart-24-regular.png" alt="Cart" />
              <img class="heart-icon" src="/assest/uil_heart-alt (1).png" alt="Heart" />
              <img class="search-icon" src="/assest/uil_search-plus (1).png" alt="Search" />
          </div>
        </div>
          <h2>${product.title}</h2>
          <div class="price-container">
            <p class="discount-price">$${product.discountPercentage}</p>
            <p class="original-price">$${product.price}</p>
        </div>
        `

        productsContainer.appendChild(productElement)
      })
    })
    .catch(error => console.error('Error loading products:', error))
}
