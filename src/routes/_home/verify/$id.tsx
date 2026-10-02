import { createFileRoute } from "@tanstack/react-router";
import PageHero from "#/components/PageHero";
import Verification from "#/pages/Verify/Verification";
import { APP_NAME } from "../../__root";

export const Route = createFileRoute("/_home/verify/$id")({
	head: ({ params }) => ({
		meta: [
			{
				title: `${params.id} | Document Verification | ${APP_NAME}`,
			},
			{
				name: "description",
				content: `Verify the authenticity and current status of Oxford Petroleum Corporation document ${params.id}.`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return (
		<>
			<PageHero
				eyebrow={`Verification • ${id}`}
				title={`${id}`}
				description={`You are verifying document "${id}" issued by Oxford Petroleum Corporation. This portal confirms the authenticity, validity, and current status of official corporate documents using their unique verification code.`}
			/>

			<Verification />
		</>
	);
}
