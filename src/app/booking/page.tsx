"use client";

import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Book a Venue</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Fill in the details below to reserve your venue.
          </p>
        </div>

        <hr className="mb-8 border-gray-200 w-full" />

        {/* Form — จัดกึ่งกลางแนวแกน x ด้วย mx-auto */}
        <form className="flex flex-col gap-5 w-[85%] mx-auto">
          <DateReserve />

          <button
            name="Book Venue"
            type="submit"
            className="w-[150px] self-center mt-4 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 text-white font-bold text-lg shadow-xl hover:shadow-2xl"
          >
            Book Venue
          </button>
        </form>
      </div>
    </main>
  );
}