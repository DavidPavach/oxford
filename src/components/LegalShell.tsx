import { Link } from "@tanstack/react-router";
import { Send2 } from "iconsax-reactjs";

type LegalSection = {
	id: string;
	title: string;
	paragraphs: string[];
	list?: string[];
};

type LegalShellProps = {
	eyebrow: string;
	title: string;
	description?: string;
	updated?: string;
	sections: LegalSection[];
	contactNote?: string;
};

export default function LegalShell({
	eyebrow,
	title,
	description,
	updated,
	sections,
	contactNote,
}: LegalShellProps) {
	return (
		<>
			<section className="relative pt-28 md:pt-32 xl:pt-36 pb-14 md:pb-16 xl:pb-18 border-b border-border overflow-hidden">
				<div className="absolute inset-0 tectonic-grid opacity-40" />
				<div className="relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
					<div className="max-w-4xl rise-in">
						<p className="eyebrow mb-6">{eyebrow}</p>
						<h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-[-0.045em] text-balance">
							{title}
						</h1>
						{description && (
							<p className="body-copy mt-6 max-w-2xl text-sm md:text-base xl:text-lg">
								{description}
							</p>
						)}
						{updated && (
							<p className="mt-8 font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground">
								Last updated · {updated}
							</p>
						)}
					</div>
				</div>
			</section>

			<section className="section-shell">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
					<aside className="lg:col-span-3">
						<div className="lg:sticky lg:top-28">
							<p className="font-mono smallestText uppercase tracking-[0.2em] text-muted-foreground mb-4">
								Contents
							</p>
							<ul className="border-t border-border">
								{sections.map((s, i) => (
									<li key={s.id} className="border-b border-border">
										<a
											href={`#${s.id}`}
											className="group flex items-center justify-between gap-4 py-3 smallText text-muted-foreground hover:text-foreground transition-colors"
										>
											<span>{s.title}</span>
											<span className="font-mono smallestText text-muted-foreground/60 group-hover:text-accent transition-colors">
												{String(i + 1).padStart(2, "0")}
											</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</aside>

					<div className="lg:col-span-9">
						{sections.map((s, i) => (
							<article
								key={s.id}
								id={s.id}
								className="border-b border-border py-10 first:pt-0 last:border-b-0 scroll-mt-24"
							>
								<div className="flex items-baseline gap-4">
									<span className="font-mono smallestText text-accent shrink-0">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h2 className="font-heading font-bold text-xl md:text-2xl xl:text-3xl tracking-[-0.03em] leading-tight text-balance">
										{s.title}
									</h2>
								</div>
								<div className="mt-5 space-y-4">
									{s.paragraphs.map((p, j) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <>
										<p key={j}>{p}</p>
									))}
									{s.list && (
										<ul className="mt-2 space-y-2.5">
											{s.list.map((item, j) => (
												<li
													// biome-ignore lint/suspicious/noArrayIndexKey: <>
													key={j}
													className="flex gap-3 text-[11px] md:text-xs xl:text-sm leading-[1.75] text-muted-foreground"
												>
													<span className="mt-[0.65em] size-1 rounded-full bg-accent shrink-0" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									)}
								</div>
							</article>
						))}

						{contactNote && (
							<div className="mt-12 monolith-card min-h-0 flex-row flex-wrap items-center justify-between gap-6">
								<div className="max-w-xl">
									<p className="font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground mb-2">
										Questions
									</p>
									<p className="font-heading font-bold text-base md:text-lg xl:text-xl tracking-[-0.02em]">
										{contactNote}
									</p>
								</div>
								<Link to="/contact" className="premium-button">
									Contact us
									<Send2 className="size-4 md:size-4.5 xl:size-5" />
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
