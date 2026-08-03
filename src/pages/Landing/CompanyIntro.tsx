import { motion } from "framer-motion";
import { Gps } from "iconsax-reactjs";

export default function CompanyIntro() {
	return (
		<section id="company" className="section-shell">
			<div className="gap-12 grid lg:grid-cols-12">
				<div className="lg:col-span-4">
					<p className="eyebrow">
						<Gps className="size-3 md:size-3.5 xl:size-4" /> Corporate profile
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="lg:col-span-8"
				>
					<h2 className="section-title">
						Built for the systems the world depends on.
					</h2>
					<div className="gap-8 grid md:grid-cols-2 mt-10 pt-8 border-border border-t text-muted-foreground">
						<p className="body-copy">
							Oxford Petroleum Corporation develops and operates essential
							energy assets with a disciplined focus on safety, reliability and
							long-term value.
						</p>
						<p className="body-copy">
							From subsurface intelligence to global trading and critical
							infrastructure, our integrated capabilities connect resources with
							the communities and economies they serve.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
