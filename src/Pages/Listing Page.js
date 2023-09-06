import React from 'react';

function Listing() {
  // Replace this with the actual list of items/products from your database or API
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    // Add more items to the list
  ];

  return (
    <div>
      <h2>Listing Page</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listing;
