import { CloseSquare, Sms } from "iconsax-reactjs";
import { formatDate } from "#/utils/format";

const View = ({
	contact,
	onClose,
}: {
	contact: Contact;
	onClose: () => void;
}) => {
	return (
		<main className="border border-border rounded-xl">
			<div className="flex justify-between items-start mb-5 p-4 border-border border-b">
				<div>
					<div className="flex items-center gap-2 mb-1">
						<h2 className="font-heading font-bold text-base md:text-lg xl:text-xl">
							{contact.fullName}
						</h2>
					</div>
					<p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
						<span className="text-muted-foreground">Organisation/Company:</span>{" "}
						{contact.organisation}
					</p>
				</div>
				<button
					type="button"
					onClick={onClose}
					className="hover:bg-destructive/10 p-1.5 rounded-lg hover:text-destructive transition-colors cursor-pointer"
				>
					<CloseSquare className="size-4" />
				</button>
			</div>
			<div className="space-y-3 mb-5 p-4">
				{[
					{ label: "Email", value: contact.email },
					{
						label: "Date",
						value: formatDate(contact.createdAt),
					},
				].map(({ label, value }) => (
					<div key={label} className="flex gap-3">
						<span className="mt-0.5 w-16 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs shrink-0">
							{label}
						</span>
						<span className="text-[11px] md:text-xs xl:text-sm">{value}</span>
					</div>
				))}
				<div className="flex gap-3">
					<span className="mt-0.5 w-16 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs shrink-0">
						Message
					</span>
					<p className="text-[11px] md:text-xs xl:text-sm leading-relaxed">
						{contact.message}
					</p>
				</div>
			</div>
			<div className="flex gap-2 p-4">
				<button
					type="button"
					className="flex-1 bg-primary hover:bg-primary/80 rounded-xl text-primary-foreground"
				>
					<a href={`mailto:${contact.email}`}>
						<Sms className="mr-2 size-4" /> Reply via Email
					</a>
				</button>
				<button
					type="button"
					className="bg-inherit hover:bg-destructive border-border rounded-xl hover:text-destructive-foreground duration-200"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</main>
	);
};

export default View;
