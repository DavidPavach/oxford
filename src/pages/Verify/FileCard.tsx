import { motion } from "framer-motion";
import { Copy, CopySuccess, DocumentText, Link1 } from "iconsax-reactjs";
import { useState } from "react";
import { toast } from "react-fox-toast";

export default function FileCard({
	url,
	file,
	index,
}: {
	url: string;
	file: string;
	index: number;
}) {
	const [copied, setCopied] = useState(false);

	function copyLink() {
		navigator.clipboard?.writeText(url);
		toast.info("Text was copied to clipboard");
		setCopied(true);
		setTimeout(() => setCopied(false), 1800);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.05 + index * 0.06 }}
			className="group flex flex-col border border-border rounded-xl overflow-hidden"
		>
			<div className="relative bg-[#F5F7FA] dark:bg-[#0E1628] h-52">
				<div className="flex flex-col justify-center items-center h-full">
					<DocumentText
						className="size-8 md:size-8.5 xl:size-9"
						variant="Bold"
					/>
				</div>
				<span className="top-3 left-3 absolute bg-primary/90 px-2 py-1 rounded-md font-mono font-bold text-[10px] text-primary-foreground">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>
			<div className="flex items-center gap-2 p-3">
				<a
					href={file}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-1 justify-center items-center gap-1.5 bg-primary hover:bg-primary/80 py-2 rounded-lg font-semibold text-[11px] text-primary-foreground md:text-xs xl:text-sm transition duration-200 cursor-pointer"
				>
					<Link1 className="size-3 md:size-3.5 xl:size-4" /> Open
				</a>
				<button
					type="button"
					onClick={copyLink}
					className="flex flex-1 justify-center items-center gap-1.5 bg-[#F5F7FA] hover:bg-slate-200 dark:bg-[#0E1628] dark:hover:bg-white/10 py-2 rounded-lg font-semibold text-[11px] md:text-xs xl:text-sm transition cursor-pointer unset"
				>
					{copied ? (
						<span className="text-[#00A76F]">
							<CopySuccess className="size-3 md:size-3.5 xl:size-4" /> Copied
						</span>
					) : (
						<>
							<Copy className="size-3 md:size-3.5 xl:size-4" /> Copy
						</>
					)}
				</button>
			</div>
		</motion.div>
	);
}
