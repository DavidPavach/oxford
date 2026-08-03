import { Link } from "@tanstack/react-router";
import { ArrowRight2, DocumentText1, Messages1 } from "iconsax-reactjs";

const ACTIONS = [
	{
		title: "Contact Messages",
		description: "View and manage enquiries submitted by visitors.",
		to: "/contact",
		icon: Messages1,
	},
	{
		title: "Document Vault",
		description: "Manage uploaded documents and media files.",
		to: "/vault",
		icon: DocumentText1,
	},
];

const QuickActions = () => {
	return (
		<section className="mt-6">
			<h2 className="font-semibold text-base md:text-lg xl:text-xl">
				Quick Actions
			</h2>
			<p className="mt-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
				Jump directly to the most frequently used sections.
			</p>
			<div className="gap-4 grid md:grid-cols-2 mt-4">
				{ACTIONS.map((action) => {
					const Icon = action.icon;

					return (
						<Link
							key={action.to}
							to={action.to}
							className="group flex items-center gap-4 hover:bg-muted/40 p-4 border border-border hover:border-primary rounded-xl transition-all"
						>
							<div className="flex justify-center items-center bg-primary/10 rounded-xl size-12 md:size-13 xl:size-14 shrink-0">
								<Icon
									variant="Bold"
									className="size-6 md:size-6.5 xl:size-7 text-primary"
								/>
							</div>
							<div className="flex-1">
								<h3 className="font-medium text-sm md:text-base xl:text-lg">
									{action.title}
								</h3>

								<p className="mt-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
									{action.description}
								</p>
							</div>
							<ArrowRight2 className="size-4 md:size-4.5 xl:size-5 text-muted-foreground group-hover:text-primary transition-colors" />
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default QuickActions;
