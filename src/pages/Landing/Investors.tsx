import { ImportCurve, TrendUp } from "iconsax-reactjs";

export default function InvestorPanel() {
	return (
		<section
			id="investors"
			className="bg-[#F5F7FA] dark:bg-[#05070C] section-shell"
		>
			<div className="gap-10 grid lg:grid-cols-12">
				<div className="lg:col-span-4">
					<p className="eyebrow">
						<TrendUp className="size-3 md:size-3.5 xl:size-4" /> Investor
						relations
					</p>
					<h2 className="mt-5 font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl tracking-tight">
						Clarity creates confidence.
					</h2>
				</div>
				<div className="gap-4 grid sm:grid-cols-2 lg:col-span-8">
					<article className="sm:col-span-2 monolith-card">
						<div>
							<p className="eyebrow">FY 2025 overview</p>
							<strong className="block mt-8 font-medium text-[#081F4D] dark:text-white text-3xl md:text-4xl xl:text-5xl">
								$4.8B
							</strong>
							<p className="mt-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
								Consolidated revenue
							</p>
						</div>
						<div className="flex items-end gap-2 h-28">
							{[38, 49, 58, 72, 86].map((h) => (
								<span
									key={`hero_numbers_${h}`}
									className="bg-[#123B7A] dark:bg-blue-500 rounded-t w-8"
									style={{ height: `${h}%` }}
								/>
							))}
						</div>
					</article>
					<a href="/investors" className="group monolith-card">
						<span>
							<strong>Annual report {new Date().getFullYear() - 1}</strong>
							<p className="mt-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
								Financial and operating review
							</p>
						</span>
						<ImportCurve className="size-4 md:size-4.5 xl:size-5 text-destructive" />
					</a>
					<a href="/sustainability" className="group monolith-card">
						<span>
							<strong>ESG data book</strong>
							<p className="mt-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
								Measured progress and disclosures
							</p>
						</span>
						<ImportCurve className="size-4 md:size-4.5 xl:size-5 text-destructive" />
					</a>
				</div>
			</div>
		</section>
	);
}
