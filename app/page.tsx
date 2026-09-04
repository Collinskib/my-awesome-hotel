import Image from "next/image";
import HeroBooking from "./components/HeroBooking";

const rooms = [
  {
    id: "standard",
    name: "Standard Room",
    price: "KSh 8,500",
    description:
      "Cozy and comfortable with a city view, queen bed, and modern amenities.",
    image: "/images/room3.jpg",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: "KSh 14,000",
    description:
      "Spacious room with premium bedding, workspace, and a relaxing lounge area.",
    image: "/images/room2.jpg",
  },
  {
    id: "suite",
    name: "Executive Suite",
    price: "KSh 25,000",
    description:
      "Luxurious suite with a separate living room, king bed, and panoramic views.",
    image: "/images/room1.jpg",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative h-[90vh] min-h-[600px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="My Awesome Hotel exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            A Tradition of Excellence
          </p>
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
            My Awesome Hotel
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Luxury, comfort, and genuine care in the heart of the city.
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <HeroBooking />
        </div>
      </section>

      <section id="about" className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A Promise of Unforgettable Experiences
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                My Awesome Hotel is more than just a hospitality brand — it is a
                promise of unforgettable experiences and genuine care. With a
                diverse collection of rooms and amenities, we offer something for
                every kind of traveler, whether you are looking to unwind in
                luxury, indulge in culinary delights, or explore new destinations.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Our properties are thoughtfully designed to cater to the needs of
                business travelers, families, and adventure seekers alike, each
                delivering a unique blend of comfort and elegance.
              </p>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-[450px]">
              <Image
                src="/images/lobby.jpg"
                alt="Hotel lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Accommodations
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
            Discover Your Perfect Stay
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Choose from our carefully curated rooms and suites, each designed for
            comfort and relaxation.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-lg transition hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {room.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {room.price}
                      <span className="text-sm font-normal text-muted">
                        /night
                      </span>
                    </span>
                    <a
                      href="#booking"
                      className="rounded bg-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dining" className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 relative h-80 w-full overflow-hidden rounded-2xl lg:order-1 lg:h-[450px]">
              <Image
                src="/images/dining.jpg"
                alt="Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Restaurants
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Experience Delicious Cuisines
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Every meal is a special experience, thoughtfully crafted to bring
                out the best in both local and international flavors. Whether you
                are indulging in a gourmet dinner, enjoying a laid-back lunch, or
                relishing fresh dishes by the pool, we have created the perfect
                atmosphere for any occasion.
              </p>
              <a
                href="#booking"
                className="mt-6 inline-block rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Destinations
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Visit Our Fantastic Destinations
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Featuring a pleasant blend of natural materials and elegance, the
                decor and furnishings create an inviting ambience fostering
                relaxation and a sense of well-being. Discover a place where every
                corner is designed to inspire and refresh.
              </p>
              <a
                href="#rooms"
                className="mt-6 inline-block rounded border-2 border-dark px-6 py-3 font-semibold text-dark transition hover:bg-dark hover:text-white"
              >
                Discover Our Rooms
              </a>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-[450px]">
              <Image
                src="/images/pool.jpg"
                alt="Pool area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-[450px]">
              <Image
                src="/images/conference.jpg"
                alt="Conference room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Events
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Conferences & Meetings
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Our versatile conference facilities are designed to meet the needs
                of both small and large gatherings. Equipped with the latest
                technology, ample seating, and personalized service, our spaces are
                ideal for business meetings, seminars, and social gatherings.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Newsletter
          </p>
          <h2 className="mt-3 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-muted">
            Be the first to know about special offers, events, and updates.
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="flex-1 rounded border border-zinc-200 bg-white p-3 text-dark outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="rounded bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
