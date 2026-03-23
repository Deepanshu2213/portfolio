import wrappedCmp from '../util/Container-wrapper';
import { aboutMeContent } from '../Data/aboutData';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="glass-card flex flex-col lg:flex-row w-full p-6 md:p-10 lg:p-12 gap-10 lg:gap-14 rounded-3xl overflow-hidden group/about">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
};

const LeftPanel = () => {
  // Using 45% width on desktop so the image is large and impactful
  return (
    <div className="w-full lg:w-[45%] relative group/img rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square lg:aspect-auto min-h-[300px] flex items-center justify-center bg-[#0a1128]/50">
      <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
      <img
        className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-700 ease-out p-4"
        src="/mern-stack.png"
        alt="MERN Stack"
      ></img>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="w-full lg:w-[55%] text-gray-300 flex flex-col justify-center">
      <h3 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight">About Me</h3>
      {aboutMeContent.paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-6 text-base md:text-lg leading-relaxed text-gray-300/90 hover:text-white transition-colors duration-300">
          {paragraph}
        </p>
      ))}
      <div className="flex items-center gap-4 mb-8 mt-2">
        <p className="text-xl font-semibold text-white whitespace-nowrap">
          Quick bits about me
        </p>
        <div className="h-px bg-gradient-to-r from-emerald-400/50 to-transparent flex-1"></div>
      </div>
      <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-base">
        {aboutMeContent.listItems.map((item, index) => (
          <li key={index} className="text-gray-400 hover:text-emerald-300 transition-colors duration-300 cursor-default marker:text-emerald-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default wrappedCmp(AboutMe, true);
