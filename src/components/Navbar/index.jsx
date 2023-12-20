import Link from "next/link";
import InputSearch from "./InputSearch";
import UserButton from "./UserButton";

const Navbar = () => {
  return (
    <header className="bg-on-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
          <Link href="/" passHref className="font-bold text-on-primary text-2xl ml-2 deg-3">
            Akira<span className="text-on-dark left-2">nime</span>
          </Link>
        <InputSearch />
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
