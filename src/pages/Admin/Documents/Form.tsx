import { Danger, Refresh2 } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-fox-toast";
import { useCreateDocument } from "#/services/mutations";
import { useAllMedia } from "#/services/queries";
import { genDocNo } from "#/utils/generate";
import { MediaPreview } from "../Vault/Body";

const DOCUMENT_TYPES = [
	{ value: "TSR", label: "Tank Storage Receipt" },
	{ value: "CI", label: "Commercial Invoice" },
	{ value: "PI", label: "Proforma Invoice" },
	{ value: "AL", label: "Allocation Letter" },
	{ value: "PP", label: "Product Passport" },
	{ value: "COQ", label: "Certificate of Quality" },
	{ value: "COQT", label: "Certificate of Quantity" },
	{ value: "BL", label: "Bill of Lading" },
	{ value: "SA", label: "Storage Agreement" },
	{ value: "IR", label: "Injection Report" },
	{ value: "DTA", label: "Dip Test Authorization" },
	{ value: "ATV", label: "Authority to Verify" },
	{ value: "NOR", label: "Notice of Readiness" },
	{ value: "COO", label: "Certificate of Origin" },
	{ value: "SI", label: "Shipping Instruction" },
	{ value: "DGD", label: "Dangerous Goods Declaration" },
	{ value: "MSDS", label: "Material Safety Data Sheet" },
	{ value: "SPA", label: "Sales Purchase Agreement" },
	{ value: "COA", label: "Certificate of Analysis" },
	{ value: "CLS", label: "Commitment letter to supply" },
	{ value: "CPA", label: "Certificate of product Availability" },
	{ value: "NOR", label: "Notice of Readiness" },
	{ value: "COQ", label: "Certificate of Quality" },
	{ value: "POAC", label: "Product Ownership & Allocation certificate" },
	{ value: "ITIR", label: "In-Tank Inventory Report" },
];

export const STATUES = [
	{ value: "on_hold", label: "On Hold" },
	{ value: "revoked", label: "Revoked" },
	{ value: "active", label: "Active" },
];

const Form = ({ onClose }: { onClose: () => void }) => {
	const { data, isLoading, isError, refetch } = useAllMedia();

	const media = data?.rows || [];

	const [selected, setSelected] = useState<string[]>([]);
	const [newDocNo, setNewDocNo] = useState<string>("");
	const [activeType, setActiveType] = useState<string>("");
	const [selectedStatus, setSelectedStatus] = useState<string>("");

	// Functions
	const handleNew = (type: string) => {
		setActiveType(type);
		const newDocNo = genDocNo(type);
		setNewDocNo(newDocNo);
	};

	const toggleValue = (value: string) => {
		setSelected((prev) =>
			prev.includes(value)
				? prev.filter((item) => item !== value)
				: [...prev, value],
		);
	};

	const newDoc = useCreateDocument();
	const handleSubmit = () => {
		if (!activeType.trim())
			return toast.error("Kindly select an Document type");

		if (!selectedStatus.trim())
			return toast.error("Kindly select a status for the document");

		const payload = {
			documentNumber: newDocNo,
			files: selected,
			status: selectedStatus,
		};
		newDoc.mutate(
			{ data: payload },
			{
				onSuccess: () => {
					toast.success("Document was created successfully.");
					onClose();
				},
				onError: (error) => {
					toast.error(error.message ?? "Failed to create document.");
				},
			},
		);
	};

	return (
		<main className="bg-background p-4 md:p-6 xl:p-8 border border-border rounded-xl w-full max-w-screen-2xl">
			<h1 className="font-heading font-semibold">Create New Document</h1>
			<section className="mt-8">
				<p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
					Select Document Type
				</p>
				<div className="flex flex-wrap gap-3">
					{DOCUMENT_TYPES.map((doc) => (
						<button
							key={doc.value}
							type="button"
							onClick={() => handleNew(doc.value)}
							className={`px-4 py-1 rounded-md text-[10px] md:text-[11px] cursor-pointer xl:text-xs ${activeType === doc.value ? "bg-primary" : "bg-muted"}`}
						>
							{doc.label}
						</button>
					))}
				</div>
				<p className="mt-8 mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
					Select Status
				</p>
				<div className="flex flex-wrap gap-3">
					{STATUES.map((status) => (
						<button
							key={status.value}
							type="button"
							onClick={() => setSelectedStatus(status.value)}
							className={`px-4 py-1 rounded-md text-[10px] md:text-[11px] cursor-pointer xl:text-xs ${selectedStatus === status.value ? "bg-primary" : "bg-muted"}`}
						>
							{status.label}
						</button>
					))}
				</div>
				{isLoading && (
					<div className="flex justify-center items-center mt-4 h-64">
						<Loader2 className="size-5 md:size-5.5 xl:size-6 text-muted-foreground animate-spin" />
					</div>
				)}
				{isError && (
					<div className="flex justify-center items-center mt-4 h-80">
						<div className="flex flex-col items-center bg-card shadow p-4 md:p-6 xl:p-8 border border-border rounded-2xl w-full max-w-md text-center">
							<div className="flex justify-center items-center bg-destructive/10 rounded-full size-12 md:size-14 xl:size-16">
								<Danger className="size-6 md:size-7 xl:size-8 text-destructive" />
							</div>

							<h2 className="mt-5 font-semibold text-card-foreground text-base md:text-lg xl:text-xl">
								Oops!
							</h2>

							<p className="mt-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
								"Failed To Load Your Image and Document Registry"
							</p>

							<button
								type="button"
								onClick={() => refetch()}
								className="inline-flex items-center gap-2 bg-primary hover:opacity-90 mt-6 px-5 py-3 rounded-xl font-medium text-[11px] text-primary-foreground md:text-xs xl:text-sm transition-opacity"
							>
								<Refresh2 className="size-4 md:size-4.5 xl:size-5" />
								Try Again
							</button>
						</div>
					</div>
				)}
				<div className="gap-4 grid md:grid-cols-2 xl:grid-cols-3 mt-8">
					{media.map((media) => (
						<button
							onClick={() => toggleValue(media.url)}
							type="button"
							key={media.id}
							className={`flex items-center gap-3 cursor-pointer p-3 ${selected.includes(media.url) ? "bg-primary/10 border-primary" : "border-border"} border  rounded-xl text-left`}
						>
							<MediaPreview media={media} />
							<div className="flex-1 min-w-0">
								<p className="font-medium text-[11px] md:text-xs xl:text-sm">
									{media.fileName}
								</p>
							</div>
						</button>
					))}
				</div>
			</section>
			<button
				onClick={handleSubmit}
				disabled={newDoc.isPending}
				type="button"
				className="bg-primary hover:bg-primary/80 mt-8 py-3 rounded-lg w-full text-[11px] text-primary-foreground md:text-xs xl:text-sm cursor-pointer"
			>
				{newDoc.isPending ? "Creating..." : "Create Document"}
			</button>
			<section className="space-y-2 mt-8">
				<p className="font-heading font-semibold">Summary</p>
				<p>
					<span className="text-muted-foreground">New Document Number: </span>
					{newDocNo}
				</p>
				<p>
					<span className="text-muted-foreground">Status: </span>
					{STATUES.find((status) => status.value === selectedStatus)?.label ||
						""}
				</p>
			</section>
		</main>
	);
};

export default Form;
