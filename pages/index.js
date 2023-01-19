import Layout from '@components/Layout';

import { MainBanner } from '../components/MainBanner';
import { InsuranceSection } from '../components/InsuranceSection';
import { SafeTravels } from '../components/SafeTravels';
import { PicturesHorizontal } from '../components/PicturesHorizontal';
import { QuoteBanner } from '../components/QuoteBanner';
import { LookingForInsurance } from '../components/LookingForInsurance';

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <InsuranceSection />
      <SafeTravels />
      <PicturesHorizontal />
      <QuoteBanner />
      <LookingForInsurance />
    </Layout>
  );
}
