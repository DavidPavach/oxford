import { Sms } from "iconsax-reactjs";
import { CAREERS_EMAIL, IMAGES } from "#/assests";
import PageHero from "#/components/PageHero";
import SectionHeader from "#/components/SectionHeader";

const CV_MAILTO = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("CV Submission - Oxford Petroleum")}`;

const EARLY_CAREER_AREAS = [
	{
		title: "Commercial & Trading",
		desc: "Commercial activities, market research, transaction coordination and business development.",
	},
	{
		title: "Operations & Logistics",
		desc: "Supply coordination, logistics, terminal operations and the movement of energy products.",
	},
	{
		title: "Finance & Administration",
		desc: "Financial operations, reporting, administration and corporate support functions.",
	},
	{
		title: "Technical & Engineering",
		desc: "Technical, engineering and operational functions, where applicable.",
	},
	{
		title: "Corporate Functions",
		desc: "Areas such as legal, compliance, technology, communications and human resources.",
	},
];

const PROCESS = [
	{
		num: "01",
		title: "Application",
		desc: "Submit your CV and any other information requested for the position.",
	},
	{
		num: "02",
		title: "Application Review",
		desc: "Our recruitment team reviews applications against the requirements and qualifications of the position.",
	},
	{
		num: "03",
		title: "Interview",
		desc: "Shortlisted candidates may be invited to an interview to discuss experience, qualifications and suitability. Additional interviews may be required depending on the role.",
	},
	{
		num: "04",
		title: "Assessment",
		desc: "Certain positions may require an assessment, technical discussion, case study or other evaluation relevant to the role.",
	},
	{
		num: "05",
		title: "Offer",
		desc: "Following the recruitment process, selected candidates may receive an offer of employment outlining applicable terms and conditions.",
	},
	{
		num: "06",
		title: "Onboarding",
		desc: "Once an offer is accepted, successful candidates proceed through onboarding and receive the support required to begin their role.",
	},
];

function CvButton({ label = "Submit Your CV", className = "premium-button" }) {
	return (
		<a href={CV_MAILTO} className={className}>
			<Sms className="w-4 h-4" />
			{label}
		</a>
	);
}

export default function Careers() {
	return (
		<>
			<PageHero
				eyebrow="Careers"
				title="Build your career in energy."
				description="Oxford Petroleum welcomes talented professionals committed to safety, integrity and operational excellence. Explore opportunities to grow with us."
				image={IMAGES.operations}
			/>

			<section className="section-shell border-b border-border">
				<SectionHeader
					eyebrow="Current opportunities"
					title="No open positions available."
				/>
				<div className="mt-10 max-w-2xl">
					<p className="body-copy">
						There are currently no open positions at Oxford Petroleum. We
						encourage qualified professionals to check this page regularly for
						future opportunities.
					</p>
					<p className="body-copy mt-4">
						Even when a suitable position is not currently available, you can
						submit your CV for consideration for future opportunities. Your
						profile may be reviewed when a relevant position becomes available.
					</p>
					<div className="mt-8">
						<CvButton />
					</div>
				</div>
			</section>

			<section className="section-shell border-b border-border overflow-hidden">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
					<div className="lg:col-span-5">
						<SectionHeader
							eyebrow="Graduate / Internship / Early-career"
							title="Start your career in energy."
						/>
						<p className="body-copy mt-6 max-w-md">
							Oxford Petroleum welcomes expressions of interest from students,
							recent graduates and early-career professionals interested in
							developing their careers within the energy industry. Future
							opportunities may arise across areas including:
						</p>
						<p className="mt-6 smallText text-muted-foreground max-w-md">
							Interested candidates may submit their CV for consideration as
							relevant opportunities become available.
						</p>
						<div className="mt-8">
							<CvButton />
						</div>
					</div>
					<div className="lg:col-span-7">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
							{EARLY_CAREER_AREAS.map((a, i) => (
								<div key={a.title} className="bg-card p-6">
									<span className="font-mono text-xs text-accent">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="mt-2 font-heading font-bold text-sm md:text-base xl:text-lg tracking-[-0.02em]">
										{a.title}
									</h3>
									<p className="mt-2 smallText text-muted-foreground leading-relaxed">
										{a.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section-shell border-b border-border">
				<SectionHeader
					eyebrow="Our recruitment process"
					title="Clear. Professional. Straightforward."
					description="We aim to make our recruitment process clear, professional and straightforward. While the process may vary depending on the position, candidates can generally expect the following stages."
				/>
				<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
					{PROCESS.map((step) => (
						<div key={step.num} className="bg-card p-6 md:p-7 xl:p-8">
							<span className="font-mono smallText text-accent">
								{step.num}
							</span>
							<h3 className="mt-3 font-heading font-bold text-base md:text-lg xl:text-xl tracking-[-0.02em]">
								{step.title}
							</h3>
							<p className="mt-2 smallText text-muted-foreground leading-relaxed">
								{step.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="section-shell">
				<div className="relative rounded-sm overflow-hidden border border-border">
					<img
						src={IMAGES.valvesMacro}
						alt="Recruitment integrity"
						className="absolute inset-0 w-full h-full"
					/>
					<div className="absolute inset-0 bg-background/85" />
					<div className="relative p-8 md:p-10 xl:p-12 max-w-2xl">
						<span className="eyebrow">Recruitment integrity</span>
						<h3 className="section-title mt-5">
							Commitment to a fair process.
						</h3>
						<p className="body-copy mt-6">
							Oxford Petroleum is committed to maintaining a professional and
							transparent recruitment process. Candidates should rely only on
							official Oxford Petroleum communication and recruitment channels
							when applying for opportunities.
						</p>
						<div className="mt-8">
							<CvButton />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
