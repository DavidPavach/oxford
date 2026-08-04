import { Link } from "@tanstack/react-router";
import { ArrowRight3 } from "iconsax-reactjs";
import Logo from "./Logo";

export default function Footer() {
	return (
		<footer
			id="contact"
			className="bg-white dark:bg-[#081F4D] px-4 sm:px-6 md:px-8 xl:px-10 py-16"
		>
			<div className="mx-auto max-w-screen-2xl">
				<div className="gap-12 grid lg:grid-cols-2 pb-16 border-foreground/50 border-b">
					<div>
						<p className="text-muted-foreground eyebrow">
							Start a conversation
						</p>
						<h2 className="mt-6 max-w-xl font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
							Building enduring energy partnerships.
						</h2>
					</div>
					<div className="flex items-end">
						<a
							href="mailto:corporate@oxfordpetroleumcorp.ca"
							className="flex justify-between items-center py-5 border-foreground/50 border-b w-full hover:text-destructive text-sm md:text-base xl:text-lg duration-200"
						>
							corporate@oxfordpetroleumcorp.ca <ArrowRight3 />
						</a>
					</div>
				</div>
				<div className="gap-10 grid md:grid-cols-4 py-10">
					<div className="md:col-span-2">
						<Logo />
						<p className="mt-5 max-w-xs text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
							Engineering-led energy development, infrastructure and market
							expertise.
						</p>
					</div>
					<div>
						<strong className="text-[10px] md:text-[11px] xl:text-xs uppercase tracking-[.18em]">
							Company
						</strong>
						<Link
							to="/company"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Corporate profile
						</Link>
						<Link
							to="/company"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Leadership
						</Link>
						<Link
							to="/company"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Governance
						</Link>
					</div>
					<div>
						<strong className="text-[10px] md:text-[11px] xl:text-xs uppercase tracking-[.18em]">
							Resources
						</strong>
						<Link
							to="/investors"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Investor relations
						</Link>
						<Link
							to="/sustainability"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Sustainability
						</Link>
						<Link
							to="/verify"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Verify documents
						</Link>
						<Link
							to="/contact"
							className="block mt-3 text-[11px] text-muted-foreground hover:text-foreground md:text-xs xl:text-sm duration-200"
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="flex sm:flex-row flex-col sm:justify-between gap-4 pt-6 border-white/15 border-t text-[11px] text-muted-foreground">
					<span>© {new Date().getFullYear()} Oxford Petroleum Corporation</span>
					<span>Privacy · Terms · Cookies · Accessibility</span>
				</div>
			</div>
		</footer>
	);
}
