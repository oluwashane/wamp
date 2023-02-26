import { ChangeEventHandler } from 'react';

export type BaseRadioProps = {
  name?: string;
  title?: string;
  id?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const BaseRadio = ({
  name,
  title,
  id,
  checked,
  onChange,
}: BaseRadioProps) => {
  return (
    <div className="relative flex items-center space-x-2 my-3">
      <input
        name={name}
        type="radio"
        className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        aria-describedby="hs-radio-delete-description"
        checked={checked}
        onChange={onChange}
      />

      <label className="">
        <span className="block text-sm text-gray-600 dark:text-gray-500">
          {title}
        </span>
      </label>
    </div>
  );
};
