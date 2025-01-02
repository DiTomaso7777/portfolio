import Link from "next/link";
import Header from "./Header";

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="w-screen h-screen flex flex-col items-center justify-center bg-blue-500 pt-16">
        <iframe
          src="https://outlook.office365.com/owa/calendar/BookanappointmentwithMarius@enyore.com/bookings/"
          width="100%"
          height="100%"
          scrolling="yes"
          style={{ border: 0, margin: 0, padding: 0, display: 'block' }}
        ></iframe>
      </main>
    </>
  );
}