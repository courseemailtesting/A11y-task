import { useRouter } from 'next/router';

import FormWrapper from '@components/inputs/FormWrapper';
import { Input } from '@components/inputs/Input';
import { useStageStore } from 'pages/_app';
import { BlackButton, Button } from '@components/inputs/Button';
import { useEffect, useRef } from 'react';

export function Step1() {
  const router = useRouter();
  const { firstStage, setFirstStage } = useStageStore((state) => ({
    firstStage: state.firstStage,
    setFirstStage: state.setFirstStage,
  }));

  const { firstName, secondName, birthday, phoneNumber, email, policyNumber } =
    firstStage;

  const phoneInput = useRef();

  useEffect(() => {});
  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();

        const phoneNumberValue = e.target[3].value;
        const phoneNumberRegex = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;

        if (phoneNumberRegex.test(phoneNumberValue)) {
          phoneInput.current?.setCustomValidity('');
          phoneInput.current?.reportValidity();
        } else {
          phoneInput.current?.setCustomValidity(
            'Phone number input must be provided in the following pattern: XXX-XXX-XXX(X = any digit)'
          );
          phoneInput.current?.reportValidity();
          return;
        }

        router.push('/claim-report/step-2');
      }}
    >
      <Input
        label='First name'
        id='first-name-input'
        required
        defaultValue={firstName}
        onChange={(e) => {
          console.log(e.target.value);
          setFirstStage({ ...firstStage, firstName: e.target.value });
        }}
        autocomplete='given-name'
      />
      <Input
        label='Second name'
        id='second-name-input'
        required
        defaultValue={secondName}
        onChange={(e) =>
          setFirstStage({ ...firstStage, secondName: e.target.value })
        }
        autocomplete='family-name'
      />
      <Input
        label='Birthday'
        id='birthday-input'
        type='date'
        required
        defaultValue={birthday}
        onChange={(e) =>
          setFirstStage({ ...firstStage, birthday: e.target.value })
        }
      />
      <Input
        label='Phone number'
        id='phone-number-input'
        type='tel'
        ref={phoneInput}
        describedby='The number must match the following format 123-456-789 '
        required
        defaultValue={phoneNumber}
        onChange={(e) => {
          phoneInput.current?.setCustomValidity('');
          phoneInput.current?.reportValidity();
          setFirstStage({ ...firstStage, phoneNumber: e.target.value });
        }}
      />
      <Input
        label='Email'
        id='email-input'
        type='email'
        required
        defaultValue={email}
        onChange={(e) =>
          setFirstStage({ ...firstStage, email: e.target.value })
        }
        autocomplete='email'
      />
      <Input
        label='Policy number'
        id='policy-number-input'
        type='number'
        required
        defaultValue={policyNumber}
        onChange={(e) =>
          setFirstStage({ ...firstStage, policyNumber: e.target.value })
        }
      />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <BlackButton>Continue</BlackButton>
      </div>
    </FormWrapper>
  );
}
