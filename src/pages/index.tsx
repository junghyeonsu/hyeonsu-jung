import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Introduction from '#/components/sections/introduction';
import Skill from '#/components/sections/skill';
import Experience from '#/components/sections/experience';
import Contact from '#/components/sections/contact';
import ScrollGauge from '#/components/scrollGauge';
// import ScrollTimer from '#/components/scrollTimer';
// import MiniScrollTimer from '#/components/miniScrollTimer';
import PageProgressBar from '#/components/pageProgressBar';

// import { useLayoutContext } from '#/contexts/LayoutContext';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  // const { isPossibleMove, isPossibleMiniMove }: any = useLayoutContext(); // eslint-disable-line

  return (
    <div>
      <Head>
        <title>Hyeonsu Jung</title>
        <meta name="description" content="Hyeonsu Jung's portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        />
      </Head>
      <div>
        <Section>
          <Introduction />
          <Skill />
          <Experience />
          <Contact />
        </Section>
      </div>
      <ScrollGauge />
      {/* {!isPossibleMove ? <ScrollTimer /> : ''}
      {!isPossibleMiniMove ? <MiniScrollTimer /> : ''} */}
      <PageProgressBar />
    </div>
  );
}
