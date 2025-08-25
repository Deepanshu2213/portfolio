import wrappedCmp from '../util/Container-wrapper';
import Tag from '../Components/Tag';
import { MdOutlineContentCopy } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center m-[2%] gap-4 min-h-[60vh]">
      <Tag title={'Get in touch'} />
      <p className="w-[40%] max-[600px]:w-full text-center m-4">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <Header />
      <Header />
    </div>
  );
};

const Header = ({}) => {
  return (
    <div className="flex text-xl items-center gap-3">
      <CiMail />
      <h1>Deepanshuhead200@gmail.com</h1>
      <MdOutlineContentCopy />
    </div>
  );
};
export default wrappedCmp(Contact, true);
