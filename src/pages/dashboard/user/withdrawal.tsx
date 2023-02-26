import Dashboard from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import UserMenu from '@/utils/dashboard/menu/user.menu.json';
import { Seo } from '@/components/seo';
import Header from '@/components/navigation/dashboard/Header';
import { Button } from '@/components/button';
import Modal from '@/components/modal/Modal';
import { UserDashboardHeader } from '@/features/Users';
import { WithdrawalForm } from '@/features/Wallets';

WithdrawalForm;

const WithdrawalPage = () => {
  return (
    <>
      <Seo templateTitle="Withdrawals" />
      <UserDashboardHeader />
      <div className="p-8">
        <div>
          <p className="text-lg font-bold">
            Withdrawal Request
          </p>
          <p>List of withdrawal Request</p>
        </div>
        <div className="bg-black text-white flex justify-between p-5 my-6 rounded-lg shadow-lg">
          <div>
            <p className="text-lg">Current Balance</p>
            <p className="text-2xl font-bold">$200.00</p>
          </div>
          {/* <Button className="bg-[#6FFC2D] text-black">
            Withdraw
          </Button> */}
          <Modal
            title="Withdrawal Form"
            buttonName="Withdraw"
          >
            <WithdrawalForm />
          </Modal>
        </div>

        {/* <Modal /> */}
        <div>
          {/* <BaseTable
          columns={columns}
          transformData={transformData}
          apiPayload={apiCall}
        /> */}
        </div>
      </div>
    </>
  );
};

WithdrawalPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Dashboard navMenu={UserMenu}> {page}</Dashboard>
  );
};

export default WithdrawalPage;
