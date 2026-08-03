import { useMutation, useQueryClient } from "@tanstack/react-query";

// Functions
import {
	removeStorageFileFn,
	uploadStorageFile,
} from "#/server/storage.functions";
import * as Functions from "../server/general.functions";

// Add new file to the registry
export const useFileUpload = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (uploadFile: File) => {
			const formData = new FormData();
			formData.append("file", uploadFile);
			return await uploadStorageFile({ data: formData });
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["media"],
			});
		},
	});
};

// Delete Media
export const useDeleteMedia = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: removeStorageFileFn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["media"],
			});
		},
	});
};

// Create New Contact
export const useCreateContact = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: Functions.createContactFn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["contacts"],
			});
		},
	});
};

// Delete New Contact
export const useDeleteContact = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: Functions.deleteContactFn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["contacts"],
			});
		},
	});
};

// Create New Document
export const useCreateDocument = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: Functions.newDocumentFn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["documents"],
			});
		},
	});
};

// Update a Document
export const useUpdateDocument = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: Functions.updateInvoiceFn,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({
				queryKey: ["documents"],
			});

			if (variables.data.id) {
				queryClient.invalidateQueries({
					queryKey: ["document", variables.data.id],
				});
			}
		},
	});
};

// Delete Document
export const useDeleteDocument = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: Functions.deleteDocumentFn,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["documents"],
			});
		},
	});
};
