import lenovoLogo from "../assets/partners/lenovo.svg";
import hpLogo from "../assets/partners/hp.svg";
import dellLogo from "../assets/partners/dell.svg";
import asusLogo from "../assets/partners/asus.svg";
import acerLogo from "../assets/partners/acer.svg";
import appleLogo from "../assets/partners/apple.svg";
import samsungLogo from "../assets/partners/samsung.svg";
import msiLogo from "../assets/partners/msi.svg";
import microsoftLogo from "../assets/partners/microsoft.svg";
import intelLogo from "../assets/partners/intel.svg";
import amdLogo from "../assets/partners/amd.svg";
import nvidiaLogo from "../assets/partners/nvidia.svg";
import ciscoLogo from "../assets/partners/cisco.svg";
import sonyLogo from "../assets/partners/sony.svg";
import lgLogo from "../assets/partners/lg.svg";
import aboutTechnology from "../assets/about-technology.jpg";
import aboutBannerTech from "../assets/about-banner-tech.jpg";
import homeAboutTech from "../assets/home-about-hd.jpg";
import partnersBannerTech from "../assets/partners-banner-tech.jpg";
import contactBannerTech from "../assets/contact-banner-tech.jpg";
import careersBannerTech from "../assets/careers-banner-tech.jpg";
import aboutPresenceImg from "../assets/about-presence.jpg";
import aboutDeployImg from "../assets/about-deploy.jpg";
import aboutSlaImg from "../assets/about-sla.jpg";
import aboutSupportImg from "../assets/about-support.svg";
import aboutPeopleTechImg from "../assets/about-people-tech.svg";

const pexels = (id: string, w = 1500, h = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/* HD portrait crop (1200x1500) for tall gallery cards */
export const pexelsPortraitHD = (id: string) => pexels(id, 1200, 1500);

export const images = {
  hero: pexels("17489160", 2200, 1400),
  about: pexels("20642118", 1500, 1600),
  aboutHome: aboutTechnology,
  aboutBanner: aboutBannerTech,
  homeAbout: homeAboutTech,
  partnersBanner: partnersBannerTech,
  contactBanner: contactBannerTech,
  careersBanner: careersBannerTech,
  aboutPresence: aboutPresenceImg,
  aboutDeploy: aboutDeployImg,
  aboutSla: aboutSlaImg,
  servers: pexels("17489157", 1500, 1200),
  infrastructure: pexels("17323801", 1500, 1200),
  support: pexels("35155421", 1500, 1200),
  lifecycle: pexels("38411739", 1500, 1200),
  printers: pexels("11833899", 1500, 1200),
  computers: pexels("7689881", 1500, 1200),
  office: pexels("40719520", 1500, 1200),
  aboutSupport: aboutSupportImg,
  aboutTechnology: aboutPeopleTechImg,
  network: pexels("5480781", 1500, 1200),
  galleryLaptop: pexels("17367708", 1500, 1200),
  galleryDesktop: pexels("990423", 1500, 1200),
  galleryPrinter: pexels("11833899", 1500, 1200),
  galleryNetwork: pexels("2881227", 1500, 1200),
  galleryEngineer: pexels("6466141", 1500, 1200),
  galleryDatacenter: pexels("5073493", 1500, 1200),
  galleryControl: pexels("1054397", 1500, 1200),
  galleryCamera: pexels("13156207", 1500, 1200),
};

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  metrics: ServiceMetric[];
}

export const services: ServiceItem[] = [
  {
    id: "it-infrastructure",
    tag: "Turnkey Infrastructure",
    title: "IT infrastructure",
    headline:
      "End-to-end design, implementation and managed lifecycle for modern enterprise IT.",
    description:
      "Specializing in designing, deploying, and maintaining robust IT infrastructure—from enterprise server rooms and structured cabling to high-availability data storage and cloud-ready architectures engineered for operational stability.",
    image: images.infrastructure,
    imageAlt:
      "Modern data center enterprise network racks with high performance connectivity",
    features: [
      "Server room & data center design and build",
      "Power, cooling & rack environment infrastructure",
      "Structured cabling & network architecture deployment",
      "Comprehensive hardware procurement & setup",
    ],
    metrics: [
      { label: "Uptime Commitment", value: "99.9%" },
      { label: "Deployments", value: "800+" },
    ],
  },
  {
    id: "servers",
    tag: "Compute & Storage",
    title: "Servers",
    headline:
      "Scalable server platforms and storage architectures for mission-critical enterprise workloads.",
    description:
      "Brand new HP, Dell, and Lenovo server systems available in blade, tower, and rack form factors. Engineered for mission-critical reliability, scalability, virtualization, and optimal total cost of ownership across your enterprise.",
    image: images.servers,
    imageAlt: "Illuminated enterprise servers in modern data center",
    features: [
      "Rack, tower, blade and edge server form factors",
      "High-density & virtualization compute nodes",
      "Enterprise SAN/NAS storage integration",
      "Hardware configuration & full warranty support",
    ],
    metrics: [
      { label: "Multi-OEM Support", value: "HP/Dell/Lenovo" },
      { label: "Workload Availability", value: "99.99%" },
    ],
  },
  {
    id: "network-devices",
    tag: "Connectivity & Routing",
    title: "Network Devices",
    headline:
      "Enterprise-grade routers, switches, wireless controllers, and structured cabling solutions.",
    description:
      "Enterprise networking hardware from Cisco, R&M, Netgear, and Vertiv. Includes full installation, rack dressing, endpoint labeling, and ongoing network performance management with zero downtime.",
    image: images.network,
    imageAlt: "Server and network cabling in a data center",
    features: [
      "Enterprise managed switches & core routers",
      "Wireless access points & centralized Wi-Fi controllers",
      "Rack dressing & structured cable labeling",
      "Network security & bandwidth optimization",
    ],
    metrics: [
      { label: "Throughput Capacity", value: "10 Gbps+" },
      { label: "Latency Guarantee", value: "< 2ms" },
    ],
  },
  {
    id: "facility-management-services",
    tag: "Operations & Governance",
    title: "Facility management services",
    headline:
      "Dedicated on-site technical manpower, helpdesk operations, and proactive systems administration.",
    description:
      "Comprehensive Facility Management Services (FMS) ensuring uninterrupted workplace IT operations. We manage hardware health, environmental controls, dedicated technician dispatch, and on-premise IT upkeep across all your branches.",
    image: images.support,
    imageAlt:
      "Indian IT facility management engineer working on electronics hardware",
    features: [
      "Dedicated on-premise IT technician staffing & support",
      "Preventive hardware health inspections & diagnostic checks",
      "Power, cooling & rack environment monitoring",
      "Asset lifecycle & multi-vendor SLA governance",
    ],
    metrics: [
      { label: "Service Locations", value: "350+" },
      { label: "Monthly Tickets", value: "85K+" },
    ],
  },
  {
    id: "laptops-and-desktops",
    tag: "Workforce Computing",
    title: "Laptops and Desktops",
    headline:
      "Commercial laptops, workstations, and desktop fleets with turnkey provisioning and support.",
    description:
      "End-to-end procurement and configuration of business computing devices from leading brands. Sourced with official manufacturer warranties, custom OS imaging, and rapid deployment for remote and on-premise staff.",
    image: images.computers,
    imageAlt: "Laptops arranged across an office workspace",
    features: [
      "Corporate laptop & desktop fleet procurement",
      "Custom OS imaging & enterprise deployment",
      "Warranty support & genuine OEM spares",
      "Hardware upgrade & maintenance programs",
    ],
    metrics: [
      { label: "Fleet Deployed", value: "100K+" },
      { label: "Setup Turnaround", value: "< 24 Hrs" },
    ],
  },
  {
    id: "printer-and-periferals",
    tag: "Print & Peripheral Systems",
    title: "Printer and Periferals",
    headline:
      "Commercial multifunction printers, scanners, and high-performance peripheral maintenance.",
    description:
      "Authorized sales and ongoing support for HP, Epson, Canon, and Kyocera printers and scanners. Mono and color multifunction units, document scanners, and workplace peripherals with genuine consumables and repair support.",
    image: images.printers,
    imageAlt: "Modern office multifunction printer and document equipment",
    features: [
      "Laser, inkjet & multifunction commercial printers",
      "High-speed document scanners & peripherals",
      "Genuine consumables & spare parts support",
      "Setup, calibration & breakdown repair",
    ],
    metrics: [
      { label: "Authorized Brands", value: "HP/Epson/Canon" },
      { label: "First-Time-Right", value: "98%" },
    ],
  },
  {
    id: "security-and-services",
    tag: "Surveillance & Access",
    title: "Security and Services",
    headline:
      "CCTV surveillance, biometric access control, and electronic security systems.",
    description:
      "State-of-the-art security and surveillance solutions designed to protect your physical and digital assets. Includes IP cameras, NVRs, biometric attendance, and perimeter access control with proactive servicing.",
    image: images.infrastructure,
    imageAlt: "Security and surveillance cameras and network infrastructure",
    features: [
      "IP CCTV camera design & deployment",
      "Biometric & RFID access control systems",
      "Video management & remote security monitoring",
      "Annual maintenance & firmware updates",
    ],
    metrics: [
      { label: "Continuous Monitoring", value: "24/7/365" },
      { label: "Recording Retention", value: "90+ Days" },
    ],
  },
  {
    id: "managed-print-services",
    tag: "Managed Print & Audit",
    title: "Managed Print Services",
    headline:
      "Fleet print management, usage auditing, cost reduction, and automated consumable replenishment.",
    description:
      "Managed Print Services (MPS) combining hardware surveillance, printer fleet monitoring, page tracking, automated toner restocking, and scheduled preventive maintenance to reduce organizational print expenditure.",
    image: images.printers,
    imageAlt: "Commercial office printer fleet management",
    features: [
      "Print fleet audit & proactive surveillance",
      "Per-page cost reduction & analytics",
      "Automated consumable replenishment",
      "Break-fix servicing & uptime guarantees",
    ],
    metrics: [
      { label: "Print Cost Savings", value: "Up to 30%" },
      { label: "Replenishment", value: "Automated" },
    ],
  },
  {
    id: "e-waste",
    tag: "Compliant E-Waste",
    title: "E- waste",
    headline:
      "Authorized, eco-friendly electronic waste recycling, certified data destruction, and asset retirement.",
    description:
      "Certified e-waste management for corporate IT equipment. Secure data wiping, certified destruction, CPCB-compliant documentation, and eco-friendly hardware recycling to ensure complete regulatory compliance and environmental sustainability.",
    image: images.lifecycle,
    imageAlt: "Electronic waste components ready for safe recycling",
    features: [
      "Certified data wiping & hardware destruction",
      "End-of-life electronic equipment pickup",
      "CPCB-compliant green recycling certification",
      "Material recovery & sustainable disposal",
    ],
    metrics: [
      { label: "Data Sanitization", value: "DoD 5220.22-M" },
      { label: "Regulatory Compliance", value: "100% CPCB" },
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover the project",
    text: "Understand your goals, environment and day-to-day needs.",
  },
  {
    number: "02",
    title: "Strategy development",
    text: "Shape a practical plan around requirements and budget.",
  },
  {
    number: "03",
    title: "Implement the solution",
    text: "Coordinate installation, configuration and handover.",
  },
  {
    number: "04",
    title: "Monitor progress",
    text: "Support, maintain and optimize as your business evolves.",
  },
];

export const lifecycleStages = [
  "Product",
  "Sale",
  "Deploy",
  "Utilization",
  "Service",
  "Recycle",
];

export const testimonials = [
  {
    quote:
      "It's always a pleasure to work with Will and his team. They are personable, responsive, and results-oriented!",
    name: "Sandip Patil",
    role: "IT, ICICI Securities",
  },
  {
    quote:
      "Your thoughtfulness and support of AMC is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in AMC will be justified.",
    name: "Mohd Minhag",
    role: "IT, Crompton Greaves",
  },
  {
    quote:
      "Great results. Enjoyable to work with, and most importantly, enabled us to have the presence on the web we needed to conduct business in today's market.",
    name: "Arun Bhat",
    role: "IT, ICICI Lombard",
  },
];

export const careerOpenings = [
  {
    role: "Marketing Executive",
    department: "Sales & Marketing",
    location: "Vashi / Navi Mumbai, as applicable",
    skills:
      "Digital and offline marketing, content creation, communication and MS Office / Excel.",
    qualifications:
      "Bachelor's degree in Marketing, Business or a related field; 1-3 years of marketing experience.",
  },
  {
    role: "Sr Customer Service Engineer",
    department: "Service",
    location: "Vashi / Navi Mumbai, as applicable",
    skills:
      "Hardware and network troubleshooting, client handling, problem solving and guiding junior engineers.",
    qualifications:
      "Diploma or bachelor's degree in IT / Electronics or equivalent; 3-5 years of field service experience.",
  },
  {
    role: "Customer Service Engineer",
    department: "Service",
    location: "Vashi / Navi Mumbai, as applicable",
    skills:
      "Hardware and software support, installation, communication and a customer-focused mindset.",
    qualifications:
      "Diploma or bachelor's degree in IT / Electronics or equivalent; 0-3 years of service experience.",
  },
];

export interface PartnerBrand {
  id: string;
  name: string;
  logo: string;
  alt: string;
  /** Rendered logo width in px (normalised so every mark has similar visual weight) */
  width: number;
}

export const partnerBrands: PartnerBrand[] = [
  { id: "lenovo", name: "Lenovo", logo: lenovoLogo, alt: "Lenovo", width: 105 },
  { id: "hp", name: "HP", logo: hpLogo, alt: "HP", width: 58 },
  { id: "dell", name: "Dell", logo: dellLogo, alt: "Dell", width: 58 },
  { id: "asus", name: "ASUS", logo: asusLogo, alt: "ASUS", width: 130 },
  { id: "acer", name: "Acer", logo: acerLogo, alt: "Acer", width: 122 },
  { id: "apple", name: "Apple", logo: appleLogo, alt: "Apple", width: 48 },
  { id: "samsung", name: "Samsung", logo: samsungLogo, alt: "Samsung", width: 150 },
  { id: "msi", name: "MSI", logo: msiLogo, alt: "MSI", width: 48 },
  { id: "microsoft", name: "Microsoft", logo: microsoftLogo, alt: "Microsoft", width: 58 },
  { id: "intel", name: "Intel", logo: intelLogo, alt: "Intel", width: 97 },
  { id: "amd", name: "AMD", logo: amdLogo, alt: "AMD", width: 122 },
  { id: "nvidia", name: "NVIDIA", logo: nvidiaLogo, alt: "NVIDIA", width: 75 },
  { id: "cisco", name: "Cisco", logo: ciscoLogo, alt: "Cisco", width: 84 },
  { id: "sony", name: "Sony", logo: sonyLogo, alt: "Sony", width: 141 },
  { id: "lg", name: "LG", logo: lgLogo, alt: "LG", width: 92 },
];

export const contactInfo = {
  address:
    "F167, Fantasia business park premises csl, plot 47, sector 30A, Vashi, Navi Mumbai 400703",
  branches: [
    "Delhi NCR",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
  ],
  mobile: "+91 8271810707",
  mobileDisplay: "8271810707",
  enquiry: "Info@genalfatech.com",
};

export const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Partners", to: "/partners" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];
