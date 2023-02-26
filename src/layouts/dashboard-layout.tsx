import DashboardNavigation from '@/components/navigation/dashboard/Navigation';
import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
  navMenu: any;
}

const Dashboard = ({ children, navMenu }: Props) => {
  const [open, setOpen] = useState(true);

  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-300 h-screen bg-black text-white p-5 scrollbar relative z-40
        `}
      >
        <DashboardNavigation
          navMenu={navMenu}
          isOpen={open}
          menuHandler={menuHandler}
        />
      </div>
      <div className="flex-1 h-screen bg-[#F6F6F6] overflow-y-auto">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
