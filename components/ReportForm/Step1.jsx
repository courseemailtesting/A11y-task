import { Button } from '@components/inputs/Button';
import { Input } from '@components/inputs/Input';
import Link from 'next/link';

export function Step1() {
  return (
    <form>
      <Input label='First name' id='first-name-input' required />
      <Input label='Second name' id='second-name-input' required />
      <Input label='Birthday' id='birthday-input' type='date' required />
      <Input
        label='Phone number'
        id='phone-number-input'
        type='tel'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
        describedby='The number must match the following format 123-456-789 '
        required
      />
      <Input label='Email' id='email-input' type='email' required />
      <Input
        label='Policy number'
        id='policy-number-input'
        type='number'
        required
      />
      <Link href={'/claim-report/step-2'}>
        <Button type='button'>Continue</Button>
      </Link>
    </form>
  );
}
