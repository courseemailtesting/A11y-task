import styled from 'styled-components';
import Head from 'next/head';

import { breakpoints } from '../constants/breakpoint';
import { Navbar } from '../components/Navbar';
import { MainBanner } from '../components/MainBanner';
import { InsuranceSection } from '../components/InsuranceSection';
import { SafeTravels } from '../components/SafeTravels';
import { PicturesHorizontal } from '../components/PicturesHorizontal';
import { QuoteBanner } from '../components/QuoteBanner';
import { LookingForInsurance } from '../components/LookingForInsurance';
import { Footer } from '../components/Footer';

const PaddingWrapper = styled('main')`
  padding: 0;

  @media screen and (min-width: ${() => breakpoints.paddingHome}) {
    padding: 0 10%;
  }
`;

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Next.js Starter!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PaddingWrapper>
        <Navbar />
        <main>
          <MainBanner />
          <InsuranceSection />
          <SafeTravels />
          <PicturesHorizontal />
          <QuoteBanner />
          <LookingForInsurance />
        </main>
        <Footer />
      </PaddingWrapper>
    </div>
  );
}
