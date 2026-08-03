import { Link } from "@tanstack/react-router";
import { CloseSquare, Element3, SearchNormal } from "iconsax-reactjs";
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
	const [search, setSearch] = useState<boolean>(false);

	return (
		<>
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
						<button
							type="button"
							onClick={() => setSearch(true)}
							className="icon-button"
							aria-label="Search"
						>
							<SearchNormal size={17} />
						</button>
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
			{search && (
				<div
					className="z-11 fixed inset-0 flex justify-center items-start bg-[#05070C]/80 backdrop-blur-xl px-4 pt-28"
					role="dialog"
					aria-modal="true"
				>
					<div className="bg-white dark:bg-[#0E1628] shadow-lg p-3 rounded-2xl w-full max-w-2xl">
						<div className="flex items-center gap-3">
							<SearchNormal className="ml-3 size-4 md:size-4.5 xl:size-5 text-slate-400" />
							<input
								className="flex-1 bg-transparent outline-none h-14 text-sm md:text-base xl:text-lg"
								placeholder="Search operations, reports, news…"
							/>
							<button
								type="button"
								onClick={() => setSearch(false)}
								className="icon-button"
							>
								<CloseSquare className="size-4 md:size-4.5 xl:size-5" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
