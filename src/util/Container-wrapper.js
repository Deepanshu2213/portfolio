import Container from '../Components/Container';
import classNames from 'classnames';
const wrappedCmp = (Component, light = false, className, blend) => {
  const cls = classNames('scroll-mt-20', className);
  return (props) => {
    return (
      <Container light={light} className={cls} id={props.id} blend={blend}>
        <Component {...props} />
      </Container>
    );
  };
};
export default wrappedCmp;
