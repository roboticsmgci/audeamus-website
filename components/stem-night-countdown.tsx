'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StemNightCountdown() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const stemNightTime = new Date('2023-11-02T17:00:00-04:00');
      const newSeconds = (stemNightTime.valueOf() - currentTime.valueOf()) / 1000;

      if (newSeconds > 0) {
        setSeconds(newSeconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={classNames('flex flex-col items-center p-5 bg-red-900 relative', { hidden: !visible })}>
      <h2 className="text-2xl font-bold">Countdown to STEM Night</h2>
      <div className="grid grid-cols-4 text-center w-full sm:w-96 my-2">
        <div className="text-5xl sm:text-7xl font-bold">{seconds !== null ? Math.floor(seconds / 60 / 60 / 24).toString().padStart(2, '0') : '--'}</div>
        <div className="text-5xl sm:text-7xl font-bold">{seconds !== null ? Math.floor((seconds % (60 * 60 * 24)) / 60 / 60).toString().padStart(2, '0') : '--'}</div>
        <div className="text-5xl sm:text-7xl font-bold">{seconds !== null ? Math.floor((seconds % (60 * 60)) / 60).toString().padStart(2, '0') : '--'}</div>
        <div className="text-5xl sm:text-7xl font-bold">{seconds !== null ? Math.floor((seconds % 60)).toString().padStart(2, '0') : '--'}</div>
        <div className="text-lg sm:text-xl">days</div>
        <div className="text-lg sm:text-xl">hours</div>
        <div className="text-lg sm:text-xl">minutes</div>
        <div className="text-lg sm:text-xl">seconds</div>
      </div>
      <Link className="mt-5 text-blue-100 hover:text-blue-200 underline" href="/stem-night">Click here for more info!</Link>
      <button className="absolute right-2 top-2" onClick={() => setVisible(false)}><XMarkIcon className="w-5 h-5" /></button>
    </div>
  );
}
