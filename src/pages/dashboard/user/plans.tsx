import Dashboard from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import UserMenu from '@/utils/dashboard/menu/user.menu.json';
import { Seo } from '@/components/seo';
import Header from '@/components/navigation/dashboard/Header';
import {
  DashboardPlansList,
  usePlans,
} from '@/features/Plans';
import { UserDashboardHeader } from '@/features/Users';
import { Loading } from '@/components/loading';

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
const PlansPage = () => {
  // check if user is logged in
  const plans = usePlans();

  if (plans.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Seo templateTitle="Plans" />
      <UserDashboardHeader />
      <div className="p-8">
        <div>
          <p className="text-lg font-bold">Our Plans</p>
          <p>
            Choose any plan that best suites your
            portfolio
          </p>
        </div>
        <div>
          <DashboardPlansList plans={plans.data.data} />
        </div>
      </div>
    </>
  );
};

PlansPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Dashboard navMenu={UserMenu}> {page}</Dashboard>
  );
};

export default PlansPage;
