// import Dropdown from '@components/application/Dropdown';
import { FC } from 'react';

interface Props {
  columns: any;
  transformData?: any;
  apiPayload?: any;
}

const BaseTable: FC<Props> = ({
  columns,
  transformData,
  apiPayload,
}: Props) => {
  const data = transformData(apiPayload);
  return (
    <div>
      <div className="flex items-center space-x-5 mb-6">
        <div className="shadow-sm">
          <label
            htmlFor="table-search"
            className="sr-only"
          >
            Search
          </label>
          <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-tx-dark dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-tx-dark dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        {/* <Dropdown className="inline-flex space-x-5 shadow-sm items-center text-tx-dark bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 5.95898H2.5C2.46985 5.95898 2.43857 5.9467 2.41293 5.92106C2.38728 5.89541 2.375 5.86413 2.375 5.83398C2.375 5.80384 2.38728 5.77256 2.41293 5.74691C2.43857 5.72127 2.46985 5.70898 2.5 5.70898H17.5C17.5301 5.70898 17.5614 5.72127 17.5871 5.74691C17.6127 5.77256 17.625 5.80384 17.625 5.83398C17.625 5.86413 17.6127 5.89541 17.5871 5.92106C17.5614 5.9467 17.5301 5.95898 17.5 5.95898Z"
              fill="#4B5563"
              stroke="#4B5563"
            />
            <path
              d="M15 10.125H5C4.96985 10.125 4.93857 10.1127 4.91293 10.0871C4.88728 10.0614 4.875 10.0301 4.875 10C4.875 9.96985 4.88728 9.93857 4.91293 9.91293C4.93857 9.88728 4.96985 9.875 5 9.875H15C15.0301 9.875 15.0614 9.88728 15.0871 9.91293C15.1127 9.93857 15.125 9.96985 15.125 10C15.125 10.0301 15.1127 10.0614 15.0871 10.0871C15.0614 10.1127 15.0301 10.125 15 10.125Z"
              fill="#4B5563"
              stroke="#4B5563"
            />
            <path
              d="M11.6667 14.291H8.33337C8.30323 14.291 8.27195 14.2787 8.2463 14.2531C8.22066 14.2274 8.20837 14.1962 8.20837 14.166C8.20837 14.1359 8.22066 14.1046 8.2463 14.0789C8.27195 14.0533 8.30323 14.041 8.33337 14.041H11.6667C11.6969 14.041 11.7281 14.0533 11.7538 14.0789C11.7794 14.1046 11.7917 14.1359 11.7917 14.166C11.7917 14.1962 11.7794 14.2274 11.7538 14.2531C11.7281 14.2787 11.6969 14.291 11.6667 14.291Z"
              stroke="#4B5563"
            />
          </svg>
          <span className="sr-only">sort-by button</span>
          Sort By
          <svg
            className="ml-2 w-3 h-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Dropdown>
        <Dropdown
          className={`inline-flex space-x-5 shadow-sm items-center text-tx-dark bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-3 py-2 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.3334 5.54102H13.3334C13.3032 5.54102 13.2719 5.52873 13.2463 5.50309C13.2207 5.47744 13.2084 5.44616 13.2084 5.41602C13.2084 5.38587 13.2207 5.35459 13.2463 5.32894C13.2719 5.3033 13.3032 5.29102 13.3334 5.29102H18.3334C18.3635 5.29102 18.3948 5.3033 18.4204 5.32894C18.4461 5.35459 18.4584 5.38587 18.4584 5.41602C18.4584 5.44616 18.4461 5.47744 18.4204 5.50309C18.3948 5.52873 18.3635 5.54102 18.3334 5.54102Z"
              fill="#4B5563"
              stroke="#4B5563"
            />
            <path
              d="M4.99996 5.54102H1.66663C1.63648 5.54102 1.6052 5.52873 1.57955 5.50309C1.55391 5.47744 1.54163 5.44616 1.54163 5.41602C1.54163 5.38587 1.55391 5.35459 1.57955 5.32894C1.6052 5.3033 1.63648 5.29102 1.66663 5.29102H4.99996C5.03011 5.29102 5.06139 5.3033 5.08703 5.32894C5.11268 5.35459 5.12496 5.38587 5.12496 5.41602C5.12496 5.44616 5.11268 5.47744 5.08703 5.50309C5.06139 5.52873 5.03011 5.54102 4.99996 5.54102Z"
              fill="#4B5563"
              stroke="#4B5563"
            />
            <path
              d="M8.33329 8.45833C6.65944 8.45833 5.29163 7.09052 5.29163 5.41667C5.29163 3.74281 6.65944 2.375 8.33329 2.375C10.0072 2.375 11.375 3.74281 11.375 5.41667C11.375 7.09052 10.0072 8.45833 8.33329 8.45833ZM8.33329 2.625C6.79048 2.625 5.54163 3.87386 5.54163 5.41667C5.54163 6.95948 6.79048 8.20833 8.33329 8.20833C9.8761 8.20833 11.125 6.95948 11.125 5.41667C11.125 3.87386 9.8761 2.625 8.33329 2.625Z"
              stroke="#4B5563"
            />
            <path
              d="M18.3333 14.709H15C14.9699 14.709 14.9386 14.6967 14.9129 14.6711C14.8873 14.6454 14.875 14.6141 14.875 14.584C14.875 14.5538 14.8873 14.5226 14.9129 14.4969C14.9386 14.4713 14.9699 14.459 15 14.459H18.3333C18.3635 14.459 18.3948 14.4713 18.4204 14.4969C18.446 14.5226 18.4583 14.5538 18.4583 14.584C18.4583 14.6141 18.446 14.6454 18.4204 14.6711C18.3948 14.6967 18.3635 14.709 18.3333 14.709Z"
              fill="#292D32"
              stroke="#4B5563"
            />
            <path
              d="M6.66663 15.209H1.66663C1.32496 15.209 1.04163 14.9257 1.04163 14.584C1.04163 14.2423 1.32496 13.959 1.66663 13.959H6.66663C7.00829 13.959 7.29163 14.2423 7.29163 14.584C7.29163 14.9257 7.00829 15.209 6.66663 15.209Z"
              fill="#292D32"
            />
            <path
              d="M11.6667 18.1243C9.71667 18.1243 8.125 16.5327 8.125 14.5827C8.125 12.6327 9.71667 11.041 11.6667 11.041C13.6167 11.041 15.2083 12.6327 15.2083 14.5827C15.2083 16.5327 13.6167 18.1243 11.6667 18.1243ZM11.6667 12.291C10.4 12.291 9.375 13.316 9.375 14.5827C9.375 15.8493 10.4 16.8743 11.6667 16.8743C12.9333 16.8743 13.9583 15.8493 13.9583 14.5827C13.9583 13.316 12.9333 12.291 11.6667 12.291Z"
              fill="#292D32"
            />
          </svg>
          <span className="sr-only">
            filter-by button
          </span>
          Filter By
          <svg
            className="ml-2 w-3 h-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </Dropdown> */}
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-md">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              {columns.map((data: any, index: any) => (
                <th
                  key={index}
                  scope="col"
                  className="py-3 px-6"
                >
                  {data.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d: any, index: number) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-50"
              >
                {columns.map(
                  (col: any, index: number) => {
                    return (
                      <td
                        key={index}
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap truncate max-w-lg"
                      >
                        {d[col.field]}
                      </td>
                    );
                  }
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BaseTable;
