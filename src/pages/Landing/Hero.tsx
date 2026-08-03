import { motion } from "framer-motion";
import { ArrowDown3, Send2 } from "iconsax-reactjs";

export default function Hero() {
	return (
		<section
			id="top"
			className="relative bg-[#05070C] border-border border-b min-h-[92vh] overflow-hidden text-white"
		>
			<img
				src="/hero.png"
				alt="Offshore energy platform at blue hour"
				className="absolute inset-0 opacity-70 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 bg-linear-to-r from-[#05070C] via-[#05070C]/45 to-transparent" />
			<div className="absolute inset-0 bg-linear-to-t from-[#05070C] via-transparent to-[#05070C]/20" />
			<div className="relative flex flex-col justify-end mx-auto px-4 sm:px-6 md:px-8 xl:px-10 pt-36 pb-16 lg:pb-20 max-w-screen-2xl min-h-[92vh]">
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					className="max-w-5xl"
				>
					<p className="text-muted-foreground eyebrow">
						<span className="status-dot" /> Energy for enduring progress
					</p>
					<h1 className="mt-6 max-w-4xl font-heading font-semibold text-[clamp(3.4rem,8vw,8.2rem)] leading-[.86] tracking-[-.065em]">
						Precision
						<br />
						at global scale.
					</h1>
					<div className="flex md:flex-row flex-col md:justify-between md:items-end gap-6 mt-10 pt-7 border-white/20 border-t">
						<p className="max-w-xl text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
							An engineering-led energy company advancing secure supply,
							resilient infrastructure and responsible growth across the energy
							value chain.
						</p>
						<a
							href="/operations"
							className="bg-white text-[#081F4D] premium-button"
						>
							Explore our operations{" "}
							<Send2 className="size-4 md:size-4.5 xl:size-5" />
						</a>
					</div>
				</motion.div>
				<a
					href="/company"
					className="hidden right-8 bottom-8 absolute lg:flex items-center gap-3 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase tracking-[.2em] animate-bounce"
				>
					Discover <ArrowDown3 className="size-4 md:size-4.5 xl:size-5" />
				</a>
			</div>
		</section>
	);
}
