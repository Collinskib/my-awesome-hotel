import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-amber-700">
          My Awesome Hotel
        </Link>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <a href="#rooms" className="hover:text-amber-700">Rooms</a>
          <a href="#services" className="hover:text-amber-700">Services</a>
          <a href="#booking" className="hover:text-amber-700">Book Now</a>
        </nav>
      </div>
    </header>
  );
}
