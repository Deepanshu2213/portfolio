import Tag from '../Components/Tag';
import wrappedCmp from '../util/Container-wrapper';
import ExperienceCard from '../Components/ExperienceCard';
import { experience } from '../Data/experience';
const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-[5rem]">
      <Tag className="mt-[5vh]" title={'Experience'} />
      <p className="m-[3%] max-[600px]:m-[2rem] text-center">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col gap-[3rem] h-[80%] w-[80%] m-[1rem]">
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
