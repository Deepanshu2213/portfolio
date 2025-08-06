import classNames from "classnames"
const Container = ({children , className, light}) =>{
    const clss = classNames(
        "bg-gray-950 text-white",
        light ? "bg-gray-900": "",
        className ? className : "" 
    ) 
    return (
        <div className={clss}>
            {children}
        </div>
    )
}
export default Container;