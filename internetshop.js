const products = [
    { id: 1, name: 'Iphone 11 Pro Max', categoryId: 1, description: 'Потужний смартфон з великим дисплеєм та потрійною камерою.' },
    { id: 2, name: 'Iphone 14 Pro Max', categoryId: 1, description: 'Остання модель iPhone з найновішими технологіями.' },
    { id: 3, name: 'Asus x515', categoryId: 2, description: 'Легкий і потужний ноутбук для роботи та розваг.' },
    { id: 4, name: 'MacBook Pro', categoryId: 2, description: 'Популярний ноутбук для професіоналів з екраном Retina.' },
    { id: 5, name: 'ipad Mini 10', categoryId: 3, description: 'Компактний планшет з підтримкою Apple Pencil.' },
    { id: 6, name: 'Samsung Galaxy Tablet 10', categoryId: 3, description: 'Планшет на базі Android з високоякісним дисплеєм.' }
]

function showProducts(categoryId) {
    const productsContainer = document.getElementById('products-container')
    productsContainer.innerHTML = ''

    const filteredProducts = products.filter((product) => product.categoryId === categoryId)

    filteredProducts.forEach((product) => {
        const productElement = document.createElement('li')
        productElement.innerHTML = product.name
        productElement.addEventListener('click', () => {
            showProductInfo(product)
        });

        productsContainer.appendChild(productElement)
    })
}

function showProductInfo(product) {
    const productInfoContainer = document.getElementById('product-info-container')
    productInfoContainer.innerHTML = ''

    const productInfo = document.createElement('div')
    productInfo.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
    `

    const buyButton = document.createElement('button')
    buyButton.innerHTML = 'Buy'
    buyButton.addEventListener('click', () => {
        alert('Purchased item')
        showCategories()
    })

    productInfo.appendChild(buyButton)

    productInfoContainer.appendChild(productInfo)
}

function showCategories() {
    const productsContainer = document.getElementById('products-container')
    const productInfoContainer = document.getElementById('product-info-container')

    productsContainer.innerHTML = ''
    productInfoContainer.innerHTML = ''

    productsContainer.appendChild(categories)
}