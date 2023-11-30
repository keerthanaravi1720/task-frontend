


import './Nav.css'; // Create a CSS file for the sidebar styles

import React, { useState } from 'react';

const VendingMachine = () => {
  // State to keep track of selected item and remaining balance
  const [selectedItem, setSelectedItem] = useState(null);
  const [balance, setBalance] = useState(0);

  // Sample vending machine items
  const vendingItems = [
    { id: 1, name: 'Chips', price: 1.5 },
    { id: 2, name: 'Soda', price: 2 },
    { id: 3, name: 'Candy', price: 1 },
  ];

  // Function to handle item selection and purchase
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handlePurchase = () => {
    if (selectedItem) {
      if (balance >= selectedItem.price) {
        // Perform the purchase
        setBalance((prevBalance) => prevBalance - selectedItem.price);
        setSelectedItem(null);
        alert(`You purchased ${selectedItem.name}! Enjoy!`);
      } else {
        alert('Insufficient balance. Please insert more coins.');
      }
    }
  };

  return (
    <div>
      <h2>Vending Machine</h2>
      <div>
        <p>Current Balance: ${balance.toFixed(2)}</p>
        {selectedItem ? (
          <p>Selected Item: {selectedItem.name}</p>
        ) : (
          <p>Please select an item</p>
        )}
      </div>
      <div>
        {vendingItems.map((item) => (
          <button key={item.id} onClick={() => handleSelectItem(item)}>
            {item.name} - ${item.price.toFixed(2)}
          </button>
        ))}
      </div>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default VendingMachine;
