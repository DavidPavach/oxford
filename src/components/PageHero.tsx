import { motion } from "framer-motion";

type PageProps = {
	eyebrow: string;
	title: string;
	subtitle: string;
	dark?: boolean;
};

export default function PageHero({
	eyebrow,
	title,
	subtitle,
	dark = false,
}: PageProps) {
	return (
		<section
			className={`pt-40 pb-20 px-4 sm:px-6 md:px-8 xl:px-10 ${dark ? "bg-[#05070C] text-white" : "bg-[#F5F7FA] dark:bg-[#05070C] border-b border-border dark:text-white"}`}
		>
			<div className="mx-auto max-w-screen-2xl">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					{eyebrow && (
						<p className="mb-6 text-destructive eyebrow">{eyebrow}</p>
					)}
					<h1 className="max-w-5xl font-heading font-semibold text-[clamp(3rem,7vw,7rem)] leading-[.88] tracking-[-.06em]">
						{title}
					</h1>
					{subtitle && (
						<p className="mt-8 max-w-2xl text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
							{subtitle}
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
}
