export default function Footer() {
  return (
    <footer id="contact" className="bg-dark py-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white">
            My Awesome Hotel
          </h3>
          <p className="mt-4 text-sm">
            A promise of unforgettable experiences and genuine care.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-gold">Contact</h4>
          <p className="mt-4 text-sm">Moi Avenue, Nairobi</p>
          <p className="text-sm">info@myawesomehotel.com</p>
          <p className="text-sm">+254 718 000 000</p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-gold">
                About
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-gold">
                Accommodations
              </a>
            </li>
            <li>
              <a href="#dining" className="hover:text-gold">
                Dining
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-gold">
                Book Now
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg text-gold">Newsletter</h4>
          <p className="mt-4 text-sm">Subscribe for the latest offers.</p>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
        &copy; {new Date().getFullYear()} My Awesome Hotel. All rights
        reserved.
      </div>
    </footer>
  );
}
