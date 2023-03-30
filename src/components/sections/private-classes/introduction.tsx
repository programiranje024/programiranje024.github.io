export default function Introduction() {
  return (
    <>
      <h1 className='mb-4'>Privatni časovi programiranja</h1>

      <p className='mb-1'>
        Cena časa programiranja iznosi{' '}
        <span className='font-bold'>700 dinara</span> i traje 1h.
      </p>

      <p className='mb-1 font-bold underline'>
        Moguće je zakazati maksimalno 3 časa dnevno.
      </p>

      <p className='mb-1'>
        Ukoliko zakažete 3 časa dnevno, ostvarujete popust od{' '}
        <span className='font-bold'>10%</span> i vaša ukupna cena iznosi{' '}
        <span className='font-bold'>1800 dinara</span>.
      </p>

      <p className='mt-4 font-thin italic'>
        Moguće je zakazati i časove u vikend terminima, ali se oni naplaćuju
        dodatno po ceni od 25% više (875 dinara).
      </p>

      <p className='mt-4 font-thin italic'>
        Popust od 10% se ne odnosi na časove u vikend terminima,
      </p>
      <p className='mt-1 font-thin italic'>
        ukoliko zakažete 3 časa u vikend terminima, vaša cena se smanjuje na
        2500 dinara.
      </p>
    </>
  );
}
