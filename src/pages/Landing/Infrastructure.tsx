import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

const ASSETS = [
	{
		value: "Pipeline networks",
		label:
			"Interconnected gathering and transmission systems engineered for reliability.",
	},
	{
		value: "Storage terminals",
		label:
			"Strategic crude and product storage positioned across key demand corridors.",
	},
	{
		value: "Gathering & compression",
		label: "Field-level infrastructure that connects production to processing.",
	},
	{
		value: "Asset integrity",
		label:
			"Continuous monitoring, inspection and maintenance to protect every asset.",
	},
];

export default function Infrastructure() {
	return (
		<section className="relative section-shell border-b border-border">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<div>
					<SectionHeader
						eyebrow="Infrastructure & facilities"
						title="The backbone of energy security."
					/>
					<p className="body-copy mt-6 max-w-xl">
						Resilient pipelines, terminals and gathering systems form the
						physical backbone of our operations — engineered for reliability
						with dedicated operational teams.
					</p>
					<div className="mt-9 space-y-px bg-border border border-border">
						{ASSETS.map((a) => (
							<div
								key={a.value}
								className="bg-card p-5 md:p-6 flex items-start gap-4"
							>
								<span className="status-dot shrink-0 mt-2" />
								<div>
									<h3 className="font-heading font-bold text-base md:text-lg xl:text-xl">
										{a.value}
									</h3>
									<p className="mt-1 smallText text-muted-foreground leading-relaxed">
										{a.label}
									</p>
								</div>
							</div>
						))}
					</div>
					<Link to="/quality" className="premium-button-ghost mt-8">
						Quality & compliance
						<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
					</Link>
				</div>
				<div className="relative aspect-4/3 rounded-sm overflow-hidden border border-border">
					<img
						src={IMAGES.desertPipeline}
						alt="Pipeline infrastructure"
						className="w-full h-full"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
				</div>
			</div>
		</section>
	);
}
