import { Link } from "@tanstack/react-router";
import { ArrowRight } from "iconsax-reactjs";
import { IMAGES } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

const ResponsibleEnergy = () => {
	return (
		<main className="relative section-shell border-b border-border">
			<div className="section-shell-inner">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
					<div className="order-2 lg:order-1">
						<SectionHeader
							eyebrow="Responsible energy"
							title="Performance measured beyond production."
						/>
						<p className="body-copy mt-6 max-w-xl">
							We align operational discipline with emissions reduction,
							workforce safety and durable community partnerships.
						</p>
						<Link to="/quality" className="premium-button mt-8">
							Explore our ESG approach
							<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
						</Link>
					</div>
					<div className="order-1 lg:order-2">
						<div className="relative aspect-4/3 rounded-sm overflow-hidden border border-border">
							<img
								src={IMAGES.sustainability}
								alt="Integrated lower-carbon energy infrastructure"
								className="w-full h-full"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ResponsibleEnergy;
