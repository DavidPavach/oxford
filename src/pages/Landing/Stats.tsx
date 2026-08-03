import { motion } from "framer-motion";

const data = [
	["40+", "Years of operating heritage"],
	["18", "Strategic markets"],
	["99.8%", "Asset reliability"],
	["0", "Compromise on safety"],
];
export default function Stats() {
	return (
		<section className="bg-[#F5F7FA] dark:bg-[#0E1628] border-slate-200 border-y dark:border-white/10">
			<div className="grid grid-cols-2 lg:grid-cols-4 mx-auto max-w-screen-2xl">
				{data.map(([value, label], i) => (
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.08 }}
						viewport={{ once: true }}
						key={label}
						className="p-4 sm:p-6 md:p-8 xl:p-10 border-slate-200 dark:border-white/10 border-r last:border-r-0"
					>
						<strong className="font-heading font-semibold text-[#081F4D] dark:text-white text-2xl md:text-3xl xl:text-4xl lg:text-6xl tracking-tight">
							{value}
						</strong>
						<p className="mt-3 max-w-37.5 text-slate-500 text-xs leading-relaxed">
							{label}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
}
