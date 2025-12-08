import React from 'react';

const PetHeros = () => {
    const heroes = [
    {
      name: "Ayesha Rahman",
      role: "Adopted Bella the Beagle",
      img: "https://i0.wp.com/sonyarehman.wordpress.com/wp-content/uploads/2014/06/ayesha-with-one-of-the-shelter-dogs.jpg?fit=1200%2C795&ssl=1"
    },
    {
      name: "Karim Uddin",
      role: "Rescued Max from the streets",
      img: "https://ecdn.dhakatribune.net/contents/cache/images/800x450x1/uploads/media/2023/08/28/Cat-a0b47e9224a4e6a4a6c307ca05e06785.jpg?jadewits_media_id=2895"
    },
    {
      name: "Sara Ahmed",
      role: "Fostered 12+ cats",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPkUh9PIPEOpB0iikT2Wg1OOg4poQvdij9Q&s"
    },
    {
      name: "Tanvir Hasan",
      role: "Volunteer & Caregiver",
      img: "https://www.afv.org/wp-content/uploads/2021/11/become-volunteer-thumb.jpg"
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