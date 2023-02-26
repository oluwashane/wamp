import { FC } from 'react';

interface IProps {
  label?: string;
  name?: string;
  className?: string;
  disabledValue?: string;
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  value: any;
  onChange?: any;
  data: Array<any>;
  style?: any;
  error?: string;
}

const BaseSelect: FC<IProps> = ({
  label,
  name,
  className,
  disabledValue,
  placeholder,
  optionLabel,
  optionValue,
  value,
  onChange,
  data,
  style,
  error,
}: IProps) => {
  return (
    <div className="w-full my-2">
      {!!label && (
        <label
          htmlFor="hs-validation-name-error"
          className="text-sm my-1 block font-bold"
        >
          {label}
        </label>
      )}

      <select
        value={value}
        name={name}
        onChange={onChange}
        className={`${className} block w-full rounded-md border-[1px] py-3 px-4 text-sm text-gray-600 bg-gray-100`}
      >
        {!!disabledValue && (
          <option disabled value="">
            {disabledValue || 'Choose...'}
          </option>
        )}

        {data &&
          data.map((item: any, index: number) => {
            const setValue = optionValue
              ? item[optionValue]
              : item;
            let setLabel = optionLabel
              ? item[optionLabel]
              : item;

            if (typeof setLabel === 'object') {
              setLabel = JSON.stringify(item);
            } else if (
              Array.isArray &&
              Array.isArray(setLabel)
            ) {
              setLabel = JSON.stringify(item);
            }

            return (
              // eslint-disable-next-line react/no-array-index-key
              <option
                value={setValue}
                key={JSON.stringify(item) + index}
              >
                {setLabel}
              </option>
            );
          })}
      </select>
      {!!error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default BaseSelect;
