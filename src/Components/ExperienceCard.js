import classNames from 'classnames';
import wrappedCmp from '../util/Container-wrapper';

const ExperienceCard = ({ data, className }) => {
  const { title, company, location, duration, responsibilities, link } = data;
  const clss = classNames(
    'glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 group overflow-hidden w-full transition-all duration-300',
    className
  );

  return (
    <div className={clss}>
      {/* Left Column: Company & Location */}
      <div className="flex-[0.3] md:border-r border-white/10 md:pr-6 flex flex-col items-start min-w-[200px]">
        <p className="text-emerald-400 font-bold text-xl md:text-2xl tracking-tight mb-2 group-hover:text-cyan-400 transition-colors duration-300">{company}</p>
        <p className="text-gray-400 text-sm mb-4">{location}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 mt-auto">
            <span className="w-4 h-px bg-cyan-400 group-hover:bg-emerald-400 transition-colors"></span> View Project
          </a>
        )}
      </div>

      {/* Middle Column: Role & Responsibilities */}
      <div className="flex-[0.5] flex flex-col gap-4">
        <h3 className="font-bold text-lg md:text-xl text-white tracking-wide">{title}</h3>
        <ul className="list-none space-y-3 text-gray-300/90 text-sm md:text-base leading-relaxed">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex gap-3 items-start hover:text-white transition-colors duration-300">
              <span className="text-emerald-500 mt-1 flex-shrink-0 text-lg leading-none">▹</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Duration */}
      <div className="flex-[0.2] md:text-right md:justify-end flex items-start">
        <span className="text-emerald-300/80 font-medium px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm whitespace-nowrap shadow-inner">
          {duration}
        </span>
      </div>
    </div>
  );
};

export default wrappedCmp(ExperienceCard);
