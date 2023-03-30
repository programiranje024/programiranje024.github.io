import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='absolute bottom-2 text-center text-gray-700'>
      © {new Date().getFullYear()}{' '}
      <UnderlineLink href='/o-nama'>Zvonimir Rudinski</UnderlineLink>
    </footer>
  );
}
