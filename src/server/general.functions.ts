import { createServerFn } from "@tanstack/react-start";
import {
	createContact,
	createDocumentRecord,
	deleteContact,
	deleteDocumentRecord,
	getAllContacts,
	getAllDocument,
	getDocumentRecord,
	updateDocument,
} from "./general.server";
import {
	CreateContactSchema,
	CreateDocumentPayloadSchema,
	DeleteEntitySchema,
	GetEntitySchema,
	UpdateDocumentPayloadSchema,
} from "./schema";

// Create New Contact
export const createContactFn = createServerFn({ method: "POST" })
	.inputValidator(CreateContactSchema)
	.handler(async ({ data }) => {
		return await createContact(data);
	});

// Get all Contacts
export const fetchAllContactsFn = createServerFn({
	method: "GET",
}).handler(async () => {
	return await getAllContacts();
});

// Delete Contacts
export const deleteContactFn = createServerFn({ method: "POST" })
	.inputValidator(DeleteEntitySchema)
	.handler(async ({ data }) => {
		return await deleteContact(data.id);
	});

// Create New Document
export const newDocumentFn = createServerFn({ method: "POST" })
	.inputValidator(CreateDocumentPayloadSchema)
	.handler(async ({ data }) => {
		return await createDocumentRecord(data);
	});

// Get Document
export const fetchDocumentFn = createServerFn({ method: "GET" })
	.inputValidator(GetEntitySchema)
	.handler(async ({ data }) => {
		return await getDocumentRecord(data.id);
	});

// Get All Document
export const fetchAllDocumentFn = createServerFn({ method: "GET" }).handler(
	async () => {
		return await getAllDocument();
	},
);

// Update Document
export const updateInvoiceFn = createServerFn({ method: "POST" })
	.inputValidator(UpdateDocumentPayloadSchema)
	.handler(async ({ data }) => {
		return await updateDocument(data);
	});

// Delete Document
export const deleteDocumentFn = createServerFn({ method: "POST" })
	.inputValidator(DeleteEntitySchema)
	.handler(async ({ data }) => {
		return await deleteDocumentRecord(data.id);
	});

// News
const PRIORITY_COUNTRIES = [
	"ca", // Canada
	"us", // United States
	"gb", // United Kingdom
	"no", // Norway
	"ae", // United Arab Emirates
];

export async function getPetroleumNews(): Promise<NewsArticle[]> {
	const params = new URLSearchParams({
		apikey: import.meta.env.VITE_NEWSDATA_API_KEY,
		q: '(oil OR petroleum OR "crude oil" OR "natural gas" OR LNG)',
		language: "en",
		category: "business",
		country: PRIORITY_COUNTRIES.join(","),
	});
	const response = await fetch(
		`https://newsdata.io/api/1/latest?${params.toString()}`,
	);

	if (!response.ok) {
		throw new Error(`News request failed: ${response.status}`);
	}

	const data = (await response.json()) as NewsDataResponse;

	if (data.status !== "success") {
		throw new Error("NewsData returned an unsuccessful response");
	}

	// Render only image filled news article
	return data.results.filter(
		(article) =>
			Boolean(article.title) &&
			Boolean(article.link) &&
			Boolean(article.image_url),
	);
}
