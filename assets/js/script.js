'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/**
 * Search functionality
 */

const products = [
  {
    id: 0,
    image: './assets/images/toronto_canada.avif',
    title: 'Toronto, Canada',
    para: 'A vibrant town known for its diverse culture, iconic CN Tower, stunning Lake Ontario beaches, and lively arts scene.',
  },
  {
    id: 1,
    image: './assets/images/sydney.avif',
    title: 'Sydney, Australia',
    para: 'A beautiful coastal metropolis with a relaxed atmosphere, featuring the Sydney Opera House,Harbour Bridge, and stunning beaches',
  },
  {
    id: 2,
    image: './assets/images/paris.avif',
    title: 'Paris, France',
    para: 'Paris is a romantic city known for its iconic Eiffel Tower, charming streets, world-class art, and rich history.',
  },
  {
    id: 3,
    image: './assets/images/newyork.avif',
    title: 'New York, USA',
    para: 'USA is a bustling city known for its iconic skyline, vibrant cultural scene, and famous landmarks like Times Square and Central Park.',
  },
  {
    id: 4,
    image: './assets/images/japan.avif',
    title: 'Kyoto, Japan',
    para: 'Known for its well preserved temples, traditional wooden houses, and beautiful gardens.',
  },
  {
    id: 5,
    image: './assets/images/buddha.avif',
    title: 'Buddha Temple, Singapore',
    para: 'The Buddha Temple in Singapore is a stunning temples known for intricate architecture, housing sacred Buddhist artifacts and offering a serene atmosphere',
  },
];


// Event listener to open the search container
document.getElementById('default-search-btn').addEventListener('click', function () {
  this.style.display = 'none';
  document.getElementById('search-container').classList.remove('hidden');
  document.getElementById('search-input').focus();
});

// Event listener for the clear button
document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('search-input').value = '';
  displayItems(products);
  document.getElementById('root').style.display = 'none';
});

// Event listener for the search input field
document.getElementById('search-input').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = products.filter((item) => {
    return item.para.toLowerCase().includes(searchData);
  });
  displayItems(filteredData);
  document.getElementById('root').style.display = filteredData.length > 0 ? 'grid' : 'none';
});

// Event listener for clicking outside the search container
document.addEventListener('click', function (event) {
  const searchWrapper = document.getElementById('search-wrapper');
  const isClickInside = searchWrapper.contains(event.target);

  if (!isClickInside) {
    document.getElementById('search-container').classList.add('hidden');
    document.getElementById('default-search-btn').style.display = 'block';
    document.getElementById('root').style.display = 'none';
  }
});

// Function to display the filtered items
const displayItems = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    return `
          <div class='box'>
              <div class='img-box'>
                  <img class='images' src='${item.image}' alt='${item.title}' />
              </div>
              <div class='bottom'>
                  <h2>${item.title}</h2>
                  <p>${item.para || 'Description not available'}</p>
                  <button class='btn btn-primary'>Visit</button>
              </div>
          </div>
      `;
  }).join('');
};

// Initial display of all items
displayItems(products);
