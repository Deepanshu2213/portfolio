import { createContext, useEffect, useState } from 'react';

const ResizeProvider = createContext();

const Resize = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeFunc = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', resizeFunc);
    return () => {
      window.removeEventListener('resize', resizeFunc);
    };
  }, [height, width]);
  return (
    <ResizeProvider.Provider value={{ height, width }}>
      {children}
    </ResizeProvider.Provider>
  );
};
export { ResizeProvider };
export default Resize;
