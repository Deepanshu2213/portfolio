import { ResizeProvider } from '../Context/resize';
import { useContext } from 'react';

const useResizeContext = () => {
  return useContext(ResizeProvider);
};

export default useResizeContext;
