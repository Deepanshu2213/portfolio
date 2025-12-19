import Tag from '../Components/Tag';
import wrappedCmp from '../util/Container-wrapper';
import { aboutMeContent } from '../Data/aboutData';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Tag className="m-[5vh]" title={'About me'} />
      <div className="flex items-center h-full max-[600px]:flex-col m-[4%] gap-[3rem] max-[600px]:m-[1.5rem]">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};
const LeftPanel = () => {
  return (
    <div className="h-full w-full flex-[0.8]">
      <img
        className="h-[100%] w-[100%] object-cover"
        src="https://miro.medium.com/v2/format:webp/0*hU4zJiyVwWcM0L-w.png"
        alt="something went wrong"
      ></img>
    </div>
  );
};
const RightPanel = () => {
  return (
    <div className="flex-[1.2] text-gray-300">
      {aboutMeContent.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-base leading-relaxed">
          {paragraph}
        </p>
      ))}
      <br />
      <p className="text-lg font-semibold text-white mb-4">
        Finally, some quick bits about me.
      </p>
      <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base">
        {aboutMeContent.listItems.map((item, index) => (
          <li key={index} className="text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default wrappedCmp(AboutMe, true);
