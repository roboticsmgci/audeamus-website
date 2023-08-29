import { redirect } from 'next/navigation';
import PageTitle from '@/components/page-title';

export default async function About() {
  redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  return (
    <div>
      <PageTitle imageSrc="/image-placeholder.gif" title="ABOUT US" imageAlt="Placeholder image" />
    </div>
  );
}
