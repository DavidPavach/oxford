import { motion } from "framer-motion";
import { Global, Profile2User, ShieldTick } from "iconsax-reactjs";
import { Leaf } from "lucide-react";
import PageHero from "#/components/PageHero";

const pillars = [
	{
		icon: Leaf,
		tag: "Environment",
		title: "Responsible resource development",
		body: "Oxford Petroleum integrates environmental stewardship into every stage of asset development. We commit to emissions monitoring, habitat protection and responsible water management across our operations in Alberta and beyond.",
	},
	{
		icon: ShieldTick,
		tag: "Safety",
		title: "Zero tolerance for preventable harm",
		body: "Safety performance is non-negotiable. Our health, safety and environment programme enforces rigorous standards across all sites — from subsurface to surface operations — with mandatory incident reporting and continuous improvement frameworks.",
	},
	{
		icon: Profile2User,
		tag: "Community",
		title: "Long-term community partnerships",
		body: "As a Calgary-based enterprise, Oxford Petroleum is embedded in the communities where we operate. We invest in local employment, indigenous consultation and community infrastructure to ensure our presence generates durable social benefit.",
	},
	{
		icon: Global,
		tag: "Governance",
		title: "Transparent and accountable leadership",
		body: "Oxford Petroleum operates under the Canada Business Corporations Act with full regulatory compliance. Annual filings, directors registers and share structure disclosures are maintained current and publicly accessible through Corporations Canada.",
	},
];

const commitments = [
	[
		"Emissions monitoring",
		"Systematic tracking of direct and indirect emissions across all operational sites.",
	],
	[
		"Continuous environmental auditing",
		"Third-party audit cycles across environmental, safety and governance domains.",
	],
	[
		"Responsible water stewardship",
		"Water use minimisation, recycling programmes and responsible disposal.",
	],
	[
		"Indigenous consultation",
		"Proactive engagement with Indigenous communities and land rights holders.",
	],
	[
		"Workforce development",
		"Local employment priority and long-term career development for site communities.",
	],
	[
		"Regulatory compliance",
		"Full CBCA compliance — annual filings, governance disclosures, directors register.",
	],
];

export default function Sustainability() {
	return (
		<main>
			<PageHero
				eyebrow="Responsible energy"
				title="Performance measured beyond production."
				subtitle="At Oxford Petroleum, long-term value demands long-term thinking. Environmental stewardship, community accountability and transparent governance are operational obligations, not optional additions."
			/>

			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-6 grid md:grid-cols-2">
						{pillars.map((p, i) => (
							<motion.article
								key={p.tag}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className="p-4 md:p-6 xl:p-8 border border-border rounded-xl"
							>
								<div className="flex justify-center items-center bg-[#081F4D] dark:bg-[#0E1628] mb-6 rounded-lg size-10 md:size-11 xl:size-12">
									<p.icon className="size-5 md:size-5.5 xl:size-6 text-white" />
								</div>
								<p className="mb-2 font-bold text-[9px] text-destructive md:text-[9.5px] xl:text-[10px] tracking-[.18em]">
									{p.tag}
								</p>
								<strong className="font-medium text-base md:text-lg xl:text-xl">
									{p.title}
								</strong>
								<p className="mt-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
									{p.body}
								</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className="section-shell">
				<div className="items-center gap-14 grid lg:grid-cols-2 mx-auto max-w-screen-2xl">
					<div>
						<p className="eyebrow">
							<Leaf className="size-3 md:size-3.5 xl:size-4" /> ESG commitments
						</p>
						<h2 className="mt-5 max-w-lg section-title">
							Measured. Reported. Improved.
						</h2>
						<div className="space-y-5 mt-12">
							{commitments.map(([title, desc]) => (
								<div
									key={title}
									className="flex gap-5 pb-5 last:pb-0 border-border last:border-0 border-b"
								>
									<span className="bg-destructive mt-1.5 rounded-full size-1.5 shrink-0" />
									<div>
										<strong className="font-semibold text-[11px] md:text-xs xl:text-sm">
											{title}
										</strong>
										<p className="mt-0.5 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
											{desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<img
						src="/sustainability.png"
						alt="Integrated lower-carbon energy infrastructure"
						className="rounded-xl min-h-125"
					/>
				</div>
			</section>

			<section className="bg-[#081F4D] text-white section-shell">
				<div className="mx-auto max-w-screen-2xl text-center">
					<p className="justify-center text-white/50 eyebrow">
						CBCA Governance
					</p>
					<h2 className="mx-auto mt-5 max-w-3xl section-title">
						Accountable to the standard every stakeholder deserves.
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-white/60 text-sm md:text-base xl:text-lg leading-relaxed">
						Oxford Petroleum Corporation has maintained continuous annual filing
						compliance with Corporations Canada since incorporation in 1985. Our
						governance documentation — from the Certificate of Incorporation to
						the most recent directors register — is publicly accessible and
						fully auditable.
					</p>
					<div className="gap-6 grid md:grid-cols-3 mt-14">
						{[
							["1985", "Year of incorporation under the CBCA"],
							["2026", "Most recent annual filing — current"],
							["Active", "Standing with Corporations Canada"],
						].map(([v, l]) => (
							<div
								key={l}
								className="p-4 md:p-6 xl:p-8 border border-white/15 rounded-xl"
							>
								<strong className="font-medium text-2xl md:text-3xl xl:text-4xl">
									{v}
								</strong>
								<p className="mt-2 text-[11px] text-white/50 md:text-xs xl:text-sm">
									{l}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
