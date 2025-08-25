import classNames from 'classnames';
const Container = ({ children, className, light, id }) => {
  const clss = classNames(
    'max-[400px]:text-sm tracking-wide',
    light ? 'bg-gray-900 text-gray-300' : 'bg-gray-950 text-white',
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
