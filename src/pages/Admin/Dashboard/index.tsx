import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	ArrowRight2,
	DocumentText1,
	MessageSquare,
	TagUser,
} from "iconsax-reactjs";
import Header from "#/components/AdminHeader";
import { useAllContacts, useAllDocuments } from "#/services/queries";
import { formatDate } from "#/utils/format";
import QuickActions from "./QuickActions";

const index = () => {
	const { data: contactsData, isLoading: loadingContacts } = useAllContacts();
	const { data: docsData } = useAllDocuments();

	const contacts: Contact[] = contactsData?.rows || [];
	const docs: Documents[] = docsData?.rows || [];

	// Helper to calculate items created in the last 7 days
	const getNewCount = (items: { createdAt: string }[]) => {
		const sevenDaysAgo = new Date();
		sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
		return items.filter((item) => new Date(item.createdAt) >= sevenDaysAgo)
			.length;
	};

	// Stats configuration mapping actual data
	const stats = [
		{
			icon: MessageSquare,
			label: "Total Contacts",
			value: contacts.length,
			sub: `${getNewCount(contacts)} new this week`,
			color: "text-blue-500",
			bg: "bg-blue-500/10",
		},
		{
			icon: DocumentText1,
			label: "Total Documents",
			value: docs.length,
			sub: `${getNewCount(docs)} new this week`,
			color: "text-green-500",
			bg: "bg-green-500/10",
		},
	];

	// Get the top 5 most recent items for the activity tables
	const recentContacts = [...contacts]
		.sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
		)
		.slice(0, 5);

	return (
		<main>
			<Header
				title="Dashboard"
				subheading="Welcome back — here's what's happening today. An overview of your Vault, Document and Contact Records."
			/>

			{/* Stats Grid */}
			<section className="gap-4 md:gap-6 grid grid-cols-2 mb-8">
				{stats.map((s, i) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: <>
						key={`stats_dashboard_${i}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.08 }}
						className="flex flex-col justify-between bg-card p-4 md:p-5 border border-border/50 rounded-xl"
					>
						<div className="flex justify-between items-start mb-4">
							<div
								className={`size-8 md:size-9 xl:size-10 ${s.bg} flex items-center justify-center rounded-lg`}
							>
								<s.icon className={`size-4 md:size-4.5 xl:size-5 ${s.color}`} />
							</div>
						</div>
						<div>
							<div className="font-heading font-black text-xl md:text-2xl xl:text-3xl">
								{s.value}
							</div>
							<div className="mt-1 font-medium text-[11px] text-foreground md:text-xs xl:text-sm">
								{s.label}
							</div>
							<div className="mt-1 text-[10px] text-muted-foreground md:text-[11px]">
								{s.sub}
							</div>
						</div>
					</motion.div>
				))}
			</section>

			<QuickActions />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="flex flex-col bg-card mt-10 border border-border/50 rounded-xl overflow-hidden"
			>
				<div className="flex justify-between items-center p-4 md:p-5 xl:p-6 border-border/50 border-b">
					<h2 className="font-heading font-bold text-sm md:text-base xl:text-lg">
						Recent Contacts
					</h2>
					<Link
						to="/contacts"
						className="flex items-center gap-1 text-[11px] text-primary md:text-xs xl:text-sm hover:underline"
					>
						View All <ArrowRight2 className="size-3 md:size-3.5 xl:size-4" />
					</Link>
				</div>
				<div className="flex-1 p-4 md:p-5 xl:p-6 overflow-x-auto">
					<div className="space-y-4 min-w-75">
						{loadingContacts ? (
							<p className="text-muted-foreground text-xs">Loading...</p>
						) : recentContacts.length === 0 ? (
							<p className="text-muted-foreground text-xs">
								No recent contacts found.
							</p>
						) : (
							recentContacts.map((contact) => (
								<div
									key={contact.id}
									className="flex justify-between items-center gap-4"
								>
									<div className="flex items-center gap-3">
										<div className="bg-primary/10 p-2 text-primary shrink-0">
											<TagUser className="size-4 md:size-4.5 xl:size-5" />
										</div>
										<div>
											<p className="font-medium text-[11px] md:text-xs xl:text-sm line-clamp-1">
												{contact.fullName}
											</p>
											<p className="text-[10px] text-muted-foreground md:text-[11px] xl:text-xs line-clamp-1">
												{contact.email}
											</p>
										</div>
									</div>
									<div className="text-right shrink-0">
										<span className="inline-block bg-muted mb-1 px-2 py-1 text-[10px] text-muted-foreground md:text-[11px] xl:text-xs capitalize">
											{contact.organisation}
										</span>
										<p className="block text-[10px] text-muted-foreground md:text-[11px] xl:text-xs">
											{formatDate(contact.createdAt)}
										</p>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</motion.div>
		</main>
	);
};

export default index;
