import Capabilities from "./Capabilities";
import CompanyIntro from "./CompanyIntro";
import ContactCta from "./ContactCta";
import FaqSection from "./Faqs";
import Hero from "./Hero";
import Industries from "./Industries";
import Infrastructure from "./Infrastructure";
import InvestorPortal from "./InvestorPortal";
import Management from "./Management";
import Operations from "./Operations";
import ResponsibleEnergy from "./ResponsibleEnergy";
import SupplyTrading from "./SupplyTrading";

const index = () => {
	return (
		<main>
			<Hero />
			<CompanyIntro />
			<Capabilities />
			<SupplyTrading />
			<Infrastructure />
			<Management />
			<Operations />
			<Industries />
			<InvestorPortal />
			<ResponsibleEnergy />
			<FaqSection />
			<ContactCta />
		</main>
	);
};

export default index;
