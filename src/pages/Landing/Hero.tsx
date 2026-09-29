import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "iconsax-reactjs";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, start = false) {
	const [val, setVal] = useState<number>(0);
	useEffect(() => {
		if (!start) return;
		let raf: ReturnType<typeof requestAnimationFrame>;
		const t0 = performance.now();
		const tick = (now: number) => {
			const p = Math.min((now - t0) / duration, 1);
			const eased = 1 - (1 - p) ** 3;
			setVal(Math.floor(eased * target));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, duration, start]);
	return val;
}

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [mounted, setMounted] = useState<boolean>(false);
	const bpd = useCountUp(2840000, 2200, mounted);

	useEffect(() => {
		setMounted(true);
		if (videoRef.current) {
			videoRef.current.play().catch(() => {});
		}
	}, []);

	return (
		<main className="relative h-100svh min-h-160 w-full overflow-hidden">
			{/* video background */}
			<video
				ref={videoRef}
				className="absolute inset-0 w-full h-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				poster="/hero poster.png"
			>
				<source src={"/hero video.mov"} type="video/mp4" />
			</video>

			{/* overlays */}
			<div className="absolute inset-0 bg-black/80" />

			{/* content */}
			<section className="relative h-full flex flex-col">
				{/* top spacer for navbar */}
				<div className="h-16 md:h-20 xl:h-24 shrink-0" />

				{/* main */}
				<div className="flex-1 flex items-center">
					<div className="section-shell">
						<div className="max-w-4xl rise-in">
							<p className="eyebrow mb-6">
								<span className="text-white/80">
									Energy for enduring progress
								</span>
							</p>
							<h1 className="heading leading-[0.98] tracking-tigher text-balance text-white">
								Precision at
								<br />
								<span className="text-accent">Global scale.</span>
							</h1>
							<p className="mt-6 max-w-xl text-sm md:text-base xl:text-lg text-white/80">
								An engineering-led energy company advancing secure supply,
								resilient infrastructure and responsible growth across the
								energy value chain.
							</p>
							<div className="mt-9 flex flex-wrap items-center gap-4">
								<Link to="/operations" className="premium-button">
									Explore our operations
									<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
								</Link>
								<Link
									to="/company"
									className="premium-button-ghost border-white/80 text-white/80 hover:border-accent hover:text-accent"
								>
									Discover
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* bottom bar — live ticker + scroll cue */}
				<div className="shrink-0 border-t mt-10 border-border/60 backdrop-blur-md bg-background/30">
					<div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
						<div className="flex items-center justify-between py-5 gap-6">
							{/* live counter */}
							<div className="flex items-center gap-4">
								<span className="flex items-center gap-2 font-mono smallestText uppercase tracking-[0.18em] text-white/80">
									<span className="status-dot animate-pulse-ring" /> Live
								</span>
								<div className="hidden sm:flex items-baseline gap-3">
									<span className="font-heading font-bold text-lg md:text-xl xl:text-2xl tracking-tight text-white/80 tabular-nums">
										{bpd.toLocaleString()}
									</span>
									<span className="font-mono smallestText uppercase tracking-[0.16em] text-white/80">
										Barrels / day equiv.
									</span>
								</div>
							</div>

							{/* scroll cue */}
							<Link to="/company" className="group flex items-center gap-3">
								<span className="font-mono smallestText uppercase tracking-[0.2em] text-white/80 group-hover:text-accent transition-colors">
									Discover
								</span>
								<span className="relative grid place-items-center text-white/80 size-8 md:size-9 xl:size-10 border border-border rounded-sm group-hover:border-accent transition-colors">
									<ArrowDown className="size-4 md:size-4.5 xl:size-5 group-hover:text-accent transition-colors animate-bounce" />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
