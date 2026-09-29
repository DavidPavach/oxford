import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

const PILLARS = [
	{
		num: "01",
		title: "Crude & condensate trading",
		desc: "Physical and commercial exposure across crude and condensate grades, optimised for netback and supply continuity.",
	},
	{
		num: "02",
		title: "Logistics & supply chain",
		desc: "Integrated coordination of pipeline, rail, truck and marine logistics to ensure product reaches market.",
	},
	{
		num: "03",
		title: "Market risk management",
		desc: "Disciplined hedging and derivatives strategy to manage price exposure and protect operating margin.",
	},
	{
		num: "04",
		title: "Refined products supply",
		desc: "Distribution of gasoline, diesel and distillates to commercial, industrial and retail partners.",
	},
];

export default function SupplyTrading() {
	return (
		<section className="relative section-shell border-b border-border overflow-hidden">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				<div className="relative aspect-4/3 rounded-sm overflow-hidden border border-border order-2 lg:order-1">
					<img
						src={IMAGES.valvesMacro}
						alt="Supply and trading infrastructure"
						className="w-full h-full "
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
				</div>
				<div className="order-1 lg:order-2">
					<SectionHeader
						eyebrow="Supply & trading"
						title="Market access, engineered for certainty."
					/>
					<p className="body-copy mt-6 max-w-xl">
						Our trading desk connects production with global demand — managing
						physical flows, logistics and price risk across crude, condensate
						and refined products.
					</p>
					<div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
						{PILLARS.map((p) => (
							<div key={p.num} className="bg-card p-4 md:p-5 xl:p-6">
								<span className="font-mono smallestText text-accent">
									{p.num}
								</span>
								<h3 className="mt-2 font-heading font-bold text-base md:text-lg xl:text-xl tracking-[-0.02em]">
									{p.title}
								</h3>
								<p className="mt-2 smallText text-muted-foreground leading-relaxed">
									{p.desc}
								</p>
							</div>
						))}
					</div>
					<Link to="/product" className="premium-button-ghost mt-8">
						Explore our products
						<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
					</Link>
				</div>
			</div>
		</section>
	);
}
