'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export default function KickoffCountdown() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const kickoffTime = new Date('2024-01-06T12:00:00-05:00');
      const newSeconds = (kickoffTime.valueOf() - currentTime.valueOf()) / 1000;

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
      <h2 className="text-2xl font-bold">Countdown to Kickoff</h2>
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
      <button className="absolute right-2 top-2" onClick={() => setVisible(false)}><XMarkIcon className="w-5 h-5" /></button>
    </div>
  );
}
