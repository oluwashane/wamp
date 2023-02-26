import { Seo } from '@/components/seo';
import { PlansList } from '@/features/Plans';
import { PublicLayout } from '@/layouts/public-layout';
import { ReactElement } from 'react';

// make api call to get this later
const plansTest = [
  {
    name: 'Basic',
    min: '20',
    max: '200',
    duration: '4days',
    summary: 'Testing New Arch',
    referral: 10,
  },
  {
    name: 'vip',
    min: '20',
    max: '200',
    duration: '4days',
    summary: 'Testing New Arch',
    referral: 20,
  },
  {
    name: 'vvip',
    min: '20',
    max: '200',
    duration: '4days',
    summary: 'Testing New Arch',
    referral: 50,
  },
];

const Plans = () => {
  return (
    <>
      <Seo templateTitle="Plans" />
      <div className="container py-6">
        <h1 className="font-semibold text-2xl">
          Our Plans
        </h1>
        <div>
          <PlansList plans={plansTest} />
        </div>
      </div>
    </>
  );
};

Plans.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Plans;
