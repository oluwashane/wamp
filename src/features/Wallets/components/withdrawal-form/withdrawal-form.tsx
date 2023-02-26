import * as Yup from 'yup';
import { useState } from 'react';
import { Formik } from 'formik';
import { Button } from '@/components/button';
import { BaseInput } from '@/components/form';
import { errorParser } from '@/utils';
import BaseSelect from '@/components/form/BaseSelect';

const defaultPayload = {
  amount: 0,
  wallet_type: '',
  wallet: '',
};

export const WithdrawalForm = () => {
  const [payload] = useState(defaultPayload);

  const onSubmit = async (values: {
    amount: number;
    wallet_type: string;
    wallet: string;
  }) => {};

  const schema = Yup.object({
    amount: Yup.number().required(),
    wallet_type: Yup.string().required(),
    wallet: Yup.string().required(),
  });

  return (
    <div>
      <p>
        <span className="text-red-500">Note:</span> You
        cannot withdraw below $50
      </p>
      <div>
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
                <div>
                  <BaseInput
                    type="text"
                    label="Amount"
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
                  <BaseSelect
                    label="Wallet Type"
                    name="wallet_type"
                    disabledValue="Select Wallet Type"
                    value={values.wallet_type}
                    data={['BTC', 'ETH', 'USDT', 'BUSD']}
                    onChange={handleChange}
                    error={errorParser(
                      errors,
                      touched,
                      'wallet_type'
                    )}
                  />
                  <BaseInput
                    type="text"
                    label="Wallet Address"
                    placeholder="Wallet Address"
                    name="wallet"
                    value={values.wallet}
                    onChange={handleChange}
                    error={errorParser(
                      errors,
                      touched,
                      'wallet'
                    )}
                  />
                </div>
                <div className="mt-4">
                  <Button
                    type="submit"
                    className="bg-[#6FFC2D] rounded-lg text-black text-lg font-bold px-8 py-3 hover:shadow-xl active:scale-90"
                  >
                    Withdraw
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
