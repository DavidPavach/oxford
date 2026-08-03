const Header = ({
	title,
	subheading,
}: {
	title: string;
	subheading: string;
}) => {
	return (
		<main className="mb-8">
			<h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
				{title}
			</h1>
			<h2 className="text-muted-foreground">{subheading}</h2>
		</main>
	);
};

export default Header;
