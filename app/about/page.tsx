import classNames from 'classnames';
import Link from 'next/link';
import styles from '../home.module.css';
import Image from 'next/image';

export default async function About() {
  return (
    <div>
      <div className="font-glacialindifferencebold px-2 w-full h-60 overflow-hidden bg-[url('/image-placeholder.gif')] bg-fill bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
          <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>ABOUT US</h1>
        </div>
      </div>
    </div>
  );
}
