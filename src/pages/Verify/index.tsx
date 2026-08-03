import { useNavigate } from "@tanstack/react-router";
import { DocumentFilter, Link1, ShieldSecurity } from "iconsax-reactjs";
import { type SubmitEvent, useState } from "react";
import { toast } from "react-fox-toast";
import PageHero from "@/components/PageHero";

const docs = [
	{
		label: "Corporate Profile (May 2026)",
		date: "2026-05-21",
		url: "/corporate_profile.pdf",
	},
	{
		label: "Certificate of Incorporation",
		date: "1985-02-22",
		url: "#",
	},
	{
		label: "Annual Return 2021",
		date: "2021-04-19",
		url: "#",
	},
	{
		label: "Directors Register",
		date: "2023-08-08",
		url: "#",
	},
	{
		label: "Registered Office Notice",
		date: "1998-04-15",
		url: "#",
	},
];

const index = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState<string>("");

	function handleSearch(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();
		return navigate({
			to: "/verify/$id",
			params: {
				id: query,
			},
		});
	}

	return (
		<main>
			<PageHero
				eyebrow="Document verification"
				title="Verify our corporate standing."
				subtitle="Oxford Petroleum Corporation's registration is publicly verifiable through Corporations Canada. Use this portal to confirm our credentials, or access original documents directly."
			/>

			{/* Search */}
			<section className="bg-white dark:bg-[#05070C] section-shell">
				<div className="mx-auto max-w-screen-2xl">
					<div className="gap-14 grid lg:grid-cols-2">
						<div>
							<p className="eyebrow">
								<DocumentFilter className="size-3 md:size-3.5 xl:size-4" />{" "}
								Corporation lookup
							</p>
							<h2 className="mt-5 font-medium text-xl md:text-2xl xl:text-3xl tracking-tight">
								Search by document number.
							</h2>
							<p className="mt-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
								Enter the document number to verify Oxford Petroleum's on-file
								records.
							</p>
							<form onSubmit={handleSearch} className="flex gap-3 mt-8">
								<input
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									placeholder="e.g. Oxford Petroleum Corporation or 184564-1"
									className="flex-1 bg-[#F5F7FA] dark:bg-[#0E1628] px-4 py-3 border border-slate-200 focus:border-[#081F4D] dark:border-white/10 rounded-lg outline-none text-sm transition"
								/>
								<button
									type="submit"
									className="bg-[#081F4D] text-white premium-button"
								>
									Verify
								</button>
							</form>
						</div>

						{/* Document download panel */}
						<div>
							<p className="eyebrow">
								<ShieldSecurity className="size-3 md:size-3.5 xl:size-4" />{" "}
								Primary source documents
							</p>
							<h2 className="mt-5 font-medium text-xl md:text-2xl xl:text-3xl tracking-tight">
								Download original filings.
							</h2>
							<p className="mt-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
								All documents are original filings from Innovation, Science and
								Economic Development Canada — Corporations Canada.
							</p>
							<div className="space-y-3 mt-8">
								{docs.map((d) => (
									<a
										onClick={(e) => {
											if (d.label !== "Corporate Profile (May 2026)") {
												e.preventDefault();
												toast.info(
													"This document is only available on request.",
												);
											}
										}}
										key={d.label}
										href={
											d.label === "Corporate Profile (May 2026)" ? d.url : "#"
										}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex justify-between items-center bg-[#F5F7FA] dark:bg-[#0E1628] hover:shadow-md px-5 py-4 border border-slate-200 dark:border-white/10 rounded-xl transition hover:-translate-y-0.5"
									>
										<div>
											<strong className="font-medium text-[11px] md:text-xs xl:text-sm">
												{d.label}
											</strong>
											<p className="mt-0.5 text-[10px] text-foreground/70 md:text-[11px] xl:text-xs">
												Filed {d.date}
											</p>
										</div>
										<Link1 className="size-3 md:size-3.5 xl:size-4 text-muted-foreground group-hover:text-destructive transition-colors" />
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Trust signals */}
			<section className="bg-[#081F4D] text-white section-shell">
				<div className="gap-8 grid md:grid-cols-3 mx-auto max-w-screen-2xl">
					{[
						[
							"CBCA Incorporated",
							"Oxford Petroleum has operated under the Canada Business Corporations Act without interruption since February 22, 1985.",
						],
						[
							"Annual filings current",
							"Annual returns confirmed filed with Corporations Canada for 2024, 2025 and 2026.",
						],
						[
							"Publicly verifiable",
							"All corporate documents are filed with and maintained by Corporations Canada — fully accessible to the public.",
						],
					].map(([title, body]) => (
						<div
							key={title}
							className="p-4 md:p-6 xl:p-8 border border-white/15 rounded-xl"
						>
							<ShieldSecurity className="mb-4 size-4 md:size-4.5 xl:size-5 text-[#D61F26]" />
							<strong>{title}</strong>
							<p className="mt-2 text-[11px] text-white/55 md:text-xs xl:text-sm leading-relaxed">
								{body}
							</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default index;
