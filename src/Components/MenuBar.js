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
  CV: [<FaFileDownload />, 'Deepanshu_resume.pdf', true],
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
      className="fixed h-screen w-[75vw] sm:w-[50vw] text-white z-[60] flex flex-col items-start bg-gray-950/95 backdrop-blur-xl border-r border-white/10 shadow-2xl top-0 left-0 pt-8 transition-transform duration-300"
      data-testid="menuBar"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="px-8 pb-6 border-b border-white/10 w-full mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight">Portfolio</h2>
      </div>
      <MenuItems setMenuBar={setMenuBar} />
    </div>
  );
};

const MenuItems = ({ setMenuBar }) => {
  return (
    <div className="w-full text-left flex flex-col px-4 gap-2">
      {Object.keys(menu).map((key) => (
        <MenuItem
          key={key}
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
      className="flex w-full px-4 py-3 items-center gap-4 border-b border-white/5 hover:bg-white/5 active:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer group"
      onClick={() => {
        setMenuBar(false);
      }}
    >
      <div className="text-2xl text-gray-400 group-hover:text-emerald-400 transition-colors pointer-events-none">
        {icon}
      </div>
      <div className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors w-full">
        <a download={download} href={`${download ? '' : '#'}` + id} className="block w-full">
          {title}
        </a>
      </div>
    </div>
  );
};
export default MenuBar;
