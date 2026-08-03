import { BatteryFull, Send2 } from "iconsax-reactjs";

export default function Sustainability() {
	return (
		<section
			id="sustainability"
			className="bg-white dark:bg-[#0E1628] section-shell"
		>
			<div className="grid lg:grid-cols-2 bg-[#E9F0EC] dark:bg-[#081F4D] rounded-[20px] overflow-hidden">
				<div className="flex flex-col justify-between p-4 md:p-6 lg:p-14 xl:p-8">
					<div>
						<p className="eyebrow">
							<BatteryFull className="size-3 md:size-3.5 xl:size-4" />{" "}
							Responsible energy
						</p>
						<h2 className="mt-6 font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-tight">
							Performance measured beyond production.
						</h2>
						<p className="mt-7 max-w-lg text-slate-600 dark:text-slate-300 leading-relaxed">
							We align operational discipline with emissions reduction,
							workforce safety and durable community partnerships.
						</p>
					</div>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 mt-12 font-semibold text-[11px] md:text-xs xl:text-sm hover:-translate-y-1 duration-200"
					>
						Explore our ESG approach{" "}
						<Send2 className="size-4 md:size-4.5 xl:size-5" />
					</a>
				</div>
				<img
					src="/sustainability.png"
					alt="Integrated lower-carbon energy infrastructure"
					className="w-full min-h-105"
				/>
			</div>
		</section>
	);
}
