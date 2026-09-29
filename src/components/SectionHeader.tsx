export default function SectionHeader({
	eyebrow,
	title,
	description,
	align = "left",
	className = "",
}: {
	eyebrow?: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
}) {
	const isCenter = align === "center";
	return (
		<div
			className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
		>
			{eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
			<h2 className="section-title">{title}</h2>
			{description && <p className="body-copy mt-5">{description}</p>}
		</div>
	);
}
