import classes from '@/styles/pages/Home.module.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo title='Programiranje Subotica 024' />

      <main className={classes.main}>
        <Header />
        <section className={classes.section}>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <div className='flex max-w-2xl flex-col items-center justify-center'>
              <h1 className='mt-4'>Zainteresovani ste za programiranje?</h1>
              <p className='mt-2 text-sm text-gray-800'>
                Pridružite nam se na našim časovima programiranja na srpskom
                jeziku i naučite kako da kreirate svoje aplikacije, web stranice
                i mnogo više.{' '}
              </p>
              <p className='mt-2 text-sm text-gray-800'>
                Prijavite se danas i započnite svoj put ka postizanju vaših
                ciljeva u programiranju!
              </p>
              <ButtonLink href='/privatni-casovi' className='mt-6'>
                Istražite naše ponude!
              </ButtonLink>
            </div>

            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
