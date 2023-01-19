import styled from 'styled-components';

import { breakpoints } from '../../constants/breakpoint';
import Layout from '@components/Layout';
import { ReportForm } from '@components/ReportForm/ReportForm';
import { useState } from 'react';

const StyledDiv = styled('div')`
  border-top: 2px solid #999;
  padding: 10px;

  @media screen and (min-width: ${() => breakpoints.phone}) {
    margin-bottom: 0px;
    flex-direction: row;
    padding: 0 120px;
  }
`;

const HeaderContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

const Header = styled('h1')`
  margin-bottom: 20px;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    margin-bottom: 30px;
  }
`;

export const formStepsTitles = {
  1: 'Step 1 - Personal Details',
  2: 'Step 2 - Incident Details',
  3: 'Step 3 - Expense Report',
};

const mapSteps = {
  'step-1': 1,
  'step-2': 2,
  'step-3': 3,
};

export default function ClaimReport({ title, step }) {
  return (
    <Layout title={title}>
      <StyledDiv>
        <HeaderContainer>
          <Header>Claim report</Header>
        </HeaderContainer>
        <ReportForm currentStep={mapSteps[step]} />
      </StyledDiv>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { step: 'step-1' } },
      { params: { step: 'step-2' } },
      { params: { step: 'step-3' } },
    ],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const mappedStepToNumber = mapSteps[params.step];
  return {
    props: { title: formStepsTitles[mappedStepToNumber], step: params.step },
    revalidate: 1,
  };
}
