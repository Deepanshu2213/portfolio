import classNames from 'classnames';
import wrappedCmp from '../util/Container-wrapper';
import ResizeContext from '../Hooks/use-resize-hook';
const ExperienceCard = ({ data, className }) => {
  const { width } = ResizeContext();
  const clss = classNames(
    'flex justify-center gap-2 m-5 opacity-[0.8]',
    className
  );
  const { title, company, location, duration, responsibilities } = data;
  if (width <= 800) {
    return MobileContainer(
      title,
      company,
      location,
      duration,
      responsibilities
    );
  }
  return (
    <div className={clss}>
      <div className="flex-[0.4] justify-items-center">
        <p className="text-green-400 font-extrabold text-lg">{company}</p>
      </div>
      {ContentContainer(title + ' ' + location, responsibilities)}
      <div className="flex-[0.5] justify-items-center">
        <p className="text-blue-400">{duration}</p>
      </div>
    </div>
  );
};
const MobileContainer = (
  title,
  company,
  location,
  duration,
  responsibilities
) => {
  return (
    <div className={'flex flex-col gap-5 m-5'}>
      <div className="flex-[0.4]">
        <p className="text-green-400 text-lg text-center">{company}</p>
      </div>
      <div className="flex-[0.5]">
        <p className="text-blue-400 font-bold text-center">{duration}</p>
      </div>
      {ContentContainer(title + ' ' + location, responsibilities)}
    </div>
  );
};
export const ContentContainer = (heading, info, cls = 'flex-[1]') => {
  return (
    <div className={cls}>
      <h2 className="font-bold">{heading}</h2>
      {bulletPoints(info)}
    </div>
  );
};

const bulletPoints = (data) => {
  return (
    <ul className="list-disc pl-5 text-white">
      {data.map((item, index) => (
        <li
          key={index}
          className="m-2 p-1"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))}
    </ul>
  );
};
export default wrappedCmp(ExperienceCard, false, 'rounded-xl custom-shadow');
