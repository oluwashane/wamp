import {
  ChangeEventHandler,
  ReactEventHandler,
} from 'react';

export type BaseCheckBoxProps = {
  className?: string;
  name?: string;
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  error?: any;
  id?: any;
};

export const BaseCheckBox = ({
  name,
  className,
  checked,
  onChange,
  error,
  value,
  id,
}: BaseCheckBoxProps) => {
  return (
    <div className="w-full my-4">
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          id={id}
          className={className}
          value={value}
          onChange={onChange}
          checked={checked}
          aria-describedby="hs-validation-name-error-helper"
        />
      </div>
      {Boolean(error) && (
        <p className="mt-2 error text-sm text-red-600 error">
          {error}
        </p>
      )}
    </div>
  );
};
