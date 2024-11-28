document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const galleryItems = document.querySelectorAll('.gallery-item img');
  
    const loadCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      renderCart(cart);
    };
  
    const saveCart = (cart) => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const renderCart = (cart) => {
      cartContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <span>${item.name}</span>
          <span>$${item.price}</span>
          <button data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
        total += parseFloat(item.price);
      });
  
      cartTotal.textContent = total.toFixed(2);
  
      const deleteButtons = cartContainer.querySelectorAll('button');
      deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const index = e.target.dataset.index;
          cart.splice(index, 1);
          saveCart(cart);
          renderCart(cart);
        });
      });
    };
  
    const addToCart = (name, price) => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ name, price });
      saveCart(cart);
      renderCart(cart);
    };
  
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const name = item.dataset.name;
        const price = item.dataset.price;
  
        // Alerta de confirmación
        const confirmAdd = window.confirm(`¿Quieres añadir el producto "${name}" al carrito por $${price}?`);
        if (confirmAdd) {
          addToCart(name, price);
          alert(`¡El producto "${name}" ha sido añadido al carrito!`);
        }
      });
    });
  
    clearCartButton.addEventListener('click', () => {
      const confirmClear = window.confirm('¿Estás seguro de que quieres vaciar el carrito?');
      if (confirmClear) {
        localStorage.removeItem('cart');
        renderCart([]);
        alert('El carrito ha sido vaciado.');
      }
    });
  
    loadCart();
  });
  