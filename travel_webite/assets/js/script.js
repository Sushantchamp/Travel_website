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

// const product = [
//   {
//       id: 0,
//       image: 'image/gg-1.jpg',
//       title: 'Z Flip Foldable Mobile',
//       price: 120,
//   },
//   {
//       id: 1,
//       image: 'image/hh-2.jpg',
//       title: 'Air Pods Pro',
//       price: 60,
//   },
//   {
//       id: 2,
//       image: 'image/ee-3.jpg',
//       title: '250D DSLR Camera',
//       price: 230,
//   },
//   {
//       id: 3,
//       image: 'image/aa-1.jpg',
//       title: 'Headphones',
//       price: 100,
//   },
//   {
//       id: 4,
//       image: 'image/bb-1.jpg',
//       title: 'Audio Microphone',
//       price: 230,
//   },
//   {
//       id: 5,
//       image: 'image/cc-1.jpg',
//       title: 'Smart Watch',
//       price: 100,
//   },
// ];

// const categories = [...new Set(product.map((item) => { return item }))]

// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//   const searchData = e.target.value.toLowerCase();
//   const filteredData = categories.filter((item) => {
//       return (
//           item.title.toLowerCase().includes(searchData)
//       )
//   })
//   displayItem(filteredData)
// });

// const displayItem = (items) => {
//   document.getElementById('root').innerHTML = items.map((item) => {
//       var { image, title, price } = item;
//       return (
//           `<div class='box'>
//               <div class='img-box'>
//                   <img class='images' src=${image}></img>
//               </div> 
//               <div class='bottom'>
//                   <p>${title}</p>
//                   <h2>$ ${price}.00</h2>
//               <button>Add to cart</button>
//               </div>
//           </div>`
//       )
//   }).join('')
// };
// displayItem(categories);



const products = [
  {
    id: 0,
    image: './assets/images/toronto_canada.avif',
    title: 'Toronto, Canada',
    para: 'This is the toronto canada',
  },
  {
    id: 1,
    image: './assets/images/paris.avif',
    title: 'Paris,France',
    para: 'This is the paris in France',
  },
  {
    id: 2,
    image: './assets/images/sydney.avif',
    title: 'Sydney,Australia',
    para: 'This is sydney Australia',
  },
  {
    id: 3,
    image: './assets/images/liberty.avif',
    title: 'Status of Liberty',
    para: 'This is Statue of Liberty',
  },
  {
    id: 4,
    image: './assets/images/japan.avif',
    title: 'Kyoto Japan',
    para: 'This is Kyoto temple, Japan ',
  },
  {
    id: 5,
    image: './assets/images/buddha.avif',
    title: 'Buddha Temple, Singapore',
    para: 'This is buddha Temple in singapore',
  },
];

// // Event listener to open the search container
// document.getElementById('default-search-btn').addEventListener('click', function () {
//   this.style.display = 'none';
//   document.getElementById('search-container').classList.remove('hidden');
//   document.getElementById('search-input').focus(); // Focus on the input field
// });

// // Event listener for the clear button
// document.getElementById('clear-btn').addEventListener('click', function () {
//   document.getElementById('search-input').value = '';
//   displayItems(products); // Reset to show all items
// });

// // Event listener for the search input field
// document.getElementById('search-input').addEventListener('keyup', (e) => {
//   const searchData = e.target.value.toLowerCase();
//   const filteredData = products.filter((item) => {
//     return item.title.toLowerCase().includes(searchData);
//   });
//   displayItems(filteredData);
// });

// // Event listener for clicking outside the search container
// document.addEventListener('click', function (event) {
//   const searchWrapper = document.getElementById('search-wrapper');
//   const isClickInside = searchWrapper.contains(event.target);

//   if (!isClickInside) {
//     document.getElementById('search-container').classList.add('hidden');
//     document.getElementById('default-search-btn').style.display = 'block';
//   }
// });

// // Function to display the filtered items
// const displayItems = (items) => {
//   document.getElementById('root').innerHTML = items.map((item) => {
//     return `
//           <div class='box'>
//               <div class='img-box'>
//                   <img class='images' src='${item.image}' alt='${item.title}' />
//               </div>
//               <div class='bottom'>
//               <h2>${item.title}</h2>
//                   <p>${item.para}</p>
//                   <button class='button-primary'>Visit</button>
//               </div>
//           </div>
//       `;
//   }).join('');
// };

// // Initial display of all items
// displayItems(products);


// Event listener to open the search container
document.getElementById('default-search-btn').addEventListener('click', function () {
  this.style.display = 'none';
  document.getElementById('search-container').classList.remove('hidden');
  document.getElementById('search-input').focus(); // Focus on the input field
});

// Event listener for the clear button
document.getElementById('clear-btn').addEventListener('click', function () {
  document.getElementById('search-input').value = '';
  displayItems(products); // Reset to show all items
  document.getElementById('root').style.display = 'none'; // Hide the card container
});

// Event listener for the search input field
document.getElementById('search-input').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = products.filter((item) => {
      return item.title.toLowerCase().includes(searchData);
  });
  displayItems(filteredData);
  document.getElementById('root').style.display = filteredData.length > 0 ? 'grid' : 'none'; // Show/hide based on results
});

// Event listener for clicking outside the search container
document.addEventListener('click', function (event) {
  const searchWrapper = document.getElementById('search-wrapper');
  const isClickInside = searchWrapper.contains(event.target);

  if (!isClickInside) {
    document.getElementById('search-container').classList.add('hidden');
    document.getElementById('default-search-btn').style.display = 'block';
    document.getElementById('root').style.display = 'none'; // Hide the card container
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
                  <p>${item.description || 'Description not available'}</p>
                  <button class='btn btn-primary'>Visit</button>
              </div>
          </div>
      `;
  }).join('');
};

// Initial display of all items
displayItems(products);
