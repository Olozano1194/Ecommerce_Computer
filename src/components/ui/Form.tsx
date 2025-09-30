const Form = ({children, ...props}: React.FormHTMLAttributes<HTMLFormElement>) => {
    return (
        <form 
            className="w-full max-w-md flex flex-col p-8 bg-gray-700 rounded-lg shadow-lg" 
            {...props}
        >        
            {children}
        </form>
    );
};
export default Form;