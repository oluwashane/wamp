import React from 'react';
import MenuItems from './MenuItems';
import { HiOutlineMenu } from 'react-icons/hi';

interface Props {
  menuHandler: any;
  isOpen: boolean;
  navMenu: any;
}

const DashboardNavigation = ({
  menuHandler,
  isOpen,
  navMenu,
}: Props) => {
  return (
    <>
      <div className="flex items-center gap-x-3">
        {/* <img
          alt="company-logo"
          src="/img/dashboard/ncdmblogo.png"
          className={`cursor-pointer duration-500 ${
            isOpen && "rotate-[360deg]"
          }`}
        /> */}
        <h1
          className={`text-white origin-left font-extrabold duration-300 text-xs leading-4 ${
            !isOpen && 'scale-0'
          }`}
        >
          Company Name
        </h1>
        <div className="absolute right-3 top-10 border-2 z-0 p-4 border-black bg-white  rounded-full">
          <HiOutlineMenu
            className="h-4 w-4 text-black"
            onClick={menuHandler}
          />
        </div>
      </div>

      <ul className="pt-5">
        {navMenu.map((menu: any, index: number) => (
          <MenuItems
            key={index}
            items={menu}
            index={index}
          />
        ))}
      </ul>
    </>
  );
};

export default DashboardNavigation;
