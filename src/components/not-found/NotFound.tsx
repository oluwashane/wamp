import { MdDoNotDisturbAlt } from 'react-icons/md';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh] text-gray-500">
      <MdDoNotDisturbAlt className="h-40 w-40 rotate-90" />
      <h3 className="text-2xl font-bold">Not Found</h3>
    </div>
  );
};
