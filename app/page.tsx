import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './home.module.css';

export default async function Home() {
  return (
    <div className="grid grid-cols-4">
      <main className="col-span-3">
        <div className="w-full h-96 overflow-hidden bg-[url('/team-blurred.webp')] bg-cover bg-center flex flex-col items-center justify-center">
          <h1 className={classNames('text-center align-middle text-8xl font-bold mb-2', styles.redShadow)}>MGCI ROBOTICS</h1>
          <h2 className={classNames('text-3xl font-bold mb-1', styles.redOutline)}>AUDEAMUS</h2>
          <h2 className={classNames('text-3xl font-bold', styles.redOutline)}>FRC 8574</h2>
        </div>
        <p className="text-center text-3xl my-4 mx-5">
          We are the robotics team based in Marc Garneau Collegiate Institute, a high school based
          in Toronto, Ontario, and a part of the Toronto District School Board.
        </p>
        <div className="flex justify-between">
          <Link className="ml-28 text-3xl bg-red-700 px-3 py-2 font-bold italic rounded-lg" href="/about">View Members</Link>
          <Link className="mr-28 text-3xl bg-purple-700 px-3 py-2 font-bold italic rounded-lg" href="/sponsors">View Sponsors</Link>
        </div>
        <div className="grid grid-cols-3 my-10">
          <div className="col-span-2">
            <h1 className={classNames('text-4xl font-bold italic text-center', styles.textShadow)}>Wanna join?</h1>
            <p className="text-2xl mx-auto max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie
              dapibus nibh, nec molestie mi semper nec. Integer interdum congue lorem, sit amet
              sagittis eros tempor quis.
            </p>
          </div>
          <div className="col-span-1 relative">
            <Image src="/8574-logo.png" fill className={classNames('object-contain', styles.dropShadow)} alt="Audeamus Logo" />
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h1 className={classNames('text-4xl font-bold italic text-center', styles.textShadow)}>Competition History</h1>
            <p className="text-2xl mx-auto max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie
              dapibus nibh, nec molestie mi semper nec. Integer interdum congue lorem, sit amet
              sagittis eros tempor quis.
            </p>
          </div>
          <div className="col-span-1 relative">
            <Image src="/8574-logo.png" fill className={classNames('object-contain', styles.dropShadow)} alt="Audeamus Logo" />
          </div>
        </div>
      </main>
      <div className="border-l-2 bg-[#313137]">
        <p>There</p>
      </div>
    </div>
  );
}
