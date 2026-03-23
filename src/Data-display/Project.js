import { project } from '../Data/project';
import ProjectCard from '../Components/ProjectCard';
import wrappedCmp from '../util/Container-wrapper';

const Project = () => {
  const cards = project.map((data, index) => (
    <ProjectCard key={index} data={data} />
  ));
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 tracking-tight">Projects</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex flex-col gap-12 w-full px-4 md:px-12 max-w-5xl mx-auto">
        {cards}
      </div>
    </div>
  );
};

export default wrappedCmp(Project);
