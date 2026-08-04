import { Link } from "@tanstack/react-router";
import { CloseSquare, Element3 } from "iconsax-reactjs";
import { useState } from "react";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
	["Company", "/company"],
	["Operations", "/operations"],
	["Investors", "/investors"],
	["Sustainability", "/sustainability"],
	["Contact", "/contact"],
	["Verify", "/verify"],
];

export default function NavBar() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header className="top-0 z-10 fixed inset-x-0 px-4 pt-4">
			<div className="flex justify-between items-center bg-white/90 dark:bg-[#08101f]/90 shadow-[0_8px_40px_rgba(8,31,77,.02)] backdrop-blur-xl mx-auto px-4 py-3 border border-border rounded-xl max-w-screen-2xl">
				<Logo />
				<nav className="hidden lg:flex items-center gap-6">
					{links.map(([label, path]) => (
						<Link
							activeProps={{ className: "text-destructive" }}
							key={path}
							to={path}
							className={`nav-link`}
						>
							{label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-1">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="lg:hidden icon-button"
						aria-label="Open menu"
					>
						{open ? (
							<CloseSquare className="size-4 md:size-4.5" />
						) : (
							<Element3 className="size-4 md:size-4.5" />
						)}
					</button>
				</div>
			</div>
			{open && (
				<nav className="lg:hidden grid bg-white dark:bg-[#0E1628] shadow mx-auto mt-2 p-4 rounded-xl max-w-screen-2xl">
					{links.map(([label, path]) => (
						<Link
							activeProps={{ className: "text-destructive" }}
							onClick={() => setOpen(false)}
							key={path}
							to={path}
							className="py-3 border-slate-100 dark:border-white/10 border-b font-semibold hover:text-destructive text-xs md:text-sm duration-200"
						>
							{label}
						</Link>
					))}
				</nav>
			)}
		</header>
	);
}
