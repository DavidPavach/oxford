import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { COMPANY, IMAGES } from "#/assests";
import Ticker from "./Ticker";

const FOOTER_COLUMNS = [
	{
		title: "Product",
		links: [
			{ label: "Crude oil", path: "/product" },
			{ label: "Natural gas", path: "/product" },
			{ label: "Motor fuels", path: "/product" },
			{ label: "Lubricants", path: "/product" },
		],
	},
	{
		title: "News",
		links: [
			{ label: "Press releases", path: "/news" },
			{ label: "Announcements", path: "/news" },
			{ label: "Industry insights", path: "/news" },
			{ label: "Publications", path: "/news" },
		],
	},
	{
		title: "Quality & Compliance",
		links: [
			{ label: "Quality assurance", path: "/quality" },
			{ label: "Certifications", path: "/quality" },
			{ label: "HSE", path: "/quality" },
			{ label: "Ethics & conduct", path: "/quality" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "Careers", path: "/careers" },
			{ label: "Contact", path: "/contact" },
			{ label: "Verify standing", path: "/verify" },
			{ label: "Corporate governance", path: "/quality" },
		],
	},
];

export default function Footer() {
	return (
		<>
			<Ticker />
			<footer className="relative overflow-hidden border-t border-border">
				{/* background image */}
				<div className="absolute inset-0">
					<img
						src={IMAGES.refineryDusk}
						alt="Refinery at dusk"
						className="w-full h-full object-fill"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background via-background/90 to-background/60" />
					<div className="absolute inset-0 bg-background/60" />
				</div>

				<div className="relative section-shell">
					<div className="section-shell-inner">
						{/* top */}
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-border/60">
							<div className="lg:col-span-4">
								<div className="flex flex-col leading-none">
									<span className="font-heading font-extrabold text-xl md:text-2xl xl:text-3xl tracking-[-0.04em]">
										OXFORD
									</span>
									<span className="font-mono text-[9px] md:text-[9.5px] xl:text-[10px] uppercase tracking-[0.34em] text-muted-foreground mt-1">
										Petroleum Corporation
									</span>
								</div>
								<p className="body-copy mt-6 max-w-sm">
									An engineering-led energy company advancing secure supply,
									resilient infrastructure and responsible growth across the
									energy value chain.
								</p>
								<div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono smallestText uppercase tracking-[0.16em] text-muted-foreground">
									<span>CBCA · {COMPANY.corporationNumber}</span>
									<span>Est. {COMPANY.incorporated.split(" ")[2]}</span>
								</div>
							</div>

							{/* link columns */}
							<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
								{FOOTER_COLUMNS.map((col) => (
									<div key={col.title}>
										<h4 className="font-mono smallestText uppercase tracking-[0.2em] text-muted-foreground mb-4">
											{col.title}
										</h4>
										<ul className="space-y-2.5">
											{col.links.map((link) => (
												<li key={link.label}>
													<Link
														to={link.path}
														className="smallText text-muted-foreground hover:text-accent transition-colors"
													>
														{link.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* bottom */}
						<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8">
							<div className="space-y-1">
								<p className="font-mono smallestText uppercase tracking-[0.16em] text-muted-foreground">
									Registered Office
								</p>
								<p className="text-sm text-muted-foreground max-w-md">
									{COMPANY.address}
								</p>
							</div>

							<button
								type="button"
								onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
								className="group flex items-center gap-3 cursor-pointer"
							>
								<span className="font-mono smallestText uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
									Back to top
								</span>
								<span className="relative grid place-items-center w-10 h-10 border border-border rounded-sm group-hover:border-accent transition-colors">
									<ArrowUp className="w-4 h-4 group-hover:text-accent transition-colors" />
								</span>
							</button>
						</div>

						<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 smallestText font-mono uppercase tracking-[0.14em]">
							<span>
								© {new Date().getFullYear()} Oxford Petroleum Corporation
							</span>
							<span>All rights reserved · CBCA governed since 1985</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
