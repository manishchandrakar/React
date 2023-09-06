import React from 'react';

function ProductDetails() {
  // Replace this with product-specific data from your database or API
  const product = {
    name: "Product Name",
    price: "$50",
    description: "Product description",
    // Add other product details
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add other product details */}
    </div>
  );
}

export default ProductDetails;
