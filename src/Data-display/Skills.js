import wrappedCmp from '../util/Container-wrapper';
const skill = () => {
  let images = [
    'typescript', 'js', 'react', 'tailwind', 'node', 'express', 'mongo', 'PostgresSQL', 'redux', 'git',
  ];
  const holder = images.map((name) => {
    return (
      <div key={name} className="flex flex-col items-center justify-center p-6 glass-card group cursor-pointer w-[130px] h-[130px] md:w-[150px] md:h-[150px]">
        <img
          src={'/' + name + '.png'}
          alt={name}
          className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-300 mb-3"
        />
        <span className="text-sm font-medium text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 capitalize">{name}</span>
      </div>
    );
  });
  return (
    <div className="flex flex-col justify-center items-center py-20 w-full max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 tracking-tight">My Skills</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap px-4 max-w-5xl mx-auto">
        {holder}
      </div>
    </div>
  );
};
export default wrappedCmp(skill);
