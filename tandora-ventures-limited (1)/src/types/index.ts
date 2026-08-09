export type VerificationLevel = 'Verified Original Source' | 'Community Verified' | 'User Submitted';

export interface Tender {
  id: string;
  title: string;
  category: string; // e.g., 'ICT & Technology', 'Construction', 'Medical Supplies', etc.
  sector: 'Government' | 'NGO' | 'Corporate' | 'International' | 'County Government';
  organization: string;
  location: string;
  referenceNumber: string;
  deadline: string;
  estimatedValue?: string;
  verificationType: VerificationLevel;
  sourceUrl?: string;
  sourceName?: string;
  description: string;
  requirements: string[];
  status: 'Active' | 'Closing Soon' | 'Awarded';
  contactEmail?: string;
  publishDate: string;
  featured?: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  badges: string[]; // e.g., ['KEBS Verified', 'AGPO Certified', 'KRA Compliant', 'ISO 9001:2015']
  location: string;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  completedOrders: number;
  description: string;
  phone: string;
  email: string;
  contactPerson: string;
  yearEstablished: number;
  productsCount: number;
  sectors: string[];
  logo?: string;
  verifiedSource: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  supplierName: string;
  supplierId: string;
  priceRange: string;
  unit: string;
  moq: string; // Minimum Order Quantity
  originCountry: string;
  originFlag?: string;
  image: string;
  description: string;
  stockStatus: 'In Stock' | 'Made to Order' | 'Available on Import';
  deliveryLeadTime: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  providerName: string;
  providerId: string;
  rating: number;
  location: string;
  description: string;
  capabilities: string[];
  startingRate: string;
  image?: string;
}

export interface RFQ {
  id: string;
  title: string;
  buyerOrganization: string;
  buyerType: 'Corporate' | 'NGO' | 'Government Institution' | 'SME';
  category: string;
  deadline: string;
  budgetRange: string;
  status: 'Open for Bids' | 'Under Review' | 'Closed';
  bidsCount: number;
  location: string;
  specifications: string[];
  contactPerson: string;
  createdDate: string;
}

export interface LogisticsRoute {
  id: string;
  title: string;
  mode: 'Air Freight' | 'Ocean Cargo' | 'Road Trucking' | 'Warehousing' | 'Customs Clearance';
  origin: string;
  destination: string;
  transitTime: string;
  capacity: string;
  startingPrice: string;
  provider: string;
  features: string[];
}

export interface BusinessOpportunity {
  id: string;
  title: string;
  type: 'Joint Venture' | 'Distributor Agency' | 'AGPO Youth/Women Tender' | 'Sub-Contracting' | 'International Export';
  country: string;
  organization: string;
  deadline: string;
  description: string;
  eligibility: string[];
  value: string;
}

export type UserRole = 'public' | 'buyer' | 'supplier' | 'admin';
