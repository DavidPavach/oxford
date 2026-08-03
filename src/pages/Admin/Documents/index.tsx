import Header from "#/components/AdminHeader";
import Body from "./Body";
import New from "./New";

const index = () => {
	return (
		<main>
			<Header
				title="Documents"
				subheading="Manage All Your Documents. Add, Update and Delete Documents."
			/>
			<New />
			<Body />
		</main>
	);
};

export default index;
