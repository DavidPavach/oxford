import { DocumentText1, DocumentUpload, Trash } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-fox-toast";
import { useFileUpload } from "#/services/mutations";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const ALLOWED_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif",
	"image/svg+xml",

	"application/pdf",

	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

interface UploadItem {
	id: string;
	file: File;
	preview?: string;
}

const Upload = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const uploadFile = useFileUpload();

	const [dragOver, setDragOver] = useState<boolean>(false);
	const [uploading, setUploading] = useState<boolean>(false);
	const [items, setItems] = useState<UploadItem[]>([]);

	useEffect(() => {
		return () => {
			items.forEach((item) => {
				if (item.preview) {
					URL.revokeObjectURL(item.preview);
				}
			});
		};
	}, [items]);

	function handleFiles(files: FileList | null) {
		if (!files) return;
		const validFiles: UploadItem[] = [];
		for (const file of Array.from(files)) {
			if (!ALLOWED_TYPES.includes(file.type)) {
				toast.error(`${file.name} is not a supported file type.`);
				continue;
			}
			if (file.size > MAX_FILE_SIZE) {
				toast.error(`${file.name} exceeds the 50MB limit.`);
				continue;
			}
			validFiles.push({
				id: crypto.randomUUID(),
				file,
				preview: file.type.startsWith("image/")
					? URL.createObjectURL(file)
					: undefined,
			});
		}
		setItems((prev) => [...prev, ...validFiles]);
	}

	function removeFile(id: string) {
		setItems((prev) => {
			const item = prev.find((x) => x.id === id);
			if (item?.preview) {
				URL.revokeObjectURL(item.preview);
			}
			return prev.filter((x) => x.id !== id);
		});
	}

	async function uploadAllFiles() {
		if (!items.length) return;
		setUploading(true);
		for (const item of [...items]) {
			try {
				await uploadFile.mutateAsync(item.file);
				toast.success(`${item.file.name} uploaded successfully.`);
				removeFile(item.id);
			} catch (error) {
				const message =
					error instanceof Error
						? error.message
						: `Failed to upload ${item.file.name}.`;

				toast.error(message);
			}
		}
		setUploading(false);
	}

	return (
		<>
			<main
				onDragOver={(e) => {
					e.preventDefault();
					setDragOver(true);
				}}
				onDragLeave={() => setDragOver(false)}
				onDrop={(e) => {
					e.preventDefault();
					setDragOver(false);
					handleFiles(e.dataTransfer.files);
				}}
				className={`relative rounded-2xl border-2 border-dashed p-6 md:p-8 xl:p-10 text-center transition-colors ${
					dragOver ? "border-accent bg-accent/5" : "border-border"
				}`}
			>
				<input
					ref={inputRef}
					id="vault-upload"
					type="file"
					multiple
					accept="
						image/*,
						application/pdf,
						application/msword,
						application/vnd.openxmlformats-officedocument.wordprocessingml.document
					"
					className="hidden"
					onChange={(e) => {
						handleFiles(e.target.files);
						e.target.value = "";
					}}
				/>

				<label htmlFor="vault-upload" className="cursor-pointer">
					<div className="flex justify-center items-center bg-primary mx-auto mb-4 rounded-full size-10 md:size-12 xl:size-14 text-primary-foreground">
						{uploading ? (
							<Loader2 className="size-5 md:size-6 xl:size-7 animate-spin" />
						) : (
							<DocumentUpload className="size-5 md:size-6 xl:size-7" />
						)}
					</div>

					<strong className="font-medium text-sm md:text-base xl:text-lg">
						{uploading ? "Uploading..." : "Drop files here or click to upload"}
					</strong>

					<p className="mt-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
						Images, PDFs and Word documents
						<br />
						Maximum file size: <strong>50 MB</strong>
					</p>
				</label>
			</main>

			{items.length > 0 && (
				<>
					<div className="gap-4 grid md:grid-cols-2 xl:grid-cols-3 mt-6">
						{items.map((item) => (
							<div
								key={item.id}
								className="flex items-center gap-3 p-2 border border-border rounded-xl"
							>
								{item.preview ? (
									<img
										src={item.preview}
										alt={item.file.name}
										className="rounded size-12 md:size-13 xl:size-14 object-cover"
									/>
								) : (
									<div className="flex justify-center items-center bg-muted rounded size-14 md:size-15 xl:size-16">
										<DocumentText1 className="size-6 md:size-6.5 xl:size-7" />
									</div>
								)}

								<div className="flex-1 min-w-0">
									<p className="font-medium text-[11px] md:text-xs xl:text-sm truncate">
										{item.file.name}
									</p>

									<p className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
										{(item.file.size / 1024 / 1024).toFixed(2)} MB
									</p>
								</div>

								<button
									type="button"
									onClick={() => removeFile(item.id)}
									disabled={uploading}
									className="bg-muted hover:bg-destructive disabled:opacity-50 p-2 rounded duration-200 cursor-pointer disabled:pointer-events-none"
								>
									<Trash className="size-4 md:size-4.5 xl:size-5" />
								</button>
							</div>
						))}
					</div>

					<div className="flex justify-end mt-6">
						<button
							type="button"
							onClick={uploadAllFiles}
							disabled={uploading}
							className="bg-primary disabled:opacity-50 px-5 py-2 rounded-lg font-medium text-primary-foreground transition-colors cursor-pointer disabled:pointer-events-none"
						>
							{uploading ? (
								<span className="flex items-center gap-2">
									<Loader2 className="size-4 animate-spin" />
									Uploading...
								</span>
							) : (
								`Upload ${items.length} File${items.length > 1 ? "s" : ""}`
							)}
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default Upload;
