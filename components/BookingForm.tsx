'use client'
import { services } from '@/app/services/page';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

interface BookingFormProps {
  preSelectedService?: string;
}

const BookingForm = ({ preSelectedService }: BookingFormProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({ name: "", email: "", service: preSelectedService || "", date: "" });
  const [loading, setLoading] = useState(false);

  // Auto-scroll to form when preSelectedService is provided
  useEffect(() => {
    if (preSelectedService && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 500); // Small delay to ensure page is loaded
    }
  }, [preSelectedService]);

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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
      {/* <input
        type="text"
        placeholder="Service Requested"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        required
        className="w-full p-2 border rounded"
      /> */}
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        required
        className="w-full p-2 border rounded"
      >
        {services.map((service) => (
          <option key={service.id} value={service.name}>
            {service.name} - ${service.price.toFixed(2)}
          </option>
        ))}
      </select>
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