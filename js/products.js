document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
    }
  
    if (!loggedInUser) {
      window.location.href = 'login.html';
    } else {
      const productGrid = document.querySelector('.product-grid');
  
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          productGrid.innerHTML = '';
          data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>₹${product.price}</p>
              <button class="view-btn" data-id="${product.id}">View Details</button>
            `;
            productGrid.appendChild(card);
          });
  
          document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', e => {
              const id = e.target.getAttribute('data-id');
              const selected = data.find(p => p.id == id);
              localStorage.setItem('selectedProduct', JSON.stringify(selected));
              window.location.href = 'product.html';
            });
          });
        })
        .catch(err => console.log(err));
    }
  });