import React from "react";
import dish1 from "../../assets/Images/dish1.jpg";
import dish2 from "../../assets/Images/dish2.jpg";
import dish3 from "../../assets/Images/dish3.jpg";
import dish4 from "../../assets/Images/dish4.jpg";
import dish5 from "../../assets/Images/dish5.jpg";
import dish6 from "../../assets/Images/dish6.jpg";


const dishes = [
  {
    title: "Truffle Pasta",
    image: dish1,
    description:
      "Rich, creamy pasta infused with truffle essence and topped with shaved parmesan.",
  },
  {
    title: "Fire-Grilled Salmon",
    image: dish2,
    description:
      "Perfectly grilled salmon with a citrus glaze, served with seasonal vegetables.",
  },
  {
    title: "Signature Steak",
    image: dish3,
    description:
      "Juicy and tender steak grilled to perfection with house-made chimichurri sauce.",
  },
   {
    title: "Butter Chicken",
    image: dish4,
    description:
      "Succulent chicken pieces simmered in a buttery, spiced tomato-based gravy.",
  },
   {
    title: "Paneer Butter Masala",
    image: dish5,
    description:
      "Soft paneer cubes cooked in a rich, creamy, and mildly spiced tomato gravy.",
   },  
  {
    title: "Biryani",
    image: dish6,
    description:
      "Fragrant basmati rice layered with spiced vegetables or meat, cooked to perfection with herbs and saffron.",
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
