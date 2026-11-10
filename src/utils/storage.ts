import type { EnquirySubmission } from '../types';

const STORAGE_KEY = 'zippy_corporate_enquiries_v1';

export const saveEnquiry = async (
  enquiry: Omit<EnquirySubmission, 'id' | 'referenceId' | 'submittedAt' | 'status'>
): Promise<EnquirySubmission> => {
  // Simulate network dispatch with realistic latency
  await new Promise((resolve) => setTimeout(resolve, 650));

  const randomRefSuffix = Math.floor(10000 + Math.random() * 90000);
  const referenceId = `ZIP-2026-${randomRefSuffix}`;
  
  const newSubmission: EnquirySubmission = {
    ...enquiry,
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    referenceId,
    submittedAt: new Date().toISOString(),
    status: 'received'
  };

  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existingList: EnquirySubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    const updatedList = [newSubmission, ...existingList];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (err) {
    console.error('Failed to persist enquiry to storage:', err);
    // Even if localStorage is restricted, we return the valid submission record
  }

  return newSubmission;
};

export const getStoredEnquiries = (): EnquirySubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const exportEnquiriesAsJSON = (): void => {
  const list = getStoredEnquiries();
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(list, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `zippy-enquiries-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};
