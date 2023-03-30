import Link from 'next/link';

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
  return (
    <header className='sticky top-0 z-50 overflow-hidden bg-white shadow-md'>
      <div className='layout flex h-14 items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <NextImage
              src={Subotica}
              alt='Subotica'
              width={100}
              height={100}
              className='grayscale hover:filter-none'
              useSkeleton
            />
          </Link>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            Programiranje Subotica 024
          </UnstyledLink>
        </div>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
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
