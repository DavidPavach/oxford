import SectionHeader from "#/components/SectionHeader";

const INDUSTRIES = [
	{
		title: "Power generation",
		desc: "Fuel supply for utilities and independent power producers.",
	},
	{
		title: "Transportation",
		desc: "Gasoline, diesel and distillates for road, rail and fleet operators.",
	},
	{
		title: "Manufacturing",
		desc: "Feedstock and process energy for industrial production.",
	},
	{
		title: "Aviation",
		desc: "Jet fuel supply coordination for commercial aviation.",
	},
	{
		title: "Maritime",
		desc: "Marine fuels and bunker supply for global shipping.",
	},
	{
		title: "Petrochemicals",
		desc: "NGLs and feedstock for downstream petrochemical processing.",
	},
	{
		title: "Residential & commercial",
		desc: "Natural gas and LPG for heating and commercial energy needs.",
	},
	{
		title: "Agriculture",
		desc: "Fuel and feedstock supply supporting agricultural operations.",
	},
];

export default function Industries() {
	return (
		<section className="relative section-shell border-b border-border overflow-hidden">
			<div className="absolute inset-0 tectonic-grid opacity-30 pointer-events-none" />
			<SectionHeader
				eyebrow="Market industries served"
				title="Powering the sectors that move economies."
				description="Our products and supply capabilities serve a diversified base of commercial and industrial customers across strategic markets."
			/>
			<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
				{INDUSTRIES.map((ind, i) => (
					<div
						key={ind.title}
						className="bg-card p-4 md:p-5 xl:p-6 group hover:bg-secondary/40 transition-colors"
					>
						<span className="font-mono smallestText text-muted-foreground">
							{String(i + 1).padStart(2, "0")}
						</span>
						<h3 className="mt-3 font-heading font-bold text-base md:text-lg xl:text-xl tracking-[-0.02em] group-hover:text-accent transition-colors">
							{ind.title}
						</h3>
						<p className="mt-2 smallText text-muted-foreground leading-relaxed">
							{ind.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
