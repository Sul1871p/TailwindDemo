import React from "react";

const dishes = [
  {
    title: "Truffle Pasta",
    image: "/images/dish1.jpg",
    description:
      "Rich, creamy pasta infused with truffle essence and topped with shaved parmesan.",
  },
  {
    title: "Fire-Grilled Salmon",
    image: "/images/dish2.jpg",
    description:
      "Perfectly grilled salmon with a citrus glaze, served with seasonal vegetables.",
  },
  {
    title: "Signature Steak",
    image: "/images/dish3.jpg",
    description:
      "Juicy and tender steak grilled to perfection with house-made chimichurri sauce.",
  },
   {
    title: "Butter Chicken",
    image: "/images/dish4.jpg",
    description:
      "Rich, creamy pasta infused with truffle essence and topped with shaved parmesan.",
  },
   {
    title: "Paneer Butter Masala",
    image: "/images/dish5.jpg",
    description:
      "Rich, creamy pasta infused with truffle essence and topped with shaved parmesan.",
  },
];

const RecommendedDishes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Top Recommended Dishes
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 ease-in-out"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {dish.title}
                </h3>
                <p className="text-gray-600 text-sm">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedDishes;
