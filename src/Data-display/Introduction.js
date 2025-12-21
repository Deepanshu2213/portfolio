import wrappedCmp from '../util/Container-wrapper';
import classNames from 'classnames';
import { CiLocationOn, CiLinkedin } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { PiHandWavingBold } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { introductionData } from '../Data/introductionData';
import useResizeContext from '../Hooks/use-resize-hook';

const socialIconComponents = {
  FaGithub: FaGithub,
  CiLinkedin: CiLinkedin,
  SiLeetcode: SiLeetcode,
};

const Introduction = () => {
  return (
    <section>
      <div className="flex h-[90vh] items-center justify-between items-center justify-center">
        <LeftPanel className="flex-[1.2] whitespace-normal flex flex-col gap-5 ml-[10%]" />
        <RightPanel className="flex-[0.6] flex items-center justify-center h-full" />
      </div>
    </section>
  );
};
const LeftPanel = ({ className }) => {
  const mainClass = classNames(className);
  return (
    <div className={mainClass}>
      <div>
        <h1 className="text-[2rem] leading-none">
          Hi I am {introductionData.name}.{' '}
          <PiHandWavingBold
            className="inline-block align-middle text-yellow-400"
            size="1em"
          />
        </h1>
        <br />
        <p>{introductionData.description}</p>
      </div>
      <div className="flex gap-2 items-center">
        <CiLocationOn />
        <p>{introductionData.location}</p>
      </div>
      <div className="flex gap-2 items-center">
        <GoDotFill />
        <p>{introductionData.availability}</p>
      </div>
      <div className="flex gap-2 text-[2em] items-center">
        {introductionData.socialLinks.map((link) => {
          const IconComponent = socialIconComponents[link.icon];
          return IconComponent ? (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent size="1em" />
            </a>
          ) : null;
        })}
      </div>
    </div>
  );
};
const RightPanel = ({ className }) => {
  const mainClass = classNames(className);
  return (
    <div className={mainClass}>
      <img
        src="https://media.licdn.com/dms/image/v2/C4E03AQFVWc59eUDtmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635621669292?e=1767830400&v=beta&t=HIK0FuK5DeQAW0lRal7wE04MLGEpBFJN5xHvwO69GCo"
        alt="ss"
        className="object-cover rounded-lg w-[50%] h-[40%] max-[600px]:w-[70%] max-[600px]:h-[30%]  opacity-[0.6]"
      />
    </div>
  );
};
const wrappedInto = wrappedCmp(Introduction);
export default wrappedInto;
