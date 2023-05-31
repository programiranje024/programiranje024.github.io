import NextImage from '@/components/NextImage';
import TechRow from '@/components/TechRow';

import Algorithms from '~/images/private-classes/algoritmi.png';
import CLanguage from '~/images/private-classes/c.png';
import CppLanguage from '~/images/private-classes/cpp.png';
import CsLanguage from '~/images/private-classes/cs.png';
import Docker from '~/images/private-classes/docker.webp';
import Drupal from '~/images/private-classes/drupal.png';
import ElixirLanguage from '~/images/private-classes/elixir.png';
import Git from '~/images/private-classes/git.png';
import JsLanguage from '~/images/private-classes/js.png';
import Laravel from '~/images/private-classes/laravel.png';
import Linux from '~/images/private-classes/linux.jpg';
import NextJs from '~/images/private-classes/nextjs.webp';
import NodeLanguage from '~/images/private-classes/node.png';
import Phoenix from '~/images/private-classes/phoenix.png';
import PhpLanguage from '~/images/private-classes/php.png';
import SQL from '~/images/private-classes/postgres.png';
import PyLanguage from '~/images/private-classes/py.png';
import React from '~/images/private-classes/react.png';
import Strapi from '~/images/private-classes/strapi.png';
import TsLanguage from '~/images/private-classes/ts.png';

export default function Themes() {
  return (
    <>
      <h2 className='mb-4'>Koje teme su u ponudi?</h2>

      <p className='mb-1'>
        Nudimo različite teme, a sve zavisi od toga šta želite da naučite.
      </p>

      <p className='mb-1'>
        Naši časovi obuhvataju sve od osnovnih tema kao što su osnovne
        algoritama do različitih jezika, framework-ova i ostalih tehnologija.
      </p>

      <div className='mt-4'>
        <h3 className='mb-1'>Osnovne teme</h3>
        <p className='mb-1'>
          Osnovne teme ne obuhvataju nikakve tehnologije, već samo osnovne
          koncepte programiranja i algoritama.
        </p>
        <p className='mb-1'>
          Za njih nije potrebno imati nikakvo predznanje, već je potrebno samo
          da imate želju za učenjem.
        </p>
        <NextImage
          src={Algorithms}
          alt='Algoritmi'
          width={200}
          height={200}
          className='rounded'
        />

        <h3 className='mt-8 mb-1'>Programski jezici</h3>
        <p className='mb-1'>
          Nudimo različite programski jezike, a sve zavisi od toga šta želite da
          naučite.
        </p>
        <p className='mb-4'>
          Za ovu temu nije potrebno imati nikakvo predznanje, već je potrebno
          samo imati volju.
        </p>
        <p className='mb-1'>
          Svakako vam preporučujemo da imate osnovno predznanje o algoritmima, i
          predlažemo{' '}
        </p>
        <p className='mb-4'>
          da za prvi jezik odaberete neki od jezika koji su se pokazali kao
          najbolji za početnike.
        </p>
        <p className='mb-4'>
          Jezici koji su se pokazali kao najbolji su označeni zlatnim okvirom.
        </p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <TechRow title='C' src={CLanguage} alt='C jezik' isBeginnerFriendly />
          <TechRow title='C++' src={CppLanguage} alt='C++' />
          <TechRow title='C#' src={CsLanguage} alt='C#' />

          <TechRow
            title='JavaScript'
            src={JsLanguage}
            alt='JavaScript'
            isBeginnerFriendly
          />
          <TechRow title='TypeScript' src={TsLanguage} alt='TypeScript' />
          <TechRow title='Node.js' src={NodeLanguage} alt='Node.js' />

          <TechRow
            title='Python'
            src={PyLanguage}
            alt='Python'
            isBeginnerFriendly
          />
          <TechRow title='PHP' src={PhpLanguage} alt='PHP' />
          <TechRow title='Elixir' src={ElixirLanguage} alt='Elixir' />
        </div>
      </div>

      <h3 className='mt-8 mb-1'>Framework-ovi i CMS-ovi</h3>
      <p className='mb-4'>
        Osim samih jezika, nudimo i različite framework-ove i CMS-ove koji se
        koriste u industriji za raznovrsne svrhe.
      </p>

      <p className='mb-1'>
        Za određene tehnologije je potrebno imati osnovno predznanje o jezicima,
        i predlažemo da za prvi framework
      </p>
      <p className='mb-4'>
        odaberete neki od framework-ova koji koriste jezik s kojim ste već
        upoznati.
      </p>

      <div className='grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <TechRow title='Drupal (PHP)' src={Drupal} alt='Drupal' />
        <TechRow title='React / React Native (JS)' src={React} alt='React' />
        <TechRow title='Next.js (JS)' src={NextJs} alt='Next.js' />

        <TechRow title='Laravel (PHP)' src={Laravel} alt='Laravel' />
        <TechRow title='Strapi (JS)' src={Strapi} alt='Strapi' />
        <TechRow title='Phoenix (Elixir)' src={Phoenix} alt='Phoenix' />
      </div>

      <h3 className='mt-8 mb-1'>Ostale teme</h3>
      <p className='mb-4'>
        Ostale teme obuhvataju različite tehnologije koje se koriste u
        industriji, a koje su neophodne za razvoj sofvera.
      </p>
      <p className='mb-4'>
        Za ove teme nije potrebno imati nikakvo predznanje.
      </p>

      <div className='grid grid-cols-3 gap-4 lg:grid-cols-4'>
        <TechRow title='Git' src={Git} alt='Git' isBeginnerFriendly />
        <TechRow title='Linux' src={Linux} alt='Linux' isBeginnerFriendly />
        <TechRow title='Docker' src={Docker} alt='Docker' isBeginnerFriendly />
        <TechRow title='SQL' src={SQL} alt='SQL' isBeginnerFriendly />
      </div>
    </>
  );
}
