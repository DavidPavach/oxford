import SectionHeader from "#/components/SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
	{
		q: "What does Oxford Petroleum Corporation do?",
		a: "Oxford Petroleum is an integrated energy company operating across exploration and production, trading and supply, pipeline infrastructure, and gas processing and refining. Our capabilities span the full energy value chain — from subsurface to end-market.",
	},
	{
		q: "Where is the company headquartered?",
		a: "Our registered office is at 4519 16A Street S.W., Calgary, AB T2T 4L8, Canada. Oxford Petroleum Corporation has been governed under the Canada Business Corporations Act (CBCA) since incorporation on February 22, 1985.",
	},
	{
		q: "How can I verify the company's legal standing?",
		a: "You can verify our corporate standing through the Verify portal on this site using our Corporation Number 184564-1. Official filings and governance documentation are also accessible through Corporations Canada.",
	},
	{
		q: "Does Oxford Petroleum publish ESG and sustainability data?",
		a: "Yes. We maintain systematic emissions monitoring, environmental auditing and regulatory compliance reporting. Our ESG data book and annual disclosures are publicly available on the Sustainability page.",
	},
	{
		q: "How do I reach investor relations?",
		a: "Investor relations enquiries can be directed through our Contact page or by email at corporate@oxfordpetroleumcorp.ca. Our team can provide annual reports, financial reviews and governance documentation on request.",
	},
	{
		q: "What is the company's share structure?",
		a: "Detailed share structure, authorized share classes and ownership disclosures are maintained on the Investors page. All governance documentation is current with Corporations Canada and fully auditable.",
	},
];

export default function FaqSection() {
	return (
		<section className="relative section-shell border-b border-border">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
				<div className="lg:col-span-5">
					<SectionHeader
						eyebrow="Frequently asked"
						title="Answers, on the record."
					/>
					<p className="body-copy mt-6 max-w-md">
						Common questions about Oxford Petroleum Corporation — our
						operations, governance and how to engage with us.
					</p>
				</div>

				<div className="lg:col-span-7">
					<Accordion className="w-full border-t border-border">
						{FAQS.map((item, i) => (
							<AccordionItem
								// biome-ignore lint/suspicious/noArrayIndexKey: <>
								key={i}
								value={`item-${i}`}
								className="border-b border-border"
							>
								<AccordionTrigger className="font-heading font-semibold text-left text-sm md:text-base xl:text-lg tracking-[-0.02em] hover:no-underline hover:text-accent transition-colors py-5 md:py-6">
									{item.q}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-[1.75] pb-5 md:pb-6">
									{item.a}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
