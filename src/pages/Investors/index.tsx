import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	Chart2,
	DocumentText1,
	ImportCurve,
	ShieldSecurity,
	TrendUp,
} from "iconsax-reactjs";
import { toast } from "react-fox-toast";
import PageHero from "#/components/PageHero";

const docs = [
	{
		icon: DocumentText1,
		title: "Corporate Profile",
		desc: "Official Corporations Canada profile — Updated May 2026",
		tag: "GOVERNANCE",
		url: "/corporate_profile.pdf",
	},
	{
		icon: DocumentText1,
		title: "Annual Return 2021",
		desc: "Form 22 — Canada Business Corporations Act (s. 263)",
		tag: "ANNUAL FILING",
		url: "/",
	},
	{
		icon: DocumentText1,
		title: "Certificate of Incorporation",
		desc: "Issued February 22, 1985 — Corporation No. 184564-1",
		tag: "LEGAL",
		url: "/",
	},
	{
		icon: DocumentText1,
		title: "Directors Register",
		desc: "Form 6 — Changes regarding directors, updated 2023",
		tag: "GOVERNANCE",
		url: "/",
	},
	{
		icon: DocumentText1,
		title: "Registered Office Notice",
		desc: "Notice of registered office — Section 19, CBCA",
		tag: "LEGAL",
		url: "/",
	},
];

const filingHistory = [
	["2026", "Filed", "Annual return confirmed. Last meeting 2026-02-19."],
	["2025", "Filed", "Annual return filed within the filing period."],
	["2024", "Filed", "Annual return filed — active standing maintained."],
	[
		"2023",
		"Filed",
		"Directors register updated with Corporations Canada (August 2023).",
	],
	["2021", "Filed", "Annual return Form 22 signed by Richard Chisholm."],
];

export default function Investors() {
	return (
		<main>
			<PageHero
				eyebrow="Investor relations"
				title="Clarity creates confidence."
				subtitle="Oxford Petroleum Corporation operates with full regulatory compliance under the Canada Business Corporations Act. All governance documentation is publicly available."
			/>

			{/* Corporate identity panel */}
			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
						{[
							["184564-1", "Corporation Number"],
							["1985-02-22", "Incorporated"],
							["Active", "Current Status"],
							["CBCA", "Governing Act"],
						].map(([v, l], i) => (
							<motion.div
								key={l}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.08 }}
								viewport={{ once: true }}
								className="bg-[#F5F7FA] dark:bg-[#0E1628] p-4 md:p-5 xl:p-6 rounded-xl"
							>
								<strong className="font-mono text-[#081F4D] dark:text-white text-lg md:text-xl xl:text-2xl">
									{v}
								</strong>
								<p className="mt-2 font-semibold text-[10px] text-slate-500 md:text-[11px] xl:text-xs uppercase tracking-[.15em]">
									{l}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Document downloads */}
			<section className="section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<p className="eyebrow">
						<Chart2 className="size-3 md:size-3.5 xl:size-4" /> Document centre
					</p>
					<h2 className="mt-5 max-w-2xl section-title">
						Governance & legal documents.
					</h2>
					<div className="space-y-3 mt-14">
						{docs.map((d, i) => (
							<motion.a
								onClick={(e) => {
									if (d.title !== "Corporate Profile") {
										e.preventDefault();
										toast.info("This document is only available on request.");
									}
								}}
								key={d.title}
								href={d.title === "Corporate Profile" ? d.url : "#"}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, x: -16 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: i * 0.07 }}
								viewport={{ once: true }}
								className="group flex items-center gap-6 bg-white dark:bg-[#05070C] hover:shadow-lg p-5 border border-slate-200 dark:border-white/10 rounded-xl transition-all hover:-translate-y-0.5"
							>
								<div className="flex justify-center items-center bg-[#081F4D] dark:bg-[#0E1628] rounded-lg size-8 md:size-9 xl:size-10 shrink-0">
									<d.icon className="size-4 md:size-4.5 xl:size-5 text-white" />
								</div>
								<div className="flex-1 min-w-0">
									<p className="font-bold text-[9px] text-destructive md:text-[9.5px] xl:text-[10px] tracking-[.18em]">
										{d.tag}
									</p>
									<strong className="font-medium">{d.title}</strong>
									<p className="mt-0.5 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
										{d.desc}
									</p>
								</div>
								<ImportCurve className="text-muted-foreground group-hover:text-destructive transition-colors" />
							</motion.a>
						))}
					</div>
				</div>
			</section>

			{/* Annual filing history */}
			<section className="section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<p className="text-muted-foreground eyebrow">
						<TrendUp className="size-3 md:size-3.5 xl:size-4" /> Annual filings
					</p>
					<h2 className="mt-5 max-w-xl section-title">
						Unbroken compliance record.
					</h2>
					<div className="mt-14 border-border border-t">
						{filingHistory.map(([year, status, note]) => (
							<div
								key={year}
								className="items-center gap-6 grid grid-cols-[80px_100px_1fr] py-5 border-border border-b"
							>
								<span className="font-mono font-medium text-sm md:text-base xl:text-lg">
									{year}
								</span>
								<span className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full font-bold text-[9px] text-green-500 md:text-[9.5px] xl:text-[10px] uppercase tracking-[.15em]">
									<span className="bg-green-500 rounded-full size-1.5" />
									{status}
								</span>
								<span className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
									{note}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Significant control */}
			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-12 grid lg:grid-cols-12">
						<div className="lg:col-span-5">
							<p className="eyebrow">
								<ShieldSecurity className="size-3 md:size-3.5 xl:size-4" />{" "}
								Ownership structure
							</p>
							<h2 className="mt-5 font-medium text-3xl tracking-tight">
								Individuals with significant control.
							</h2>
							<p className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
								Declared to Corporations Canada in accordance with the Canada
								Business Corporations Act. Last updated 2026-03-09.
							</p>
							<Link
								to="/verify"
								className="inline-flex items-center gap-2 mt-6 font-semibold text-destructive text-sm"
							>
								Verify corporate documents →
							</Link>
						</div>
						<div className="lg:col-span-7">
							<div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden">
								{[
									["Name", "Richard Chisholm"],
									[
										"Address",
										"4519 16A St SW, Calgary, Alberta, T2T 4L8, Canada",
									],
									[
										"Control type",
										"Owns/controls/directs 25%+ of shares — Directly, Individually",
									],
									["Shares held", "More than 75% of the shares"],
									["Start date", "October 1, 1985"],
									["Last updated", "March 9, 2026"],
								].map(([k, v], i) => (
									<div
										key={k}
										className={`grid grid-cols-[180px_1fr] gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-[#F5F7FA] dark:bg-[#0E1628]" : "bg-white dark:bg-[#05070C]"}`}
									>
										<span className="font-semibold text-slate-500 text-xs uppercase tracking-[.12em]">
											{k}
										</span>
										<span className="font-medium text-sm">{v}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
