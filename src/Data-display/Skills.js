import Tag from "../Components/Tag";
import wrappedCmp from "../util/Container-wrapper";
const skill = () => {
  let images = [
    "mongo",
    "node",
    "tailwind",
    "PostgresSQL",
    "react",
    "git",
    "js",
  ];
  const holder = images.map((name) => {
    return (
<div className="flex-1 justify-items-center">
  <img
    src={"/" + name + ".png"}
    alt={name}
    className="w-20 h-20 object-contain rounded-md min-w-20"
  />
</div>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <Tag title={"Skills"} className="m-[3%]"/>
      <p>The skills, tools and technologies I am really good at:</p>
      <br/>
      <div className="flex justify-between gap-10 flex-wrap	m-[5%]">{holder}</div>
    </div>
  );
};
export default wrappedCmp(skill);
