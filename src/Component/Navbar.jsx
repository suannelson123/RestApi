import { ModeToggle } from "../components/ui/ModeToggle";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-[50%] -translate-x-[50%]  py-5 flex justify-between items-center border-b  shadow bg-background z-50 w-screen px-10 min-w-[375px] lg:px-20">
      <h1 className="nunito-sans-600 text-primary">
        <a href="/">Where in the world?</a>
      </h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
