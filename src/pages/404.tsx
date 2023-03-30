import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Stranica nije pronađena' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>
              Stranica nije pronađena
            </h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Povratak na početnu stranu
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
