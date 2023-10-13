'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SPONSORS', href: '/sponsors' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'STEM NIGHT', href: '/stem-night' },
];

const socialMedia = [
  { name: 'instagram', image: '/instagram-white.svg', href: 'https://www.instagram.com/mgci_robotics/' },
  { name: 'discord', image: '/discord-white.svg', href: 'https://discord.gg/ZsFRezU74a' },
];

export default function Navbar() {
  const currentHref = usePathname();

  return (
    <Disclosure as="nav" className="bg-red-600 w-full sticky top-0 z-10">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute top-0 inset-y-0 left-1 flex items-center lg:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  width={72}
                  height={72}
                  src="/8574-logo-light.png"
                  alt="MGCI Robotics"
                />
              </div>
              <div className="hidden lg:ml-6 lg:flex space-x-4 my-auto grow">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      currentHref === item.href ? 'bg-red-700 text-xl' : 'hover:text-gray-200 text-lg',
                      'rounded-full px-3 py-2 text-white font-bold',
                    )}
                    aria-current={currentHref === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="hidden lg:ml-6 lg:flex space-x-4 items-center mr-5">
                {socialMedia.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={currentHref === item.href ? 'page' : undefined}
                  >
                    <Image height={40} width={40} src={item.image} alt={item.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    currentHref === item.href ? 'bg-red-700 ' : 'hover:text-gray-200',
                    'block rounded-md px-3 py-2 text-base font-medium text-white',
                  )}
                  aria-current={currentHref === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex flex-wrap px-2">
                {socialMedia.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    target="_blank"
                    aria-current={currentHref === item.href ? 'page' : undefined}
                    className="p-2 flex items-center"
                  >
                    <Image src={item.image} height={32} width={32} alt={item.name} />
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
