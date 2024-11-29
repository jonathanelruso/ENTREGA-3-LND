document.addEventListener('DOMContentLoaded', () => {
  const CART_CONTAINER = document.getElementById('cart-items');
  const CART_TOTAL = document.getElementById('cart-total');
  const CLEAR_CART_BUTTON = document.getElementById('clear-cart');
  const GALLERY_ITEMS = document.querySelectorAll('.gallery-item img');

  const loadCart = () => {
    const CART = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart(CART);
  };

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const renderCart = (cart) => {
    CART_CONTAINER.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      const ITEM_ELEMENT = document.createElement('div');
      ITEM_ELEMENT.classList.add('cart-item');
      ITEM_ELEMENT.innerHTML = `
          <span>${item.name}</span>
          <span>€${item.price}</span>
          <button data-index="${index}">Eliminar producto</button>
        `;
      CART_CONTAINER.appendChild(ITEM_ELEMENT);
      total += parseFloat(item.price);
    });

    CART_TOTAL.textContent = total.toFixed(2);

    const DELETE_BUTTONS = CART_CONTAINER.querySelectorAll('button');
    DELETE_BUTTONS.forEach((button) => {
      button.addEventListener('click', (e) => {
        const INDEX = e.target.dataset.index;
        cart.splice(INDEX, 1);
        saveCart(cart);
        renderCart(cart);
      });
    });
  };

  const addToCart = (name, price) => {
    const CART = JSON.parse(localStorage.getItem('cart')) || [];
    CART.push({ name, price });
    saveCart(CART);
    renderCart(CART);
  };

  GALLERY_ITEMS.forEach((item) => {
    item.addEventListener('click', () => {
      const NAME = item.dataset.name;
      const PRICE = item.dataset.price;

      const CONFIRM_ADD = window.confirm(`¿Quieres añadir el producto "${NAME}" al carrito por €${PRICE}?`);
      if (CONFIRM_ADD) {
        addToCart(NAME, PRICE);
        alert(`¡El producto "${NAME}" ha sido añadido al carrito!`);
      }
    });
  });

  CLEAR_CART_BUTTON.addEventListener('click', () => {
    const CONFIRM_CLEAR = window.confirm('¿Estás seguro de que quieres vaciar el carrito?');
    if (CONFIRM_CLEAR) {
      localStorage.removeItem('cart');
      renderCart([]);
      alert('El carrito ha sido vaciado.');
    }
  });

  loadCart();
});
