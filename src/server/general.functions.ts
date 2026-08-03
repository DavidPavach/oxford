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
