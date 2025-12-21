import { FcAbout } from 'react-icons/fc';
import { GiSkills, GiFilmProjector } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';

const menu = {
  Home: [<FaHome />, 'intro'],
  About: [<FcAbout />, 'about'],
  Skills: [<GiSkills />, 'skills'],
  Experience: [<MdCardTravel />, 'experience'],
  Projects: [<GiFilmProjector />, 'project'],
  Contact: [<IoMdContact />, 'contract'],
  ['CV']: [<FaFileDownload />, 'Deepanshu_resume.pdf', true],
};
const MenuBar = ({ setMenuBar, menuBar }) => {
  const menu = useRef();
  useEffect(() => {
    const menuClick = () => {
      menuBar && setMenuBar(false);
    };
    window.addEventListener('click', menuClick);
    return () => {
      window.removeEventListener('click', menuClick);
    };
  }, [setMenuBar, menuBar]);
  return (
    <div
      ref={menu}
      className="fixed h-screen w-[45vw] text-white z-50 flex flex-col items-center bg-gray-900 "
      data-testid="menuBar"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <MenuItems setMenuBar={setMenuBar} />
    </div>
  );
};

const MenuItems = ({ setMenuBar }) => {
  return (
    <div className="w-full text-center gap-2 flex flex-col mt-[1rem]">
      {Object.keys(menu).map((key) => (
        <MenuItem
          icon={menu[key][0]}
          title={key}
          download={menu[key].length >= 3 && menu[key][2]}
          setMenuBar={setMenuBar}
          id={menu[key][1]}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ icon, title, setMenuBar, id, download }) => {
  return (
    <div
      className="flex m-3 p-3 items-center gap-5 border-b border-gray-800"
      onClick={() => {
        setMenuBar(false);
      }}
    >
      <div>
        {' '}
        <a download={download} href={`${download ? '' : '#'}` + id}>
          {icon}
        </a>
      </div>
      <div>
        <a download={download} href={`${download ? '' : '#'}` + id}>
          {title}
        </a>
      </div>
    </div>
  );
};
export default MenuBar;
