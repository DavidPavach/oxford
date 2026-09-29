import { HOME_STATS } from "#/assests";
import SectionHeader from "#/components/SectionHeader";
import StatBlock from "#/components/StatBlock";

export default function CompanyIntro() {
	return (
		<section className="relative section-shell border-b border-border">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
				<div className="lg:col-span-6">
					<SectionHeader
						eyebrow="Corporate profile"
						title="Built for the systems the world depends on."
						description="Oxford Petroleum Corporation develops and operates essential energy assets with a disciplined focus on safety, reliability and long-term value."
					/>
					<p className="body-copy mt-6 max-w-xl">
						From subsurface intelligence to global trading and critical
						infrastructure, our integrated capabilities connect resources with
						the communities and economies they serve.
					</p>
				</div>

				<div className="lg:col-span-6">
					<div className="grid grid-cols-2 gap-px bg-border">
						{HOME_STATS.map((s) => (
							<div key={s.label} className="bg-card p-6 md:p-8">
								<StatBlock value={s.value} label={s.label} size="lg" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
