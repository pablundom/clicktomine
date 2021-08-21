import "./Button.css";


export const Button = ({children, onClick,...props}) => {

    return (
        <button onClick={onClick} className="button" {...props}>
            {children}
        </button>
    )
}