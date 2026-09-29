import { Link } from "@tanstack/react-router";
import { ArrowRight, Send2 } from "iconsax-reactjs";
import { INVESTOR_KPIS } from "#/assests";
import SectionHeader from "#/components/SectionHeader";
import StatBlock from "#/components/StatBlock";

const InvestorPortal = () => {
	return (
		<main className="relative section-shell border-b border-border overflow-hidden">
			<div className="section-shell-inner">
				<SectionHeader
					eyebrow="Investor relations"
					title="Clarity creates confidence."
					description="FY 2025 overview — governance documentation is publicly available and fully auditable."
				/>

				<div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
					{INVESTOR_KPIS.map((k) => (
						<div key={k.label} className="bg-card p-4 md:p-6 xl:p-8">
							<StatBlock
								value={k.value}
								label={k.label}
								sub={k.sub}
								size="lg"
							/>
						</div>
					))}
				</div>

				<div className="mt-8 flex flex-wrap items-center justify-between gap-6">
					<div className="flex flex-wrap gap-3">
						<Link to="/news" className="premium-button">
							Annual report 2025
							<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
						</Link>
						<Link to="/quality" className="premium-button-ghost">
							ESG data book
						</Link>
					</div>
					<Link to="/contact" className="premium-button-ghost">
						Request technical prospectus
						<Send2 className="size-4 md:size-4.5 xl:size-5" />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default InvestorPortal;
