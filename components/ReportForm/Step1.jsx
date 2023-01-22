import { useRouter } from 'next/router';

import FormWrapper from '@components/inputs/FormWrapper';
import { Input } from '@components/inputs/Input';
import { useStageStore } from 'pages/_app';
import { BlackButton, Button } from '@components/inputs/Button';

export function Step1() {
  const router = useRouter();
  const { firstStage, setFirstStage } = useStageStore((state) => ({
    firstStage: state.firstStage,
    setFirstStage: state.setFirstStage,
  }));

  const { firstName, secondName, birthday, phoneNumber, email, policyNumber } =
    firstStage;

  console.log(firstStage);
  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
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
      />
      <Input
        label='Second name'
        id='second-name-input'
        required
        defaultValue={secondName}
        onChange={(e) =>
          setFirstStage({ ...firstStage, secondName: e.target.value })
        }
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
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
        describedby='The number must match the following format 123-456-789 '
        required
        defaultValue={phoneNumber}
        onChange={(e) =>
          setFirstStage({ ...firstStage, phoneNumber: e.target.value })
        }
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
