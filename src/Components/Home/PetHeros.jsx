import React from 'react';

const PetHeros = () => {
    const heroes = [
    {
      name: "Ayesha Rahman",
      role: "Adopted Bella the Beagle",
      img: "https://i.ibb.co/4f1vFH0/dog1.jpg"
    },
    {
      name: "Karim Uddin",
      role: "Rescued Max from the streets",
      img: "https://i.ibb.co/0msYwft/dog2.jpg"
    },
    {
      name: "Sara Ahmed",
      role: "Fostered 12+ cats",
      img: "https://i.ibb.co/5FhfQYc/cat1.jpg"
    },
    {
      name: "Tanvir Hasan",
      role: "Volunteer & Caregiver",
      img: "https://i.ibb.co/7RCt8wJ/cat2.jpg"
    }
  ]

         
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          🐕 Meet Our Pet Heroes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={hero.img}
                alt={hero.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{hero.name}</h3>
                <p className="text-sm text-gray-600">{hero.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
};

export default PetHeros;