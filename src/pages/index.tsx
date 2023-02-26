import { LinkButton } from '@/components/button';
import BaseTable from '@/components/data-table/BaseTable';
import { Seo } from '@/components/seo';
import { PublicLayout } from '@/layouts/public-layout';
import { ReactElement } from 'react';

const Home = () => {
  return (
    <>
      <Seo templateTitle="Home" />
      <div className="container">
        <div className="py-10">
          <h2 className="text-xl">
            Financial Planning For Life
          </h2>
          <h1 className="text-4xl pt-2">
            Trusted to help guide investors make <br />
            better financial decisions.
          </h1>

          <div className="my-4 space-x-4">
            <LinkButton
              link="/plans"
              className="border-[1px] border-black text-black font-md text-lg"
            >
              Our Plans
            </LinkButton>
            <LinkButton
              link="/auth/login"
              className="bg-black text-white font-md text-lg"
            >
              Login
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
