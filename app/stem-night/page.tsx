import PageTitle from '@/components/page-title';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'STEM Night',
  description: 'Learn about STEM Night: what it is, where it is, how to volunteer, and how to get a ticket!',
};

export default function StemNight() {
  return (
    <>
      <PageTitle imageSrc="/showcase-photo.webp" title="STEM NIGHT" imageAlt="Team logo" />
      <main className="container mx-auto px-5 flex flex-col items-center pt-5">
        <p className="text-2xl mb-8 max-w-3xl text-center">Join us and learn more about robotics and STEM, have fun, and get volunteer hours. We&apos;ll have a presentation, a variety of workshops, and food!</p>
        <div className="flex flex-wrap gap-x-20 gap-y-5 justify-center">
          <div className="flex flex-col items-center">
            <MapPinIcon title="Where" className="w-10 h-10" />
            <p className="text-xl mb-5">Marc Garneau Collegiate Institute</p>
          </div>
          <div className="flex flex-col items-center">
            <CalendarIcon title="Date" className="w-10 h-10" />
            <p className="text-xl mb-5">November 2, 2023</p>
          </div>
          <div className="flex flex-col items-center">
            <ClockIcon title="Time" className="w-10 h-10" />
            <p className="text-xl mb-5">5:00 PM - 8:00 PM</p>
          </div>
        </div>
        <h2 className="font-bold text-4xl mt-6">Links:</h2>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-4 mx-auto my-5">
          <Link
            className="sm:ml-5 md:ml-28 text-2xl bg-red-700 px-3 py-2 font-bold italic rounded-lg hover:underline hover:bg-red-800"
            href="https://docs.google.com/forms/d/1WXYabQFbUaXx9ZrBFKM-uDGSmsS4m4w-M7qU-rvLa_Q/viewform"
            target="_blank"
          >
            Volunteer Signup
          </Link>
          <Link
            className="sm:mr-5 md:mr-28 text-2xl bg-blue-700 px-3 py-2 font-bold italic rounded-lg hover:underline hover:bg-blue-800"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQEbAj1r8C_XzOvN2yE04_xXySFNwuq0mn5sv75370HfIwXw/viewform"
            target="_blank"
          >
            Tickets
          </Link>
        </div>
      </main>
    </>
  );
}
