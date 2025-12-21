import { LuMenu } from 'react-icons/lu';
import classNames from 'classnames';
const MinNavigation = ({ className, setMenuBar }) => {
  const cls = classNames(
    className,
    'content-center h-[10vh] text-xl custom-shadow',
    'flex items-center justify-center'
  );
  return (
    <div className={cls}>
      <div
        className="flex-[0.4]"
        data-testid="menuIcon"
        onClick={(e) => {
          setMenuBar((prev) => !prev);
          e.stopPropagation();
        }}
      >
        <LuMenu className="m-[1.5rem] cursor-pointer" />
      </div>
      <h1 className="flex-[1.6]">Welcome</h1>
    </div>
  );
};

export default MinNavigation;
