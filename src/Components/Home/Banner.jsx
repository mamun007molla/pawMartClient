import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl overflow-hidden h-150">

  
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
      alt="Happy dog with owner"
      className="w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-2">Find Your Furry Friend Today!</h2>
      <p className="text-lg max-w-2xl">
        Adopt amazing pets waiting for a loving home.
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-pet-adoption-point-poster-background-image_138009.jpg"
      alt="Woman hugging adopted dog"
      className="w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-2">Adopt, Don’t Shop — Give a Pet a Home.</h2>
      <p className="text-lg max-w-2xl">
        Every adopted pet changes a life — including yours.
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=1200&q=80"
      alt="Happy family with dog"
      className="w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-2">
        Because Every Pet Deserves Love & Care.
      </h2>
      <p className="text-lg max-w-2xl">
        Join our mission to help pets find happy homes.
      </p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>


  );
};

export default Banner;
