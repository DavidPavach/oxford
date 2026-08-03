import { Link } from "@tanstack/react-router";
import { Send2 } from "iconsax-reactjs";

const units = [
	[
		"01",
		"Exploration & Production",
		"Disciplined resource development informed by subsurface intelligence.",
	],
	[
		"02",
		"Trading & Supply",
		"Integrated market access, logistics and risk management.",
	],
	[
		"03",
		"Infrastructure",
		"Resilient pipelines, terminals and strategic storage assets.",
	],
	[
		"04",
		"Gas & Refining",
		"Efficient processing systems built for a changing energy mix.",
	],
];
export default function Operations() {
	return (
		<section id="operations" className="section-shell">
			<div className="flex justify-between items-end mb-14">
				<div>
					<p className="text-muted-foreground eyebrow">
						Integrated capabilities
					</p>
					<h2 className="mt-5 max-w-3xl section-title">
						One system. Every link in the energy chain.
					</h2>
				</div>
				<span className="hidden md:block text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
					01 — 04
				</span>
			</div>
			<div className="grid lg:grid-cols-2 border border-border rounded-[20px] overflow-hidden">
				<div className="relative min-h-110">
					<img
						src="/operations.png"
						alt="Integrated refinery and pipeline infrastructure"
						className="absolute inset-0 w-full h-full"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
				</div>
				<div>
					{units.map(([n, title, copy]) => (
						<Link
							to="/operations"
							key={n}
							className="group gap-3 grid grid-cols-[40px_1fr_auto] hover:bg-primary/10 p-4 md:p-5 xl:p-6 border-border last:border-0 border-b transition-colors"
						>
							<span className="font-mono text-[10px] text-destructive md:text-[11px] xl:text-xs">
								{n}
							</span>
							<span>
								<strong className="font-medium text-sm md:text-base xl:text-lg">
									{title}
								</strong>
								<p className="mt-2 max-w-md text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
									{copy}
								</p>
							</span>
							<Send2 className="opacity-40 group-hover:opacity-100 size-4 md:size-4.5 xl:size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
