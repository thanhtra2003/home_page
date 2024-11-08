let currentPage = 1
const productsPerPage = 48
let allProducts = []

// Lấy dữ liệu sản phẩm
async function fetchProducts() {
  let allProductsFetched = []
  let skip = 0
  let hasMore = true

  while (hasMore) {
    const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`)
    const data = await response.json()
    allProductsFetched = allProductsFetched.concat(data.products)
    hasMore = data.products.length > 0 // Tiếp tục lấy nếu có thêm sản phẩm
    skip += productsPerPage
  }
  allProducts = allProductsFetched
  return allProducts
}
// Hàm hiển thị sản phẩm
function renderProducts(page) {
  const container = document.getElementById('products-container')
  container.innerHTML = ''

  const start = (page - 1) * productsPerPage
  const end = start + productsPerPage
  const productsToDisplay = allProducts.slice(start, end)

  productsToDisplay.forEach(product => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    productCard.innerHTML = `
        <div class="image">
          <a href="detail_products.html?id=${product.id}"><img src="${product.thumbnail}" alt="${product.title}"></a>
        </div>
        <div class="contain">
          <div class="infor_pro">
            <span class="name"><a href="detail_products.html?id=${product.id}">${product.title}</a></span>
            <div class="line">
                <div class="line_color1"></div>
                <div class="line_color2"></div>
                <div class="line_color3"></div>
            </div>
            <div class="evalue">
              <div class="price-container">
                  <p class="discount-price">$${product.discountPercentage}</p>
                  <p class="original-price">$${product.price}</p>
              </div>
              <div class="rating"> 
                         <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_705)">
                <path d="M13.1734 4.60447L9.62425 4.12692L8.03767 1.14907C7.99433 1.06753 7.92304 1.00153 7.83497 0.961413C7.61411 0.860469 7.34572 0.944589 7.23529 1.14907L5.64871 4.12692L2.09951 4.60447C2.00166 4.61741 1.9122 4.66012 1.8437 4.72482C1.76089 4.80362 1.71526 4.90963 1.71684 5.01956C1.71841 5.12949 1.76706 5.23434 1.85209 5.31108L4.41998 7.62891L3.8133 10.9018C3.79907 10.978 3.80817 11.0563 3.83957 11.1279C3.87097 11.1995 3.9234 11.2615 3.99093 11.3069C4.05845 11.3523 4.13837 11.3793 4.22162 11.3848C4.30487 11.3903 4.38811 11.374 4.46191 11.338L7.63648 9.79274L10.811 11.338C10.8977 11.3807 10.9984 11.3949 11.0948 11.3794C11.338 11.3406 11.5016 11.127 11.4597 10.9018L10.853 7.62891L13.4209 5.31108C13.4908 5.24766 13.5369 5.16484 13.5509 5.07425C13.5886 4.84777 13.4181 4.63811 13.1734 4.60447Z" fill="#FFC416"/>
                </g>
                <defs>
                <clipPath id="clip0_91_705">
                <rect width="14.3142" height="13.2522" fill="white" transform="translate(0.479492 0.03479)"/>
                </clipPath>
                </defs>
                </svg>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_705)">
                <path d="M13.1734 4.60447L9.62425 4.12692L8.03767 1.14907C7.99433 1.06753 7.92304 1.00153 7.83497 0.961413C7.61411 0.860469 7.34572 0.944589 7.23529 1.14907L5.64871 4.12692L2.09951 4.60447C2.00166 4.61741 1.9122 4.66012 1.8437 4.72482C1.76089 4.80362 1.71526 4.90963 1.71684 5.01956C1.71841 5.12949 1.76706 5.23434 1.85209 5.31108L4.41998 7.62891L3.8133 10.9018C3.79907 10.978 3.80817 11.0563 3.83957 11.1279C3.87097 11.1995 3.9234 11.2615 3.99093 11.3069C4.05845 11.3523 4.13837 11.3793 4.22162 11.3848C4.30487 11.3903 4.38811 11.374 4.46191 11.338L7.63648 9.79274L10.811 11.338C10.8977 11.3807 10.9984 11.3949 11.0948 11.3794C11.338 11.3406 11.5016 11.127 11.4597 10.9018L10.853 7.62891L13.4209 5.31108C13.4908 5.24766 13.5369 5.16484 13.5509 5.07425C13.5886 4.84777 13.4181 4.63811 13.1734 4.60447Z" fill="#FFC416"/>
                </g>
                <defs>
                <clipPath id="clip0_91_705">
                <rect width="14.3142" height="13.2522" fill="white" transform="translate(0.479492 0.03479)"/>
                </clipPath>
                </defs>
                </svg>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_705)">
                <path d="M13.1734 4.60447L9.62425 4.12692L8.03767 1.14907C7.99433 1.06753 7.92304 1.00153 7.83497 0.961413C7.61411 0.860469 7.34572 0.944589 7.23529 1.14907L5.64871 4.12692L2.09951 4.60447C2.00166 4.61741 1.9122 4.66012 1.8437 4.72482C1.76089 4.80362 1.71526 4.90963 1.71684 5.01956C1.71841 5.12949 1.76706 5.23434 1.85209 5.31108L4.41998 7.62891L3.8133 10.9018C3.79907 10.978 3.80817 11.0563 3.83957 11.1279C3.87097 11.1995 3.9234 11.2615 3.99093 11.3069C4.05845 11.3523 4.13837 11.3793 4.22162 11.3848C4.30487 11.3903 4.38811 11.374 4.46191 11.338L7.63648 9.79274L10.811 11.338C10.8977 11.3807 10.9984 11.3949 11.0948 11.3794C11.338 11.3406 11.5016 11.127 11.4597 10.9018L10.853 7.62891L13.4209 5.31108C13.4908 5.24766 13.5369 5.16484 13.5509 5.07425C13.5886 4.84777 13.4181 4.63811 13.1734 4.60447Z" fill="#FFC416"/>
                </g>
                <defs>
                <clipPath id="clip0_91_705">
                <rect width="14.3142" height="13.2522" fill="white" transform="translate(0.479492 0.03479)"/>
                </clipPath>
                </defs>
                </svg>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_705)">
                <path d="M13.1734 4.60447L9.62425 4.12692L8.03767 1.14907C7.99433 1.06753 7.92304 1.00153 7.83497 0.961413C7.61411 0.860469 7.34572 0.944589 7.23529 1.14907L5.64871 4.12692L2.09951 4.60447C2.00166 4.61741 1.9122 4.66012 1.8437 4.72482C1.76089 4.80362 1.71526 4.90963 1.71684 5.01956C1.71841 5.12949 1.76706 5.23434 1.85209 5.31108L4.41998 7.62891L3.8133 10.9018C3.79907 10.978 3.80817 11.0563 3.83957 11.1279C3.87097 11.1995 3.9234 11.2615 3.99093 11.3069C4.05845 11.3523 4.13837 11.3793 4.22162 11.3848C4.30487 11.3903 4.38811 11.374 4.46191 11.338L7.63648 9.79274L10.811 11.338C10.8977 11.3807 10.9984 11.3949 11.0948 11.3794C11.338 11.3406 11.5016 11.127 11.4597 10.9018L10.853 7.62891L13.4209 5.31108C13.4908 5.24766 13.5369 5.16484 13.5509 5.07425C13.5886 4.84777 13.4181 4.63811 13.1734 4.60447Z" fill="#FFC416"/>
                </g>
                <defs>
                <clipPath id="clip0_91_705">
                <rect width="14.3142" height="13.2522" fill="white" transform="translate(0.479492 0.03479)"/>
                </clipPath>
                </defs>
                </svg>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_91_709)">
                <path d="M13.1661 4.60447L9.61693 4.12692L8.03034 1.14907C7.98701 1.06753 7.91572 1.00153 7.82765 0.961413C7.60679 0.860469 7.3384 0.944589 7.22796 1.14907L5.64138 4.12692L2.09219 4.60447C1.99434 4.61741 1.90487 4.66012 1.83638 4.72482C1.75357 4.80362 1.70794 4.90963 1.70951 5.01956C1.71108 5.12949 1.75973 5.23434 1.84476 5.31108L4.41265 7.62891L3.80598 10.9018C3.79175 10.978 3.80085 11.0563 3.83225 11.1279C3.86364 11.1995 3.91608 11.2615 3.9836 11.3069C4.05113 11.3523 4.13105 11.3793 4.21429 11.3848C4.29754 11.3903 4.38079 11.374 4.45459 11.338L7.62915 9.79274L10.8037 11.338C10.8904 11.3807 10.991 11.3949 11.0875 11.3794C11.3307 11.3406 11.4943 11.127 11.4523 10.9018L10.8457 7.62891L13.4135 5.31108C13.4834 5.24766 13.5296 5.16484 13.5435 5.07425C13.5813 4.84777 13.4107 4.63811 13.1661 4.60447Z" fill="#B2B2B2"/>
                </g>
                <defs>
                <clipPath id="clip0_91_709">
                <rect width="14.3142" height="13.2522" fill="white" transform="translate(0.472168 0.03479)"/>
                </clipPath>
                </defs>
                </svg>    
                     </div>




            </div>
            
          </div> 
          <h4>${product.description}</h4>
          <div class="icons">
              <svg class="cart-icon" 
               data-product-id="${product.id}" 
             data-product-name="${product.title}" 
             data-product-price="${product.price}" 
             data-product-thumbnail="${product.thumbnail}"
               width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.39893 4.18519C2.39893 4.01128 2.47355 3.8445 2.60637 3.72153C2.73919 3.59856 2.91934 3.52948 3.10718 3.52948H3.63412C4.53124 3.52948 5.06952 4.08814 5.37643 4.60746C5.58135 4.95367 5.72961 5.35497 5.84576 5.71867C5.87718 5.71637 5.90868 5.7152 5.9402 5.71517H17.7426C18.5264 5.71517 19.093 6.40934 18.8776 7.10789L17.1514 12.7111C16.9966 13.2137 16.6692 13.6559 16.2187 13.9708C15.7681 14.2857 15.2191 14.4561 14.6546 14.4562H9.03763C8.46866 14.4562 7.91543 14.2832 7.46297 13.9638C7.01051 13.6445 6.68387 13.1964 6.53324 12.6884L5.81555 10.2649L4.62568 6.55098L4.62473 6.54398C4.47742 6.04827 4.33954 5.58403 4.13368 5.23781C3.93631 4.90122 3.77766 4.84089 3.63507 4.84089H3.10718C2.91934 4.84089 2.73919 4.77181 2.60637 4.64884C2.47355 4.52587 2.39893 4.35909 2.39893 4.18519ZM7.18956 9.94666L7.89876 12.3413C8.04041 12.8152 8.50597 13.1448 9.03763 13.1448H14.6546C14.9111 13.1448 15.1607 13.0674 15.3656 12.9243C15.5704 12.7812 15.7193 12.5802 15.7897 12.3518L17.43 7.02658H6.25655L7.17634 9.90032L7.18956 9.94666Z" fill="#535399"/>
                <path d="M10.4258 17.0808C10.4258 17.5445 10.2268 17.9893 9.87261 18.3172C9.51842 18.6451 9.03802 18.8293 8.53712 18.8293C8.03621 18.8293 7.55581 18.6451 7.20162 18.3172C6.84742 17.9893 6.64844 17.5445 6.64844 17.0808C6.64844 16.617 6.84742 16.1723 7.20162 15.8444C7.55581 15.5164 8.03621 15.3322 8.53712 15.3322C9.03802 15.3322 9.51842 15.5164 9.87261 15.8444C10.2268 16.1723 10.4258 16.617 10.4258 17.0808V17.0808ZM9.00929 17.0808C9.00929 16.9648 8.95954 16.8536 8.87099 16.7717C8.78244 16.6897 8.66234 16.6436 8.53712 16.6436C8.41189 16.6436 8.29179 16.6897 8.20324 16.7717C8.11469 16.8536 8.06495 16.9648 8.06495 17.0808C8.06495 17.1967 8.11469 17.3079 8.20324 17.3899C8.29179 17.4718 8.41189 17.5179 8.53712 17.5179C8.66234 17.5179 8.78244 17.4718 8.87099 17.3899C8.95954 17.3079 9.00929 17.1967 9.00929 17.0808Z" fill="#535399"/>
                <path d="M17.0361 17.0808C17.0361 17.5445 16.8372 17.9893 16.483 18.3172C16.1288 18.6451 15.6484 18.8293 15.1475 18.8293C14.6466 18.8293 14.1662 18.6451 13.812 18.3172C13.4578 17.9893 13.2588 17.5445 13.2588 17.0808C13.2588 16.617 13.4578 16.1723 13.812 15.8444C14.1662 15.5164 14.6466 15.3322 15.1475 15.3322C15.6484 15.3322 16.1288 15.5164 16.483 15.8444C16.8372 16.1723 17.0361 16.617 17.0361 17.0808V17.0808ZM15.6196 17.0808C15.6196 16.9648 15.5699 16.8536 15.4813 16.7717C15.3928 16.6897 15.2727 16.6436 15.1475 16.6436C15.0222 16.6436 14.9021 16.6897 14.8136 16.7717C14.725 16.8536 14.6753 16.9648 14.6753 17.0808C14.6753 17.1967 14.725 17.3079 14.8136 17.3899C14.9021 17.4718 15.0222 17.5179 15.1475 17.5179C15.2727 17.5179 15.3928 17.4718 15.4813 17.3899C15.5699 17.3079 15.6196 17.1967 15.6196 17.0808Z" fill="#535399"/>
                </svg>
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7158 4.39217C17.766 3.51256 16.5067 2.97777 15.167 2.88505C13.8273 2.79233 12.4961 3.14784 11.4156 3.88693C10.2773 3.1031 8.86051 2.74767 7.4505 2.89222C6.04048 3.03677 4.742 3.67057 3.81653 4.66598C2.89105 5.66139 2.40734 6.94447 2.46279 8.25685C2.51823 9.56922 3.10873 10.8134 4.11536 11.7388L10.7804 17.9094C10.8636 17.987 10.9625 18.0486 11.0715 18.0907C11.1806 18.1327 11.2975 18.1544 11.4156 18.1544C11.5337 18.1544 11.6506 18.1327 11.7597 18.0907C11.8687 18.0486 11.9676 17.987 12.0508 17.9094L18.7158 11.7388C19.2371 11.2566 19.6506 10.6839 19.9327 10.0536C20.2149 9.42335 20.3601 8.74777 20.3601 8.06551C20.3601 7.38324 20.2149 6.70767 19.9327 6.07738C19.6506 5.44709 19.2371 4.87445 18.7158 4.39217ZM17.4544 10.571L11.4156 16.1535L5.3768 10.571C4.84464 10.0763 4.48214 9.44709 4.33475 8.76236C4.18736 8.07763 4.26166 7.36785 4.54832 6.72206C4.83498 6.07628 5.32124 5.52324 5.9461 5.13232C6.57095 4.74141 7.30659 4.53003 8.06071 4.52469C9.06817 4.52698 10.0335 4.89934 10.7446 5.56002C10.8278 5.63765 10.9267 5.69927 11.0358 5.74132C11.1448 5.78337 11.2617 5.80502 11.3798 5.80502C11.4979 5.80502 11.6149 5.78337 11.7239 5.74132C11.8329 5.69927 11.9318 5.63765 12.015 5.56002C12.7471 4.97268 13.6929 4.66479 14.6609 4.69865C15.629 4.73251 16.547 5.10559 17.2291 5.74239C17.9113 6.37919 18.3066 7.23214 18.3352 8.12861C18.3637 9.02508 18.0233 9.89811 17.3828 10.571H17.4544Z" fill="#535399"/>
                </svg>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4445 8.04062H10.0588V5.83192C10.0588 5.63666 9.97501 5.4494 9.82588 5.31133C9.67674 5.17326 9.47447 5.09569 9.26356 5.09569C9.05265 5.09569 8.85038 5.17326 8.70125 5.31133C8.55211 5.4494 8.46833 5.63666 8.46833 5.83192V8.04062H6.08263C5.87172 8.04062 5.66945 8.11819 5.52031 8.25626C5.37118 8.39433 5.2874 8.58159 5.2874 8.77685C5.2874 8.97211 5.37118 9.15937 5.52031 9.29744C5.66945 9.43552 5.87172 9.51308 6.08263 9.51308H8.46833V11.7218C8.46833 11.917 8.55211 12.1043 8.70125 12.2424C8.85038 12.3804 9.05265 12.458 9.26356 12.458C9.47447 12.458 9.67674 12.3804 9.82588 12.2424C9.97501 12.1043 10.0588 11.917 10.0588 11.7218V9.51308H12.4445C12.6554 9.51308 12.8577 9.43552 13.0068 9.29744C13.1559 9.15937 13.2397 8.97211 13.2397 8.77685C13.2397 8.58159 13.1559 8.39433 13.0068 8.25626C12.8577 8.11819 12.6554 8.04062 12.4445 8.04062ZM17.7805 15.6164L14.8302 12.9071C15.9754 11.5851 16.53 9.90719 16.3799 8.21827C16.2299 6.52936 15.3866 4.95786 14.0234 3.8269C12.6603 2.69595 10.8809 2.0915 9.05117 2.13786C7.22143 2.18421 5.48042 2.87784 4.18611 4.07611C2.89181 5.27439 2.14259 6.88624 2.09252 8.58022C2.04246 10.2742 2.69534 11.9216 3.91693 13.1836C5.13851 14.4456 6.83595 15.2263 8.66022 15.3652C10.4845 15.5042 12.2969 14.9907 13.7248 13.9305L16.6513 16.6398C16.7252 16.7088 16.8132 16.7636 16.9101 16.801C17.007 16.8383 17.1109 16.8576 17.2159 16.8576C17.3209 16.8576 17.4248 16.8383 17.5217 16.801C17.6186 16.7636 17.7066 16.7088 17.7805 16.6398C17.9238 16.5025 18.004 16.3191 18.004 16.1281C18.004 15.9372 17.9238 15.7537 17.7805 15.6164ZM9.26356 13.9305C8.16259 13.9305 7.08633 13.6282 6.17091 13.0619C5.25548 12.4956 4.54199 11.6908 4.12066 10.7491C3.69934 9.80736 3.5891 8.77113 3.80389 7.77143C4.01868 6.77172 4.54885 5.85344 5.32736 5.13269C6.10587 4.41194 7.09774 3.92111 8.17757 3.72225C9.25739 3.5234 10.3766 3.62546 11.3938 4.01552C12.411 4.40559 13.2804 5.06614 13.892 5.91365C14.5037 6.76116 14.8302 7.75756 14.8302 8.77685C14.8302 10.1437 14.2437 11.4545 13.1998 12.421C12.1558 13.3875 10.7399 13.9305 9.26356 13.9305Z" fill="#535399"/>
                </svg>


          </div>
          <button class="btn_view_detail">View Detail</button>
         
        </div>
        
        `
    container.appendChild(productCard)
  })

  renderPagination(page)

  const cartIcons = document.querySelectorAll('.cart-icon')
  cartIcons.forEach(icon => {
    icon.addEventListener('click', addToCart)
  })

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


// Hàm hiển thị phân trang
function renderPagination(page) {
  const totalPages = Math.ceil(allProducts.length / productsPerPage)
  const paginationContainer = document.querySelector('.pagination-dots')
  paginationContainer.innerHTML = ''

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button')
    pageButton.innerText = i
    pageButton.classList.add('pagination-button')

    if (i === page) {
      pageButton.classList.add('active')
    }
    pageButton.addEventListener('click', () => {
      currentPage = i
      renderProducts(currentPage)
      renderPagination(currentPage)
    })

    paginationContainer.appendChild(pageButton)
  }
}

// Tải sản phẩm khi trang được tải
window.onload = async () => {
  const products = await fetchProducts()
  document.getElementById('products-container').classList.add('grid')
  renderProducts(currentPage)
  renderPagination(currentPage)
}

// Đổi giữa grid và list
document.getElementById('grid_product').addEventListener('click', async () => {
  const products = await fetchProducts()
  document.getElementById('products-container').classList.remove('list')
  document.getElementById('products-container').classList.add('grid')
  renderProducts(currentPage)
})

document.getElementById('list_products').addEventListener('click', async () => {
  const products = await fetchProducts()
  document.getElementById('products-container').classList.remove('grid')
  document.getElementById('products-container').classList.add('list')
  renderProducts(currentPage)
})

// Tải sản phẩm khi trang được tải
window.onload = async () => {
  const products = await fetchProducts()
  document.getElementById('products-container').classList.add('grid')
  renderProducts(currentPage)
}

//Hiển thị chi tiết
async function displayProductDetails() {
  const params = new URLSearchParams(window.location.search)
  const idProducts = params.get('id') // Lấy 'id' từ URL params

  if (idProducts) {
    const response = await fetch(`https://dummyjson.com/products/${idProducts}`)
    const product = await response.json()
    const productDetails = document.getElementById('product-details')

    // Hiển thị chi tiết sản phẩm
    productDetails.innerHTML = `
            <h1>${product.title}</h1>
            <p>Price: $${product.price}</p>
            <p>Description: ${product.description}</p>
            <img src="${product.thumbnail}" alt="${product.title}">
          `
  }
}
displayProductDetails()
