import { NotFound } from '@/components/not-found';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Link href="/">
        <p className="text-center text-lg">Home</p>
      </Link>
    </>
  );
};

export default NotFoundPage;
