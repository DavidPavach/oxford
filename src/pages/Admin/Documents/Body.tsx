import { Danger, DocumentText1, Edit2, Refresh2, Trash } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-fox-toast";
import { Overlay } from "#/components/Overlay";
import { useDeleteDocument, useUpdateDocument } from "#/services/mutations";
import { useAllDocuments } from "#/services/queries";
import { formatDate } from "#/utils/format";
import { STATUES } from "./Form";

const STATUS_COLORS: Record<string, string> = {
	on_hold:
		"bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
	active:
		"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
	revoked: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

const Body = () => {
	const { data, isLoading, isError, refetch } = useAllDocuments();

	const total = data?.total || 0;
	const documents: Documents[] = data?.rows || [];

	const [deletedId, setDeletedId] = useState<string>("");
	const [edit, setEdit] = useState<Documents | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<string>(
		edit?.status || "",
	);
	const [viewDocs, setViewDocs] = useState<boolean>(false);

	// Functions
	const cancelEdit = () => setEdit(null);
	const toggleView = () => setViewDocs((prev) => !prev);

	const deleteDoc = useDeleteDocument();
	const handleDeletion = (id: string) => {
		setDeletedId(id);
		toast.custom(
			<section className="text-[11px] md:text-xs xl:text-sm">
				<p className="font-medium">Do you wish to delete this document?</p>
				<p className="mt-1 text-muted-foreground">
					This action cannot be undone.
				</p>
				<div className="flex justify-end gap-2 mt-4">
					<button
						type="button"
						onClick={() => {
							toast.removeAll();
							setDeletedId("");
						}}
						className="bg-muted hover:bg-muted/80 px-3 py-2 rounded-md text-muted-foreground transition cursor-pointer"
					>
						Cancel
					</button>
					<button
						type="button"
						onClick={() => {
							toast.removeAll();
							deleteDoc.mutate(
								{ data: { id } },
								{
									onSuccess: () => {
										setDeletedId("");
										toast.success("The document was deleted successfully.");
									},
									onError: (error) => {
										setDeletedId("");
										toast.error(error.message ?? "Failed to delete document.");
									},
								},
							);
						}}
						className="bg-destructive hover:opacity-90 px-3 py-2 rounded-md text-destructive-foreground transition cursor-pointer"
					>
						Delete
					</button>
				</div>
			</section>,
			{
				duration: Infinity,
			},
		);
	};

	const updateDoc = useUpdateDocument();
	const handleUpdate = () => {
		if (!edit) return toast.error("Kindly select a document to continue");

		updateDoc.mutate(
			{ data: { id: edit.id, status: selectedStatus } },
			{
				onSuccess: () => {
					toast.success("The document was updated successfully.");
					cancelEdit();
				},
				onError: (error) => {
					setDeletedId("");
					toast.error(error.message ?? "Failed to update document.");
				},
			},
		);
	};

	return (
		<>
			{edit && (
				<Overlay open={!!edit} onClose={cancelEdit}>
					<main className="p-4 md:p-6 xl:p-8 border border-border rounded-lg w-full min-w-80 max-w-screen-2xl">
						<p className="mt-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
							Modify the current status of this document.
						</p>
						<section className="space-y-4">
							<p>Edit {edit.documentNumber} Status</p>
							<div className="mt-4">
								<p className="text-[11px] md:text-xs xl:text-sm">
									Select New Status to Continue
								</p>
								<div className="flex flex-wrap gap-3 mt-2">
									{STATUES.map((status) => (
										<button
											key={status.value}
											type="button"
											onClick={() => setSelectedStatus(status.value)}
											className={`px-4 py-1 rounded-md text-[10px] md:text-[11px] cursor-pointer xl:text-xs ${edit.status === status.value && selectedStatus === "" ? "bg-primary" : selectedStatus === status.value ? "bg-primary" : "bg-muted"}`}
										>
											{status.label}
										</button>
									))}
								</div>
							</div>
							<div className="flex justify-end gap-3 mt-10">
								<button
									type="button"
									onClick={() => {
										cancelEdit();
										setSelectedStatus("");
									}}
									className="px-4 py-2 border border-border hover:border-destructive rounded-lg transition duration-200 cursor-pointer"
								>
									Cancel
								</button>

								<button
									type="button"
									onClick={() => handleUpdate()}
									disabled={updateDoc.isPending}
									className="flex items-center gap-2 bg-primary disabled:opacity-50 px-4 py-2 rounded-lg text-primary-foreground transition cursor-pointer"
								>
									{updateDoc.isPending && (
										<Loader2 className="size-4 animate-spin" />
									)}

									{updateDoc.isPending ? "Updating..." : "Update Status"}
								</button>
							</div>
						</section>
					</main>
				</Overlay>
			)}
			<main className="mt-10">
				<h1>
					Existing Document{total > 0 && total > 1 ? "s" : ""} {total}
				</h1>
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
				<section className="grid md:grid-cols-2 xl:grid-cols-3 mt-4">
					{documents.map((document) => (
						<div
							key={document.id}
							className="flex items-center gap-3 p-3 border border-border rounded-xl"
						>
							<div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 md:size-12 xl:size-14 shrink-0">
								<DocumentText1
									variant="Bold"
									className="size-5 md:size-6 xl:size-7 text-primary"
								/>
							</div>

							<div className="flex-1 min-w-0">
								<p className="font-semibold text-[11px] md:text-xs xl:text-sm truncate">
									{document.documentNumber}
								</p>

								<div className="flex items-center gap-2 mt-1">
									<span
										className={`rounded-full px-2 py-1 text-[9px] md:text-[10px] xl:text-[11px] font-semibold uppercase ${
											STATUS_COLORS[document.status.toLowerCase()] ??
											"bg-muted text-muted-foreground"
										}`}
									>
										{STATUES.find((status) => status.value === document.status)
											?.label || ""}
									</span>

									<span className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
										{document.files.length} file
										{document.files.length !== 1 ? "s" : ""}
									</span>
									<button
										type="button"
										onClick={toggleView}
										className={`px-2 py-0.5 rounded-sm text-[10px] md:text-[11px] xl:text-xs duration-200 unset ${viewDocs ? "text-destructive hover:bg-destructive hover:text-destructive-foreground" : "text-muted-foreground hover:text-primary-foreground hover:bg-primary"}`}
									>
										{viewDocs ? "Click to close" : "Click to view"}
									</button>
								</div>

								{viewDocs &&
									document.files.map((file, index) => (
										<a
											key={file}
											href={file}
											target="_blank"
											rel="noopener noreferrer"
											className="mr-2 text-[11px] hover:text-primary md:text-xs xl:text-sm underline underline-offset-3 duration-200"
										>
											Document {index + 1}
										</a>
									))}
								<p className="mt-1 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
									{formatDate(document.createdAt)}
								</p>
							</div>

							<div className="flex flex-col gap-2">
								<button
									type="button"
									onClick={() => setEdit(document)}
									className="flex justify-center items-center bg-muted hover:bg-primary rounded-lg size-6 md:size-7 xl:size-8 hover:text-primary-foreground transition-colors cursor-pointer"
									title="Edit"
								>
									<Edit2 className="size-3 md:size-3.5 xl:size-4" />
								</button>

								<button
									disabled={deleteDoc.isPending}
									type="button"
									onClick={() => handleDeletion(document.id)}
									className="flex justify-center items-center bg-muted hover:bg-destructive rounded-lg size-6 md:size-7 xl:size-8 hover:text-destructive-foreground transition-colors cursor-pointer"
									title="Delete"
								>
									{deletedId === document.id ? (
										<Loader2 className="size-3 md:size-3.5 xl:size-4 animate-spin" />
									) : (
										<Trash className="size-3 md:size-3.5 xl:size-4" />
									)}
								</button>
							</div>
						</div>
					))}
				</section>
			</main>
		</>
	);
};

export default Body;
