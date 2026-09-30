import SectionHeader from "#/components/SectionHeader";

const LEADERS = [
	{
		image: "/dayla.png",
		name: "DINCER DALYA",
		role: "Director, Corporate Affairs & Administration",
		bio: "Ms. Dincer is a corporate affairs and administration executive with more than 20 years of experience in corporate administration, stakeholder relations, organizational governance and international business coordination.",
	},
	{
		image: "/kenji.png",
		name: "KENJI TAKAHASHI",
		role: "Director, Strategic Development & Investments",
		bio: "Mr. Takahashi is a corporate strategy and investment professional with more than 24 years of experience in the energy sector, strategic planning, investment analysis, international partnerships and corporate development.",
	},
	{
		image: "/goldstein.png",
		name: "GOLDSTEIN ROBERT NEIL",
		role: "Executive Vice President, Commercial & Operations",
		bio: "Mr. Goldstein is a senior energy executive with more than 28 years of experience in international petroleum trading, downstream operations, supply, logistics and commercial management.",
	},
	{
		image: "/michael.png",
		name: "MICHAEL J. HARRINGTON",
		role: "Chief Financial Officer",
		bio: "Mr. Harrington is a senior finance executive with more than 25 years of experience across energy finance, treasury, corporate accounting, financial controls and capital management. ",
	},
	{
		image: "/elena.png",
		name: "ELENA M. VASQUEZ",
		role: "General Counsel & Head of Legal Affairs",
		bio: "Ms. Vasquez is an international corporate and energy lawyer with more than 22 years of experience in commercial law, energy transactions, corporate governance, regulatory matters and contractual risk management.",
	},
];

export default function Management() {
	return (
		<section
			id="leadership"
			className="relative section-shell border-b border-border"
		>
			<SectionHeader
				eyebrow="Leadership"
				title="The people who run the company."
				description="An experienced executive team accountable for safety, performance and the long-term integrity of Oxford Petroleum."
			/>
			<div className="mt-14 grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-5">
				{LEADERS.map((p) => (
					<div
						key={p.name}
						className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 md:p-5 xl:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-sm	"
					>
						<div className="flex items-start gap-4">
							<div className="shrink-0">
								<img
									src={p.image}
									alt={`${p.name} profile`}
									className=" size-14 md:size-16 rounded-xl border border-border object-cover object-top bg-muted
								"
								/>
							</div>

							<div className="min-w-0 flex-1 pt-0.5">
								<h3 className="font-heading font-bold	text-lg md:text-xltracking-[-0.02em] leading-tight	truncate">
									{p.name}
								</h3>

								<div className="mt-1.5 flex items-center gap-2">
									<span className="size-1.5 rounded-full bg-accent" />
									<p className="font-mono text-[10px] md:text-xs	font-medium uppercase	tracking-[0.14em]	text-muted-foreground">
										{p.role}
									</p>
								</div>
							</div>
						</div>

						<div className="mt-5 border-t border-border/70 pt-4">
							<p className="smallText text-muted-foreground leading-relaxed">
								{p.bio}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
