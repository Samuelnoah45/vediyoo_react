import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex  gap-4 lg:items-center justify-between  2xl:px-[200px] lg:px-[80px] px-4 lg:flex-row flex-col   py-8">
      <div>
        <img src="/assets/images/Logo.png" alt="Logo" />
      </div>
      <div className="flex gap-8">
        <Link href="/" className="text-lg font-bold text-black">
          Home
        </Link>
        <Link href="#examples" className="text-lg font-bold text-black">
          Examples
        </Link>
        <Link href="#reviews" className="text-lg font-bold text-black">
          Reviews
        </Link>
        <Link href="#FAQ" className="text-lg font-bold text-black">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
