import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, X } from "lucide-react";
import { COMPANY, IMAGES, NAV_LINKS } from "#/assests";
import { ThemeToggle } from "./ThemeToggle";

export default function MonolithNav({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const location = useLocation();

	return (
		<>
			{/* backdrop */}
			<button
				type="button"
				onClick={onClose}
				className={`fixed inset-0 z-60 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			/>

			{/* panel */}
			<aside
				className={`fixed top-0 right-0 z-70 h-full w-full sm:w-115 lg:w-[42%] max-w-160 bg-background text-foreground border-l border-sidebar-border transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* top bar */}
				<div className="flex items-center justify-between px-4 md:px-8 xl:px-10 sm:px-6 h-16 md:h-18 xl:h-20 border-b border-sidebar-border">
					<span className="font-mono smallestText uppercase tracking-[0.24em]">
						Navigation
					</span>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close navigation"
						className="grid place-items-center size-8 md:size-9 xl:size-10 border border-sidebar-border rounded-sm hover:border-accent hover:text-accent transition-colors cursor-pointer"
					>
						<X className="size-4 md:size-4.5 xl:size-5" />
					</button>
				</div>

				{/* links */}
				<nav className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 xl:px-10 py-8">
					<ul className="space-y-1">
						<li>
							<Link
								to="/"
								onClick={onClose}
								className="group flex items-baseline justify-between border-b border-sidebar-border py-4"
							>
								<span className="font-mono smallestText ">00</span>
								<span className="font-heading font-bold text-xl md:text-2xl xl:text-3xl tracking-[-0.03em] group-hover:text-accent transition-colors">
									Home
								</span>
								<ArrowUpRight className="size-4 md:size-4.5 xl:size-5 group-hover:text-accent transition-colors" />
							</Link>
						</li>
						{NAV_LINKS.map((l) => {
							const active = location.pathname === l.path;
							return (
								<li key={l.path}>
									<Link
										to={l.path}
										onClick={onClose}
										className="group flex items-baseline justify-between border-b border-sidebar-border py-4"
									>
										<span className="font-mono smallestText">{l.index}</span>
										<span
											className={`font-heading font-bold text-xl md:text-2xl xl:text-3xl tracking-[-0.03em] transition-colors ${
												active ? "text-accent" : "group-hover:text-accent"
											}`}
										>
											{l.label}
										</span>
										<ArrowUpRight className="size-4 md:size-4.5 xl:size-5 group-hover:text-accent transition-colors" />
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* current project thumbnail + contact */}
				<div className="px-6 sm:px-10 py-8 border-t border-sidebar-border space-y-6">
					<div className="flex items-center gap-4">
						<div className="relative w-24 h-16 shrink-0 overflow-hidden rounded-sm border border-sidebar-border">
							<img
								src={IMAGES.refineryDusk}
								alt="Current project"
								className="w-full h-full object-fill"
							/>
							<span className="absolute top-1 left-1 flex items-center gap-1 font-mono text-[7px] md:text-[7.5px] xl:text-[8px] uppercase tracking-wider">
								<span className="status-dot" /> Live
							</span>
						</div>
						<div className="min-w-0">
							<p className="font-mono text-[8px] md:text-[8.5px] xl:text-[9px] uppercase tracking-[0.2em]">
								Registered Office
							</p>
							<p className="font-heading font-semibold smallText truncate">
								Calgary, Alberta
							</p>
							<p className="font-mono smallestText">
								Corp No. {COMPANY.corporationNumber}
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-2">
						<a
							href={`tel:${COMPANY.phone}`}
							className="flex items-center gap-2.5 smallestText hover:text-accent transition-colors"
						>
							<Phone className="size-3 md:size-3.5 xl:size-4" /> {COMPANY.phone}
						</a>
						<a
							href={`mailto:${COMPANY.email}`}
							className="flex items-center gap-2.5 smallestText hover:text-accent transition-colors"
						>
							<Mail className="size-3 md:size-3.5 xl:size-4" /> {COMPANY.email}
						</a>
						<span className="flex items-center gap-2.5 smallestText">
							<MapPin className="size-3 md:size-3.5 xl:size-4" /> Calgary, AB,
							Canada
						</span>
					</div>
					<div className="flex gap-x-2 items-center">
						<ThemeToggle />
						<p className="smallText">Toggle Mode</p>
					</div>
				</div>
			</aside>
		</>
	);
}
