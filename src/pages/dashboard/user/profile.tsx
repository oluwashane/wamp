import Header from '@/components/navigation/dashboard/Header';
import { Seo } from '@/components/seo';
import { UserDashboardHeader } from '@/features/Users';
import { ReactElement } from 'react';
import UserMenu from '@/utils/dashboard/menu/user.menu.json';
import Dashboard from '@/layouts/dashboard-layout';

const ProfilePage = () => {
  return (
    <>
      <Seo templateTitle="Profile" />
      <UserDashboardHeader />
      <div className="p-8">
        <div className="my-4">
          <h4 className="font-semibold ">
            Profile Details
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-white shadow-lg p-4 rounded-lg">
          <div>
            <p className="text-lg font-bold">Name:</p>
            <p className="text-lg font-thin">
              Ogbulafor Udochukwu
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">Balance:</p>
            <p className="text-lg font-thin">$300</p>
          </div>
          <div>
            <p className="text-lg font-bold">
              Total Invested:
            </p>
            <p className="text-lg font-thin">$600</p>
          </div>
          <div>
            <p className="text-lg font-bold">Location:</p>
            <p className="text-lg font-thin">Abuja</p>
          </div>
          <div>
            <p className="text-lg font-bold">Email:</p>
            <p className="text-lg font-thin">
              ogbulaforudochukwu@gmail
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ProfilePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Dashboard navMenu={UserMenu}>{page}</Dashboard>;
};

export default ProfilePage;
