import React from 'react';
import { Button } from '@/components/button';
import { BaseInput } from '@/components/form';
// import queries from "@lib/queries/auth";

const Header = () => {
  return (
    <div className="bg-white px-4 py-6 sticky top-0 shadow-md z-40">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-extrabold">
            Global Lennox
          </p>
        </div>
        <div>
          <Button className="bg-black text-white">
            Fund Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
