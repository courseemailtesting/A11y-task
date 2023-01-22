import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoint';
import { formStepsTitles } from 'pages/claim-report/[step]';
import Link from 'next/link';
import { Step1 } from '@components/ReportForm/Step1';
import { Step2 } from '@components/ReportForm/Step2';
import { Step3 } from '@components/ReportForm/Step3';
import { useRouter } from 'next/router';

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
  background-color: ${({ isActive, isClickable }) =>
    isClickable ? 'darkgray' : 'whitegray'};

  border: ${({ isActive }) => (isActive ? '2px solid black' : '')};
  &:hover {
    cursor: ${({ isClickable }) =>
      isClickable ? 'pointer !important' : 'default !important'};
  }
`;

function FormSteps({ currentStep }) {
  const router = useRouter();
  return (
    <FormStepsContainer>
      {Object.entries(formStepsTitles).map(([key, step]) => (
        <FormStep
          key={key}
          tabIndex={currentStep < parseInt(key) ? -1 : 0}
          isActive={currentStep === parseInt(key)}
          isClickable={currentStep >= parseInt(key)}
          onClick={() => {
            if (key < currentStep) {
              router.push(`/claim-report/step-${key}`);
            }
          }}
        >
          {step}
        </FormStep>
      ))}
    </FormStepsContainer>
  );
}

function Step({ currentStep }) {
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
      <FormSteps currentStep={currentStep} currentStepStep={setCurrentStep} />
      <Step currentStep={currentStep} />
    </>
  );
}
