import PageTitle from '@/components/page-title';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STEM Night',
  description: 'Learn about STEM Night: what it is, where it is, how to volunteer, and how to get a ticket!',
};

export default function StemNight() {
  return (
    <>
      <PageTitle imageSrc="/showcase-photo.webp" title="STEM NIGHT" imageAlt="Team logo" />
      <main className="container mx-auto px-5 flex flex-col items-center pt-5">
        <p className="text-2xl mb-8 max-w-3xl text-center">Join us to learn more about STEM and to have a night full of fun! We&apos;ll have a presentation, guest speakers, a variety of workshops, and food!</p>
        <div className="flex flex-wrap gap-x-20 gap-y-5 justify-center">
          <div className="flex flex-col items-center">
            <MapPinIcon title="Where" className="w-10 h-10" />
            <p className="text-xl mb-5 text-center">Marc Garneau Collegiate Institute<br />135 Overlea Blvd</p>
          </div>
          <div className="flex flex-col items-center">
            <CalendarIcon title="Date" className="w-10 h-10" />
            <p className="text-xl mb-5">April 9, 2025</p>
          </div>
          <div className="flex flex-col items-center">
            <ClockIcon title="Time" className="w-10 h-10" />
            <p className="text-xl mb-5">5:00 PM - 8:00 PM</p>
          </div>
        </div>
        {/* <h2 className="font-bold text-4xl my-6">Registration has now closed.
        Thank you for coming to STEM Night 2023!</h2> */}
      </main>
    </>
  );
}
