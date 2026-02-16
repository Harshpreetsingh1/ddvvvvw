// Product data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 129.99,
        category: 'electronics'
    },
    {
        id: 2,
        name: 'Cotton T-Shirt',
        price: 24.99,
        category: 'clothing'
    },
    {
        id: 3,
        name: 'Smart Watch',
        price: 299.99,
        category: 'electronics'
    },
    {
        id: 4,
        name: 'Leather Wallet',
        price: 49.99,
        category: 'accessories'
    },
    {
        id: 5,
        name: 'Running Shoes',
        price: 89.99,
        category: 'clothing'
    },
    {
        id: 6,
        name: 'Bluetooth Speaker',
        price: 79.99,
        category: 'electronics'
    },
    {
        id: 7,
        name: 'Sunglasses',
        price: 149.99,
        category: 'accessories'
    },
    {
        id: 8,
        name: 'Yoga Mat',
        price: 34.99,
        category: 'home'
    },
    {
        id: 9,
        name: 'Coffee Maker',
        price: 119.99,
        category: 'home'
    },
    {
        id: 10,
        name: 'Denim Jeans',
        price: 69.99,
        category: 'clothing'
    },
    {
        id: 11,
        name: 'Backpack',
        price: 59.99,
        category: 'accessories'
    },
    {
        id: 12,
        name: 'Desk Lamp',
        price: 44.99,
        category: 'home'
    }
];

// Get DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');

// Render products
function renderProducts(filteredProducts) {
    productsGrid.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.style.animationDelay = `${index * 0.1}s`;

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <span class="price">$${product.price.toFixed(2)}</span>
            <span class="category-badge">${product.category}</span>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Filter products
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        renderProducts(filtered);
    }
}

// Event listener for filter dropdown
categoryFilter.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    filterProducts(selectedCategory);
});

// Initialize - display all products
renderProducts(products);
