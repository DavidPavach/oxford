import { TICKER_ITEMS } from "#/assests";

export default function Ticker() {
	const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
	return (
		<div className="relative border-y border-border bg-secondary/40 overflow-hidden">
			<div className="flex animate-marquee whitespace-nowrap py-2.5">
				{items.map((item, i) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: <>
						key={i}
						className="mx-6 font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2"
					>
						<span className="size-1 rounded-full bg-accent" />
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
