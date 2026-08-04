import { motion } from "framer-motion";
import { Danger, Refresh } from "iconsax-reactjs";

export default function VerifyError({
	message,
	onRetry,
}: {
	message: string;
	onRetry: () => void;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.96 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4 }}
			className="flex flex-col justify-center items-center bg-destructive/30 mx-auto my-10 px-6 py-16 border border-destructive/20 rounded-2xl max-w-screen-2xl text-center"
		>
			{/* Pulsing alert ring */}
			<div className="relative flex justify-center items-center size-20 md:size-22 xl:size-24">
				<motion.span
					className="absolute inset-0 bg-destructive/10 rounded-full"
					animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
					transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
				/>
				<div className="flex justify-center items-center bg-destructive/10 rounded-full ring-1 ring-destructive/20 size-16 md:size-18 xl:size-20">
					<Danger className="size-8 md:size-9 xl:size-10 text-destructive" />
				</div>
			</div>

			<strong className="mt-8 font-medium text-destructive text-base md:text-lg xl:text-xl">
				Verification could not be completed
			</strong>
			<p className="mt-1 max-w-md text-[11px] text-foreground md:text-xs xl:text-sm leading-relaxed">
				{message ||
					"The code you entered could not be found in the corporate registry. Please double-check the code and try again."}
			</p>

			<button
				type="button"
				onClick={onRetry}
				className="inline-flex items-center gap-2 bg-primary hover:shadow mt-8 px-6 py-3 rounded-lg font-bold text-[10px] text-primary-foreground md:text-[11px xl:text-xs uppercase tracking-[.12em] transition hover:-translate-y-0.5 cursor-pointer"
			>
				<Refresh className="size-4 md:size-4.5 xl:size-5" /> Try Again
			</button>

			<p className="mt-6 text-[10px] text-foreground md:text-[11px] xl:text-xs uppercase tracking-[.18em]">
				Need help? Contact corporate@oxfordpetroleum.com
			</p>
		</motion.div>
	);
}
