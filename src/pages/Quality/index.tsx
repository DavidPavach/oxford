import { Link } from "@tanstack/react-router";
import { Award, Lock, ShieldSecurity, TickSquare } from "iconsax-reactjs";
import { HardHat, Scale } from "lucide-react";
import { IMAGES } from "#/assests";
import PageHero from "#/components/PageHero";
import SectionHeader from "#/components/SectionHeader";

const PILLARS = [
	{
		icon: ShieldSecurity,
		title: "Quality Assurance",
		desc: "Systematic quality controls across production, processing and distribution — ensuring every product meets specification before it reaches market.",
	},
	{
		icon: TickSquare,
		title: "Product Standards",
		desc: "Products refined and supplied to recognised industry specifications, with testing and certification at every stage of the supply chain.",
	},
	{
		icon: Award,
		title: "Certifications",
		desc: "Operational certifications maintained across facilities, demonstrating conformance with international quality, safety and environmental standards.",
	},
	{
		icon: Scale,
		title: "Regulatory Compliance",
		desc: "Full compliance with the Canada Business Corporations Act and applicable regulatory frameworks — annual filings current and auditable.",
	},
	{
		icon: HardHat,
		title: "HSE",
		desc: "Health, safety and environment programmes enforce rigorous standards across all sites, with mandatory incident reporting and continuous improvement.",
	},
	{
		icon: Lock,
		title: "Ethics & Business Conduct",
		desc: "A code of conduct underpinning every commercial relationship — integrity, transparency and accountability in all dealings.",
	},
];

const STANDARDS = [
	"ISO 9001 — Quality management systems",
	"ISO 14001 — Environmental management",
	"ISO 45001 — Occupational health & safety",
	"API standards — Petroleum measurement & refining",
	"CBCA compliance — Corporations Canada governance",
];

export default function QualityCompliance() {
	return (
		<>
			<PageHero
				eyebrow="Quality & compliance"
				title="Standards that protect every stakeholder."
				description="Quality assurance, product standards, certifications, regulatory compliance, HSE and ethics — the frameworks that define how Oxford Petroleum operates."
				image={IMAGES.technology}
			/>

			<section className="section-shell border-b border-border">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
					{PILLARS.map((p) => (
						<div key={p.title} className="bg-card p-6 md:p-7 xl:p-8 group">
							<div className="flex items-center gap-4 mb-5">
								<div className="grid place-items-center size-10 md:size-11 xl:size-12 rounded-sm bg-secondary border border-border group-hover:border-accent group-hover:text-accent transition-colors">
									<p.icon className="size-5 md:size-5.5 xl:size-6" />
								</div>
								<span className="font-mono smallestText uppercase tracking-[0.2em] text-muted-foreground">
									{p.title}
								</span>
							</div>
							<p className="smallText text-muted-foreground leading-relaxed">
								{p.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="section-shell border-b border-border">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					<div>
						<SectionHeader
							eyebrow="Standards & certifications"
							title="Audited. Certified. Compliant."
						/>
						<p className="body-copy mt-6 max-w-xl">
							Our operations are measured against internationally recognised
							standards, with third-party audit cycles across quality,
							environmental, safety and governance domains.
						</p>
						<ul className="mt-8 space-y-3">
							{STANDARDS.map((s) => (
								<li
									key={s}
									className="flex items-center gap-3 text-muted-foreground"
								>
									<ShieldSecurity className="size-4 md:size-4.5 xl:size-5 text-accent shrink-0" />
									{s}
								</li>
							))}
						</ul>
						<Link to="/verify" className="premium-button mt-9">
							Verify our standing
						</Link>
					</div>
					<div className="relative aspect-4/3 rounded-sm overflow-hidden border border-border">
						<img
							src={IMAGES.valvesMacro}
							alt="Quality and compliance"
							className="w-full h-full"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
					</div>
				</div>
			</section>

			<section className="section-shell">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
					<div className="bg-card p-6 md:p-8 xl:p-10">
						<HardHat className="size-6 md:size-7 xl:size-8 text-accent" />
						<h3 className="mt-5 font-heading font-bold text-lg md:text-xl xl:text-2xl tracking-[-0.03em]">
							Health, Safety & Environment
						</h3>
						<p className="mt-4 body-copy">
							Safety performance is non-negotiable. Our HSE programme enforces
							rigorous standards across all sites — from subsurface to surface
							operations — with mandatory incident reporting, environmental
							auditing and continuous improvement frameworks.
						</p>
					</div>
					<div className="bg-card p-6 md:p-8 xl:p-10">
						<Lock className="size-6 md:size-7 xl:size-8 text-accent" />
						<h3 className="mt-5 font-heading font-bold text-xl md:text-2xl tracking-[-0.03em]">
							Ethics & Business Conduct
						</h3>
						<p className="mt-4 body-copy">
							Integrity underpins every commercial relationship. Our code of
							conduct requires transparency, accountability and full regulatory
							compliance — with clear channels for raising concerns and zero
							tolerance for unethical practice.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
