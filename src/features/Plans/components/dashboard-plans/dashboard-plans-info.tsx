import { LinkButton } from '@/components/button';
import { formatMoney } from '@/utils';
import { Plan } from '../../types';

export const DashboardPlansInfo = ({
  plan,
}: {
  plan: Plan;
}) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
      <div className="px-4 py-10 flex flex-col items-center text-center justify-center">
        <div className="my-8">
          <p className=" bg-green-600 text-white p-2 text-md font-bold rounded-full">
            {plan.name}
          </p>
          <p className="text-2xl">Investment</p>
        </div>
        <div>
          <p className="text-5xl font-bold">
            {plan.roi}
            <sup> %</sup>
          </p>
          <p className="text-2xl font-extralight text-gray-500">
            After 24 hour(s)
          </p>
        </div>
      </div>
      <div className="bg-black text-white p-4">
        <div className="flex items-center justify-between">
          <p>Min</p>
          <p className="font-bold">
            USD {formatMoney(plan.min_amount)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Max</p>
          <p className="font-bold">
            USD {formatMoney(plan.max_amount)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Profit Daily</p>
          <p className="font-bold">0.42%</p>
        </div>
        {/* <div className="flex items-center justify-between">
          <p>Referrlal Bonus</p>
          <p className="font-bold">{plan.referral}%</p>
        </div> */}
        <div className="flex items-center justify-between">
          <p>Duration</p>
          <p className="font-bold">
            {plan.duration} hours
          </p>
        </div>
        <div className="my-3 flex justify-center">
          <LinkButton
            link="/auth/login"
            className="bg-green-600"
          >
            Invest
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
