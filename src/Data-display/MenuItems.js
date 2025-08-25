const MenuItems = ({ name, className, id }) => {
  const link = `#${id}`;
  return (
    <div className={className}>
      <a href={link}>
        <p>{name}</p>
      </a>
    </div>
  );
};
export default MenuItems;
