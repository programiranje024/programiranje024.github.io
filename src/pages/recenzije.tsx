import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Review, { ReviewProps } from '@/components/Review';
import Seo from '@/components/Seo';

const reviews: ReviewProps[] = [
  {
    name: 'Test Testović',
    rating: 4,
    comment:
      'Ovo sdjaksjdlkasjdlkajslkdjaslkjdlkajsdkljaskljdklasjdkljakldsjklasjdklajdlkjaskldjalksjdlkasjabc sdhaksldlkasjdlka sadljaslkdjeo erwerwepiropwer erowiehdksajd as fs f dsf sd',
    serviceType: 'tutoring',
    serviceName: 'JavaScript',
    date: new Date('2023-01-05'),
  },
  {
    name: 'Nezadovoljko Nezadovoljković',
    rating: 1,
    comment: 'Ovo je najgori kurs ikada.',
    serviceType: 'course',
    serviceName: 'Matematika za 1. razred osnovne škole',
    date: new Date('2023-01-05'),
  },
  {
    name: 'Zadovoljko Zadovoljković',
    rating: 5,
    comment: 'Ovo je najbolji kurs ikada.',
    serviceType: 'course',
    serviceName: 'Matematika za 1. razred osnovne škole',
    date: new Date('2023-01-05'),
  },
  {
    name: 'Nesigurko Nesigurković',
    rating: 3,
    comment: 'Ok je.',
    serviceType: 'course',
    serviceName: 'Matematika za 1. razred osnovne škole',
    date: new Date('2023-01-05'),
  },
  {
    name: 'Marinko Marinković',
    rating: 5,
    comment: 'Ovo je najbolji kurs ikada.',
    serviceType: 'course',
    serviceName: 'Matematika za 1. razred osnovne škole',
    date: new Date('2023-01-05'),
  },
];

export default function ReviewsPage() {
  return (
    <Layout>
      <Seo templateTitle='Recenzije' />

      <main>
        <Header />
        <section>
          <div className='layout flex min-h-screen flex-col gap-4'>
            <div className='mt-4 flex flex-col gap-2'>
              <h1>Recenzije</h1>
              <p>Nek naše recenzije govore umesto nas.</p>
            </div>

            <hr className='w-full border-gray-300 dark:border-gray-700' />
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1023: 3 }}
            >
              <Masonry gutter='1rem'>
                {reviews.map((review, i) => (
                  <Review key={i} {...review} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </section>
      </main>
    </Layout>
  );
}
