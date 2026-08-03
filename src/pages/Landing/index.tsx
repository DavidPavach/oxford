import CompanyIntro from "./CompanyIntro";
import GlobalMap from "./GlobalMap";
import Hero from "./Hero";
import InvestorPanel from "./Investors";
import Operations from "./Operations";
import Stats from "./Stats";
import Sustainability from "./Sustainability";

const index = () => {
	return (
		<main>
			<Hero />
			<CompanyIntro />
			<Stats />
			<Operations />
			<GlobalMap />
			<InvestorPanel />
			<Sustainability />
		</main>
	);
};

export default index;
