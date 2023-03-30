import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ClassInfo from '@/components/sections/private-classes/class-info';
import Introduction from '@/components/sections/private-classes/introduction';
import Scheduling from '@/components/sections/private-classes/scheduling';
import Themes from '@/components/sections/private-classes/themes';
import Seo from '@/components/Seo';

export default function PrivateClassesPage() {
  return (
    <Layout>
      <Seo templateTitle='Privatni časovi programiranja' />

      <main>
        <Header />
        <section>
          <div className='layout flex flex-col items-start justify-start'>
            <div className='flex flex-col items-start justify-start py-12'>
              <Introduction />
              <hr className='my-12 w-full border-gray-900' />
              <Scheduling />
              <hr className='my-12 w-full border-gray-900' />
              <ClassInfo />
              <hr className='my-12 w-full border-gray-900' />
              <Themes />
            </div>
          </div>

          <div className='layout relative flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center justify-center py-6'>
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
