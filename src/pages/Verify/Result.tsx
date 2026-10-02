import { motion } from "framer-motion";
import {
	Clock,
	Danger,
	DocumentText1,
	type Icon,
	TickCircle,
} from "iconsax-reactjs";
import { formatDate } from "#/utils/format";
import FileCard from "./FileCard";

const STATUS_CONFIG: Record<
	string,
	{ label: string; color: string; bg: string; border: string; Icon: Icon }
> = {
	active: {
		label: "Verified",
		color: "#00A76F",
		bg: "bg-[#00A76F]/10",
		border: "border-[#00A76F]/30",
		Icon: TickCircle,
	},
	on_hold: {
		label: "Pending Review",
		color: "#F59E0B",
		bg: "bg-[#F59E0B]/10",
		border: "border-[#F59E0B]/30",
		Icon: Clock,
	},
	revoked: {
		label: "Revoked",
		color: "#B91C1C",
		bg: "bg-[#B91C1C]/10",
		border: "border-[#B91C1C]/30",
		Icon: Danger,
	},
};
const Result = ({ doc }: { doc: Documents }) => {
	const cfg = STATUS_CONFIG[doc.status] || STATUS_CONFIG.pending;
	const Icon = cfg.Icon;

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="mx-auto p-4 py-20 max-w-screen-2xl"
		>
			{/* Status banner */}
			<div
				className={`flex items-center gap-4 rounded-2xl border ${cfg.border} ${cfg.bg} p-4 md:p-5 xl:p-6`}
			>
				<div
					className={`flex size-10 md:size-11 xl:size-12 items-center justify-center rounded-full ${cfg.bg}`}
				>
					<Icon
						className="size-5 md:size-5.5 xl:size-6"
						style={{ color: cfg.color }}
					/>
				</div>
				<div className="flex-1">
					<strong
						className="font-medium text-sm md:text-base xl:text-lg"
						style={{ color: cfg.color }}
					>
						{cfg.label}
					</strong>
					<p className="text-muted-foreground text-xs">
						{doc.status === "active" &&
							"This document has been issued by Oxford Petroleum Corporation (OPC), authenticated against official records, and is currently valid for its intended purpose."}
						{doc.status === "on_hold" &&
							"This document is temporarily suspended pending further action, review, compliance requirements, payment, or resolution of an operational matter."}
						{doc.status === "revoked" &&
							"This document has been revoked and is no longer valid. It should not be relied upon for any transaction or commercial purpose."}
					</p>
				</div>
			</div>

			{/* Metadata grid */}
			<div className="gap-4 grid sm:grid-cols-3 mt-6">
				{[
					["Document number", doc.documentNumber],
					["Date registered", formatDate(doc.createdAt)],
					["Last updated", formatDate(doc.updatedAt)],
				].map(([label, value]) => (
					<div
						key={label}
						className="bg-[#F5F7FA] dark:bg-[#0E1628] p-4 border border-border rounded-xl"
					>
						<span className="font-bold text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase">
							{label}
						</span>
						<p className="mt-1.5 font-heading font-semibold text-[11px] md:text-xs xl:text-sm">
							{value}
						</p>
					</div>
				))}
			</div>

			{/* Files */}
			<div className="mt-10">
				<div className="flex justify-between items-center pb-4 border-border border-b">
					<div>
						<p className="eyebrow">
							<DocumentText1 className="size-3 md:size-3.5 xl:size-4" />{" "}
							Document files
						</p>
						<h3 className="mt-2 font-medium text-base md:text-lg xl:text-xl">
							{doc.files.length} {doc.files.length === 1 ? "file" : "files"} in
							this set
						</h3>
					</div>
					<span className="hidden sm:block font-mono text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
						ID: {doc.id.slice(0, 8)}…
					</span>
				</div>
				{doc.files.length === 0 ? (
					<div className="flex flex-col justify-center items-center mt-8 py-16 border border-border border-dashed rounded-xl">
						<DocumentText1 className="mb-3 text-muted-foreground" size={28} />
						<p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
							No files attached to this verification.
						</p>
					</div>
				) : (
					<div className="gap-5 grid sm:grid-cols-2 lg:grid-cols-3 mt-8">
						{doc.files.map((file, i) => (
							<FileCard
								key={file}
								file={file}
								index={i}
								url={window.location.href}
							/>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Result;
