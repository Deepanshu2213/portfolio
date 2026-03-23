import wrappedCmp from '../util/Container-wrapper';
import classNames from 'classnames';
const ProjectCard = ({ data, className }) => {
  const cls = classNames(
    'glass-card flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 group overflow-hidden w-full',
    className,
  );
  return (
    <div className={cls}>
      <LeftPanel data={data} />
      <RightPanel data={data} />
    </div>
  );
};

const LeftPanel = ({ data }) => {
  return (
    <div className="flex-[1] w-full rounded-xl overflow-hidden bg-white/5 border border-white/10 relative aspect-video">
      <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
      <img
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
        src={data.imgSrc}
        alt="Project Screenshot"
        loading="lazy"
      ></img>
    </div>
  );
};

const RightPanel = ({ data }) => {
  const { title, technologies, link, features } = data;
  return (
    <div className="flex flex-col flex-[1.5] w-full justify-center">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-emerald-400 text-sm font-medium transition-colors duration-300 flex items-center gap-1 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20 whitespace-nowrap">
            View Project ↗
          </a>
        )}
      </div>
      <ul className="list-none space-y-3 text-gray-300/90 text-sm md:text-base leading-relaxed mb-6">
        {features.map((item, index) => (
          <li key={index} className="flex gap-3 items-start hover:text-white transition-colors duration-300">
            <span className="text-emerald-500 mt-1 flex-shrink-0 text-lg leading-none">▹</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
      <TechnologiesTag technologies={technologies} />
    </div>
  );
};

const TechnologiesTag = ({ technologies }) => {
  const tech = technologies.map((txt, index) => (
    <span key={index} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm rounded-full font-medium">
      {txt}
    </span>
  ));
  return <div className="flex gap-2 flex-wrap mt-4">{tech}</div>;
};

export default wrappedCmp(
  ProjectCard,
  true,
  'rounded-xl custom-shadow',
  'bg-opacity-90',
);
