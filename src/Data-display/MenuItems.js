const MenuItems = ({ name, className, id, fullLink, download }) => {
  const link = fullLink ? fullLink : `#${id}`;
  return (
    <div className={className}>
      <a href={link} download={download ? true : false}>
        <p>{name}</p>
      </a>
    </div>
  );
};
export default MenuItems;
