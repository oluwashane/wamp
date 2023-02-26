import { Seo } from '@/components/seo';
import { LoginForm } from '@/features/Auth';
import { PublicLayout } from '@/layouts/public-layout';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    router.replace(redirect || '/dashboard/user');
    console.log('Your login was successful');
  };
  return (
    <PublicLayout>
      <Seo templateTitle="Login" />
      <div className="container">
        <div className="m-auto my-10 max-w-md shadow-lg px-8 py-8">
          <h3 className="text-2xl font-bold">Login</h3>
          <p className="text-lg font-thin">
            Welcome back! Log in to your account
          </p>
          <div className="my-4">
            <LoginForm onSuccess={onSuccess} />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Login;
