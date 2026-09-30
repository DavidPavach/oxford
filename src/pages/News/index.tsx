import { Link } from "@tanstack/react-router";
import { ArrowRight, Book1, Camera, LampOn } from "iconsax-reactjs";
import { Megaphone, Newspaper } from "lucide-react";
import { IMAGES } from "#/assests";
import PageHero from "#/components/PageHero";
import SectionHeader from "#/components/SectionHeader";
import { formatDate } from "#/utils/format";

const CATEGORIES = [
	{ icon: Megaphone, label: "Press Releases" },
	{ icon: Newspaper, label: "Company Announcements" },
	{ icon: LampOn, label: "Industry Insights" },
	{ icon: Camera, label: "Media" },
	{ icon: Book1, label: "Publications" },
];

const ITEMS = [
	{
		date: "2026-08-14",
		category: "Press Release",
		title: "Oxford Petroleum reports strong FY2025 operational performance",
		excerpt:
			"Consolidated revenue of $4.8B with 99.8% asset uptime across integrated operations.",
		image: IMAGES.refineryDusk,
	},
	{
		date: "2026-07-02",
		category: "Announcement",
		title: "Appointment of new VP, Trading & Supply",
		excerpt:
			"Oxford Petroleum announces a leadership appointment to strengthen commercial operations.",
		image: IMAGES.valvesMacro,
	},
	{
		date: "2026-05-19",
		category: "Industry Insight",
		title: "Energy security and the role of integrated infrastructure",
		excerpt:
			"How resilient pipeline and storage networks underpin stable energy supply.",
		image: IMAGES.desertPipeline,
	},
	{
		date: "2026-03-11",
		category: "Publication",
		title: "2025 ESG data book released",
		excerpt:
			"Measured progress on emissions, safety and governance disclosed in our annual ESG report.",
		image: IMAGES.sustainability,
	},
	{
		date: "2026-01-28",
		category: "Press Release",
		title: "Strategic investment in asset integrity programmes",
		excerpt:
			"Continued investment in monitoring and maintenance across pipeline networks.",
		image: IMAGES.operations,
	},
	{
		date: "2025-11-15",
		category: "Media",
		title: "Oxford Petroleum featured in industry operational review",
		excerpt:
			"An in-depth look at our integrated value chain and operational discipline.",
		image: IMAGES.offshoreRig,
	},
];

export default function News() {
	const [featured, ...rest] = ITEMS;
	return (
		<>
			<PageHero
				eyebrow="News & media"
				title="The latest from Oxford Petroleum."
				description="Press releases, company announcements, industry insights and publications — keeping stakeholders informed with clarity and accuracy."
				image={IMAGES.offshoreRig}
			/>

			<section className="border-b border-border">
				<div className="section-shell">
					<div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border-x border-b border-border">
						{CATEGORIES.map((c) => (
							<div
								key={c.label}
								className="bg-card p-4 md:p-5 xl:p-6 flex flex-col items-center text-center gap-3"
							>
								<c.icon className="size-4 md:size-4.5 xl:size-5 text-accent" />
								<span className="font-heading font-semibold smallText tracking-[-0.01em]">
									{c.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section-shell border-b border-border">
				<SectionHeader eyebrow="Featured" title="Top story" />
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-14 items-center">
					<div className="relative aspect-video rounded-sm overflow-hidden border border-border">
						<img
							src={featured.image}
							alt={featured.title}
							className="w-full h-full"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
					</div>
					<div>
						<div className="flex items-center gap-3 font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground">
							<span className="text-accent">{featured.category}</span>
							<span>·</span>
							<span>{formatDate(featured.date)}</span>
						</div>
						<h3 className="mt-4 font-heading font-bold text-xl md:text-2xl xl:text-3xl tracking-[-0.03em] leading-tight">
							{featured.title}
						</h3>
						<p className="mt-4 body-copy max-w-lg">{featured.excerpt}</p>
						<Link to="/contact" className="premium-button-ghost mt-8">
							Media enquiry
							<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
						</Link>
					</div>
				</div>
			</section>

			<section className="section-shell border-b border-border">
				<SectionHeader eyebrow="Archive" title="More news & updates." />
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
					{rest.map((item) => (
						<article key={item.title} className="bg-card group flex flex-col">
							<div className="relative aspect-video overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent" />
							</div>
							<div className="p-6 flex flex-col flex-1">
								<div className="flex items-center gap-3 font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground">
									<span className="text-accent">{item.category}</span>
									<span>·</span>
									<span>{formatDate(item.date)}</span>
								</div>
								<h3 className="mt-3 font-heading font-bold text-base md:text-lg xl:text-xl tracking-[-0.02em] leading-tight group-hover:text-accent transition-colors">
									{item.title}
								</h3>
								<p className="mt-3 smallText text-muted-foreground leading-relaxed flex-1">
									{item.excerpt}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
