'use client';

import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import Logo from '../../public/svg/Logo.svg';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>
            NextTail — Next.js 15 + Tailwind CSS + Typescript Starter
          </h1>
          <p className='mt-2 text-sm text-gray-800'>
            A modern Next.js 15 and Tailwind CSS boilerplate optimized for
            performance, scalability, and developer experience.
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/amjadimdad00/NextTail-BoilerPlate'>
              See the repository
            </ArrowLink>
          </p>

          <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

          <UnstyledLink
            href='https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Famjadimdad00%2FNextTail-BoilerPlate'
            className='mt-4'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width='92'
              height='32'
              src='https://vercel.com/button'
              alt='Deploy with Vercel'
            />
          </UnstyledLink>

          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://linkedin.com/in/amjadimdad'>
              Amjad Imdad
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
