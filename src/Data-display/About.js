import wrappedCmp from '../util/Container-wrapper';
import { aboutMeContent } from '../Data/aboutData';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative z-10 w-full max-w-7xl mx-auto">
      <div className="flex items-center w-full max-lg:flex-col gap-12 px-6 lg:px-12 mt-10">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};
const LeftPanel = () => {
  return (
    <div className="h-full w-full flex-1 relative group">
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img
        className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
        src="https://miro.medium.com/v2/format:webp/0*hU4zJiyVwWcM0L-w.png"
        alt="About Me"
      ></img>
    </div>
  );
};
const RightPanel = () => {
  return (
    <div className="flex-[1.2] text-gray-300 glass p-8 md:p-12 rounded-3xl">
      <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">About Me</h3>
      {aboutMeContent.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-base md:text-lg leading-relaxed text-gray-300/90 hover:text-white transition-colors duration-300">
          {paragraph}
        </p>
      ))}
      <br />
      <div className="flex items-center gap-4 mb-6">
        <p className="text-xl font-semibold text-white whitespace-nowrap">
          Quick bits about me
        </p>
        <div className="h-px bg-gradient-to-r from-emerald-400/50 to-transparent flex-1"></div>
      </div>
      <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base">
        {aboutMeContent.listItems.map((item, index) => (
          <li key={index} className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 cursor-default">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default wrappedCmp(AboutMe, true);
