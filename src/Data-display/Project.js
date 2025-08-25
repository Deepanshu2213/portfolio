import { project } from '../Data/project';
import Tag from '../Components/Tag';
import ProjectCard from '../Components/ProjectCard';
import wrappedCmp from '../util/Container-wrapper';

const Project = () => {
  const cards = project.map((data) => (
    <ProjectCard data={data} className="opacity-[0.8]" />
  ));
  return (
    <div className="flex flex-col justify-center items-center gap-[2rem] mb-[6%]">
      <Tag title="Projects" className="mt-[5vh]" />
      <p>Some of the noteworthy projects I have built:</p>
      {cards}
    </div>
  );
};

export default wrappedCmp(Project);
