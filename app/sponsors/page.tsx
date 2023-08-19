import classNames from 'classnames';
import Link from 'next/link';
import styles from '../home.module.css';
import Image from 'next/image';

export default async function Sponsors() {
  return (
    <div>
      <div className="font-glacialindifferencebold px-2 w-full h-60 overflow-hidden bg-[url('/team.webp')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
          <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>SPONSORS</h1>
        </div>
      </div>
      <h3 className={classNames('text-4xl font-bold text-center mb-2 mt-4', styles.textShadow)}>Thank you for your interest in sponsoring Audeamus!</h3>
          <p className="text-2xl font-bold text-center mt-4 mb-8 px-5 max-w-5xl mx-auto">
          For new potential sponsors, you can download our Sponsorship Package and Team Resume, as well as view our Sponsorship Tiers.
          </p>
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
