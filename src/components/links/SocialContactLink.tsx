import { ReactNode } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

type SocialContactLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

const SocialContactLink = ({ href, icon, label }: SocialContactLinkProps) => {
  return (
    <UnderlineLink href={href} className='flex gap-1'>
      {icon}
      {label}
    </UnderlineLink>
  );
};

export default SocialContactLink;
