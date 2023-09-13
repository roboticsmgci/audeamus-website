import getRecentMatches from '@/lib/tba';
import MatchResults from './match-results';

export default async function RecentResults() {
  const recentMatches = await getRecentMatches(2);

  return (
    <div className="mx-auto flex flex-wrap justify-center gap-x-5 gap-y-5 mb-5 px-3 sm:px-0">
      {recentMatches.map((match) => (
        <MatchResults key={match.key} match={match} />
      ))}
    </div>
  );
}
