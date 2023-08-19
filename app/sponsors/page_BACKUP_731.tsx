import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../home.module.css';

export default async function Sponsors() {
  return (
    <div>
      <div className="font-glacialindifferencebold px-2 w-full h-60 overflow-hidden bg-[url('/team.webp')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
          <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>SPONSORS</h1>
        </div>
      </div>
      <h3 className={classNames('text-4xl font-bold text-center mb-2 mt-4', styles.textShadow)}>Thank you for your interest in sponsoring Audeamus!</h3>
      <p className="text-2xl font-bold text-center mt-4 mb-8 px-5 max-w-4xl mx-auto">
      For new potential sponsors, you can download our Sponsorship Package and Team Resume, as well as view our Sponsorship Tiers.
      </p>
      <h4 className={classNames('text-6xl font-bold mb-4 mt-4 max-w-5xl mx-auto', styles.titleShadow)}>TIERS</h4>
      <div className="grid grid-cols-4 max-w-5xl mx-auto mt-6 mb-10">
        <div className="cols-span-4 sm:col-span-1">
          <div className="text-5xl font-bold text-[#B2935B] mb-3">COPPER</div>
          <ul className="text-2xl font-bold">
            <li>- Never gonna</li>
            <li>- Give you up</li>
            <li>- Let you down</li>
          </ul>
        </div>
        <div className="cols-span-4 sm:col-span-1">
          <div className="text-5xl font-bold text-[#DDDDDD] mb-3">ALUMINIUM</div>
          <ul className="text-2xl font-bold">
            <li>- Never gonna</li>
            <li>- Give you up</li>
            <li>- Let you down</li>
            <li>- Run around</li>
          </ul>
        </div>
        <div className="cols-span-4 sm:col-span-1">
          <div className="text-5xl font-bold text-[#C0C0C0] mb-3">SILVER</div>
          <ul className="text-2xl font-bold">
            <li>- Never gonna</li>
            <li>- Give you up</li>
            <li>- Let you down</li>
            <li>- Run around</li>
            <li>- Desert you</li>
          </ul>
        </div>
        <div className="cols-span-4 sm:col-span-1">
          <div className="text-5xl font-bold text-[#FFD700] mb-3">GOLD</div>
          <ul className="text-2xl font-bold">
            <li>- Copper &gt; Aluminium</li>
            <li>- Where Bronze</li>
            <li>- What if Platinum &gt; Gold</li>
            <li>- Consider moving</li>
            <li>- buttons above tiers</li>
            <li>- Italics makes me think it's a link</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center sm:justify-between gap-x-5 gap-y-4 px-4 max-w-5xl mx-auto">
        <Link className="sm:ml-5 md:ml-28 text-3xl bg-red-700 px-3 py-2 font-bold italic rounded-lg" href="/about">View Members</Link>
        <Link className="sm:mr-5 md:mr-28 text-3xl bg-purple-700 px-3 py-2 font-bold italic rounded-lg" href="/sponsors">View Sponsors</Link>
      </div>
      <div className="grid grid-cols-3 my-10 px-3 mx-auto max-w-4xl">
        <div className="col-span-3 sm:col-span-2">
          <h3 className={classNames('text-4xl font-bold italic text-center mb-2', styles.textShadow)}>Wanna join?</h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie
            dapibus nibh, nec molestie mi semper nec. Integer interdum congue lorem, sit amet
            sagittis eros tempor quis.
          </p>
        </div>
        <div className="col-span-3 h-96 sm:h-auto sm:col-span-1 relative">
          <Image src="/8574-logo.png" fill className={classNames('object-contain', styles.dropShadow)} alt="Audeamus Logo" />
        </div>
      </div>
      <div className="grid grid-cols-3 px-3 mb-4 mx-auto max-w-4xl">
        <div className="col-span-3 sm:col-span-2">
          <h3 className={classNames('text-4xl font-bold italic text-center mb-2', styles.textShadow)}>Competition History</h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie
            dapibus nibh, nec molestie mi semper nec. Integer interdum congue lorem, sit amet
            sagittis eros tempor quis.
          </p>
        </div>
        <div className="col-span-3 h-96 sm:h-auto sm:col-span-1 relative">
          <Image src="/8574-logo.png" fill className={classNames('object-contain', styles.dropShadow)} alt="Audeamus Logo" />
        </div>
      </div>
    </div>
  );
}
