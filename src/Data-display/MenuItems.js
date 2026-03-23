const MenuItems = ({ name, className, id, fullLink, download }) => {
  const link = fullLink ? fullLink : `#${id}`;
  return (
    <div className={className}>
      <a 
        href={link} 
        download={download ? true : false} 
        className="relative group block py-2 px-3 text-sm md:text-base font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300"
      >
        <p>{name}</p>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
      </a>
    </div>
  );
};
export default MenuItems;
