import Image from "next/image";
import BookingForm from "./components/BookingForm";

const rooms = [
  {
    id: "standard",
    name: "Standard Room",
    price: "KSh 8,500",
    description: "Cozy and comfortable with a city view, queen bed, and modern amenities.",
    image: "/images/room3.jpg",
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: "KSh 14,000",
    description: "Spacious room with premium bedding, workspace, and a relaxing lounge area.",
    image: "/images/room2.jpg",
  },
  {
    id: "suite",
    name: "Executive Suite",
    price: "KSh 25,000",
    description: "Luxurious suite with a separate living room, king bed, and panoramic views.",
    image: "/images/room1.jpg",
  },
];

const services = [
  { title: "Fine Dining", text: "Award-winning restaurant with local and international cuisine.", image: "/images/dining.jpg" },
  { title: "Spa & Wellness", text: "Rejuvenate with massages, saunas, and wellness treatments.", image: "/images/spa.jpg" },
  { title: "Rooftop Pool", text: "Swim and unwind with stunning skyline views.", image: "/images/pool.jpg" },
  { title: "Free Wi-Fi", text: "High-speed internet in every room and public space." },
  { title: "Airport Shuttle", text: "Complimentary transfers to and from the airport." },
  { title: "24/7 Concierge", text: "Always here to help with tours, transport, and more." },
];

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-br from-amber-50/50 via-white to-zinc-50">
      <section className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="My Awesome Hotel exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to My Awesome Hotel
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-100">
            Where comfort meets elegance. Book your perfect stay today.
          </p>
          <a
            href="#booking"
            className="mt-8 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-8 py-3 font-semibold text-white transition hover:from-amber-800 hover:to-amber-700"
          >
            Book Now
          </a>
        </div>
      </section>

      <section id="rooms" className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-b from-white to-amber-50/60 px-6 py-20 shadow-sm">
        <h2 className="text-center text-3xl font-bold text-zinc-800">Our Rooms</h2>
        <p className="mt-3 text-center text-zinc-600">Choose the perfect room for your stay.</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/80 shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-zinc-800">{room.name}</h3>
                  <span className="font-bold text-amber-700">{room.price} <span className="text-sm font-normal text-zinc-500">/night</span></span>
                </div>
                <p className="mt-2 text-zinc-600">{room.description}</p>
                <a
                  href="#booking"
                  className="mt-4 inline-block rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-700 px-5 py-2 text-sm font-medium text-white transition hover:from-zinc-800 hover:to-zinc-600"
                >
                  Book This Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-gradient-to-br from-zinc-100 to-amber-50/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-800">Services & Amenities</h2>
          <p className="mt-3 text-center text-zinc-600">Everything you need for a memorable stay.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/70 p-6 shadow-sm"
              >
                {service.image && (
                  <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-zinc-800">{service.title}</h3>
                <p className="mt-1 text-zinc-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-b from-white to-amber-50/50 px-6 py-20 shadow-sm">
        <h2 className="text-center text-3xl font-bold text-zinc-800">Book Your Stay</h2>
        <p className="mt-3 text-center text-zinc-600">Fill in your details and we will confirm your reservation.</p>
        <div className="mt-10">
          <BookingForm />
        </div>
      </section>
    </main>
  );
}
