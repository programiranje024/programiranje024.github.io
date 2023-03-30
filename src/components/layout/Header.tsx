import clsx from 'clsx';
import { Turn } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import Subotica from '~/images/subotica.jpg';

const links = [
  { href: '/privatni-casovi', label: 'Privatni časovi' },
  { href: '/kursevi', label: 'Kursevi' },
  { href: '/o-nama', label: 'O nama' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='layout flex h-14 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <NextImage
              src={Subotica}
              alt='Subotica'
              width={80}
              height={80}
              className='grayscale hover:filter-none'
              useSkeleton
            />
          </Link>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            Programiranje Subotica 024
          </UnstyledLink>
        </div>
        <nav>
          <div className='md:hidden'>
            <Turn toggled={isOpen} toggle={setOpen} color='#000' />
          </div>

          <ul
            className={clsx('flex items-center justify-between space-x-4 p-2', {
              hidden: !isOpen,
              'w-30 absolute top-14 right-0 rounded-bl-md bg-white shadow-md':
                isOpen && isMobile,
            })}
          >
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='hover:text-gray-600 hover:underline'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
