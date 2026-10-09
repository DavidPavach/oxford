import LegalShell from "@/components/LegalShell";
import { COMPANY } from "../../assests";

const SECTIONS = [
	{
		id: "scope",
		title: "Scope of this policy",
		paragraphs: [
			`This Privacy Policy explains how ${COMPANY.name} collects, uses and safeguards personal information when you interact with this website — including the enquiry form, the Careers page, and the Verify page. It applies to visitors, customers, suppliers and job applicants.`,
			`This policy does not cover information practices maintained outside this website, which are governed by the specific agreements applicable to those relationships.`,
		],
	},
	{
		id: "information-we-collect",
		title: "Information we collect",
		paragraphs: [`Depending on how you use this website, we may collect:`],
		list: [
			"Enquiry details — your name, organisation, email address and message submitted through the Contact form;",
			"Recruitment information — resumes, cover letters and correspondence sent to our careers address in connection with an application or expression of interest;",
			"Verification activity — the corporation numbers entered into the Verify tool to confirm corporate standing;",
			"Usage data — pages visited, approximate region, device and browser information collected through cookies and analytics.",
		],
	},
	{
		id: "how-we-use",
		title: "How we use your information",
		paragraphs: [
			`We use personal information to respond to enquiries, evaluate employment applications, maintain corporate records, comply with our obligations under the ${COMPANY.governingAct} and other applicable law, keep the website secure, and improve how it performs.`,
			`We do not use your information for unrelated purposes, and we do not add you to marketing distributions without your consent.`,
		],
	},
	{
		id: "legal-basis",
		title: "Legal basis for processing",
		paragraphs: [
			`We handle personal information in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and Alberta's Personal Information Protection Act (PIPA). Processing is based on your consent, our legitimate business purposes, and legal or regulatory obligations.`,
			`Where consent is required, you may withdraw it at any time by contacting us, subject to legal and contractual restrictions.`,
		],
	},
	{
		id: "cookies",
		title: "Cookies and analytics",
		paragraphs: [
			`This website uses essential cookies to function and analytics tools to understand aggregate usage. Analytics data is collected in a form that is not intended to identify individual visitors.`,
			`You can control or delete cookies through your browser settings. Disabling essential cookies may affect parts of the website.`,
		],
	},
	{
		id: "sharing",
		title: "How we share information",
		paragraphs: [
			`We do not sell personal information. We share it only with service providers that help us operate this website and our corporate functions — such as hosting, email and analytics providers — under confidentiality obligations, and with legal authorities where required by law.`,
			`In the event of a corporate reorganisation, merger or asset transaction, information may be transferred as part of that transaction, subject to this policy.`,
		],
	},
	{
		id: "retention-security",
		title: "Retention and security",
		paragraphs: [
			`We retain personal information only as long as necessary for the purposes it was collected — including enquiry follow-up, legally mandated record-keeping, and reasonable recruitment cycles — after which it is securely destroyed or anonymised.`,
			`We maintain administrative and technical safeguards appropriate to the sensitivity of the information. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
		],
	},
	{
		id: "your-rights",
		title: "Your rights and choices",
		paragraphs: [
			`Under PIPEDA and PIPA, you may request access to the personal information we hold about you, ask for corrections, withdraw consent, and complain to our privacy officer. To exercise any of these rights, contact us at ${COMPANY.email} or by telephone at ${COMPANY.phone}.`,
			`We respond to requests within a reasonable period and may require sufficient information to verify your identity before acting.`,
		],
	},
	{
		id: "changes",
		title: "Changes to this policy",
		paragraphs: [
			`We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date, and significant changes will be highlighted. Continued use of the website after posting constitutes acceptance of the updated policy.`,
		],
	},
	{
		id: "contact",
		title: "Contacting us",
		paragraphs: [
			`Questions about this policy or our privacy practices can be directed to our registered office at ${COMPANY.address}, by telephone at ${COMPANY.phone}, or by email at ${COMPANY.email}.`,
		],
	},
];

export default function Privacy() {
	return (
		<LegalShell
			eyebrow="Legal"
			title="Privacy Policy"
			description="How we collect, use and protect your information across this website."
			updated="March 7, 2025"
			sections={SECTIONS}
			contactNote="Concerned about your data? Speak with our privacy office."
		/>
	);
}
