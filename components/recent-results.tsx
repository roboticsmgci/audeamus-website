import getRecentMatches from '@/lib/tba';
import MatchResults from './match-results';

export default async function RecentResults() {
  const recentMatches = await getRecentMatches(2);

  return (
    <div className="container mx-auto px-5 flex flex-wrap justify-center gap-x-5 gap-y-5">
      {recentMatches.map((match) => (
        <MatchResults key={match.key} match={match} />
      ))}
    </div>
  );
}
