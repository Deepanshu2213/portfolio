import MenuItems from '../Data-display/MenuItems';
import classNames from 'classnames';
import ResizeContext from '../Hooks/use-resize-hook';
import MinNavigation from './MinNav';

const Navigation = () => {
  const { width } = ResizeContext();
  const clss = classNames(
    'bg-gray-950 text-gray-100 border-b border-gray-800',
    'sticky top-0 z-50'
  );
  if (width < 800) {
    return <MinNavigation className={clss} />;
  }
  return (
    <nav className={clss}>
      <div className="flex min-h-[10vh] items-center">
        <MenuItems
          className="flex-[0.8] ml-[8%]"
          name="Welcome"
          id="intro"
        ></MenuItems>
        <div className="flex-[1.2] flex justify-evenly">
          <MenuItems name="About" id="about"></MenuItems>
          <MenuItems name="Skills" id="skills"></MenuItems>
          <MenuItems name="Experience" id="experience"></MenuItems>
          <MenuItems name="Projects" id="project"></MenuItems>
          <MenuItems name="Contact" id="contract"></MenuItems>
          <MenuItems name="Download CV"></MenuItems>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
