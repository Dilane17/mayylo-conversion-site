// Types for Mayylo Capture

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string;
  notes?: string;
}

export interface CompanySize {
  value: string;
  label: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrustIndicator {
  id: string;
  value: string;
  label: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
