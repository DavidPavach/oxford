import z from "zod";
import { Route } from "#/routes/_home/verify/$id";
import { useDocument } from "#/services/queries";
import VerifyError from "./Error";
import VerifyLoading from "./Loading";
import Result from "./Result";

const DocumentIdSchema = z.string().min(10, {
	error: "Document ID must be at least 10 characters long.",
});

export default function Verification() {
	const { id } = Route.useParams();

	const validation = DocumentIdSchema.safeParse(id);
	const query = useDocument(validation.data || "");

	if (!validation.success) {
		return (
			<VerifyError
				message={validation.error.issues[0].message}
				onRetry={() => window.location.reload()}
			/>
		);
	}

	if (query.isPending) {
		return <VerifyLoading code={id} />;
	}

	if (query.isError) {
		return (
			<VerifyError
				message={query.error.message ?? "Unable to verify document."}
				onRetry={query.refetch}
			/>
		);
	}

	if (!query.data) {
		return (
			<VerifyError
				message="The requested document was not found."
				onRetry={query.refetch}
			/>
		);
	}

	return <Result doc={query.data} />;
}
