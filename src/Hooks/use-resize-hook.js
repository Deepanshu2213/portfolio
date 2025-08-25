import { ResizeProvider } from "../Context/resize";
import { useContext } from "react";

const ResizeContext = () =>{
    return useContext(ResizeProvider)
};

export default ResizeContext;