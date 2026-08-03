import Header from "#/components/AdminHeader";
import Body from "./Body";

const index = () => {
	return (
		<main>
			<Header
				title="Contact Request"
				subheading="View, Delete and Manage your Contact Requests."
			/>
			<Body />
		</main>
	);
};

export default index;
