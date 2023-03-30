import classes from '@/styles/pages/About.module.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function AboutUsPage() {
  return (
    <Layout>
      <Seo />

      <main className={classes.main}>
        <Header />
        <section className={classes.section}>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <div className='flex max-w-2xl flex-col items-center justify-center'>
              <h1 className='mt-4'>O nama</h1>
              <p className='mt-2 text-sm text-gray-800'>
                Iako smo mlad tim, naša misija je da pomognemo svima koji žele
                da nauče programiranje. Naša vizija je da postanemo jedan od
                najboljih centara za programiranje u Srbiji.
              </p>

              <p className='mt-8 text-sm text-gray-800'>
                Naši instruktori su profesionalci koji su već godinama u
                programiranju i koji su učestvovali u razvoju mnogih aplikacija,
                web stranica i ostalih projekata.
              </p>

              <p className='mt-8 text-sm text-gray-800'>
                Cilj nam je da pružimo kvalitetan program za učenje
                programiranja i da svakom učesniku pružimo podršku i savete
                tokom njegovog putovanja kroz programiranje.
              </p>

              <p className='mt-8 text-sm text-gray-800'>
                Ukoliko ste zainteresovani za naše programe, slobodno nas
                kontaktirajte i započnite svoj put ka postizanju vaših ciljeva!
              </p>

              <ButtonLink href='/kursevi' className='mt-6'>
                Istražite naše kurseve!
              </ButtonLink>
            </div>

            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
