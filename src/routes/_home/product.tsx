import { createFileRoute } from "@tanstack/react-router";
import Product from "#/pages/Product";
import { APP_NAME } from "../__root";

export const Route = createFileRoute("/_home/product")({
	head: () => ({
		meta: [
			{
				title: `Products | ${APP_NAME}`,
			},
		],
	}),
	component: Product,
});
