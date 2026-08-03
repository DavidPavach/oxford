import { Eye, SearchNormal, Sms, Trash } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-fox-toast";
import AdminError from "#/components/AdminError";
import AdminLoader from "#/components/AdminLoader";
import { Overlay } from "#/components/Overlay";
import { useDeleteContact } from "#/services/mutations";
import { useAllContacts } from "#/services/queries";
import { formatDate } from "#/utils/format";
import View from "./View";

const Body = () => {
	const { data, isLoading, isError, refetch } = useAllContacts();
	const [search, setSearch] = useState<string>("");
	const contacts: Contact[] = data?.rows || [];

	const [selected, setSelected] = useState<Contact | null>(null);
	const deleteContact = useDeleteContact();
	const [deletedId, setDeletedId] = useState<string>("");

	if (isLoading) return <AdminLoader />;

	if (isError)
		return (
			<AdminError
				message="Failed to Load your Contacts, Kindly press the button to reload."
				onRetry={refetch}
			/>
		);

	const filtered = contacts.filter((c) => {
		const matchSearch =
			c.fullName.toLowerCase().includes(search.toLowerCase()) ||
			c.organisation.toLowerCase().includes(search.toLowerCase()) ||
			c.email.toLowerCase().includes(search.toLowerCase());
		return matchSearch;
	});

	// Functions
	const handleClose = () => setSelected(null);

	const handleDeletion = (id: string) => {
		setDeletedId(id);
		toast.custom(
			<section className="text-[11px] md:text-xs xl:text-sm">
				<p className="font-medium">
					Do you wish to delete this contact request?
				</p>
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
							deleteContact.mutate(
								{ data: { id } },
								{
									onSuccess: () => {
										setDeletedId("");
										toast.success(
											"The contact request was deleted successfully.",
										);
									},
									onError: (error) => {
										setDeletedId("");
										toast.error(
											error.message ?? "Failed to delete contact request.",
										);
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
		<>
			{selected && (
				<Overlay
					open={!!selected}
					onClose={() => setSelected(null)}
					classNames="max-w-2xl"
				>
					<View contact={selected} onClose={handleClose} />
				</Overlay>
			)}
			{/* Filters */}
			<div className="relative mb-6 w-full text-[11px] md:text-xs xl:text-sm">
				<SearchNormal className="top-1/2 left-3 absolute size-3 md:size-3.5 xl:size-4 text-muted-foreground -translate-y-1/2" />
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search by name, organisation, email…"
					className="bg-inherit pl-9 border border-border focus:border-accent rounded-lg outline-0 w-full h-10"
				/>
			</div>
			{/* Table */}
			<div className="bg-card border border-border/50 rounded-xl overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="bg-muted/30 border-border/50 border-b">
								{["Contact", "Organisation", "Date", "Actions"].map((h) => (
									<th
										key={h}
										className="px-4 py-3 font-bold text-muted-foreground text-xs text-left uppercase tracking-wider"
									>
										{h}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{filtered.map((c) => (
								<tr
									key={c.id}
									className="hover:bg-muted/20 *:px-4 *:py-3 border-border/30 border-b *:text-[11px] *:md:text-xs *:xl:text-sm transition-colors"
								>
									<td>
										<div className="flex items-center gap-2.5">
											<div className="flex justify-center items-center bg-primary/10 size-8 font-bold text-primary text-sm shrink-0">
												{c.fullName.charAt(0)}
											</div>
											<div>
												<div className="font-medium">{c.fullName}</div>
												<div className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
													{c.email}
												</div>
											</div>
										</div>
									</td>
									<td>{c.organisation}</td>
									<td className="text-muted-foreground whitespace-nowrap">
										{formatDate(c.createdAt)}
									</td>
									<td>
										<div className="flex gap-x-3">
											<button
												type="button"
												onClick={() => setSelected(c)}
												className="hover:bg-primary/10 p-1.5 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
												title="View"
											>
												<Eye className="size-4 md:size-4.5 xl:size-5" />
											</button>
											<a
												href={`mailto:${c.email}`}
												className="hover:bg-primary/10 p-1.5 text-muted-foreground hover:text-primary transition-colors"
												title="Reply"
											>
												<Sms className="size-4 md:size-4.5 xl:size-5" />
											</a>
											<button
												type="button"
												onClick={() => handleDeletion(c.id)}
												className="hover:bg-destructive/10 p-1.5 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
												title="Delete"
											>
												{deletedId === c.id ? (
													<Loader2 className="size-4 md:size-4.5 xl:size-5" />
												) : (
													<Trash className="size-4 md:size-4.5 xl:size-5" />
												)}
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Body;
