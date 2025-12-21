import classNames from 'classnames';
const Container = ({ children, className, light, id, blend }) => {
  const clss = classNames(
    'max-[400px]:text-sm tracking-wide',
    light
      ? `bg-gray-900${blend ? `/${blend}` : ''} text-gray-300`
      : `bg-gray-950${blend ? `/${blend}` : ''} text-white`,
    className ? className : '',
    'flex flex-col'
  );
  return (
    <section className={clss} id={id}>
      {children}
    </section>
  );
};
export default Container;
