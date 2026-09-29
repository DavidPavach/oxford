import { Link } from "@tanstack/react-router";
import { Send2 } from "iconsax-reactjs";
import { CAPABILITIES, IMAGES } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

export default function Capabilities() {
	return (
		<section className="relative section-shell border-b border-border overflow-hidden">
			<div className="absolute inset-0 tectonic-grid opacity-30 pointer-events-none" />
			<div className="relative">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
					<SectionHeader
						eyebrow="Integrated capabilities"
						title="One system. Every link in the energy chain."
					/>
					<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground shrink-0">
						01 — 04
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
					{CAPABILITIES.map((c) => (
						<Link key={c.num} to="/product" className="group monolith-card">
							<div className="flex items-start justify-between">
								<span className="font-mono smallestText text-muted-foreground">
									{c.num}
								</span>
								<Send2 className="size-4 md:size-4.5 xl:size-5 text-muted-foreground group-hover:text-accent transition-colors" />
							</div>
							<div className="mt-auto">
								<h3 className="font-heading font-bold text-lg md:text-xl xl:text-2xl tracking-[-0.03em] leading-tight group-hover:text-accent transition-colors">
									{c.title}
								</h3>
								<p className="mt-3 smallText text-muted-foreground leading-relaxed">
									{c.desc}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-8 overflow-hidden rounded-sm border border-border">
					<img
						src={IMAGES.operations}
						alt="Integrated refinery and pipeline infrastructure"
						className="w-full h-65 md:h-80 xl:h-95"
					/>
				</div>
			</div>
		</section>
	);
}
