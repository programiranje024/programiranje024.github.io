import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPhoneFill,
  RiTelegramFill,
  RiWhatsappFill,
} from 'react-icons/ri';

import SocialContactLink from '@/components/links/SocialContactLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Scheduling() {
  return (
    <>
      <h2 className='mb-4'>Kako zakazati čas?</h2>

      <p className='mb-1'>
        Za zakazivanje časa, potrebno je da popunite{' '}
        <UnderlineLink href='/kontakt'>kontakt formu.</UnderlineLink>
      </p>

      <p className='mb-4'>
        Ukoliko želite da zakazete čas, a ne želite da popunjavate kontakt
        formu, možete nas kontaktirati na sledeće načine:
      </p>

      <ul>
        <li>
          <SocialContactLink
            href='https://www.facebook.com/rudinski.rudinski'
            icon={<RiFacebookCircleFill size={20} />}
            label='Facebook'
          />
        </li>

        <li>
          <SocialContactLink
            href='https://www.instagram.com/programiranje.casovi024/'
            icon={<RiInstagramFill size={20} />}
            label='Instagram'
          />
        </li>

        <li>
          <SocialContactLink
            href='https://t.me/rudinski00'
            icon={<RiTelegramFill size={20} />}
            label='Telegram'
          />
        </li>

        <li>
          <SocialContactLink
            href='https://wa.me/381653206201'
            icon={<RiWhatsappFill size={20} />}
            label='WhatsApp'
          />
        </li>

        <li>
          <SocialContactLink
            href='viber://chat?number=+381653206201'
            icon={<RiPhoneFill size={20} />}
            label='Viber'
          />
        </li>

        <li>
          <SocialContactLink
            href='tel:+381653206201'
            icon={<RiPhoneFill size={20} />}
            label='Telefon'
          />
        </li>
      </ul>
    </>
  );
}
