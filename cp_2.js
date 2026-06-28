//Product Dash Board
// Fetches all products from the store API using .then()
function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log('Fetch error:', error);
    });
}

// Handles any errors that occur during the fetch
function handleError(error) {
  console.log(`An error occurred: ${error.message}`);
}

// Renders the first 5 products to the page with name, image, and price
function displayProducts(products) {
  const container = document.querySelector('#product-container');
  const firstFive = products.slice(0, 5);

  firstFive.forEach((product) => {
    const { name, price, image } = product.fields;

    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h2>${name}</h2>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

// Fetches all products from the store API using async/await
async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    handleError(error);
  }
}

// Calls both fetch functions on page load
//Hover effect applied in style.css
fetchProductsThen();
fetchProductsAsync();
