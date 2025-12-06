const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold">PawMart</h2>
          <p className="mt-3 text-sm">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">Terms</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://facebook.com" target="_blank" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" className="hover:underline">
                Twitter / X
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} PawMart. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
