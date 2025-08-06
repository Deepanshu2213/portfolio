import wrappedCmp from "../util/Container-wrapper";
import classNames from "classnames";
import { CiLocationOn,CiLinkedin } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { PiHandWavingBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";




const Introduction = () =>{
    return (
        <section>
            <div className="flex h-[90vh] items-center justify-between items-center justify-center">
            <LeftPanel className="flex-[1.2] whitespace-normal flex flex-col gap-5 ml-[10%]"/>
            <RightPanel className="flex-[0.6] flex items-center justify-center h-full"/>
            </div>
        </section>
    )
}
const LeftPanel = ({className}) => {
    const mainClass = classNames(
        className
    )
  return (
    <div className={mainClass}>
    <div>
      <h1 className="text-[2rem]">Hi I am Deepanshu. <PiHandWavingBold className="inline-block align-middle text-yellow-400" size="1em" /></h1><br/>
      <p>
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
      </p>
    </div>
    <div className="flex gap-2 items-center">
        <CiLocationOn/>
        <p>Gurugram India</p>
    </div>
    <div className="flex gap-2 items-center">
        <GoDotFill/>
        <p>Available For New Projects</p>
    </div>
    <div className="flex gap-2 text-[2em] items-center">
        <FaGithub size="1em"/>
        <CiLinkedin size="1.2em"/>
        <SiLeetcode size="0.9em"/>
    </div>
    </div>
  );
};
const RightPanel = ({className})=>{
        const mainClass = classNames(
        className
    )
    return (
        <div className={mainClass}>
        <img src="/logo.png" alt="" className="object-contain w-[50%] h-[50%] max-[600px]:w-full max-[600px]:h-full"/>
        </div>
    )
}
const wrappedInto = wrappedCmp(Introduction)
export default wrappedInto;
