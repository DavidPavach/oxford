import { Link } from "@tanstack/react-router";

function Logo() {
	return (
		<Link to="/">
			<img
				src="/horizontal_logo.png"
				alt="Oxford Petroleum"
				className="dark:hidden w-40 h-12"
			/>
			<img
				src="/horizontal_dark_logo.png"
				alt="Oxford Petroleum"
				className="hidden dark:block w-40 h-12"
			/>
		</Link>
	);
}

export default Logo;
