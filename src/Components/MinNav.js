import { LuMenu } from 'react-icons/lu';
import classNames from 'classnames';
const MinNavigation = ({ className, setMenuBar }) => {
  const cls = classNames(
    className,
    'content-center h-[10vh] text-xl',
    'flex items-center justify-between px-6'
  );
  return (
    <div className={cls}>
      <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Welcome</h1>
      <div
        data-testid="menuIcon"
        onClick={(e) => {
          setMenuBar((prev) => !prev);
          e.stopPropagation();
        }}
        className="cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <LuMenu className="text-3xl text-emerald-400" />
      </div>
    </div>
  );
};

export default MinNavigation;
