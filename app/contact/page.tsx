import type { Metadata } from 'next';
import Link from 'next/link';
import PageTitle from '@/components/page-title';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the MGCI Robotics team. Contact us about sponsorship, joining our club, or other inquiries.',
};

export default function Contact() {
  return (
    <>
      <PageTitle imageSrc="/blog-image.webp" title="CONTACT" imageAlt="Team photo" />
      <main className="container mx-auto px-5 text-center">
        <p className="text-2xl my-3">Join us on <Link target="_blank" className="text-red-600 underline hover:text-red-400" href="https://discord.gg/ZsFRezU74a">Discord</Link></p>
        <p className="text-2xl my-3">Email us at <Link target="_blank" className="text-red-600 underline hover:text-red-400" href="mailto:roboticsmgci@gmail.com">roboticsmgci@gmail.com</Link></p>
        <p className="text-2xl my-3">Join us on <Link target="_blank" className="text-red-600 underline hover:text-red-400" href="https://www.facebook.com/RoboticsMGCI">Facebook</Link></p>
        <p className="text-2xl my-3">Check out our code on <Link target="_blank" className="text-red-600 underline hover:text-red-400" href="https://github.com/roboticsmgci">GitHub</Link></p>
        <p className="text-2xl my-3">Join us on <Link target="_blank" className="text-red-600 underline hover:text-red-400" href="https://www.instagram.com/mgci_robotics/">Instagram</Link></p>
      </main>
    </>
  );
}
