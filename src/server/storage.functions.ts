import { createServerFn } from "@tanstack/react-start";

import { DeleteEntitySchema } from "./schema";
import { deleteMedia, getAllMedia, uploadMedia } from "./storage.server";

// Upload Media to Registry
export const uploadStorageFile = createServerFn({ method: "POST" })
	.inputValidator((data: unknown) => {
		if (!(data instanceof FormData)) {
			throw new Error("Payload must be FormData");
		}
		return data;
	})
	.handler(async ({ data }) => {
		const file = data.get("file");

		if (!file || !(file instanceof File)) {
			throw new Error("No valid file provided in the request.");
		}

		return await uploadMedia(file);
	});

// Fetch All Media
export const fetchAllMedia = createServerFn({ method: "GET" }).handler(
	async () => {
		const media = await getAllMedia();
		return media;
	},
);

// Delete Media from Registry
export const removeStorageFileFn = createServerFn({ method: "POST" })
	.inputValidator(DeleteEntitySchema)
	.handler(async ({ data }) => {
		return await deleteMedia(data.id);
	});
