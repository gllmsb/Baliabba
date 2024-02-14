

document.addEventListener("DOMContentLoaded", function () {
  // Get the reference to the featuredProducts element
  const myFeaturedElement = document.getElementById('featuredProducts');

  // Fetch and display products
  getProductData();

  // Model
  function getProductData() {
    fetch('https://dummyjson.com/products')
      .then((result) => result.json())
      .then((json) => productsReceived(json))
      .catch((error) => {
        console.error('Error fetching product data:', error.message);
      });
  }

  // Controller
  function productsReceived(productData) {
    console.log(productData);

    let myProducts = productData.products;

    let myFeaturedProducts = [];

    // For simplicity, choose three random products
    myFeaturedProducts.push(myProducts[9], myProducts[10], myProducts[5]);

    console.log(myFeaturedProducts);

    createProductView(myFeaturedProducts);
  }

  // View
  function createProductView(myCards) {
    // Clear the existing content before adding new products
    myFeaturedElement.innerHTML = '';

    // Explicitly set display: flex on the container
    myFeaturedElement.style.display = 'flex';
    myFeaturedElement.style.justifyContent = 'center';

    // Iterate through each product in myCards array
    myCards.forEach(product => {
      console.log(product);

      let myHTML = `
        <figure class="product" onclick="productCallback(${product.id})">
          <h2>${product.title}</h2>
          <img src="${product.thumbnail}" alt="${product.title}">
          <h3>PRICE: ${product.price} discount: ${product.discountPercentage}</h3>
        </figure>`;

      myFeaturedElement.innerHTML += myHTML;
    });
  }

  // Callback function for product click
  function productCallback(productId) {
    console.log(productId);
    // Add your callback logic here
  }
});