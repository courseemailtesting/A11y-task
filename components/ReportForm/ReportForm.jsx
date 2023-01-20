import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoint';
import { formStepsTitles } from 'pages/claim-report/[step]';
import Link from 'next/link';
import { Step1 } from '@components/ReportForm/Step1';
import { Step2 } from '@components/ReportForm/Step2';
import { Step3 } from '@components/ReportForm/Step3';

const FormStepsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px 50px;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${() => breakpoints.phone}) {
    flex-direction: row;
  }
`;

const FormStep = styled('button')`
  max-width: 300px;
  min-width: 200px;
  height: 40px;
  border: none;

  border-radius: 10px;
  flex-grow: 1;
  background-color: darkgray;
`;

function FormSteps({ currentStep }) {
  return (
    <FormStepsContainer>
      {Object.entries(formStepsTitles).map(([key, step]) => (
        <Link href={`/claim-report/step-${key}`}>
          <FormStep key={step}>{step}</FormStep>
        </Link>
      ))}
    </FormStepsContainer>
  );
}

function Step({ currentStep }) {
  console.log(currentStep);
  switch (currentStep) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
  }
  return <Step1 />;
}

export function ReportForm({ currentStep, setCurrentStep }) {
  return (
    <>
      <form>
        <FormSteps currentStep={currentStep} currentStepStep={setCurrentStep} />
        <Step currentStep={currentStep} />
      </form>
    </>
  );
}
