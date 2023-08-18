import classNames from 'classnames';
// eslint-disable-next-line
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { StopIcon } from '@heroicons/react/24/outline';
import { MatchSimple } from '@/types/tba';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

type MatchResultsProps = {
  match: MatchSimple;
}

export default function MatchResults({ match }: MatchResultsProps) {
  // const currentDate = new Date().getTime();
  const matchDate = match.actual_time! * 1000;

  return (
    <Link
      href={`https://www.thebluealliance.com/match/${match.key}`}
      target="_blank"
      className={classNames('bg-black flex flex-col w-full max-w-sm md:w-80 p-2 border-2 border-gray-700', robotoMono.className)}
    >
      <div className="mb-2 text-xs flex justify-between">
        <div>
          {match.event_key}
        </div>
        <div>
          {new Date(matchDate).toDateString()}
        </div>
      </div>
      <div className={classNames('flex flex-row justify-between', { 'font-extrabold': match.winning_alliance === 'red' })}>
        <div>
          <StopIcon className="inline-block h-6 w-6 stroke-none fill-red-800" />
          {match.alliances!.red.team_keys.map((teamKey) => teamKey.slice(3)).join(' - ')}
        </div>
        <div className="w-10">{match.alliances!.red.score}</div>
      </div>
      <div className={classNames('flex flex-row justify-between', { 'font-extrabold': match.winning_alliance === 'blue' })}>
        <div>
          <StopIcon className="inline-block h-6 w-6 stroke-none fill-blue-800" />
          {match.alliances!.blue.team_keys.map((teamKey) => teamKey.slice(3)).join(' - ')}
        </div>
        <div className="w-10">{match.alliances!.blue.score}</div>
      </div>
    </Link>
  );
}
