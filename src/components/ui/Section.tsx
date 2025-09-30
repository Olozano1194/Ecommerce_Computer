const Main = ({children, ...props}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <section
            className="w-full min-h-screen flex justify-center items-center p-4" 
            {...props}
        >
            {children}
        </section>
    );
};
export default Main;