import Dashboard from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import UserMenu from '@/utils/dashboard/menu/user.menu.json';
import { Seo } from '@/components/seo';
import BaseTable from '@/components/data-table/BaseTable';
import {
  columns,
  transformData,
} from '@/utils/dashboard/column/investment';
import { UserDashboardHeader } from '@/features/Users';
const InvestmentPage = () => {
  const apiCall = {};
  return (
    <>
      <Seo templateTitle="Investments" />
      <UserDashboardHeader />
      <div className="p-8">
        <p className="text-lg font-bold">
          List of Investments
        </p>
        <p>
          List of all your active and privous investments
          with us
        </p>
      </div>
      <div>
        {/* <BaseTable
          columns={columns}
          transformData={transformData}
          apiPayload={apiCall}
        /> */}
      </div>
    </>
  );
};

InvestmentPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Dashboard navMenu={UserMenu}> {page}</Dashboard>
  );
};

export default InvestmentPage;
