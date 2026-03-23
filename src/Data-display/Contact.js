import wrappedCmp from '../util/Container-wrapper';
import { MdOutlineContentCopy } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';

const details = [
  ['Deepanshuhead200@gmail.com', <CiMail />],
  ['9914938953', <FaPhoneAlt />],
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 w-full max-w-5xl mx-auto z-10 relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6 tracking-tight">Get in Touch</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full px-6 justify-center items-stretch">
        {details.map((items, index) => {
          return <Header key={index} icon={items[1]} detail={items[0]} />;
        })}
      </div>
    </div>
  );
};

const Header = ({ icon, detail }) => {
  const [copied, setCopied] = useState(false);
  
  const copy = () => {
    navigator.clipboard.writeText(detail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div 
      onClick={copy}
      className="flex flex-col items-center justify-center text-center gap-5 p-8 glass-card group cursor-pointer flex-1 min-w-[280px] transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <div className="text-5xl text-emerald-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
        {icon}
      </div>
      
      <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300 w-full truncate px-2">{detail}</h3>
      
      <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 font-medium">
        {copied ? (
          <span className="text-emerald-400 animate-pulse">Copied to clipboard!</span>
        ) : (
          <>
            <MdOutlineContentCopy className="text-lg group-hover:text-emerald-400 transition-colors" />
            <span className="group-hover:text-emerald-400 transition-colors">Click to copy</span>
          </>
        )}
      </div>
    </div>
  );
};

export default wrappedCmp(Contact, true);
