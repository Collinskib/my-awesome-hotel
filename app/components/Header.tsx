import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-heading text-2xl font-bold text-primary">
          My Awesome Hotel
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#about" className="text-dark transition hover:text-primary">
            About
          </a>
          <a href="#rooms" className="text-dark transition hover:text-primary">
            Accommodations
          </a>
          <a href="#dining" className="text-dark transition hover:text-primary">
            Dining
          </a>
          <a href="#contact" className="text-dark transition hover:text-primary">
            Contact
          </a>
          <a
            href="#booking"
            className="rounded bg-primary px-4 py-2 text-white transition hover:bg-primary-dark"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
