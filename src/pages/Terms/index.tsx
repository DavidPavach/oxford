import LegalShell from "@/components/LegalShell";
import { COMPANY } from "../../assests";

const SECTIONS = [
  {
    id: "agreement-to-terms",
    title: "Agreement to these terms",
    paragraphs: [
      `These Terms of Use govern your access to and use of the website operated by ${COMPANY.name}, a corporation governed under the ${COMPANY.governingAct} with its registered office at ${COMPANY.address}. By accessing or using this website, you agree to be bound by these terms and by our Privacy Policy. If you do not agree with any part of these terms, please discontinue your use of the website.`,
      `These terms apply to informational use of the website only. Separate written agreements govern any commercial relationship, product supply, or service arrangement with ${COMPANY.shortName}, and those agreements prevail over anything stated here.`,
    ],
  },
  {
    id: "nature-of-website",
    title: "Nature of this website",
    paragraphs: [
      `This website presents general information about ${COMPANY.name}, its products, operations and corporate standing. Its content is provided for general information and does not constitute an offer to sell, a solicitation, or an invitation to purchase any product, security or other financial instrument of the corporation.`,
      `No petroleum products, services or securities may be purchased or ordered through this website. Commercial and supply enquiries must be directed to our commercial team through the Contact page.`,
    ],
  },
  {
    id: "no-advice",
    title: "No investment, legal or technical advice",
    paragraphs: [
      `Nothing on this website constitutes investment, legal, accounting, engineering or other professional advice, and it should not be relied upon as a substitute for independent qualified advice.`,
      `Certain statements on this website — including those relating to operational targets, growth plans and market outlook — are forward-looking statements based on current expectations and assumptions. Actual results may differ materially. Forward-looking statements involve risks and uncertainties, and we undertake no obligation to update them except as required by law.`,
    ],
  },
  {
    id: "market-data",
    title: "Market data and live news",
    paragraphs: [
      `The News page displays company announcements alongside industry headlines sourced from third-party web search. Third-party headlines, market prices and figures shown on this website are indicative, may be delayed or incomplete, and are provided for convenience only.`,
      `${COMPANY.shortName} does not verify, endorse or guarantee the accuracy, completeness or timeliness of third-party content or market data, and accepts no responsibility for any decision made in reliance upon it. Market data on this website must not be used for trading or commercial purposes.`,
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      `All content on this website — including text, design, graphics, logos, trademarks and imagery — is the property of ${COMPANY.name} or its licensors and is protected by applicable intellectual property laws.`,
      `Nothing on this website grants you any licence or right to use, reproduce, modify, distribute or commercially exploit our content or trademarks without our prior written consent.`,
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [`When using this website, you agree not to:`],
    list: [
      "Use the website for any unlawful purpose or in violation of any applicable regulation;",
      "Interfere with, disrupt or attempt to gain unauthorised access to the website, its infrastructure or any related systems;",
      "Misrepresent your identity or your affiliation with any person or entity;",
      "Scrape, harvest or extract website content in a manner that imposes an unreasonable load or violates these terms;",
      "Transmit malware, malicious code or any material designed to harm the website or its users.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    paragraphs: [
      `This website may contain links to external websites for convenience. These links do not signify endorsement, and ${COMPANY.shortName} is not responsible for the content, accuracy or practices of third-party websites. Your use of external websites is at your own risk and subject to their own terms and privacy policies.`,
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    paragraphs: [
      `This website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including warranties of accuracy, availability, merchantability or fitness for a particular purpose.`,
      `To the fullest extent permitted by law, ${COMPANY.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profit, revenue, data or business, arising from your use of or inability to use this website.`,
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    paragraphs: [
      `These terms are governed by the laws of Canada and the Province of Alberta, without regard to conflict-of-law principles. Any dispute arising from or in connection with these terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Alberta.`,
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      `We may update these Terms of Use at any time. Updated terms will be posted on this page with a revised date, and continued use of the website after posting constitutes acceptance of the updated terms.`,
    ],
  },
];

export default function Terms() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Use"
      description="The conditions that govern the use of this website and its content."
      updated="October 7, 2026"
      sections={SECTIONS}
      contactNote="Questions about these terms? Our corporate team will respond."
    />
  );
}
