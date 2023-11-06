import type { MatchSimple } from '@/types/tba';

// Note that eTag functionality will only work in production (not in dev mode)
let eTag: string | undefined;
let lastResponse: MatchSimple[] | undefined;

type TBAHeaders = {
  'If-None-Match'?: string;
  'X-TBA-Auth-Key': string;
};

export default async function getRecentMatches(count: number) {
  const headers: TBAHeaders = {
    'X-TBA-Auth-Key': process.env.TBA_API_KEY!,
  };

  const currentYear = new Date().getFullYear();

  if (eTag && process.env.NODE_ENV === 'production') headers['If-None-Match'] = eTag;

  const response = await fetch(`https://www.thebluealliance.com/api/v3/team/frc8574/matches/${currentYear}/simple`, {
    method: 'GET',
    headers,
  });

  eTag = response.headers.get('ETag')!;

  let data;
  console.log(response.status);
  if (response.status === 304) {
    data = lastResponse as MatchSimple[];
  } else {
    data = await response.json() as MatchSimple[];
    lastResponse = data;
  }

  const currentTime = new Date().getTime() / 1000;

  data = data.filter((match) => match.actual_time !== undefined && match.actual_time < currentTime);

  data.sort((a, b) => b.actual_time! - a.actual_time!);

  return data.slice(0, count);
}
