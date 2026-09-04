"use client";

import { useState } from "react";

export default function HeroBooking() {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("Thank you! We will confirm availability shortly.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-6 w-full max-w-5xl rounded-xl bg-white/95 p-6 shadow-xl backdrop-blur md:mx-auto"
    >
      {msg && (
        <p className="mb-4 rounded bg-green-100 p-3 text-center text-sm text-green-800">
          {msg}
        </p>
      )}
      <div className="grid gap-4 md:grid-cols-5">
        <div>
          <label
            htmlFor="checkin"
            className="mb-1 block text-xs font-semibold text-dark"
          >
            Check-in <span className="text-primary">*</span>
          </label>
          <input
            id="checkin"
            name="checkin"
            type="date"
            required
            className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="checkout"
            className="mb-1 block text-xs font-semibold text-dark"
          >
            Check-out <span className="text-primary">*</span>
          </label>
          <input
            id="checkout"
            name="checkout"
            type="date"
            required
            className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="adults"
            className="mb-1 block text-xs font-semibold text-dark"
          >
            Adults
          </label>
          <select
            id="adults"
            name="adults"
            defaultValue="1"
            className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 text-sm text-dark outline-none focus:border-primary"
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="children"
            className="mb-1 block text-xs font-semibold text-dark"
          >
            Children
          </label>
          <select
            id="children"
            name="children"
            className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 text-sm text-dark outline-none focus:border-primary"
          >
            {Array.from({ length: 11 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded bg-primary py-2.5 font-semibold text-white transition hover:bg-primary-dark"
          >
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}
