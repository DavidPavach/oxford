import { Global } from "iconsax-reactjs";
import { IMAGES, REGIONS } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

const Operations = () => {
	return (
		<section className="relative section-shell border-b border-border">
			<div className="section-shell-inner">
				<SectionHeader
					eyebrow="Global operations"
					title="Connected assets. Coordinated intelligence."
					description="Our operational network connects supply, infrastructure and market expertise across strategic energy corridors."
				/>

				<div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					{/* map / visual */}
					<div className="lg:col-span-7">
						<div className="relative aspect-16/10 rounded-sm overflow-hidden border border-border bg-secondary">
							<img
								src={IMAGES.offshoreRig}
								alt="Global operations"
								className="w-full h-full"
							/>
							<div className="absolute inset-0 bg-background/40" />
							<div className="absolute inset-0 tectonic-grid opacity-50" />
							{/* pulse markers */}
							{[
								{ top: "32%", left: "22%" },
								{ top: "28%", left: "48%" },
								{ top: "58%", left: "60%" },
								{ top: "44%", left: "74%" },
								{ top: "62%", left: "34%" },
							].map((p) => (
								<span
									key={p.top}
									className="absolute -translate-x-1/2 -translate-y-1/2 size-2.5 rounded-full bg-accent animate-pulse-ring"
									style={{ top: p.top, left: p.left }}
								/>
							))}
							<div className="absolute bottom-4 left-4 flex items-center gap-2 bg-background/60 backdrop-blur-md px-3 py-2 rounded-sm border border-border">
								<Global className="size-4 md:size-4.5 xl:size-5 text-accent" />
								<span className="font-mono samllestText uppercase tracking-[0.16em]">
									18 strategic markets
								</span>
							</div>
						</div>
					</div>

					{/* regions list */}
					<div className="lg:col-span-5">
						<ul className="divide-y divide-border border-y border-border">
							{REGIONS.map((r, i) => (
								<li key={r} className="flex items-center justify-between py-4">
									<span className="font-heading font-semibold text-base md:text-lg xl:text-xl tracking-[-0.02em]">
										{r}
									</span>
									<span className="font-mono samllestText uppercase tracking-[0.16em] text-muted-foreground">
										{String(i + 1).padStart(2, "0")}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Operations;
