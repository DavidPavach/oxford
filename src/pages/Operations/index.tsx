import { motion } from "framer-motion";
import { ArrowRight3, Flash, Global, Layer, Truck } from "iconsax-reactjs";
import { Drill, Flame } from "lucide-react";
import PageHero from "#/components/PageHero";

const segments = [
	{
		icon: Drill,
		label: "Exploration & Production",
		tag: "01",
		body: "Oxford Petroleum develops conventional and unconventional hydrocarbon assets using advanced subsurface mapping, seismic analysis and reservoir engineering. Our exploration programme prioritises high-return prospects with long reserve-life potential.",
		highlights: [
			"Seismic interpretation & basin analysis",
			"Conventional oil & gas production",
			"Reservoir management",
			"Drilling operations",
		],
	},
	{
		icon: Flame,
		label: "Trading & Supply",
		tag: "02",
		body: "Our trading desk manages physical and commercial exposure across crude, condensate and refined products. We operate with integrated logistics capability to ensure supply continuity, optimize netback and manage price risk.",
		highlights: [
			"Crude oil and condensate trading",
			"Market risk management",
			"Supply chain optimisation",
			"Derivatives and hedging",
		],
	},
	{
		icon: Layer,
		label: "Infrastructure",
		tag: "03",
		body: "Oxford infrastructure portfolio underpins energy security across the supply chain. Strategic pipelines, storage terminals and interconnected gathering systems are engineered for reliability with dedicated operational teams.",
		highlights: [
			"Pipeline networks",
			"Storage terminals",
			"Gathering and compression",
			"Asset integrity management",
		],
	},
	{
		icon: Flash,
		label: "Natural Gas & Refining",
		tag: "04",
		body: "Our processing and refining capability converts raw production into value-added products. Facilities are optimised for energy efficiency and product slate flexibility, aligned with evolving regulatory requirements.",
		highlights: [
			"Gas processing",
			"NGL separation and fractionation",
			"Refinery operations",
			"Product quality management",
		],
	},
	{
		icon: Truck,
		label: "Transportation",
		tag: "05",
		body: "Logistics and transportation form the critical link between production and market. Oxford manages truck, rail and marine logistics pathways to ensure product reaches end-customers safely, on-time and in compliance.",
		highlights: [
			"Road and rail logistics",
			"Marine transport coordination",
			"Regulatory compliance",
			"Fleet management",
		],
	},
	{
		icon: Global,
		label: "Global Operations",
		tag: "06",
		body: "Oxford Petroleum registered base in Calgary, Alberta positions us within one of the world's foremost energy jurisdictions. Our operational network maintains consistent standards across every asset, underpinned by CBCA governance.",
		highlights: [
			"Registered: Calgary, Alberta, Canada",
			"Corporation No. 184564-1",
			"CBCA-governed since 1985",
			"18 strategic markets",
		],
	},
];

export default function Operations() {
	return (
		<main>
			<PageHero
				eyebrow="Business segments"
				title="Every link in the energy chain."
				subtitle="Six integrated business segments form Oxford Petroleum's operational backbone — from subsurface to end-market, engineered for reliability and precision."
			/>

			<section>
				<div className="relative min-h-[56vh] overflow-hidden">
					<img
						src="/operations.png"
						alt="Oxford Petroleum refinery and pipeline infrastructure"
						className="absolute inset-0 opacity-40 w-full h-full"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-[#05070C] via-[#05070C]/60 to-transparent" />
					<div className="relative mx-auto px-4 sm:px-6 md:px-8 xl:px-10 py-24 max-w-screen-2xl">
						<div className="gap-8 grid md:grid-cols-4">
							{[
								["40+", "Years of operations"],
								["6", "Integrated segments"],
								["99.8%", "Asset uptime"],
								["18", "Markets served"],
							].map(([v, l]) => (
								<div key={l} className="pl-5 border-destructive border-l-2">
									<strong className="font-medium text-3xl md:text-4xl xl:text-5xl">
										{v}
									</strong>
									<p className="mt-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
										{l}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
						{segments.map((seg, i) => (
							<motion.article
								key={seg.tag}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.07 }}
								viewport={{ once: true }}
								className="hover:shadow-[0_16px_60px_rgba(8,31,77,.1)] p-4 md:p-6 xl:p-8 border border-border rounded-xl transition-all hover:-translate-y-1"
							>
								<div className="flex justify-between items-start mb-6">
									<div className="flex justify-center items-center bg-[#081F4D] dark:bg-[#0E1628] rounded-lg size-8 md:size-9 xl:size-10">
										<seg.icon className="size-4 md:size-4.5 xl:size-5 text-white" />
									</div>
									<span className="font-mono text-[10px] text-destructive md:text-[11px] xl:text-xs">
										{seg.tag}
									</span>
								</div>
								<strong className="font-medium text-base md:text-lg xl:text-xl">
									{seg.label}
								</strong>
								<p className="mt-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
									{seg.body}
								</p>
								<ul className="space-y-2 mt-6 pt-5 border-border border-t">
									{seg.highlights.map((h) => (
										<li
											key={h}
											className="flex items-center gap-2 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs"
										>
											<span className="bg-destructive rounded-full size-1" />
											{h}
										</li>
									))}
								</ul>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-[#081F4D] text-white section-shell">
				<div className="items-center gap-10 grid lg:grid-cols-2 mx-auto max-w-screen-2xl">
					<div>
						<p className="text-muted-foreground eyebrow">
							Engineering & Innovation
						</p>
						<h2 className="mt-5 section-title">
							Technology that advances the craft.
						</h2>
						<p className="mt-6 text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
							From subsurface AI interpretation to digital twin infrastructure
							monitoring and predictive maintenance systems, Oxford Petroleum
							applies engineering rigour to every aspect of the operation.
						</p>
						<ul className="space-y-3 mt-8 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
							{[
								"Digital twin asset modelling",
								"AI-assisted seismic interpretation",
								"Remote infrastructure monitoring",
								"Predictive maintenance analytics",
								"Real-time trading risk systems",
							].map((t) => (
								<li key={t} className="flex gap-3">
									<span className="text-destructive">
										<ArrowRight3 className="size-3 md:size-3.5 xl:size-4" />
									</span>
									{t}
								</li>
							))}
						</ul>
					</div>
					<img
						src="/operations_1.png"
						alt="Precision engineering and technology"
						className="rounded-xl min-h-screen-2xl"
					/>
				</div>
			</section>
		</main>
	);
}
