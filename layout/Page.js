import NavBar from "./NavBar";

const Page = ({ children }) => {
	return (
        <>
            <NavBar />
            <main className="">
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
};

export default Page;