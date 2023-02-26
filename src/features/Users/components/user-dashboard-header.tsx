import { Button } from '@/components/button';
import Modal from '@/components/modal/Modal';
import { FundWalletForm } from '@/features/Wallets';

export const UserDashboardHeader = () => {
  return (
    <div className="bg-white px-4 py-6 sticky top-0 shadow-md z-40">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-extrabold">
            Global Lennox
          </p>
        </div>
        <div>
          {/* <Button className="bg-black text-white">
            Fund Wallet
          </Button> */}
          <Modal
            title="Fund Wallet"
            buttonName="Fund Wallet"
          >
            <FundWalletForm />
          </Modal>
        </div>
      </div>
    </div>
  );
};
