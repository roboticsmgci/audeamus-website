import type { Metadata } from 'next';
import PageTitle from '@/components/page-title';
import classNames from 'classnames';
import Image from 'next/image';
import contentfulClient from '@/lib/contentful';
import { AuthorSkeleton } from '@/types/contentful';
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the MGCI Robotics team. Meet our members, view our achievements, and explore the club\'s history.',
};

const subteams = {
  Captain: 'bg-red-800',
  Building: 'bg-green-800',
  Electrical: 'bg-yellow-800',
  Marketing: 'bg-pink-800',
  Outreach: 'bg-teal-800',
  Software: 'bg-blue-800',
  Strategy: 'bg-purple-800',
};

type Subteam = 'Building' | 'Electrical' | 'Software' | 'Marketing';

export default async function About() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<AuthorSkeleton>({
    content_type: 'author',
  });

  entries.items.sort((a, b) => a.fields.name.localeCompare(b.fields.name));

  const execs = [...entries.items]
    .sort((a, b) => (
      a.fields.subteams[0]!.fields.name.localeCompare(b.fields.subteams[0]!.fields.name) * 3
      + a.fields.name.localeCompare(b.fields.name)
    ))
    .filter((member) => member.fields.lead && !['Captain', 'Other'].includes(member.fields.subteams[0]!.fields.name));

  const captains = entries.items.filter((member) => member.fields.subteams[0]!.fields.name === 'Captain');

  return (
    <>
      <PageTitle imageSrc="/about-image.jpg" title="ABOUT" imageAlt="Placeholder image" />
      <main className="mx-auto max-w-5xl px-5">
        <h2 className={classNames(styles.headingShadow, 'text-5xl font-bold mt-1')}>Members:</h2>
        <p className="text-lg font-bold mt-4">Below are the 2023-24 team members, including the subteams they are a part of.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-8">
          <div>
            <h3 className={classNames('text-4xl font-bold mb-5', styles.smallHeadingShadow)}>Execs</h3>
            {[...captains, ...execs].map((member, i) => (
              <div key={i} className={classNames(subteams[member.fields.subteams[0]!.fields.name as Subteam], 'p-2 rounded-3xl flex mb-5 max-w-sm')}>
                {member.fields.profilePicture?.fields.file?.url
                  ? <Image
                      src={`https:${member.fields.profilePicture!.fields.file!.url}`}
                      alt="Profile picture"
                      width={64}
                      height={64}
                      className="rounded-full border-white border-2"
                    />
                  : <UserCircleIcon className="w-16 h-16 rounded-full fill-white p-0" />
                }
                <div className="pl-3 py-1">
                  <h4 className="text-xl font-bold">{member.fields.name}</h4>
                  <p className="italic text-gray-300 font-bold">{member.fields.subteams[0]!.fields.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className={classNames('text-4xl font-bold', styles.smallHeadingShadow)}>Members</h3>
            {Object.keys(subteams).filter((subteam) => subteam !== 'Captain').map((subteam) => (
              <React.Fragment key={subteam}>
                <h3 className="text-2xl font-bold italic underline mt-4">{subteam.toUpperCase()}</h3>
                {entries.items
                  .filter((member) => !member.fields.lead
                                   && member.fields.subteams
                                     .map((item) => item?.fields.name).includes(subteam))
                  .map((member, i) => (
                    <div className="inline-block w-1/2 text-xl" key={i}>{member.fields.name}</div>
                  ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
