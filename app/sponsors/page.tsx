import type { Metadata } from 'next';
import classNames from 'classnames';
import Link from 'next/link';
import PageTitle from '@/components/page-title';
import styles from '../home.module.css';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Learn more about MGCI Robotics\' sponsorship tiers and download our Sponsorship Package and Team Resume.',
};

export default async function Sponsors() {
  return (
    <>
      <PageTitle imageSrc="/worlds-team.jpg" title="SPONSORS" imageAlt="Team photo" />
      <main className="container mx-auto px-5">
        <h3 className={classNames('text-4xl font-bold text-center mb-2 mt-4', styles.textShadow)}>Thank you for your interest in sponsoring Audeamus!</h3>
        <p className="text-2xl font-bold text-center mt-4 mb-8">
          For new potential sponsors, you can download our Sponsorship Package and Team Resume,
          as well as view our Sponsorship Tiers.
        </p>
        <h2 className={classNames('text-6xl font-bold mb-4 mt-4', styles.titleShadow)}>TIERS</h2>
        {/* <h3 className='text-5xl font-bold mb-20 mt-4'>Coming Soon!</h3> */}
        <div
          className="grid grid-cols-11 2xl:grid-cols-5 mt-6 mb-10 gap-x-6 text-xl lg:text-base"
        >
          <div className="col-span-11 lg:col-span-3 2xl:col-span-1 mb-3">
            <h3 className="text-4xl font-bold text-[#CF50CF] mb-1">SMALL BUSINESS<br />($300+)</h3>
            <ul className="list-disc list-outside ml-6">
              <li>Newsletter</li>
              <li>Name and logo on website</li>
              <li>Social media shoutout</li>
              <li>Logo on banner</li>
              <li>Logo and company contact or hyperlink on website</li>
              <li>Distribution of business cards or flyers at competition</li>
            </ul>
          </div>
          <div className="col-span-11 lg:col-span-2 2xl:col-span-1 mb-3">
            <h3 className="text-4xl font-bold text-[#B2935B] mb-1">BRONZE<br />($200+)</h3>
            <ul className="list-disc list-outside ml-6">
              <li>Newsletter</li>
              <li>Name and logo on website</li>
              <li>Social media shoutout</li>
              <li>Logo on banner</li>
            </ul>
          </div>
          <div className="col-span-11 lg:col-span-2 2xl:col-span-1 mb-3">
            <h3 className="text-4xl font-bold text-[#C0C0C0] mb-1">SILVER<br />($500+)</h3>
            <p className="italic">Everything in Bronze, plus:</p>
            <ul className="list-disc list-outside ml-6">
              <li>Logo and company contact on website</li>
              <li>Logo on merchandise (shirts and hoodies)</li>
            </ul>
          </div>
          <div className="col-span-11 lg:col-span-2 2xl:col-span-1 mb-3">
            <h3 className="text-4xl font-bold text-[#FFD700] mb-1">GOLD<br />($1000+)</h3>
            <p className="italic">Everything in Silver, plus:</p>
            <ul className="list-disc list-outside ml-6">
              <li>Verbal recognition at competition</li>
              <li>Framed team photo</li>
            </ul>
          </div>
          <div className="col-span-11 lg:col-span-2 2xl:col-span-1 mb-3">
            <h3 className="text-4xl font-bold text-[#B9F2FF] mb-1">DIAMOND<br />($2500+)</h3>
            <p className="italic">Everything in Gold, plus:</p>
            <ul className="list-disc list-outside ml-6">
              <li>Provided logo sticker displayed on robot</li>
              <li>Logo emphasis on merchandise</li>
              <li>Distribution of business cards or flyers at competition</li>
            </ul>
          </div>
        </div>
        <h4 className={classNames('text-6xl font-bold mb-4 mt-4', styles.titleShadow)}>CURRENT SPONSORS</h4>
        <h5 className='text-5xl font-bold mb-20 mt-4'>Coming Soon!</h5>
        <div className="grid grid-cols-2 mx-auto max-w-5xl">
          <div className="flex items-center flex-col col-span-2 lg:col-span-1 mb-5">
            <h3 className={classNames('text-3xl font-bold mb-2 text-center', styles.textShadow)}>Sponsorship Package:</h3>
            <Link target="_blank" className="italic bg-red-600 mx-auto text-3xl font-bold px-3 py-2 rounded-xl" href="/MGCI Robotics Sponsorship Package 2023-2024.pdf" download>Download</Link>
          </div>
          <div className="flex items-center flex-col col-span-2 lg:col-span-1 mb-5">
            <h3 className={classNames('text-3xl font-bold mb-2 text-center', styles.textShadow)}>Club Resume:</h3>
            <Link target="_blank" className="italic bg-red-600 mx-auto text-3xl font-bold px-3 py-2 rounded-xl" href="/MGCI Robotics Club Resume 2023.pdf" download>Download</Link>
          </div>
        </div>
      </main>
    </>
  );
}
