document.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Webpage is under construction. Please check back later!');
});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '';
  } else {
    themeIcon.textContent = '';
  }
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');

  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '';
  } else {
    themeIcon.textContent = '';
  }
});

// configuration for menu
function toggleMenu() {
  const dropmenu = document.querySelector('.searchbox');
  dropmenu.classList.toggle('show');
  const exitSearch = document.querySelector('.exit-search');
  exitSearch.classList.toggle('show');
}
function toggleSearch() {
  const dropmenu = document.querySelector('.searchbox');
  dropmenu.classList.remove('show');
  const exitSearch = document.querySelector('.exit-search');
  exitSearch.classList.remove('show');
}

function searchProducts() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const results = document.getElementById('searchResults');
  const Searchproducts = {
    1: {
      image: "IMG-20250806-WA0070.jpg",
      name: "LOVE IS FOREVER",
      price: 70.00,
      description: "A beautiful representation of eternal love.",
      size: "L/XL"
    },
    2: {
      image: "IMG-20250806-WA0071.jpg",
      name: "VIOLET",
      price: 70.00,
      description: "A stunning portrayal of violet hues.",
      size: "M/L/XL"
    },
    3: {
      image: "IMG-20250806-WA0072.jpg",
      name: "WILD FLOWER SPIRIT",
      price: 70.00,
      description: "A vibrant depiction of wildflowers in bloom.",
      size: "M/L"
    },
    4: {
      image: "IMG-20250806-WA0073.jpg",
      name: "13 12",
      price: 100.00,
      description: "A unique representation of abstract concepts.",
      size: "L/XL"
    },
    5: {
      image: "IMG-20250806-WA0074.jpg",
      name: "SCARED DNRS FACE ",
      price: 100.00,
      description: "A haunting depiction of fear and anxiety.",
      size: "M/L/XL"
    },
    6: {
      image: "IMG-20250806-WA0075.jpg",
      name: "DON'T NEED REASON",
      price: 100.00,
      description: "A powerful statement about self-acceptance.",
      size: "L/XL"
    },
    7: {
      image: "IMG-20250806-WA0076.jpg",
      name: "REVOLUTION OF SKELETON",
      price: 120.00,
      description: "A thought-provoking exploration of skeletal structures.",
      size: "M/L/XL"
    },
    8: {
      image: "IMG-20250806-WA0077.jpg",
      name: "GRATITUDE OF A SOUL IN HARMONY",
      price: 55.00,
      description: "A serene depiction of harmony and gratitude.",
      size: "M/L/XL"
    },
    9: {
      image: "IMG-20250806-WA0078.jpg",
      name: "WONDERFULL WORLD",
      price: 50.00,
      description: "A breathtaking view of the wonders of the world.",
      size: "S/M/L/XL"
    },
    10: {
      image: "IMG-20250806-WA0079.jpg",
      name: "AESTHETIC",
      price: 125.00,
      description: "A stunning representation of aesthetic beauty.",
      size: "M/L/XL"
    }
  };
  const matchedProducts = Object.entries(Searchproducts).filter(([id, product]) =>
    product.name.toLowerCase().includes(input) ||
    product.description.toLowerCase().includes(input)
  );

  if (matchedProducts.length > 0) {
    const html = matchedProducts.map(([id, product]) => `
    <div class="searchContainer">
      <a href="product.html?id=${id}">
        <div class="details-image">
          <img id="details-image" src="${product.image}" alt="${product.name}">
        </div>
        <div id="details-name">${product.name}</div>
        <div id="description">${product.description}</div>
        <div id="details-price">₵${parseInt(product.price).toFixed(2)}</div>
        <div id="size-display">${product.size}</div>
      </a>
      </div>
    `).join('');

    document.querySelector('.searchproduct-container').innerHTML = html;
    results.classList.add('show');
  } else {
    document.querySelector('.searchproduct-container').innerHTML = '<p>Product not found.</p>';
    results.classList.remove('show');
  }

  // Hide results if input is empty
  if (input === '') {
    results.classList.remove('show');
  }
}

function togglemenuDown(element) {
  const down = document.querySelector('.dropdownmenu');
  const items = document.querySelector('.items1');
  const name = document.querySelector('.brand-name');
  element.classList.toggle("active");
  down.classList.toggle('show');

  if (down.classList.contains('show')) {
    items.style.display = 'none';
    name.style.display = 'none';
  } else {
    items.style.display = 'inline';
    name.style.display = 'inline';
  }
}


// configuration for next/button images
let currentSlide = 0;
function moveSlide(direction) {
  const slides = document.querySelectorAll('.slideshow-container img');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  const slideWidth = slides[0].clientWidth;
  const container = document.querySelector('.slideshow-container');
  container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => {
  const slides = document.querySelectorAll('.slideshow-container img');
  if (slides.length === 0) return;
  currentSlide = (currentSlide + 1) % slides.length;
  moveSlide(0);
}, 10000);

document.addEventListener('DOMContentLoaded', () => {
  const signupBtn = document.getElementById('sign-up');
  let hasSignedUp = false;


  signupBtn.addEventListener('click', (e) => {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('number');
    const emailChecked = document.getElementById('check1').checked;
    const phoneChecked = document.getElementById('check2').checked;

    const emailFilled = emailInput.value.trim() !== '';
    const phoneFilled = phoneInput.value.trim() !== '';

    // Already signed up
    if (hasSignedUp) {
      e.preventDefault();
      showAlert("You've already signed up.");
      return;
    }

    // No input at all
    if (!emailFilled && !phoneFilled) {
      e.preventDefault();
      showAlert("Please enter either your email or phone number.");
      return;
    }

    // Email filled but not checked
    if (emailFilled && !emailChecked) {
      e.preventDefault();
      showAlert("You entered an email but didn't check the Email option.");
      return;
    }

    // Phone filled but not checked
    if (phoneFilled && !phoneChecked) {
      e.preventDefault();
      showAlert("You entered a phone number but didn't check the SMS option.");
      return;
    }

    // All good
    hasSignedUp = true;
    e.preventDefault();
    showAlert("Thank you for signing up to our news feed.");
    return;
  });

  function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const exitAlert = document.querySelector('.exit-alert');

    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');
    exitAlert.classList.add('show');
  }

});
function closeAlert() {
  document.getElementById('custom-alert').classList.add('hidden');
  document.querySelector('.exit-alert').classList.remove('show');
}


const products = Array.from(document.getElementsByClassName('product'));
products.sort(() => Math.random() - 0.5);
products.forEach(product => {
  product.parentNode.appendChild(product);
});

setTimeout(() => {
  const loading = document.getElementById('loading');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
}, 2000);

setTimeout(() => {
  const loading = document.getElementById('ack');
  const main = document.getElementById('main');
  if (loading && main) {
    loading.style.zIndex = '0';
    loading.style.display = 'none';
    main.style.zIndex = '1000';
  }
}, 2000);

