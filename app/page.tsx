import classNames from 'classnames';
import styles from './home.module.css';

export default async function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="w-full h-96 overflow-hidden bg-[url('/team-blurred.webp')] bg-cover bg-center flex flex-col items-center justify-center">
          <h1 className={classNames('text-center align-middle text-8xl font-bold mb-2', styles.redShadow)}>MGCI ROBOTICS</h1>
          <h2 className={classNames('text-3xl font-bold mb-1', styles.redOutline)}>AUDEAMUS</h2>
          <h2 className={classNames('text-3xl font-bold', styles.redOutline)}>FRC 8574</h2>
        </div>
      </div>
      <div className="col-span-3">
        <p>There</p>
      </div>
    </div>
  );
}
