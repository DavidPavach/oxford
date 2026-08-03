import { Location } from "iconsax-reactjs";

const points = [
	["22%", "34%", "North America"],
	["47%", "27%", "Europe"],
	["59%", "39%", "Middle East"],
	["76%", "48%", "Asia Pacific"],
	["53%", "68%", "Africa"],
];
export default function GlobalMap() {
	return (
		<section className="overflow-hidden section-shell">
			<div className="items-end gap-8 grid md:grid-cols-2">
				<div>
					<p className="text-muted-foreground eyebrow">
						<Location className="size-3 md:size-3.5 xl:size-4" /> Global
						operations
					</p>
					<h2 className="mt-5 section-title">
						Connected assets.
						<br />
						Coordinated intelligence.
					</h2>
				</div>
				<p className="max-w-lg text-muted-foreground leading-relaxed">
					Our operational network connects supply, infrastructure and market
					expertise across strategic energy corridors.
				</p>
			</div>
			<div className="relative map-grid bg-[#08101f] mt-14 border border-border rounded-[20px] min-h-90 overflow-hidden">
				{points.map(([left, top, label]) => (
					<div key={label} className="absolute" style={{ left, top }}>
						<span className="map-pulse" />
						<div className="mt-2 ml-4 font-semibold text-[9px] text-muted-foreground md:text-[10px] xl:text-[11px] uppercase tracking-[.18em] whitespace-nowrap">
							{label}
						</div>
					</div>
				))}
				<div className="bottom-6 left-6 absolute pl-4 border-destructive border-l-2">
					<strong className="text-white text-lg md:text-xl xl:text-2xl">
						18
					</strong>
					<p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
						strategic markets
					</p>
				</div>
			</div>
		</section>
	);
}
