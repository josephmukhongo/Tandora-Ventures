import { Tender, Supplier, Product, Service, RFQ, LogisticsRoute, BusinessOpportunity } from '../types';

export const MANAGING_DIRECTOR = {
  name: "Joshua Watiti Wekesa",
  title: "Managing Director & Chief Executive Officer",
  phone: "+254 741 401 154",
  phoneClean: "+254741401154",
  email: "tandoraventureslimited@gmail.com",
  image: "/uploads/upload_1.jpeg",
  location: "Nairobi, Kenya",
  bio: "Joshua Watiti Wekesa is the founder and Managing Director of Tandora Ventures Limited. With over 15 years of leadership in procurement logistics, cross-border supply chains, and strategic sourcing across East Africa, Joshua leads Tandora's vision of empowering African trade through transparent procurement, vetted supplier ecosystems, and seamless global sourcing networks."
};

export const TENDERS_DATA: Tender[] = [
  {
    id: "TEN-2025-0891",
    title: "Supply, Delivery & Installation of Enterprise ICT Infrastructure & Server Racks",
    category: "ICT & Technology",
    sector: "Government",
    organization: "Ministry of Information & Communications (Kenya)",
    location: "Nairobi, Kenya",
    referenceNumber: "MOICT/PROC/2025/0891",
    deadline: "2025-03-25",
    estimatedValue: "KES 45,000,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://tenders.go.ke",
    sourceName: "Kenya Public Procurement Information Portal (PPIP)",
    description: "Supply, delivery, configuration and commissioning of enterprise blade servers, core optical switches, rack units, UPS power backup systems and structured cabling for the regional data center.",
    requirements: [
      "Tax Compliance Certificate from KRA",
      "Registration with ICT Authority (Class 1 or 2)",
      "Valid CR12 Document & AGPO/KEBS certification where applicable",
      "Audited financial accounts for the last 3 financial years",
      "Bid Security of KES 500,000 from a reputable commercial bank"
    ],
    status: "Active",
    contactEmail: "procurement@information.go.ke",
    publishDate: "2025-02-28",
    featured: true
  },
  {
    id: "TEN-2025-1104",
    title: "Procurement of Agricultural Hybrid Seeds, Fertilizers & Drip Irrigation Kits",
    category: "Agricultural Supplies",
    sector: "NGO",
    organization: "East Africa Agricultural Resilience Network / FAO Partner",
    location: "Eldoret & Kitale, Kenya",
    referenceNumber: "EAARN/AGRI/RFQ-044",
    deadline: "2025-03-18",
    estimatedValue: "KES 28,500,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://unon.org/procurement",
    sourceName: "UN/NGO Procurement Portal",
    description: "Supply of KEBS-certified drought-resistant hybrid maize seeds, organic soil conditioners, solar power drip irrigation pumps, and water storage bladders for smallholder farmer groups.",
    requirements: [
      "KEBS Quality Standard Certification for seeds and agro-inputs",
      "Demonstrated capacity for delivery within 14 calendar days",
      "3 reference letters from institutional buyers",
      "Valid Business Registration / Incorporation in East Africa"
    ],
    status: "Closing Soon",
    contactEmail: "sourcing@eaarn.org",
    publishDate: "2025-03-01",
    featured: true
  },
  {
    id: "TEN-2025-0412",
    title: "Construction & Commissioning of Off-Grid Solar Micro-Grid Systems",
    category: "Energy & Renewable Energy",
    sector: "County Government",
    organization: "County Government of Turkana — Energy Department",
    location: "Lodwar, Turkana, Kenya",
    referenceNumber: "CGT/ENERGY/012/2024-25",
    deadline: "2025-04-05",
    estimatedValue: "KES 85,000,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://turkana.go.ke/tenders",
    sourceName: "Turkana County Official Tender Portal",
    description: "EPC contract for design, procurement, civil works, installation, testing and commissioning of 150kW peak off-grid solar PV micro-grids with Lithium-Ion energy storage for rural health centers.",
    requirements: [
      "EPRA Solar Contractor License (Class V1 or V2)",
      "NCA 3 or higher in Electrical Works",
      "KRA Tax Compliance & County Business Permit",
      "5 years proven experience in solar mini-grid installations"
    ],
    status: "Active",
    contactEmail: "tenders@turkana.go.ke",
    publishDate: "2025-03-04",
    featured: true
  },
  {
    id: "TEN-2025-0309",
    title: "Supply & Delivery of Essential Medical Consumables & Diagnostic Test Kits",
    category: "Medical Supplies",
    sector: "NGO",
    organization: "Amref Health Africa - Global Fund Project",
    location: "Mombasa & Kwale, Kenya",
    referenceNumber: "AMREF/GF/MED/2025-03",
    deadline: "2025-03-22",
    estimatedValue: "KES 34,000,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://amref.org/tenders",
    sourceName: "Amref Procurement Portal",
    description: "Bulk supply of sterile gloves, surgical gowns, rapid diagnostic test kits, cold-chain transport boxes, and digital temperature monitors.",
    requirements: [
      "Pharmacy & Poisons Board (PPB) Wholesale License",
      "ISO 13485 certification for medical device supply",
      "Compliance with GDP (Good Distribution Practice)",
      "Manufacturer Authorization Form (MAF)"
    ],
    status: "Active",
    contactEmail: "tenders.kenya@amref.org",
    publishDate: "2025-03-02",
    featured: false
  },
  {
    id: "TEN-2025-1440",
    title: "Framework Agreement for Last-Mile Heavy Duty Freight & Haulage Services",
    category: "Logistics & Freight",
    sector: "Corporate",
    organization: "East African Portland Cement & Industrial Hub",
    location: "Nairobi - Mombasa Corridor, Kenya",
    referenceNumber: "EAPC/LOG/FWK/2025",
    deadline: "2025-03-30",
    estimatedValue: "KES 120,000,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://portland.co.ke/procurement",
    sourceName: "EAPC Corporate Portal",
    description: "Establishment of a 24-month framework agreement with vetted fleet owners and logistics providers for raw material haulage, cement distribution, and containerized transit trucking across East Africa.",
    requirements: [
      "Fleet of minimum 15 articulated flatbed/tipper trucks with GPS tracking",
      "NTSA Transport Operator License & Goods in Transit (GIT) Insurance",
      "KRA Tax Compliance Certificate",
      "Safety and Fleet Maintenance logs for past 2 years"
    ],
    status: "Active",
    contactEmail: "logistics.procurement@portland.co.ke",
    publishDate: "2025-02-25",
    featured: true
  },
  {
    id: "TEN-2025-0781",
    title: "Provision of Professional Environmental Impact Assessment (EIA) & Audit Services",
    category: "Professional Services",
    sector: "Government",
    organization: "Kenya National Highways Authority (KeNHA)",
    location: "Nakuru - Kisumu Corridor, Kenya",
    referenceNumber: "KeNHA/EIA/289/2025",
    deadline: "2025-03-15",
    estimatedValue: "KES 12,000,000",
    verificationType: "Verified Original Source",
    sourceUrl: "https://kenha.co.ke/tenders",
    sourceName: "KeNHA Official Procurement Portal",
    description: "Consultancy services for comprehensive Environmental and Social Impact Assessment (ESIA) and resettlement action plan for upcoming highway expansion.",
    requirements: [
      "NEMA Registered Firm of Experts (Lead License)",
      "KRA Tax Compliance Certificate",
      "AGPO Certificate (Youth / Women / PWD reserved)",
      "Team Leader with minimum 10 years ESIA experience in East Africa"
    ],
    status: "Closing Soon",
    contactEmail: "procurement@kenha.co.ke",
    publishDate: "2025-02-20",
    featured: false
  }
];

export const SUPPLIERS_DATA: Supplier[] = [
  {
    id: "SUP-001",
    name: "Safari Tech & Industrial Solutions Ltd",
    category: "ICT & Industrial Equipment",
    badges: ["KEBS Verified", "KRA Compliant", "ISO 9001:2015", "Vetted Premier"],
    location: "Industrial Area, Nairobi",
    city: "Nairobi",
    country: "Kenya",
    rating: 4.9,
    reviewCount: 42,
    completedOrders: 184,
    description: "Leading supplier of industrial automation, enterprise network hardware, solar backup power, and heavy-duty electrical components across East and Central Africa.",
    phone: "+254 722 000 112",
    email: "sales@safaritechsolutions.co.ke",
    contactPerson: "Eng. David Mwangi",
    yearEstablished: 2012,
    productsCount: 145,
    sectors: ["ICT", "Industrial", "Renewable Energy"],
    verifiedSource: true
  },
  {
    id: "SUP-002",
    name: "AfriAgri Seeds & Equipment Kenya",
    category: "Agricultural Supplies",
    badges: ["AGPO Certified", "KEBS Verified", "KRA Compliant"],
    location: "Kipchoge Keino Way, Eldoret",
    city: "Eldoret",
    country: "Kenya",
    rating: 4.8,
    reviewCount: 38,
    completedOrders: 210,
    description: "Certified supplier of certified high-yield hybrid seeds, drip irrigation equipment, greenhouse plastics, and solar agro-processing units.",
    phone: "+254 733 444 888",
    email: "info@afriagriseeds.co.ke",
    contactPerson: "Grace Chebet",
    yearEstablished: 2015,
    productsCount: 88,
    sectors: ["Agriculture", "Irrigation", "Agro-processing"],
    verifiedSource: true
  },
  {
    id: "SUP-003",
    name: "Apex Medical & Laboratory Supplies Ltd",
    category: "Medical Supplies",
    badges: ["Pharmacy & Poisons Board Certified", "KEBS Verified", "ISO 13485"],
    location: "Upper Hill, Nairobi",
    city: "Nairobi",
    country: "Kenya",
    rating: 4.9,
    reviewCount: 56,
    completedOrders: 320,
    description: "Importer and wholesale distributor of hospital diagnostic machinery, PPE, emergency response kits, and cold-chain medical storage.",
    phone: "+254 711 998 877",
    email: "orders@apexmed.co.ke",
    contactPerson: "Dr. Samuel Ochieng",
    yearEstablished: 2010,
    productsCount: 210,
    sectors: ["Healthcare", "Pharmaceuticals", "Laboratory"],
    verifiedSource: true
  },
  {
    id: "SUP-004",
    name: "Mombasa Global Logistics & Warehousing Ltd",
    category: "Logistics & Freight",
    badges: ["KRA Authorized Economic Operator (AEO)", "NTSA Licensed", "ISO 28000"],
    location: "Mbaraki Road, Mombasa Port Zone",
    city: "Mombasa",
    country: "Kenya",
    rating: 4.7,
    reviewCount: 64,
    completedOrders: 540,
    description: "Specialized port clearing, container freight station (CFS), bonded warehousing, and cross-border trucking to Uganda, Rwanda, South Sudan and DRC.",
    phone: "+254 720 123 456",
    email: "operations@mombasagloballogistics.com",
    contactPerson: "Hassan Ali",
    yearEstablished: 2008,
    productsCount: 12,
    sectors: ["Shipping", "Customs Clearance", "Trucking"],
    verifiedSource: true
  },
  {
    id: "SUP-005",
    name: "Sino-East Sourcing & Machinery Trading Ltd",
    category: "Import & Export Sourcing",
    badges: ["Global Sourcing Verified", "KEBS Pre-Export Verification (PVOC)", "KRA Compliant"],
    location: "Westlands, Nairobi / Guangzhou Hub",
    city: "Nairobi",
    country: "Kenya & China",
    rating: 4.8,
    reviewCount: 29,
    completedOrders: 130,
    description: "Direct factory sourcing agent connecting Kenyan construction firms and manufacturers with vetted OEMs in China, UAE, and India.",
    phone: "+254 741 401 154",
    email: "sourcing@tandoraventures.com",
    contactPerson: "Joshua Watiti Wekesa",
    yearEstablished: 2018,
    productsCount: 310,
    sectors: ["Machinery", "Building Materials", "International Sourcing"],
    verifiedSource: true
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "PROD-01",
    name: "Commercial Grade 10kW Solar Off-Grid Hybrid Inverter",
    category: "Energy & Renewable Energy",
    supplierName: "Safari Tech & Industrial Solutions Ltd",
    supplierId: "SUP-001",
    priceRange: "KES 185,000 - KES 220,000",
    unit: "Unit",
    moq: "2 Units",
    originCountry: "Germany / Assembled in Kenya",
    originFlag: "🇰🇪",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    description: "Pure sine wave heavy-duty hybrid solar inverter with dual MPPT tracking controllers, RS485 communication, and smart generator auto-start support.",
    stockStatus: "In Stock",
    deliveryLeadTime: "24-48 Hours in East Africa",
    featured: true
  },
  {
    id: "PROD-02",
    name: "Automated Solar-Powered Drip Irrigation Controller & Pump Kit",
    category: "Agricultural Supplies",
    supplierName: "AfriAgri Seeds & Equipment Kenya",
    supplierId: "SUP-002",
    priceRange: "KES 65,000 - KES 85,000",
    unit: "Complete Set",
    moq: "5 Sets",
    originCountry: "Kenya",
    originFlag: "🇰🇪",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80",
    description: "Submersible DC brushless solar water pump rated for 12,000 L/hr flow with automated timer controller and filtration unit for 2-acre farms.",
    stockStatus: "In Stock",
    deliveryLeadTime: "2 Days",
    featured: true
  },
  {
    id: "PROD-03",
    name: "ISO-Certified Digital Multiparameter Patient Vital Signs Monitor",
    category: "Medical Supplies",
    supplierName: "Apex Medical & Laboratory Supplies Ltd",
    supplierId: "SUP-003",
    priceRange: "KES 140,000 - KES 175,000",
    unit: "Unit",
    moq: "1 Unit",
    originCountry: "Japan",
    originFlag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    description: "12.1-inch color TFT display monitoring ECG, SpO2, NIBP, respiration and temperature with built-in rechargeable lithium battery.",
    stockStatus: "In Stock",
    deliveryLeadTime: "Immediate Delivery",
    featured: true
  },
  {
    id: "PROD-04",
    name: "Heavy-Duty Construction Scaffolding & Formwork Systems",
    category: "Construction Procurement",
    supplierName: "Sino-East Sourcing & Machinery Trading Ltd",
    supplierId: "SUP-005",
    priceRange: "KES 4,500 - KES 6,200",
    unit: "Set / Frame",
    moq: "50 Sets",
    originCountry: "China (OEM Verified)",
    originFlag: "🇨🇳",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
    description: "Galvanized ringlock scaffolding frames tested to BS EN 12810 standards. Heavy load capacity suitable for high-rise commercial structures.",
    stockStatus: "Available on Import",
    deliveryLeadTime: "14-21 Days Express Sea Freight",
    featured: false
  },
  {
    id: "PROD-05",
    name: "Industrial High-Volume Grain Storage Silo (100 Metric Ton)",
    category: "Agricultural Supplies",
    supplierName: "AfriAgri Seeds & Equipment Kenya",
    supplierId: "SUP-002",
    priceRange: "KES 1,200,000 - KES 1,600,000",
    unit: "Structure",
    moq: "1 Unit",
    originCountry: "Kenya",
    originFlag: "🇰🇪",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80",
    description: "Corrugated galvanized steel grain silo with aeration fan, temperature monitoring sensors and spiral grain discharge auger.",
    stockStatus: "Made to Order",
    deliveryLeadTime: "10 Days Fabrication",
    featured: false
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "SERV-01",
    name: "End-to-End Customs Clearance & Port Forwarding at Mombasa Port",
    category: "Logistics & Freight",
    providerName: "Mombasa Global Logistics & Warehousing Ltd",
    providerId: "SUP-004",
    rating: 4.9,
    location: "Mombasa Port / ICD Nairobi",
    description: "Comprehensive KRA Simba/iCMS documentation clearance, duty assessment, port handling, and fast-track transit escort to destination.",
    capabilities: ["Duty Tax Optimization", "Bonded Clearance", "Container Freight Operations", "AEO Escort"],
    startingRate: "KES 35,000 per 20ft Container"
  },
  {
    id: "SERV-02",
    name: "Turnkey ICT Enterprise Network Deployment & Fiber Splicing",
    category: "ICT & Technology",
    providerName: "Safari Tech & Industrial Solutions Ltd",
    providerId: "SUP-001",
    rating: 4.8,
    location: "Nairobi & All 47 Counties",
    description: "Site survey, structured cabling, optical fiber fusion splicing, firewall security setup and 24/7 SLA maintenance for government and corporate offices.",
    capabilities: ["Fiber Optic Splicing", "Cisco & Mikrotik Setup", "Server Room Cooling", "Data Security"],
    startingRate: "Custom Quote per Project"
  },
  {
    id: "SERV-03",
    name: "International Factory Audit & Pre-Shipment Inspection (Guangzhou / Dubai / Mumbai)",
    category: "Import & Export Sourcing",
    providerName: "Tandora Ventures Sourcing Desk",
    providerId: "SUP-005",
    rating: 5.0,
    location: "Global Sourcing Network",
    description: "Physical factory verification, production capacity checks, raw material testing, and KEBS PVoC compliance verification before final balance payment.",
    capabilities: ["On-Site ISO Inspection", "Quality Assurance Reports", "Container Loading Supervision", "Escrow Escort"],
    startingRate: "USD 350 per Factory Audit"
  }
];

export const ACTIVE_RFQS: RFQ[] = [
  {
    id: "RFQ-2025-901",
    title: "Supply of 500 Metric Tons of Organic Fertilizer for Farmers Co-operative",
    buyerOrganization: "Rift Valley Farmers Co-operative Alliance",
    buyerType: "Corporate",
    category: "Agricultural Supplies",
    deadline: "2025-03-20",
    budgetRange: "KES 15M - 20M",
    status: "Open for Bids",
    bidsCount: 7,
    location: "Nakuru Depot, Kenya",
    specifications: [
      "Minimum 45% Organic Matter content",
      "KEBS & NEMA certified non-hazardous",
      "Packaged in 50kg moisture-resistant polypropylene bags",
      "Delivery required in 3 staggered batches over 60 days"
    ],
    contactPerson: "Procurement Committee Chair",
    createdDate: "2025-03-01"
  },
  {
    id: "RFQ-2025-888",
    title: "Sourcing & Freight of 250 Ruggedized Tablets for Field Data Collection",
    buyerOrganization: "Humanitarian Tech Action Network",
    buyerType: "NGO",
    category: "ICT & Technology",
    deadline: "2025-03-16",
    budgetRange: "KES 8M - 11M",
    status: "Open for Bids",
    bidsCount: 12,
    location: "Nairobi, Kenya",
    specifications: [
      "IP68 dust & water resistant rating",
      "4G LTE dual-SIM compatibility for East Africa networks",
      "Minimum 8,000mAh long life battery",
      "Pre-loaded Android Enterprise MDM software support"
    ],
    contactPerson: "Tech Sourcing Officer",
    createdDate: "2025-03-03"
  },
  {
    id: "RFQ-2025-720",
    title: "Supply of Heavy Duty Safety Boots, Reflective Vests & Hard Hats",
    buyerOrganization: "Apex Infra Contractors East Africa",
    buyerType: "SME",
    category: "Industrial Equipment",
    deadline: "2025-03-28",
    budgetRange: "KES 3.5M - 4.5M",
    status: "Open for Bids",
    bidsCount: 4,
    location: "Mombasa, Kenya",
    specifications: [
      "Steel toe cap boots conforming to EN ISO 20345",
      "High-visibility reflective safety vests with pocket slots",
      "Industrial safety helmets with ratchet suspension",
      "Sizes 38-46 assortments required"
    ],
    contactPerson: "HSE Logistics Lead",
    createdDate: "2025-03-05"
  }
];

export const LOGISTICS_ROUTES: LogisticsRoute[] = [
  {
    id: "LOG-R01",
    title: "Mombasa Port to Nairobi ICD Dedicated Rail Freight & Last-Mile Trucking",
    mode: "Road Trucking",
    origin: "Kilindini Harbor, Mombasa",
    destination: "Embakasi ICD / Industrial Area, Nairobi",
    transitTime: "18 - 24 Hours",
    capacity: "Up to 30 Tons per Truck / 40ft Container",
    startingPrice: "KES 95,000 per 40ft Container",
    provider: "Mombasa Global Logistics & Tandora Logistics Network",
    features: ["GPS Real-time Tracking", "Goods in Transit (GIT) Covered up to KES 10M", "KRA Bonded Escort", "Port Storage Buffer"]
  },
  {
    id: "LOG-R02",
    title: "Express Air Freight Sourcing Hub (Frankfurt / Dubai / Guangzhou → Nairobi JKIA)",
    mode: "Air Freight",
    origin: "Dubai (DXB) / Guangzhou (CAN)",
    destination: "Nairobi JKIA Cargo Terminal",
    transitTime: "3 - 5 Business Days",
    capacity: "From 50kg to 10 Tons Bulk Air Cargo",
    startingPrice: "USD 4.80 / kg (Inclusive of Handling)",
    provider: "Tandora Global Freight Network",
    features: ["Express Customs Pre-Clearance", "Cold Chain Temperature Control", "Door-to-Door Delivery", "Hazardous Cargo Handling"]
  },
  {
    id: "LOG-R03",
    title: "Cross-Border Transit Haulage (Nairobi → Kampala, Uganda & Kigali, Rwanda)",
    mode: "Road Trucking",
    origin: "Nairobi Hub, Kenya",
    destination: "Kampala, Uganda / Kigali, Rwanda",
    transitTime: "2 - 4 Days",
    capacity: "28 Ton Articulated Flatbed",
    startingPrice: "USD 2,200 per Truckload",
    provider: "Tandora Trans-African Fleet",
    features: ["Single Customs Territory (SCT) Documentation", "Malaba / Busia Border Priority Pass", "Escrow Cargo Protection"]
  }
];

export const BUSINESS_OPPORTUNITIES: BusinessOpportunity[] = [
  {
    id: "OPP-101",
    title: "Exclusive Regional Distributor Agency for European Solar Battery Storage Solutions",
    type: "Distributor Agency",
    country: "Kenya, Uganda, Tanzania",
    organization: "HelioVolt Energy GmbH (Germany)",
    deadline: "2025-04-15",
    description: "Seeking established local East African electrical and renewable energy suppliers to become authorized country distributors for high-efficiency LFP battery racks.",
    eligibility: [
      "Registered business with proven sales network in renewable energy",
      "Warehouse space for minimum 50 battery units",
      "Technical support staff capable of warranty service"
    ],
    value: "KES 50,000,000 Annual Sales Potential"
  },
  {
    id: "OPP-102",
    title: "AGPO Youth & Women Reserved Supply Reservation - Medical Consumables Framework",
    type: "AGPO Youth/Women Tender",
    country: "Kenya (Nationwide)",
    organization: "National Government Procurement Reserve",
    deadline: "2025-03-31",
    description: "Special reservation for AGPO certified enterprises for supply of non-pharmaceutical medical accessories to sub-county health facilities.",
    eligibility: [
      "Valid AGPO Certificate issued by National Treasury Kenya",
      "KRA Tax Compliance",
      "Sole Proprietorship or Company owned 70%+ by Youth/Women"
    ],
    value: "KES 18,000,000 Reserved Pool"
  },
  {
    id: "OPP-103",
    title: "Joint Venture Sub-Contracting: Lamu Port LAPSSET Infrastructure Civil Works",
    type: "Joint Venture",
    country: "Kenya & International",
    organization: "LAPSSET Corridor Development Authority Contractor Group",
    deadline: "2025-04-30",
    description: "Seeking local Kenyan civil engineering subcontractors with NCA 1 to 3 registration for earthworks, drainage, and paving works.",
    eligibility: [
      "NCA 1, 2 or 3 Civil Works Registration",
      "Heavy earthmoving equipment ownership or lease agreement",
      "Positive credit reference"
    ],
    value: "KES 140,000,000 Sub-contract Allocation"
  }
];

export const CATEGORIES_LIST = [
  "Tender Discovery",
  "Procurement Opportunities",
  "Supplier Discovery",
  "Product Sourcing",
  "Service Providers",
  "Manufacturer Discovery",
  "Import & Export Sourcing",
  "Logistics & Freight",
  "Warehousing",
  "Construction Procurement",
  "Medical Supplies",
  "Agricultural Supplies",
  "ICT & Technology",
  "Industrial Equipment",
  "Office & School Supplies",
  "Energy & Renewable Energy",
  "Automotive Supplies",
  "Professional Services",
  "Corporate Procurement",
  "NGO Procurement",
  "Government Procurement",
  "International Sourcing"
];
