import classNames from 'classnames';
import Link from 'next/link';

// background images instead of colors might look better
const subteams = [
  { name: 'Building', backgroundColor: 'bg-red-800', color: '' },
  { name: 'Electrical', backgroundColor: 'bg-blue-800', color: '' },
  { name: 'Marketing', backgroundColor: 'bg-lime-800', color: '' },
  { name: 'Outreach', backgroundColor: 'bg-emerald-800', color: '' },
  { name: 'Programming', backgroundColor: 'bg-orange-800', color: '' },
  { name: 'Strategy', backgroundColor: 'bg-cyan-800', color: '' },
];

export default async function Blog() {
  return (
    <div className="container mx-auto mt-24 px-10">
      <h1 className="text-5xl text-white text-center mb-5">Updates</h1>
      <div className="flex flex-wrap justify-center text-white w-full">
        {subteams.map((subteam, i) => (
          <Link
            href={`/updates/${subteam.name.toLowerCase()}`}
            key={i}
            className={classNames('h-96 w-96', subteam.backgroundColor, subteam.color)}
          >
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-0">
              <h1 className="text-xl text-white">{subteam.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
