import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { errorParser } from '@/utils';
import { Seo } from '@/components/seo';
import { BaseInput } from '@/components/form';
import Link from 'next/link';
import { Button } from '@/components/button';
import { useLogin } from '../api/login';

const defaultPayload = {
  email: '',
  password: '',
};

type LoginPayload = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({
  onSuccess,
}: LoginFormProps) => {
  const [payload] = useState(defaultPayload);
  const login = useLogin({ onSuccess });

  const onSubmit = async (values: LoginPayload) => {
    login.submit(values);
  };

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
    password: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  });

  return (
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
            touched,
            errors,
          } = formik;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <BaseInput
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  error={errorParser(
                    errors,
                    touched,
                    'email'
                  )}
                />
              </div>
              <div>
                <BaseInput
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  error={errorParser(
                    errors,
                    touched,
                    'password'
                  )}
                />
              </div>
              <div className="my-4">
                <Button
                  type="submit"
                  className="w-full bg-black text-white"
                >
                  Login
                </Button>
              </div>
              <div className="flex flex-col mt-5 text-sm">
                <Link href="/auth/register">
                  Need an account? Register
                </Link>
                <Link href="/auth/forgot-password">
                  Forgot password?
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
