import wrappedCmp from '../util/Container-wrapper';
import classNames from 'classnames';
import { CiLocationOn, CiLinkedin } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { PiHandWavingBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { introductionData } from '../Data/introductionData';

const socialIconComponents = {
  FaGithub: FaGithub,
  CiLinkedin: CiLinkedin,
  SiLeetcode: SiLeetcode,
};

const Introduction = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row min-h-[90vh] items-center justify-center md:justify-between py-24 md:py-0 overflow-hidden">
        <LeftPanel className="flex-[1.2] whitespace-normal flex flex-col gap-5 px-6 md:px-0 md:ml-[10%] w-full order-2 md:order-1 mt-12 md:mt-0" />
        <RightPanel className="flex-[0.6] flex items-center justify-center w-full md:h-full order-1 md:order-2" />
      </div>
    </section>
  );
};
const LeftPanel = ({ className }) => {
  const mainClass = classNames(className, "z-10");
  return (
    <div className={mainClass}>
      <div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 tracking-tight">
          Hi I am <br/> {introductionData.name}.{' '}
          <PiHandWavingBold
            className="inline-block align-middle text-yellow-400 animate-bounce"
            size="0.8em"
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-300/80 max-w-2xl leading-relaxed mb-8">
          {introductionData.description}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-gray-200">
        <div className="flex gap-3 items-center glass px-4 py-2 rounded-full w-fit hover:bg-white/10 transition-colors duration-300">
          <CiLocationOn className="text-emerald-400 text-xl" />
          <p className="font-medium">{introductionData.location}</p>
        </div>
        <div className="flex gap-3 items-center glass px-4 py-2 rounded-full w-fit hover:bg-white/10 transition-colors duration-300">
          <GoDotFill className="text-emerald-400 text-xl animate-pulse" />
          <p className="font-medium">{introductionData.availability}</p>
        </div>
      </div>
      <div className="flex gap-6 text-3xl mt-8 items-center">
        {introductionData.socialLinks.map((link) => {
          const IconComponent = socialIconComponents[link.icon];
          return IconComponent ? (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <IconComponent />
            </a>
          ) : null;
        })}
      </div>
    </div>
  );
};
const RightPanel = ({ className }) => {
  const mainClass = classNames(className, "relative z-10");
  return (
    <div className={mainClass}>
      <div className="relative animate-float">
        {/* Glow effect behind image */}
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <img
          src="/ff.jpeg"
          alt="profile pic"
          className="relative object-cover rounded-2xl w-[280px] h-[350px] md:w-[350px] md:h-[450px] shadow-2xl border-2 border-white/10"
        />
      </div>
    </div>
  );
};
const wrappedInto = wrappedCmp(Introduction);
export default wrappedInto;
