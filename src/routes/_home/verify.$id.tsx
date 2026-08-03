import { createFileRoute } from "@tanstack/react-router";
import Verification from "#/pages/Verify/Verification";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/verify/$id")({
	head: ({ params }) => ({
		meta: [
			{
				title: `${params.id} Verification | ${APP_NAME}`,
			},
			{
				name: "description",
				content: `Verify the authenticity of document ${params.id} issued by Oxford Petroleum Corporation.`,
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <Verification />;
}
