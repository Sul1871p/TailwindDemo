import React from 'react';

const MenuItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
      <p className="text-gray-600 text-sm my-2">{item.description}</p>
      <p className="text-red-500 font-semibold">{item.price}</p>
    </div>
  );
};

export default MenuItemCard;
