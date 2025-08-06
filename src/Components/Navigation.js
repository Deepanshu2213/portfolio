import MenuItems from "../Data-display/MenuItems";
import classNames from "classnames";
const Navigation = () => {
      const clss = classNames(
          "bg-gray-950 text-white",
           "sticky top-0 z-50",
      ) 
  return (
    <nav className={clss}>
      <div className="flex min-h-[10vh] items-center">
        <div className="flex-1 m-lg">Welcome</div>
        <div className="flex-1 flex justify-evenly">
          <MenuItems name="About"></MenuItems>
          <MenuItems name="Work"></MenuItems>
          <MenuItems name="Projects"></MenuItems>
          <MenuItems name="Contact"></MenuItems>
          <MenuItems name="Download CV"></MenuItems>
        </div>
      </div>
    </nav>
  );
};


export default Navigation;
