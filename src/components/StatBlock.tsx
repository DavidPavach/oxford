export default function StatBlock({
	value,
	label,
	sub,
	size = "md",
}: {
	value: string;
	label: string;
	sub?: string;
	size?: "md" | "lg" | "xl";
}) {
	const numSize =
		size === "xl"
			? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
			: size === "lg"
				? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
				: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl";
	return (
		<div className="flex flex-col">
			<span
				className={`font-heading font-extrabold tracking-[-0.04em] leading-none ${numSize}`}
			>
				{value}
			</span>
			<span className="mt-3 smallText text-muted-foreground leading-snug">
				{label}
			</span>
			{sub && (
				<span className="mt-1 font-mono smallestText uppercase tracking-[0.16em] text-muted-foreground/60">
					{sub}
				</span>
			)}
		</div>
	);
}
