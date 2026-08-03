import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	Building,
	Calendar,
	DocumentText1,
	Profile2User,
	ShieldSecurity,
} from "iconsax-reactjs";
import PageHero from "#/components/PageHero";

const directors = [
	{
		name: "Richard K. Chisholm",
		role: "President & Director",
		since: "1987",
		address: "Calgary, AB T2T 4L8",
		note: "Individual with significant control — holds more than 75% of shares",
	},
	{
		name: "Len Horback",
		role: "Director",
		since: "1987",
		address: "Calgary, AB T2K 3X9",
		note: "Resident Canadian Director",
	},
];

const facts = [
	["Corporation Number", "184564-1"],
	["Business Number", "120176995RC0001"],
	["Date of Incorporation", "February 22, 1985"],
	["Governing Legislation", "Canada Business Corporations Act (CBCA)"],
	["Status", "Active"],
	["Registered Office", "4519 16A Street S.W., Calgary, AB T2T 4L8, Canada"],
	["Type", "Non-distributing corporation, ≤50 shareholders"],
	["Last Annual Meeting", "2026-02-19"],
	["Annual Filing Status", "Filed 2024 · Filed 2025 · Filed 2026"],
];

const timeline = [
	[
		"1985",
		"Incorporated under the Canada Business Corporations Act in Calgary, Alberta on February 22, 1985.",
	],
	[
		"1985",
		"Articles of Incorporation filed; share structure established with Class A voting, Class B non-voting, and First Preferred shares.",
	],
	[
		"1985",
		"Richard Chisholm acquires significant control — more than 75% of shares — effective October 1, 1985.",
	],
	[
		"1987",
		"Board of Directors formally constituted with Len Horback and Richard K. Chisholm.",
	],
	[
		"1998",
		"Registered office relocated to 4519 16A Street S.W., Calgary, Alberta T2T 4L8, effective April 1998.",
	],
	["2021", "Annual return filed confirming active standing under the CBCA."],
	[
		"2023",
		"Directors register updated and confirmed with Corporations Canada.",
	],
	[
		"2026",
		"Annual filings current. Corporate profile confirmed active with Corporations Canada as of May 21, 2026.",
	],
];

export default function Index() {
	return (
		<main>
			<PageHero
				eyebrow="Corporate profile"
				title="Built on discipline. Built to last."
				subtitle="Oxford Petroleum Corporation is a Canadian energy company incorporated under the Canada Business Corporations Act, with continuous operations since 1985."
			/>

			{/* Corporate Facts */}
			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-12 grid lg:grid-cols-12">
						<div className="lg:col-span-4">
							<p className="eyebrow">
								<DocumentText1 className="size-3 md:size-3.5 xl:size-4" />{" "}
								Registration details
							</p>
							<h2 className="mt-5 font-medium text-3xl tracking-tight">
								Official corporate data
							</h2>
							<p className="mt-4 text-slate-500 text-sm leading-relaxed">
								All information is drawn directly from filings with Innovation,
								Science and Economic Development Canada — Corporations Canada.
							</p>
							<Link
								to="/verify"
								className="inline-flex items-center gap-2 mt-6 font-semibold text-destructive text-sm"
							>
								Verify these documents →
							</Link>
						</div>
						<div className="lg:col-span-8">
							<div className="border border-border rounded-xl overflow-hidden">
								{facts.map(([label, value], i) => (
									<div
										key={label}
										className={`grid grid-cols-[180px_1fr] gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-[#F5F7FA] dark:bg-[#0E1628]" : "bg-white dark:bg-[#05070C]"}`}
									>
										<span className="font-semibold text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase tracking-[.14em]">
											{label}
										</span>
										<span className="font-medium text-[11px] md:text-xs xl:text-sm">
											{value}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Directors */}
			<section className="bg-[#F5F7FA] dark:bg-[#0E1628] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<p className="eyebrow">
						<Profile2User className="size-3 md:size-3.5 xl:size-4" /> Board of
						Directors
					</p>
					<h2 className="mt-5 max-w-xl section-title">
						Leadership and governance.
					</h2>
					<p className="mt-4 max-w-lg text-muted-foreground">
						The Corporation's Board operates with a minimum of 2 and maximum of
						7 directors. Both current directors are Resident Canadians.
					</p>
					<div className="gap-6 grid md:grid-cols-2 mt-14">
						{directors.map((d, i) => (
							<motion.article
								key={d.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-[#05070C] shadow-[0_8px_40px_rgba(8,31,77,.07)] p-4 md:p-6 xl:p-8 rounded-xl"
							>
								<div className="flex justify-center items-center bg-[#081F4D] mb-6 rounded-full w-16 h-16 font-bold text-white text-lg md:text-xl xl:text-2xl">
									{d.name.charAt(0)}
								</div>
								<strong className="font-medium text-base md:text-lg xl:text-xl">
									{d.name}
								</strong>
								<p className="mt-1 font-semibold text-[11px] text-destructive md:text-xs xl:text-sm">
									{d.role}
								</p>
								<p className="mt-1 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
									Director since {d.since} · {d.address}
								</p>
								<p className="mt-4 pt-4 border-border border-t text-[10px] text-muted-foreground md:text-[11px] xl:text-xs leading-relaxed">
									{d.note}
								</p>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="bg-[#081F4D] text-white section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<p className="text-muted-foreground eyebrow">
						<Calendar className="size-3 md:size-3.5 xl:size-4" /> Corporate
						history
					</p>
					<h2 className="mt-5 max-w-2xl section-title">
						Four decades of continuity.
					</h2>
					<div className="relative space-y-10 mt-14 pl-7 border-white/20 border-l">
						{timeline.map(([year, text]) => (
							<div key={text} className="relative">
								<span className="-left-11 absolute flex justify-center items-center bg-destructive rounded-full size-7 md:size-8 xl:size-9 font-bold text-[9px] md:text-[9.5px] xl:text-[10px]">
									{year.slice(2)}
								</span>
								<p className="mb-1 font-bold text-[10px] text-destructive md:text-[11px] xl:text-xs tracking-[.15em]">
									{year}
								</p>
								<p className="text-white/70 leading-relaxed">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Governance */}
			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="gap-12 grid lg:grid-cols-2 mx-auto max-w-screen-2xl">
					<div>
						<p className="eyebrow">
							<ShieldSecurity className="size-3 md:size-3.5 xl:size-4" /> Share
							structure
						</p>
						<h2 className="mt-5 font-medium text-xl md:text-2xl xl:text-3xl tracking-tight">
							Authorized share classes
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Per the Articles of Incorporation (Schedule 1), the Corporation is
							authorized to issue:
						</p>
						<ul className="space-y-4 mt-6">
							{[
								[
									"Class A",
									"Unlimited common voting shares — no par value. Allotted by resolution of the Directors.",
								],
								[
									"Class B",
									"Unlimited common non-voting shares — no par value. Ranks equally with Class A for all purposes except voting rights.",
								],
								[
									"First Preferred",
									"Unlimited preferred shares — issuable in series. Priority over Class A and B in dividends and liquidation distributions.",
								],
							].map(([cls, desc]) => (
								<li
									key={cls}
									className="flex gap-4 p-2 md:p-3 xl:p-4 border border-border rounded-lg"
								>
									<span className="bg-destructive mt-1 rounded-full size-2 shrink-0" />
									<div>
										<strong className="text-[11px] md:text-xs xl:text-sm">
											{cls}
										</strong>
										<p className="mt-1 text-slate-500 text-xs">{desc}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="eyebrow">
							<Building className="size-3 md:size-3.5 xl:size-4" /> Transfer
							restrictions
						</p>
						<h2 className="mt-5 font-medium text-xl md:text-2xl xl:text-3xl tracking-tight">
							Share transfer policy
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Per Schedule 2 of the Articles of Incorporation:
						</p>
						<ul className="space-y-3 mt-6 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
							<li className="flex gap-3">
								<span className="font-bold text-destructive">—</span> Total
								shareholders limited to 50 persons (excluding current/former
								employees).
							</li>
							<li className="flex gap-3">
								<span className="font-bold text-destructive">—</span> The
								Corporation may not make any public invitation to subscribe for
								its securities.
							</li>
							<li className="flex gap-3">
								<span className="font-bold text-destructive">—</span> Share
								transfers require prior approval by the Board of Directors.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
