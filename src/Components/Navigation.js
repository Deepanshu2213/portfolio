import MenuItems from '../Data-display/MenuItems';
import classNames from 'classnames';
import useResizeContext from '../Hooks/use-resize-hook';
import MinNavigation from './MinNav';
import MenuBar from './MenuBar';
import { useState } from 'react';

const Navigation = () => {
  const [menuBar, setMenuBar] = useState(false);
  const { width } = useResizeContext();
  const clss = classNames(
    'glass border-b border-white/10 text-gray-100',
    'sticky top-0 z-50 transition-all duration-300'
  );
  if (width < 800) {
    return (
      <>
        {menuBar && <MenuBar setMenuBar={setMenuBar} menuBar={menuBar} />}
        <MinNavigation className={clss} setMenuBar={setMenuBar} />
      </>
    );
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
          <MenuItems
            name="Download CV"
            fullLink="/Deepanshu_resume.pdf"
            download={true}
          ></MenuItems>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
