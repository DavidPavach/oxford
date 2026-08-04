import { motion } from "framer-motion";
import { DocumentFilter, ScanBarcode, ShieldSecurity } from "iconsax-reactjs";

export default function VerifyLoading({ code }: { code: string }) {
	return (
		<main className="flex flex-col justify-center items-center mx-auto py-20 max-w-screen-2xl">
			{/* Scanning orb */}
			<div className="relative flex justify-center items-center size-32 md:size-36 xl:size-40">
				<motion.div
					className="absolute inset-0 border border-accent/20 rounded-full"
					animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
					transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute inset-3 border border-primary/30 rounded-full"
					animate={{ rotate: 360 }}
					transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
					style={{
						borderTopColor: "#D61F26",
						borderTopWidth: 2,
						borderRightColor: "transparent",
					}}
				/>
				<div className="flex justify-center items-center bg-primary shadow-[0_8px_40px_rgba(8,31,77,.3)] rounded-full size-20 md:size-22 xl:size-24">
					<DocumentFilter className="size-10 md:size-11 xl:size-12 text-primary-foreground" />
				</div>
			</div>

			{/* Scanning line badge */}
			<motion.div
				className="flex items-center gap-2 bg-primary/5 mt-10 px-4 py-2 rounded-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<ScanBarcode className="size-3 md:size-3.5 xl:size-4 text-accent" />
				<span className="font-mono font-bold text-[10px] text-primary md:text-[11px] md:text-xs uppercase tracking-[.2em]">
					Verifying against corporate registry
				</span>
			</motion.div>

			<motion.p
				className="mt-4 text-[11px] text-muted-foreground md:text-xs xl:text-sm text-center"
				animate={{ opacity: [0.4, 1, 0.4] }}
				transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
			>
				Cross-referencing code ${code.toUpperCase()}
			</motion.p>

			<div className="flex items-center gap-1.5 mt-8">
				{[0, 1, 2, 3, 4].map((i) => (
					<motion.span
						key={i}
						className="bg-accent rounded-full size-1.5"
						animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
						transition={{
							duration: 1.2,
							repeat: Infinity,
							delay: i * 0.15,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			<div className="flex items-center gap-2 mt-10 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase tracking-[.18em]">
				<ShieldSecurity className="size-3 md:size-3.5 xl:size-4" /> Secured
				channel · Corporations Canada records
			</div>
		</main>
	);
}
