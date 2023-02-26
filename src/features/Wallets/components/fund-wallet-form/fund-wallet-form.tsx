import { Button } from '@/components/button';
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Ref } from '@/components/navigation';
import { BaseInput } from '@/components/form';
import { errorParser } from '@/utils';

const defaultPayload = {
  amount: 0,
};

export const FundWalletForm = () => {
  const [image, setImage] = useState('');
  const [payload] = useState(defaultPayload);
  const [investOption, setIvestOption] = useState(1);

  const onSubmit = async (values: { amount: number }) => {
    console.log(values);
  };

  const changeOption = (arg: any) => {
    setIvestOption(arg);
  };

  const convert2Base64 = (event: any) => {
    const file = event.target.files[0];
    const reader: any = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result?.toString());
    };

    reader.readAsDataURL(file);
  };

  const schema = Yup.object({
    amount: Yup.number().required(),
  });

  return (
    <div className="p-8">
      <div>
        <h2 className="font-extralight text-2xl my-4">
          Fund Your Wallet
        </h2>
        <p className="font-bold">
          Select Payment Option of Choice:
        </p>
        <div className="flex items-center space-x-3 my-5">
          <button
            className="text-base-secondary rounded-lg text-center text-sm light bg-[#0A3041] text-white p-2"
            onClick={() => {
              changeOption(1);
            }}
          >
            BTC
          </button>
          <button
            className="text-base-secondary rounded-lg text-center text-sm light bg-[#0A3041] text-white p-2"
            onClick={() => {
              changeOption(2);
            }}
          >
            ETH
          </button>
          <button
            className="text-base-secondary rounded-lg text-center text-sm light bg-[#0A3041] text-white p-2"
            onClick={() => {
              changeOption(3);
            }}
          >
            USDT
          </button>
        </div>
        <div
          className={
            investOption === 1 ? 'block' : 'hidden'
          }
        >
          <p className="font-bold">
            Make Payment to BTC(wallet)
          </p>
          <Ref referral="bc1q5j4ld7mmgpdqk4h0cg24p4hkkwetsqqpc0ux9s" />
        </div>
        <div
          className={
            investOption === 2 ? 'block' : 'hidden'
          }
        >
          <p className="font-bold">
            Make Payment to ETH(wallet)
          </p>
          <Ref referral="0x237f50A800541B083DB3b2a91998f4b60549f3e3" />
        </div>
        <div
          className={
            investOption === 3 ? 'block' : 'hidden'
          }
        >
          <p className="font-bold">
            Make Payment to USDT(wallet)
          </p>
          <Ref referral="TZ5a4o5YLfd7fzUHiABeCMRzKnrG7u7Fsy" />
          {/*  */}
        </div>
      </div>
      <Formik
        enableReinitialize
        initialValues={payload}
        validationSchema={schema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => {
          const {
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
          } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <div className="">
                <BaseInput
                  type="text"
                  label="Enter Amount"
                  placeholder="Amount"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  error={errorParser(
                    errors,
                    touched,
                    'amount'
                  )}
                />
                <div className="my-4">
                  <label
                    htmlFor="file"
                    className="text-sm my-1 block font-bold"
                  >
                    Upload Proof Of Payment
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    required
                    placeholder="Proof of Payment"
                    onChange={convert2Base64}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#6FFC2D] rounded-lg text-black text-md font-semibold px-5 my-2 mt-3 hover:shadow-xl active:scale-90"
                >
                  Done
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
