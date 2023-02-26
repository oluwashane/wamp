import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-md sticky text-lg">
      <div>
        <p>Company Name</p>
      </div>
      <div className="list-none flex space-x-10 font-semibold">
        <Link href="/about">
          <li className="cursor-pointer">About</li>
        </Link>

        <Link href="/plans">
          <li className="cursor-pointer">Plans</li>
        </Link>

        <Link href="/contact-us">
          <li className="cursor-pointer">Contact Us</li>
        </Link>

        <Link href="/auth/login">
          <li className="cursor-pointer">Login</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
