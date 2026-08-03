import Header from "#/components/AdminHeader";
import Body from "./Body";
import Upload from "./Upload";

const index = () => {
	return (
		<main>
			<Header
				title="Document and Image Vault"
				subheading="Upload, organize and share corporate documents and imagery. Every file
				receives a permanent link you can copy for quick sharing."
			/>
			<Upload />
			<Body />
		</main>
	);
};

export default index;
