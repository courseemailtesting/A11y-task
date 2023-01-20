import { Button } from '@components/inputs/Button';
import { CountryCode } from '@components/inputs/CountryCode';
import FormWrapper from '@components/inputs/FormWrapper';
import { Input } from '@components/inputs/Input';
import { RadioButtons } from '@components/ReportForm/RadioButtons';
import Link from 'next/link';

export function Step2() {
  return (
    <FormWrapper>
      <RadioButtons />
      <CountryCode />
      <Input label='Address' id='address-input' type='text' required />
      <Input label='Date' id='incident-date-input' type='date' required />
      <Input
        label='Incident description'
        id='incident-date-input'
        required
        style={{ height: '100px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href={'/claim-report/step-1'}>
          <Button type='button'>Return</Button>
        </Link>
        <Link href={'/claim-report/step-3'}>
          <Button type='button'>Continue</Button>
        </Link>
      </div>
    </FormWrapper>
  );
}
