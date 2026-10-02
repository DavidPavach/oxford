declare type PageHeroProps = {
	eyebrow: string;
	title: string;
	description?: string;
	image?: string;
	children?: React.ReactNode;
};

export default function PageHero({
	eyebrow,
	title,
	description,
	image,
	children,
}: PageHeroProps) {
	return (
		<section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden border-b border-border">
			{image && (
				<div className="absolute inset-0">
					<img src={image} alt="" className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-background/55" />
					<div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/70 to-background" />
				</div>
			)}
			{!image && <div className="absolute inset-0 tectonic-grid opacity-40" />}
			<div className="relative section-shell">
				<div className="max-w-4xl rise-in">
					<p className="eyebrow mb-6">{eyebrow}</p>
					<h1 className="heading leading-[1.02] tracking-[-0.045em] text-balance">
						{title}
					</h1>
					{description && (
						<p className="body-copy mt-6 max-w-2xl text-sm md:text-base xl:text-lg">
							{description}
						</p>
					)}
					{children}
				</div>
			</div>
		</section>
	);
}
