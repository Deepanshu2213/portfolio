import Tag from './Tag';
import wrappedCmp from '../util/Container-wrapper';
import { ContentContainer } from './ExperienceCard';
import classNames from 'classnames';
const ProjectCard = ({ data, className }) => {
  const cls = classNames(
    'w-[80vw] flex m-[2rem] gap-4 max-[800px]:flex-col max-[800px]:w-[70vw]',
    className
  );
  return (
    <div className={cls}>
      <LeftPanel data={data} />
      <RightPanel data={data} />
    </div>
  );
};

const LeftPanel = () => {
  return (
    <div className="justify-items-center flex-[1] w-full content-center">
      <img
        className="object-fit"
        src="/logo.png"
        alt="something went wrong"
      ></img>
    </div>
  );
};

const RightPanel = ({ data }) => {
  const { title, technologies, link, features } = data;
  return (
    <div className="flex flex-col flex-[1] w-full gap-4">
      {ContentContainer(title, features, '')}
      <TechnologiesTag technologies={technologies} />
    </div>
  );
};

const TechnologiesTag = ({ technologies }) => {
  const tech = technologies.map((txt) => <Tag title={txt} />);
  return <div className="flex gap-3 flex-wrap m-3">{tech}</div>;
};

export default wrappedCmp(ProjectCard, true, 'rounded-xl custom-shadow');
