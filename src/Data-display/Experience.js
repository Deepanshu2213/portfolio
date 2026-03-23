import wrappedCmp from '../util/Container-wrapper';
import ExperienceCard from '../Components/ExperienceCard';
import { experience } from '../Data/experience';
const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 tracking-tight">Experience</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full px-4 md:px-12 max-w-5xl mx-auto">
        {CardHolder(experience)}
      </div>
    </div>
  );
};
const CardHolder = (experience) => {
  return experience.map((exp) => {
    return <ExperienceCard data={exp} />;
  });
};
export default wrappedCmp(Experience, true);
