import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "#/assests";
import MonolithNav from "./MonolithNav";

export default function Navbar() {
	const [open, setOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<header
				className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
					scrolled
						? "bg-background backdrop-blur-xl border-b border-border"
						: "bg-transparent border-b border-transparent"
				}`}
			>
				<div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
					<div className="flex items-center justify-between h-16 md:h-20">
						<Link to="/">
							<img
								src="/logo.png"
								alt="Logo"
								className="h-8 md:h-9 xl:h-10 rounded-md dark:hidden"
							/>
							<img
								src="/logo_dark.png"
								alt="Logo"
								className="h-8 md:h-9 xl:h-10 rounded-md dark:block hidden"
							/>
						</Link>

						<div className="hidden lg:flex items-center gap-9">
							{NAV_LINKS.map((l) => (
								<Link key={l.path} to={l.path} className="nav-link">
									{l.label}
								</Link>
							))}
						</div>

						<button
							type="button"
							onClick={() => setOpen(true)}
							aria-label="Open navigation"
							className="group flex items-center gap-2.5 cursor-pointer"
						>
							<span className="hidden sm:flex flex-col items-end gap-1.25">
								<span className="block h-0.5 w-7 bg-muted-foreground transition-all duration-300 group-hover:w-5" />
								<span className="block h-0.5 w-5 bg-muted-foreground transition-all duration-300 group-hover:w-7" />
							</span>
							<span className="grid place-items-center size-8 md:size-9 xl:size-10 text-muted-foreground border border-muted-foreground rounded-sm hover:border-accent hover:text-accent transition-colors">
								<Menu className="size-4 md:size-4.5 xl:size-5" />
							</span>
						</button>
					</div>
				</div>
			</header>

			<MonolithNav open={open} onClose={() => setOpen(false)} />
		</>
	);
}
