import { Calendar2, Send2 } from "iconsax-reactjs";
import { formatDate } from "#/utils/format";

export function NewsCard({ article }: { article: NewsArticle }) {
	const publishedDate = formatDate(article.pubDate ? article.pubDate : "");

	return (
		<a
			href={article.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group block h-full"
			aria-label={`Read article: ${article.title}`}
		>
			<article
				className="
          relative flex h-full flex-col overflow-hidden
          rounded-sm border border-border bg-card
          transition-all duration-500
          hover:-translate-y-1
          hover:border-accent/40
          hover:shadow-[0_18px_50px_-24px_color-mix(in_srgb,var(--accent)_35%,transparent)]
        "
			>
				{/* Image */}
				<div className="relative aspect-video w-full overflow-hidden bg-secondary">
					{article.image_url ? (
						<img
							src={article.image_url}
							alt=""
							loading="lazy"
							className="
                size-full object-cover
                transition-transform duration-700
                group-hover:scale-[1.04]
              "
							onError={(event) => {
								event.currentTarget.style.display = "none";
							}}
						/>
					) : (
						<div
							className="
                relative grid size-full place-items-center
                overflow-hidden bg-primary
              "
						>
							<div
								className="
                  absolute inset-0 opacity-30
                  bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
                "
							/>

							<div className="relative text-center">
								<div className="mx-auto mb-3 size-10 rounded-full border border-accent/40 bg-accent/10" />

								<span className="font-heading smallestText font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
									Energy & Petroleum
								</span>
							</div>
						</div>
					)}

					{/* Accent overlay */}
					<div
						className="
              pointer-events-none absolute inset-x-0 bottom-0 h-20
              bg-linear-to-t from-black/45 to-transparent
            "
					/>

					{/* Source */}
					{article.source_name && (
						<div className="absolute bottom-3 left-3 flex items-center gap-2">
							{article.source_icon && (
								<img
									src={article.source_icon}
									alt=""
									className="size-5 rounded-full bg-white object-contain"
									loading="lazy"
								/>
							)}

							<span className="font-body smallestText font-semibold uppercase tracking-[0.12em] text-white">
								{article.source_name}
							</span>
						</div>
					)}

					{/* Open article */}
					<div
						className="
              absolute right-3 top-3 grid size-9 place-items-center
              rounded-full border border-white/20
              bg-black/25 backdrop-blur-sm
              opacity-0 transition-all duration-300
              group-hover:opacity-100
            "
					>
						<Send2 size={16} color="currentColor" className="text-white" />
					</div>
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col p-5 md:p-6">
					<div className="mb-3 flex items-center gap-2">
						<span className="status-dot" />

						<span className="smallestText font-semibold uppercase tracking-[0.16em] text-muted-foreground">
							Latest News
						</span>
					</div>

					<h3
						className=" line-clamp-3 font-heading text-lg font-bold leading-[1.2] tracking-[-0.02em]
					text-card-foreground transition-colors duration-200 group-hover:text-accent md:text-xl xl:text-2xl"
					>
						{article.title}
					</h3>

					{article.description && (
						<p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
							{article.description}
						</p>
					)}

					<div className="mt-auto flex items-center justify-between gap-4 pt-6">
						{publishedDate && (
							<div className="flex items-center gap-1.5 text-muted-foreground">
								<Calendar2
									className="size-3 md:size-3.5 xl:size-4"
									variant="Linear"
								/>

								<span className="smallestText font-medium">
									{publishedDate}
								</span>
							</div>
						)}

						<span
							className=" ml-auto inline-flex items-center gap-1.5 font-heading smallestText font-bold uppercase
						tracking-[0.15em] text-accent transition-transform duration-300 group-hover:translate-x-0.5"
						>
							Read story
							<Send2 size={14} variant="Linear" />
						</span>
					</div>
				</div>
			</article>
		</a>
	);
}
