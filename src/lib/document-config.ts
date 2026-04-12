export const DOCUMENT_BRAND = {
  companyName: "MoBiz.mu",
  addressLine1: "Royal Road, Grand Baie",
  phone: "(+230) 55068119",
  email: "support@mobiz.mu",
  preparedBy: "MoBiz.mu",
  preparedByPerson: "C/o Mr Thasaraden Cluthan",
  reviewText:
    "We would truly appreciate it if you could take a moment to leave us a review on Google. Your feedback means a lot to us and helps MoBiz.mu continue to grow and serve businesses better. Thank you for your trust and support.",
  logoPath: "/documents/logo.png",
  signaturePath: "/documents/signature.png",
  stampPath: "/documents/stamp.png",
  paidStampPath: "/documents/paid-stamp.png",
  googleReviewQrPath: "/documents/google-review-qr.png",
  googleReviewGooglePath: "/documents/google-review-google.png",
};

export const BANK_ACCOUNTS = {
  personal_mcb: {
    key: "personal_mcb",
    bankName: "Mauritius Commercial Bank",
    accountName: "Mr Thasaraden Cluthan",
    accountNumber: "0000 9237 8323",
  },
  mobiz_mcb: {
    key: "mobiz_mcb",
    bankName: "Mauritius Commercial Bank",
    accountName: "Mobiz",
    accountNumber: "0004 5480 0533",
  },
} as const;

export type BankAccountKey = keyof typeof BANK_ACCOUNTS;