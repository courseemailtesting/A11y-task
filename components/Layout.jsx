import styled from 'styled-components';
import Head from 'next/head';

import { breakpoints } from '../constants/breakpoint';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const PaddingWrapper = styled('main')`
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media screen and (min-width: ${() => breakpoints.paddingHome}) {
    padding: 0 12%;
  }
`;

export default function Layout({ title, children }) {
  return (
    <div className='container'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PaddingWrapper>
        <Navbar />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </PaddingWrapper>
    </div>
  );
}
