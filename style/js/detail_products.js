async function displayProductDetails() {
    const params = new URLSearchParams(window.location.search)
    const idProducts = params.get('id') // Lấy 'id' từ URL params
  
    if (idProducts) {
      const response = await fetch(`https://dummyjson.com/products/${idProducts}`)
      const product = await response.json()
  
      const title = document.querySelector('.title')
    title.innerText = product.title

    const discount = document.querySelector('.discount')
    discount.innerText = product.discountPercentage

    const origin = document.querySelector('.origin')
    origin.innerText = product.price

    const description = document.querySelector('.description')
    description.innerText = product.description

    const categories = document.querySelector('.categories')
    categories.innerText = product.category

    const tags = document.querySelector('.tags')
    tags.innerText = product.tags

      
      const thumbnailElement = document.getElementById('thumbnail-img')
      thumbnailElement.src = product.images[0]
  
     
      const thumbnailsContainer = document.getElementById('image-thumbnails')
      thumbnailsContainer.innerHTML = '' 
  
      product.images.forEach(imageUrl => {
        const smallImg = document.createElement('img')
        smallImg.src = imageUrl
        smallImg.alt = product.title
        smallImg.classList.add('small-image') 
  
        
        smallImg.addEventListener('click', () => {
          thumbnailElement.src = imageUrl 
        })
  
        thumbnailsContainer.appendChild(smallImg) 
      })
    }
  }
  
  displayProductDetails()
  

async function trendingProducts() {
  const url = `https://dummyjson.com/products`
  const response = await fetch(url)
  const data = await response.json()

  const productsContainer = document.getElementById('container_trending')
  productsContainer.innerHTML = ''


  const shuffledProducts = data.products.sort(() => 0.5 - Math.random())


  const randomProducts = shuffledProducts.slice(0, 4)

  randomProducts.forEach(product => {
    productsContainer.innerHTML += `
          <div class="product_trend">
            <div class="pading">
              <div class="image_trend">
                <img src="${product.images[0]}" alt="${product.title}" />
              </div>
            </div>
            
            <div class="infor_pro">
            <div class ="price_title">
                <h3 class="title">${product.title}</h3>
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
            </div>
              <p class="origin">$${product.price}</p>
            </div>
          </div>
        `
  })
}
trendingProducts()
