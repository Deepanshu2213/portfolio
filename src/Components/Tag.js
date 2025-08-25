import classNames from "classnames";
const Tag = ({title,className})=>{
    const css = classNames(
        "bg-gray-600 p-2 text-sm br rounded-3xl text-sm pl-5 pr-5",
        className
    )
    return (
        <div className={css}>
            <p>{title}</p>
        </div>
    )
}
export default Tag;
