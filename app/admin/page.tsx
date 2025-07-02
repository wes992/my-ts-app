'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Booking } from "@/types/booking";

const AdminPage = () => {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      fetchBookings()
    }
  }, []);

  const fetchBookings = async () => {
    const result = await fetch('/api/bookings');

    const bookings = await result.json()
    setBookings(bookings || [])
  }


  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{booking.service}</h2>
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Date:</strong> {booking.date}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default AdminPage