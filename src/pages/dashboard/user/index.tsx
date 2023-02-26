import Dashboard from '@/layouts/dashboard-layout';
import { ReactElement } from 'react';
import UserMenu from '@/utils/dashboard/menu/user.menu.json';
import { IoWalletOutline } from 'react-icons/io5';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { Ref } from '@/components/navigation/referral';
import TradingViewWidget from '@/components/trading-widget/TradingWidget';
import { WidgetOne } from '@/components/trading-widget/widget';
import { Seo } from '@/components/seo';
import { UserDashboardHeader } from '@/features/Users';

const User = () => {
  return (
    <div>
      <Seo templateTitle="Dashboard" />
      <UserDashboardHeader />
      <div className="p-8">
        <div className="relative">
          <WidgetOne />
        </div>

        <div className="my-10">
          <p className="text-md">Welcome Back</p>
          <h2 className="text-3xl">
            Udochukwu Ogbulafor
          </h2>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <div className="bg-[#3A552C] flex w-16 h-16 items-center justify-center rounded-full">
              <IoWalletOutline className=" text-[#6FFC2D] h-10 w-10" />
            </div>
            <div className="text-white">
              <p className="text-[#c9c9c9] text-sm my-2">
                Total Balance
              </p>
              <h3 className="text-3xl font-extrabold">
                $3140.74
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#F5F7F9] flex w-16 h-16 items-center justify-center rounded-full">
              <IoWalletOutline className="text-[#000000] h-10 w-10" />
            </div>
            <div>
              <p className="text-black text-sm my-2">
                Total Invested
              </p>
              <h3 className="text-3xl font-extrabold">
                $3140.74
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="bg-[#F5F7F9] flex w-16 h-16 items-center justify-center rounded-full">
              <RiMoneyDollarBoxFill className="text-[#000000] h-10 w-10" />
            </div>
            <div>
              <p className="text-black text-sm my-2">
                Current Investment
              </p>
              <h3 className="text-3xl font-extrabold">
                $3140.74
              </h3>
            </div>
          </div>
        </section>
        <div className="mt-5 shadow-lg p-4 bg-white rounded-lg">
          <h2 className="text-lg font-md">
            REFERRAL LINK:
          </h2>
          <Ref
            referral={`https://www.globallennoxfinance.club/auth/register?ref=weoutside`}
          />
        </div>
        <div className="my-4 rounded-lg overflow-hidden">
          <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};

User.getLayout = function getLayout(page: ReactElement) {
  return <Dashboard navMenu={UserMenu}>{page}</Dashboard>;
};

export default User;
