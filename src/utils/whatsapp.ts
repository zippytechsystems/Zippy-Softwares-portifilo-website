import { COMPANY_INFO } from '../data/companyData';

interface WhatsAppMessageParams {
  fullName?: string;
  businessName?: string;
  service?: string;
  budgetRange?: string;
  projectDescription?: string;
  referenceId?: string;
}

export const generateWhatsAppUrl = (params: WhatsAppMessageParams): string => {
  const parts: string[] = [
    `*Project Enquiry – Zippy Softwares (Zippy Enterprises Pvt Ltd)*`,
    ``
  ];

  if (params.referenceId) {
    parts.push(`*Reference ID:* ${params.referenceId}`);
  }
  if (params.fullName) {
    parts.push(`*Client Name:* ${params.fullName}`);
  }
  if (params.businessName) {
    parts.push(`*Company / Business:* ${params.businessName}`);
  }
  if (params.service) {
    parts.push(`*Interested Service:* ${params.service}`);
  }
  if (params.budgetRange) {
    parts.push(`*Estimated Budget:* ${params.budgetRange}`);
  }
  if (params.projectDescription) {
    parts.push(`*Project Scope:* ${params.projectDescription}`);
  }

  parts.push(``);
  parts.push(`Hello Zippy Softwares team, I would like to schedule a consultation regarding our software project.`);

  const messageText = parts.join('\n');
  const encodedText = encodeURIComponent(messageText);

  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedText}`;
};
