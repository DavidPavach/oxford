import { Link } from "@tanstack/react-router";
import { ArrowRight, TickCircle } from "iconsax-reactjs";
import { IMAGES } from "#/assests";
import PageHero from "#/components/PageHero";
import SectionHeader from "#/components/SectionHeader";

const PRODUCTS = [
	{
		name: "Crude Oil",
		tagline: "The primary hydrocarbon feedstock",
		image: IMAGES.crudeOil,
		desc: "Oxford Petroleum develops and supplies crude oil from conventional and unconventional resources, managed through integrated logistics to global refining markets.",
		uses: [
			"Upstream production",
			"Refinery feedstock",
			"Condensate streams",
			"Export markets",
		],
	},
	{
		name: "Natural Gas",
		tagline: "Cleaner-burning energy for power and heat",
		image: IMAGES.naturalGas,
		desc: "Natural gas supplies for power generation, industrial processing and residential-commercial heating — processed and transported through our infrastructure network.",
		uses: [
			"Power generation",
			"Industrial heat",
			"Residential supply",
			"LNG feedstock",
		],
	},
	{
		name: "Gasoline & Motor Fuels",
		tagline: "Refined transportation fuels",
		image: IMAGES.gasoline,
		desc: "High-quality gasoline and motor fuels refined to meet stringent specifications, distributed through commercial and retail supply channels.",
		uses: [
			"Road transport",
			"Fleet operations",
			"Retail networks",
			"Commercial supply",
		],
	},
	{
		name: "Diesel & Distillates",
		tagline: "Heavy-duty and industrial fuel",
		image: IMAGES.diesel,
		desc: "Diesel and middle distillates engineered for heavy transport, rail, agriculture and industrial applications — optimised for performance and emissions compliance.",
		uses: [
			"Heavy transport",
			"Rail & marine",
			"Agriculture",
			"Industrial power",
		],
	},
	{
		name: "Lubricants & Specialty Oils",
		tagline: "Precision-engineered protection",
		image: IMAGES.lubricants,
		desc: "A range of lubricants and specialty oils formulated for industrial, automotive and machinery applications — protecting equipment and extending asset life.",
		uses: [
			"Industrial machinery",
			"Automotive engines",
			"Turbines & compressors",
			"Specialty applications",
		],
	},
	{
		name: "LPG, NGLs & Aviation Fuels",
		tagline: "Versatile energy and feedstock",
		image: IMAGES.operations,
		desc: "Liquefied petroleum gas, natural gas liquids and aviation fuel supply — connecting refined and processed products to diverse end-markets.",
		uses: [
			"Aviation",
			"Petrochemical feedstock",
			"Residential LPG",
			"Commercial supply",
		],
	},
];

export default function Product() {
	return (
		<>
			<PageHero
				eyebrow="Products"
				title="The products that power progress."
				description="From wellhead to end-market, Oxford Petroleum's product portfolio spans crude, gas, refined fuels and specialty oils — engineered to specification and delivered with reliability."
				image={IMAGES.refineryDusk}
			/>

			<section className="section-shell border-b border-border">
				<div className="relative aspect-square min-[600px]:aspect-video rounded-sm overflow-hidden border border-border bg-black">
					<video
						src={"/hero video.mov"}
						poster={IMAGES.offshoreRig}
						className="w-full h-full object-cover"
						autoPlay
						muted
						loop
						playsInline
					/>
					<div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent pointer-events-none" />
					<div className="absolute bottom-5 left-5">
						<span className="eyebrow">Operations in motion</span>
						<h2 className="font-heading font-bold text-lg md:text-xl xl:text-2xl tracking-[-0.03em]">
							From refinery to market
						</h2>
					</div>
				</div>
			</section>

			<section className="section-shell border-b border-border">
				<SectionHeader
					eyebrow="Product portfolio"
					title="Six product families. One integrated supply chain."
				/>
				<div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
					{PRODUCTS.map((p, i) => (
						<div key={p.name} className="bg-card group">
							<div className="relative aspect-video overflow-hidden">
								<img
									src={p.image}
									alt={p.name}
									className="w-full h-full object-fill"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent" />
								<span className="absolute top-4 left-4 font-mono smallestText uppercase tracking-[0.18em] bg-background/70 backdrop-blur-md px-2.5 py-1.5 rounded-sm border border-border">
									{String(i + 1).padStart(2, "0")} /{" "}
									{PRODUCTS.length.toString().padStart(2, "0")}
								</span>
							</div>
							<div className="p-4 md:p-6 xl:p-8">
								<h3 className="font-heading font-bold text-lg md:text-xl xl:text-2xl tracking-[-0.03em] group-hover:text-accent transition-colors">
									{p.name}
								</h3>
								<p className="mt-1 font-mono smallestText uppercase tracking-[0.16em] text-muted-foreground">
									{p.tagline}
								</p>
								<p className="mt-4 smallText text-muted-foreground leading-relaxed">
									{p.desc}
								</p>
								<ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
									{p.uses.map((u) => (
										<li
											key={u}
											className="flex items-center gap-2 smallestText text-foreground/80"
										>
											<TickCircle className="size-3 md:size-3.5 xl:size-4 text-accent shrink-0" />
											{u}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="mt-10 flex flex-wrap items-center justify-between gap-5">
					<p className="body-copy max-w-lg">
						Need a specific specification or supply arrangement? Our commercial
						team can structure a solution for your operation.
					</p>
					<Link to="/contact" className="premium-button">
						Talk to our team
						<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
					</Link>
				</div>
			</section>
		</>
	);
}
