import { Plan } from '../types';
import { PlansInfo } from './plans-info';

export type PlansListPropsOption = {
  plans: Plan[];
};
export const PlansList = ({
  plans,
}: PlansListPropsOption) => {
  return (
    <div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan, index) => (
          <PlansInfo key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};
