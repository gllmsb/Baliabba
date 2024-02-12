// function fetchProductData() {
//     const apiUrl = 'https://dummyjson.com/products';
  
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         // Log the received product data
//         console.log('Product Data:', data);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error.message);
//       });
//   }
  
//   // Call the function to fetch product data
//   fetchProductData();

// code above is from chatgpt
// code below is from an example given by bo

fetch('https://dummyjson.com/products')
  .then(response => {
    console.log(response.ok);
    return response.json();
  })
  .then(json => {
    console.log('Product Data:', json);
  })
  .catch(error => {
    console.error('Error fetching product data:', error.message);
  });