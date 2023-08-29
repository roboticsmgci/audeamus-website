import classNames from 'classnames';
import Image from 'next/image';
import styles from '../app/home.module.css';

type PageTitleProps = {
  imageSrc: string;
  title: string;
  imageAlt: string;
}

export default function PageTitle({ imageSrc, title, imageAlt }: PageTitleProps) {
  return (
    <div className="font-glacialindifferencebold w-full h-60 overflow-hidden flex flex-col items-center justify-center relative">
      <Image src={imageSrc} fill className="object-cover" alt={imageAlt} priority />
      <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
        <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>{title}</h1>
      </div>
    </div>
  );
}
