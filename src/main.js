    let sortActive = false;
    let filterActive = false;
    let namesOnlyActive = false;
    let cart = [];
    let originalOrder = [];
    window.onload = () => {
        const container = document.getElementById('products');
        originalOrder = Array.from(container.children);
    };

    function toggleSort() {
        sortActive = !sortActive;
        document.querySelector('.sort').classList.toggle('active', sortActive);
        sortProducts(sortActive);
    }

    function toggleFilter() {
        filterActive = !filterActive;
        document.querySelector('.filter').classList.toggle('active', filterActive);
        filterProducts(filterActive);
    }

    function toggleNames() {
        namesOnlyActive = !namesOnlyActive;
        document.querySelector('.names').classList.toggle('active', namesOnlyActive);
        showOnlyNames(namesOnlyActive);
    }

    function sortProducts(active) {
        const container = document.getElementById('products');
    
        if (active) {
            const cards = Array.from(container.children);
            cards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
            cards.forEach(card => container.appendChild(card));
        } else {
            originalOrder.forEach(card => container.appendChild(card));
        }
    }

    function filterProducts(active) {
        const cards = Array.from(document.querySelectorAll('.card'));
        const filtered = cards.filter(card => 
            !active || card.dataset.price < 100
        );
        cards.forEach(card => card.style.display = 'block');

        if (active) {
            cards
                .filter(card => card.dataset.price >= 100)
                .forEach(card => card.style.display = 'none');
        }
    }

    function showOnlyNames(active) {
        const cards = document.querySelectorAll('.card');
        const productNames = Array.from(cards).map(card => {
            const name = card.querySelector('h3').textContent;
            return { name, card };
        });
        if (active) {
            productNames.forEach(({ card }) => {
                const description = card.querySelector('.card-content p');
                description.style.display = 'none';
            });
        } else {
            productNames.forEach(({ card }) => {
                const description = card.querySelector('.card-content p');
                description.style.display = 'block';
            });
        }
    }
    function addToCart(name, price) {
        const item = cart.find(i => i.name === name);
        
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        
        updateCart();
    }

    function removeFromCart(index) {
        cart[index].quantity -= 1;

        if (cart[index].quantity === 0) {
            cart.splice(index, 1);
        }

        updateCart();
    }

    function updateCart() {
        const cartList = document.getElementById('cart-list');
        const totalElement = document.getElementById('total');
        cartList.innerHTML = '';  
        let total = cart.reduce((accumulator, item) => {
            return accumulator + (item.price * item.quantity);
        }, 0);
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} x${item.quantity} - $${item.price * item.quantity}
                <button onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartList.appendChild(li);
        });
        totalElement.textContent = `Total: $${total}`;
    }
