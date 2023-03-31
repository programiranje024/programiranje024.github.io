import Course from '@/components/Course';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import API from '~/images/courses/api.jpg';
import Deployment from '~/images/courses/deploy.jpg';
import Basics from '~/images/courses/html5.jpg';

export default function CoursesPage() {
  return (
    <Layout>
      <Seo
        templateTitle='Kursevi'
        description='Priključite se našim programerskim kursevima na srpskom jeziku i steknite veštine koje su potrebne za uspješnu karijeru u programiranju. Prijavite se danas i počnite svoj put ka postizanju vaših ciljeva u programiranju!'
      />

      <main>
        <Header />
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4 text-4xl'>Kursevi</h1>
            <p className='mt-2 text-sm text-gray-800'>
              Osim privatnih časova, nudimo i različite kurseve.
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              Kursevi su zamišljeni kao grupni časovi, a u njima se uči zajedno
              sa drugim učesnicima.
            </p>

            <p className='mt-4 text-sm text-gray-800'>
              Kursevi se održavaju u našem prostoru u Subotici, a učesnici imaju
              priliku da se upoznaju sa drugim ljudima s kojima dele ista
              interesovanja.
            </p>

            <p className='mt-4 text-sm text-gray-800'>
              Kursevi zvanično počinju tek kada se prikupi dovoljan broj
              učesnika.
            </p>

            <p className='mt-4 text-sm text-gray-800'>
              Časovi se održavaju dva puta nedeljno, u trajanju od 2 sata, osim
              ako je drugačije navedeno.
            </p>

            <h2 className='mt-8 text-2xl'>Lista kurseva</h2>
            <Course
              image={Basics}
              title='Osnove HTML5, CSS3 i JavaScript-a'
              description={
                <>
                  <p>
                    Ovaj kurs je namenjen svima koji žele da nauče osnove
                    HTML-a, CSS-a i JavaScript-a.
                  </p>
                  <p>
                    Učesnici će naučiti kako da kreiraju svoje web stranice i
                    aplikacije koristeći HTML5, CSS3 i JavaScript.
                  </p>
                  <p>
                    Učesnici će takođe biti upoznati sa raznim CSS
                    framework-ovima kao što je Tailwind.
                  </p>
                </>
              }
              duration='3 meseca'
              members={10}
              mentor='Zvonimir Rudinski'
              price={1000}
            />

            <Course
              image={API}
              title='Razvoj API servisa sa NestJS'
              description={
                <>
                  <p>
                    U ovom kursu će učesnici naučiti kako da kreiraju svoje API
                    servise koristeći NestJS.
                  </p>
                  <p>
                    Učesnici će takođe naučiti kako da integrišu 3rd party
                    API-je.
                  </p>
                  <p>
                    Ovaj kurs obuhvata ratvoj RESTful API-ja ali će se dotaći i
                    GraphQL API-ja (u NestJS).
                  </p>
                </>
              }
              duration='3 meseca'
              members={10}
              mentor='Zvonimir Rudinski'
              price={1000}
            />

            <Course
              image={Deployment}
              title='Od ideje do produkcije'
              description={
                <>
                  <p>
                    U ovom kursu će učesnici naučiti kako da objave svoju
                    aplikaciju na Internet.
                  </p>
                  <p>
                    Učesnici će takođe naučiti kako da koriste različite servise
                    za hosting i domene, kao i kako da koriste različite servise
                    za automatizaciju procesa.
                  </p>
                  <p>
                    Ovaj kurs je idealan sledeći korak za učesnike koji su
                    pohađali "Osnove HTML5, CSS3 i JavaScript-a" ili "Razvoj API
                    servisa sa NestJS".
                  </p>
                </>
              }
              duration='2 meseca'
              members={10}
              mentor='Zvonimir Rudinski'
              price={3000}
            />

            <h2 className='mt-8 text-2xl'>Kako se prijaviti?</h2>
            <p className='mt-2 text-sm text-gray-800'>
              Da bi ste se prijavili za neki od kurseva, potrebno je da nas
              kontaktirate putem{' '}
              <UnderlineLink href='/kontakt'>kontakt forme</UnderlineLink>.
            </p>

            <h2 className='mt-8 text-2xl'>Plaćanje</h2>
            <p className='mt-2 text-sm text-gray-800'>
              Nakon što se prijavite za neki od kurseva, potrebno je da uplatite
              polovinu cene kursa.
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              Razlog za to je da se osigura da će se kurs održati.
            </p>
            <p className='mt-8 text-sm text-gray-800'>
              Nakon što uplatite polovinu cene kursa, vaša prijava će biti
              potvrđena
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              i bićete blagovremeno obavešteni o početku kursa.
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              Ostatak cene kursa se uplaćuje na početku kursa.
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              Plaćanje se vrši putem bankovnog računa ili u gotovini.
            </p>
            <p className='mt-8 text-sm text-gray-800'>
              Informacije o bankovnom računu će vam biti dostupne nakon što nas
              kontaktirate.
            </p>

            <h2 className='mt-8 text-2xl'>Kada počinju kursevi?</h2>
            <p className='mt-2 text-sm text-gray-800'>
              Kursevi počinju kada se prikupi dovoljan broj učesnika.
            </p>
            <p className='mt-1 text-sm text-gray-800'>
              Ukoliko se ne prikupi dovoljan broj učesnika, prijavljeni učesnici
              će biti obavešteni o tome i dobiće potpuni povraćaj novca.
            </p>

            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
