import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Review, { ReviewProps } from '@/components/Review';
import Seo from '@/components/Seo';

const reviews: ReviewProps[] = [];

export default function ReviewsPage() {
  return (
    <Layout>
      <Seo templateTitle='Recenzije' />

      <main>
        <Header />
        <section>
          <div className='layout flex flex-col gap-4'>
            <div className='mt-4 flex flex-col gap-2'>
              <h1>Recenzije</h1>
              {reviews.length > 0 && (
                <p>Nek naše recenzije govore umesto nas.</p>
              )}
            </div>

            <hr className='w-full border-gray-300 dark:border-gray-700' />
            {reviews.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 3 }}
              >
                <Masonry gutter='1rem'>
                  {reviews.map((review, i) => (
                    <Review key={i} {...review} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <p>
                Trenutno nemamo recenzija da podelimo sa vama. Čekamo da nam
                učenici pošalju svoje utiske.
              </p>
            )}
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
