import Footer from "#/components/Footer";
import NavBar from "#/components/NavBar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col min-h-dvh">
			<NavBar />
			<span className="flex-1">{children}</span>
			<Footer />
		</main>
	);
};

export default HomeLayout;
