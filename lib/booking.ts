import { Booking } from "@/types/booking";

export const bookings: Booking[] = [];

export function addBooking(booking: Booking) {
  bookings.push(booking);
}

export function getBookings() {
  return bookings;
}
