import {
	Danger,
	Document,
	DocumentDownload,
	DocumentText1,
	Eye,
	Gallery,
	Music,
	Refresh2,
	SearchNormal,
	Trash,
	Video,
} from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "react-fox-toast";
import { useDeleteMedia } from "#/services/mutations";
import { useAllMedia } from "#/services/queries";

const CATEGORIES = [
	{ id: "all", label: "All" },
	{ id: "document", label: "Document" },
	{ id: "pdf", label: "PDF" },
	{ id: "spreadsheet", label: "Spread Sheet" },
	{ id: "image", label: "Image" },
	{ id: "audio", label: "Audio" },
	{ id: "other", label: "Other" },
] as const;

const Body = () => {
	const { data, isLoading, isError, refetch } = useAllMedia();

	const [deletedId, setDeletedId] = useState<string>("");
	const [query, setQuery] = useState<string>("");
	const [category, setCategory] = useState<string>("all");

	const media = data?.rows || [];

	const filtered = useMemo(() => {
		return media.filter((item) => {
			if (category !== "all" && item.mediaType !== category) {
				return false;
			}

			if (query && !item.fileName.toLowerCase().includes(query.toLowerCase())) {
				return false;
			}

			return true;
		});
	}, [media, query, category]);

	const counts = useMemo(() => {
		return {
			all: media.length,
			document: media.filter((i) => i.mediaType === "document").length,
			pdf: media.filter((i) => i.mediaType === "pdf").length,
			spreadsheet: media.filter((i) => i.mediaType === "spreadsheet").length,
			image: media.filter((i) => i.mediaType === "image").length,
			audio: media.filter((i) => i.mediaType === "audio").length,
			other: media.filter((i) => i.mediaType === "other").length,
		};
	}, [media]);

	// Functions
	const deleteMedia = useDeleteMedia();
	const handleDeletion = (id: string) => {
		setDeletedId(id);
		toast.custom(
			<section className="text-[11px] md:text-xs xl:text-sm">
				<p className="font-medium">Do you wish to delete this media?</p>
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
							deleteMedia.mutate(
								{ data: { id } },
								{
									onSuccess: () => {
										setDeletedId("");
										toast.success("Media deleted successfully.");
									},
									onError: (error) => {
										setDeletedId("");
										toast.error(error.message ?? "Failed to delete media.");
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

	return (
		<main>
			{/* Toolbar */}
			<div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4 mt-10">
				<div className="flex flex-wrap items-center gap-2">
					{CATEGORIES.map((c) => (
						<button
							type="button"
							key={c.id}
							onClick={() => setCategory(c.id)}
							className={`rounded-full px-4 py-2 text-[10px] md:text-[11px] xl:text-xs font-semibold uppercase tracking-widest transition ${
								category === c.id
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground"
							}`}
						>
							{c.label}
							<span className="opacity-50 ml-1">{counts[c.id]}</span>
						</button>
					))}
				</div>

				<div className="relative">
					<SearchNormal className="top-1/2 left-3 absolute size-3 md:size-3.5 xl:size-4 text-muted-foreground -translate-y-1/2" />

					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search files..."
						className="py-2 pr-4 pl-9 border border-border focus:border-primary rounded-lg outline-none w-full text-[11px] md:text-xs xl:text-sm"
					/>
				</div>
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

			<div className="gap-4 grid md:grid-cols-2 xl:grid-cols-3 mt-4">
				{filtered.map((media) => (
					<div
						key={media.id}
						className="flex items-center gap-3 p-3 border border-border rounded-xl"
					>
						<a
							href={media.url}
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0"
						>
							<MediaPreview media={media} />
						</a>

						<div className="flex-1 min-w-0">
							<a
								href={media.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block hover:text-primary transition-colors"
							>
								<p className="font-medium text-[11px] md:text-xs xl:text-sm">
									{media.fileName}
								</p>
							</a>

							<p className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs uppercase">
								{media.mediaType}
							</p>

							<p className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
								{(media.size / 1024 / 1024).toFixed(2)} MB
							</p>
						</div>

						<div className="flex items-center gap-2">
							<a
								href={media.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex justify-center items-center bg-muted hover:bg-primary rounded-lg size-8 md:size-9 xl:size-10 hover:text-primary-foreground transition-colors"
								title="Open"
							>
								<Eye className="size-4 md:size-4.5 xl:size-5" />
							</a>

							<button
								type="button"
								title="Delete"
								onClick={() => handleDeletion(media.id)}
								disabled={deleteMedia.isPending}
								className="flex justify-center items-center bg-muted hover:bg-destructive disabled:opacity-50 rounded-lg size-8 md:size-9 xl:size-10 hover:text-destructive-foreground transition-colors cursor-pointer"
							>
								{deletedId === media.id ? (
									<Loader2 className="size-4 md:size-4.5 xl:size-5 animate-spin" />
								) : (
									<Trash className="size-4 md:size-4.5 xl:size-5" />
								)}
							</button>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Body;

export function MediaPreview({ media }: { media: MediaRecord }) {
	switch (media.mediaType) {
		case "image":
			return (
				<img
					src={media.url}
					alt={media.fileName}
					className="rounded-lg size-14 object-cover"
				/>
			);

		case "pdf":
			return (
				<div className="flex justify-center items-center bg-red-50 dark:bg-red-950/30 rounded-lg size-10 md:size-12 xl:size-14 text-red-600">
					<DocumentDownload
						variant="Bold"
						className="size-5 md:size-6 xl:size-7"
					/>
				</div>
			);

		case "document":
			return (
				<div className="flex justify-center items-center bg-blue-50 dark:bg-blue-950/30 rounded-lg size-10 md:size-12 xl:size-14 text-blue-600">
					<DocumentText1
						variant="Bold"
						className="size-5 md:size-6 xl:size-7"
					/>
				</div>
			);

		case "spreadsheet":
			return (
				<div className="flex justify-center items-center bg-emerald-50 dark:bg-emerald-950/30 rounded-lg size-10 md:size-12 xl:size-14 text-emerald-600">
					<Document variant="Bold" className="size-5 md:size-6 xl:size-7" />
				</div>
			);

		case "video":
			return (
				<div className="flex justify-center items-center bg-violet-50 dark:bg-violet-950/30 rounded-lg size-10 md:size-12 xl:size-14 text-violet-600">
					<Video variant="Bold" className="size-5 md:size-6 xl:size-7" />
				</div>
			);

		case "audio":
			return (
				<div className="flex justify-center items-center bg-amber-50 dark:bg-amber-950/30 rounded-lg size-10 md:size-12 xl:size-14 text-amber-600">
					<Music variant="Bold" className="size-5 md:size-6 xl:size-7" />
				</div>
			);

		default:
			return (
				<div className="flex justify-center items-center bg-muted rounded-lg size-10 md:size-12 xl:size-14">
					<Gallery variant="Bold" className="size-5 md:size-6 xl:size-7" />
				</div>
			);
	}
}
