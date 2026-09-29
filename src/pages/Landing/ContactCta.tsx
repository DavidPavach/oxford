import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, IMAGES } from "#/assests";

const CONTACT_CARDS = [
	{
		icon: Phone,
		label: "Call",
		value: COMPANY.phone,
		href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
	},
	{
		icon: Mail,
		label: "Email",
		value: COMPANY.email,
		href: `mailto:${COMPANY.email}`,
	},
	{ icon: MapPin, label: "Head office", value: COMPANY.address },
];

export default function ContactCta() {
	return (
		<section className="relative section-shell border-b border-border overflow-hidden">
			<div className="section-shell-inner">
				<div className="relative rounded-sm overflow-hidden border border-border">
					<img
						src={IMAGES.refineryDusk}
						alt="Refinery at dusk"
						className="absolute inset-0 w-full h-full object-fill"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-background via-background/92 to-background/70" />
					<div className="relative section-shell py-16 md:py-20 xl:py-24">
						<div className="max-w-2xl">
							<span className="eyebrow">Get in touch</span>
							<h2 className="section-title mt-5">Let's build what endures.</h2>
							<p className="body-copy mt-6 max-w-lg">
								Whether you're an investor, partner, supplier or community
								representative, our team is ready to engage. Reach out to start
								a conversation with Oxford Petroleum.
							</p>
							<div className="mt-9 flex flex-wrap gap-3">
								<Link to="/contact" className="premium-button">
									Contact us
									<ArrowRight className="size-4 md:size-4.5 xl:size-5" />
								</Link>
								<Link to="/verify" className="premium-button-ghost">
									Verify our standing
								</Link>
							</div>
						</div>

						<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/60 max-w-4xl">
							{CONTACT_CARDS.map((c) => {
								const content = (
									<div
										key={c.label}
										className="bg-background/80 backdrop-blur-md p-4 md:p-5 xl:p-6 h-full"
									>
										<div className="flex items-center gap-2.5">
											<c.icon className="size-4 md:size-4.5 xl:size-5 text-accent" />
											<span className="font-mono smallestText uppercase tracking-[0.18em] text-muted-foreground">
												{c.label}
											</span>
										</div>
										<p className="mt-2.5 font-heading font-semibold tracking-[-0.01em] leading-snug">
											{c.value}
										</p>
									</div>
								);
								return c.href ? (
									<a
										key={c.label}
										href={c.href}
										className="block hover:bg-secondary/40 transition-colors"
									>
										{content}
									</a>
								) : (
									<div key={c.label}>{content}</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
