import { BlackButton, Button, WhiteButton } from '@components/inputs/Button';
import { CountryCode } from '@components/inputs/CountryCode';
import FormWrapper from '@components/inputs/FormWrapper';
import { Input } from '@components/inputs/Input';
import { RadioButtons } from '@components/ReportForm/RadioButtons';
import { useRouter } from 'next/router';
import { useStageStore } from 'pages/_app';

const list = [1, 2, 3, 4];
export function Step2() {
  const router = useRouter();
  const { secondStage, setSecondStage } = useStageStore((state) => ({
    secondStage: state.secondStage,
    setSecondStage: state.setSecondStage,
  }));

  const { purposeOfTravel, country, address, date, incidentDescription } =
    secondStage;

  const setPurposeOfTravel = (purposeOfTravel) => {
    setSecondStage({ ...secondStage, purposeOfTravel });
  };
  const setCountry = (country) => {
    setSecondStage({ ...secondStage, country });
  };

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        if (!list.some((index) => e.target[index].checked)) {
          alert(`Please select a radio button`);
          return;
        }

        if (e.target[5].value === '') {
          alert(`Please select a country`);
          return;
        }

        router.push('/claim-report/step-3');
      }}
    >
      <RadioButtons
        defaultValue={purposeOfTravel}
        setPurposeOfTravel={setPurposeOfTravel}
      />
      <CountryCode defaultValue={country} setCountry={setCountry} />
      <Input
        label='Address'
        id='address-input'
        type='text'
        required
        defaultValue={address}
        onChange={(e) =>
          setSecondStage({ ...secondStage, address: e.target.value })
        }
      />
      <Input
        label='Date'
        id='incident-date-input'
        type='date'
        required
        defaultValue={date}
        onChange={(e) =>
          setSecondStage({ ...secondStage, date: e.target.value })
        }
      />
      <b>
        <label htmlFor='incident-date-input'>Incident description</label>
      </b>
      <textarea
        label='Incident description'
        id='incident-date-input'
        required
        style={{ height: '100px' }}
        defaultValue={incidentDescription}
        onChange={(e) =>
          setSecondStage({
            ...secondStage,
            incidentDescription: e.target.value,
          })
        }
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      >
        <WhiteButton
          type='button'
          onClick={() => router.push('/claim-report/step-1')}
        >
          Return
        </WhiteButton>

        <BlackButton>Continue</BlackButton>
      </div>
    </FormWrapper>
  );
}
