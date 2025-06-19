'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const BookingForm = ({ }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", date: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setLoading(false);
    if (result.ok) {
      alert("Booking successful! 🎉");
      router.push("/");
    } else {
      alert("Failed to book. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Service Requested"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>)
}

export { BookingForm }