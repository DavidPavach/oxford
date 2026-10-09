import { useQuery } from "@tanstack/react-query";

// Functions
import {
	fetchAllContactsFn,
	fetchAllDocumentFn,
	fetchDocumentFn,
	getPetroleumNews,
} from "#/server/general.functions";
import { fetchAllMedia } from "#/server/storage.functions";

// Fetch All Media
export function useAllMedia() {
	return useQuery({
		queryKey: ["media"],
		queryFn: () => fetchAllMedia(),
	});
}

// Fetch All Contacts
export const useAllContacts = () => {
	return useQuery({
		queryKey: ["contacts"],
		queryFn: fetchAllContactsFn,
	});
};

// Fetch Documents
export const useDocument = (id: string) => {
	return useQuery({
		queryKey: ["document", id],
		queryFn: () =>
			fetchDocumentFn({
				data: { id },
			}),
		enabled: !!id,
	});
};

// Fetch All Documents
export const useAllDocuments = () => {
	return useQuery({
		queryKey: ["documents"],
		queryFn: fetchAllDocumentFn,
	});
};

// Fetch News
export const useNews = () => {
	return useQuery({
		queryKey: ["petroleum-news"],
		queryFn: getPetroleumNews,
		staleTime: 1000 * 60 * 15,
	});
};
