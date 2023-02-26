import { Plan } from '../../types';
import { DashboardPlansInfo } from './dashboard-plans-info';

type PlansListPropsOption = {
  plans: Plan[];
};
export const DashboardPlansList = ({
  plans,
}: PlansListPropsOption) => {
  return (
    <div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan, index) => (
          <DashboardPlansInfo key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};
