GetProductData();

function GetProductData() {
  fetch('https://dummyjson.com/products')
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      ProductsReceived(json);
    })
    .catch((error) => {
      console.error('Error fetching product data:', error.message);
    });
}

function ProductsReceived(productData) {
  console.log(productData);

  let myProducts = productData.products;

  let myFeaturedProducts = [];

  myFeaturedProducts.push(myProducts[8], myProducts[11], myProducts[19]);

  console.log(myFeaturedProducts);
}