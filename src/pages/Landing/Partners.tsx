import { partners } from "#/assests";
import SectionHeader from "#/components/SectionHeader";

const Partners = () => {
	const marqueePartners = [...partners, ...partners, ...partners];

	return (
		<main className="section-shell border-b border-border">
			<SectionHeader
				eyebrow="Our Network"
				title="Our Trusted Partners."
				description="We work with a trusted network of partners to deliver exceptional results."
			/>

			<div className="mt-10 overflow-hidden" aria-hidden="true">
				<div className="animate-partners flex w-max motion-reduce:animate-none">
					{[0, 1].map((group) => (
						<div key={group} className="flex shrink-0 items-center">
							{marqueePartners.map((partner, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <>
									key={`${group}-${partner.name}-${index}`}
									className=" flex shrink-0 items-center justify-center px-4"
								>
									<img
										src={partner.logo}
										alt=""
										draggable={false}
										loading="lazy"
										decoding="async"
										className=" max-w-full max-h-14 object-contain rounded-md transition-all duration-300 opacity-60 hover:opacity-100 hover:grayscale-0 md:max-h-16"
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>

			{/* Meaningful names for assistive technology */}
			<ul className="sr-only" aria-label="Partner companies">
				{partners.map((partner) => (
					<li key={partner.name}>{partner.name}</li>
				))}
			</ul>
		</main>
	);
};

export default Partners;
