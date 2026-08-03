import { DocumentForward } from "iconsax-reactjs";
import { useState } from "react";
import { Overlay } from "#/components/Overlay";
import Form from "./Form";

const New = () => {
	const [newForm, setNewForm] = useState<boolean>(false);

	// Functions
	const toggleForm = () => setNewForm((prev) => !prev);

	return (
		<>
			{newForm && (
				<Overlay open={newForm} onClose={toggleForm} variant="center">
					<Form onClose={toggleForm} />
				</Overlay>
			)}
			<button
				type="button"
				onClick={toggleForm}
				className="flex flex-col justify-center items-center border-2 border-border border-dashed rounded-lg w-full h-24 md:h-28 xl:h-32 cursor-pointer"
			>
				<div className="flex items-center gap-x-1">
					<DocumentForward
						className="mr-1 size-4 md:size-4.5 xl:size-5"
						variant="Bold"
					/>
					<span>New Document</span>
				</div>
				<p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
					Click to create a new document
				</p>
			</button>
		</>
	);
};

export default New;
