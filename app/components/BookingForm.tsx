"use client";

import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800">
        <h3 className="text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2">Your booking request has been received. We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="checkin">Check-in</label>
          <input id="checkin" name="checkin" type="date" required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="checkout">Check-out</label>
          <input id="checkout" name="checkout" type="date" required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="guests">Guests</label>
          <input id="guests" name="guests" type="number" min={1} max={10} defaultValue={1} required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-900" htmlFor="room">Room type</label>
        <select id="room" name="room" required className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-amber-600">
          <option value="">Select a room</option>
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Executive Suite</option>
        </select>
      </div>
      <button type="submit" className="w-full rounded-lg bg-amber-700 py-3 font-semibold text-white transition hover:bg-amber-800">
        Request Booking
      </button>
    </form>
  );
}
