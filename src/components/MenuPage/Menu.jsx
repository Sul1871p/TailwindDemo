import React, { useEffect } from 'react';
import menuItems from './menuData';
import MenuItemCard from './MenuItemCard';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when menu loads
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4" role="region" aria-label="Restaurant Menu">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-14 tracking-wide">Our Menu</h2>

        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              {/* Optional: You can import and use category icons here */}
              <span className="text-2xl text-red-600 font-semibold">{section.category}</span>
              <div className="flex-1 border-b border-red-300"></div>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => (
                <MenuItemCard key={i} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

