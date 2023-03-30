import { FormEvent, useCallback, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setIsSubmitting(true);

    try {
      await fetch('https://eoltbcrq0uot007.m.pipedream.net', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      toast.success('Poruka uspešno poslata!');
    } catch (error) {
      toast.error('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Kontakt' />

      <main>
        <Header />
        <section>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <div className='flex max-w-2xl flex-col items-center justify-center'>
              <h1 className='mt-4'>Kontakt</h1>

              <p className='mt-4'>
                Ako želite da se prijavite za kurs ili privatni čas, ili ako
                imate bilo kakvih pitanja, slobodno nas kontaktirajte.
              </p>

              <form className='mt-4' onSubmit={onSubmit}>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='name'>Ime i prezime</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='rounded-md border border-gray-300 p-2'
                      placeholder='Vaše ime i prezime'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='rounded-md border border-gray-300 p-2'
                      placeholder='Vaš email'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='phone'>Telefon</label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      className='rounded-md border border-gray-300 p-2'
                      placeholder='Vaš broj telefona'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='message'>Poruka</label>
                    <textarea
                      id='message'
                      name='message'
                      className='rounded-md border border-gray-300 p-2'
                      placeholder='Vaša poruka'
                      required
                    />
                  </div>
                  <Button type='submit' disabled={isSubmitting}>
                    Pošalji
                  </Button>
                </div>
              </form>
            </div>

            <Footer />
          </div>
        </section>
      </main>
      <Toaster />
    </Layout>
  );
}
