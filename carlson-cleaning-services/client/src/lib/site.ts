// Reference-fidelity design system: shared Carlson Cleaning Services content, links, and service taxonomy.

export const WHATSAPP_PRIMARY = "233554878672";
export const WHATSAPP_SECONDARY = "233538125410";
export const PRIMARY_PHONE = "+233 55 487 8672";
export const SECONDARY_PHONE = "+233 53 812 5410";
export const MAP_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=Carlson%20Cleaning%20Services%2C%20Martino%20Residence%2C%20Accra%2C%20Ghana";
export const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Carlson%20Cleaning%20Services%2C%20Martino%20Residence%2C%20Accra%2C%20Ghana";
export const INSTAGRAM_URL = "https://www.instagram.com/mys_carl";
export const FACEBOOK_URL = "https://www.facebook.com/search/top?q=Carlson%20Ghana%20Cleaning%20Services";

export const heroImage = "/manus-storage/carlson-hero-reference_ed626d04.jpg";
export const upholsteryImage = "/manus-storage/carlson-source-upholstery_02b66cb1.jpg";
export const commercialImage = "/manus-storage/carlson-commercial-fallback_b037a20e.jpg";
export const beforeAfterUpholsteryImage = "/manus-storage/carlson-before-after-upholstery_09ff1850.jpg";
export const beforeAfterFloorImage = "/manus-storage/carlson-before-after-floor_00ee426e.jpg";
export const markImage = "/manus-storage/carlson-official-logo_936306fe.png";

export type ServiceGroup = "Residential" | "Commercial" | "Specialist";

export type Service = {
  name: string;
  group: ServiceGroup;
  description: string;
};

export const services: Service[] = [
  { name: "Home Cleaning", group: "Residential", description: "Routine cleaning for apartments, flats and family homes — living areas, bedrooms, kitchens and bathrooms." },
  { name: "Office Cleaning", group: "Commercial", description: "Workspace cleaning for offices and shared work areas, scheduled around your working hours." },
  { name: "Commercial Cleaning", group: "Commercial", description: "Cleaning for shops, showrooms, guest houses, clinics and other commercial premises across Accra." },
  { name: "Deep Cleaning", group: "Residential", description: "A detailed top-to-bottom clean for move-ins, move-outs or spaces that need more than routine attention." },
  { name: "Sofa Cleaning", group: "Specialist", description: "Fabric and leather sofa cleaning to lift dust, stains and everyday build-up." },
  { name: "Upholstery Cleaning", group: "Specialist", description: "Upholstered furniture cleaned with methods matched to the fabric and its condition." },
  { name: "Chair Cleaning", group: "Specialist", description: "Dining chairs, armchairs and office seating cleaned individually or per set." },
  { name: "Carpet Cleaning", group: "Specialist", description: "Carpets and rugs cleaned on site, with attention to traffic areas and edges." },
  { name: "Window Cleaning", group: "Commercial", description: "Interior and reachable exterior window cleaning for homes and commercial buildings." },
  { name: "Glass Cleaning", group: "Commercial", description: "Glass doors, partitions, balustrades and shopfront glass cleaned streak-free." },
  { name: "Tile Cleaning", group: "Residential", description: "Wall and floor tiles cleaned, including grout lines and bathroom surfaces." },
  { name: "Floor Cleaning", group: "Residential", description: "Terrazzo, tiled, wooden and concrete floors cleaned and finished appropriately." },
  { name: "General Cleaning", group: "Residential", description: "Flexible general cleaning where the scope is agreed with you before work begins." },
  { name: "Fumigation", group: "Specialist", description: "Fumigation treatment for homes and business premises. Preparation and re-entry guidance is confirmed before the visit." },
  { name: "Post-Construction Cleaning", group: "Specialist", description: "Clearing dust, residue and site debris so a newly built or renovated space is ready to use." },
];

export const serviceAreas = [
  "East Legon", "Adjiringanor", "Adenta", "Adenta Municipality", "Madina", "Spintex", "Spintex Road", "Haatso", "Achimota", "Airport Residential Area", "Gbawe", "Mallam", "Awoshie", "Oyarifa", "Pokuase", "Kwabenya", "Sowutoum", "Kwashieman", "Ashaley Botwe",
];

export const whatsappLink = (message = "Hello Carlson Cleaning Services, I would like a cleaning quote.") =>
  `https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(message)}`;

export const serviceWhatsappLink = (serviceName: string) =>
  whatsappLink(`Hello Carlson Cleaning Services, I would like a quote for ${serviceName} in Accra.`);

export const pageTitles: Record<string, string> = {
  "/": "Carlson Cleaning Services | Cleaning Company in Accra, Ghana",
  "/about": "About Carlson Cleaning Services | Accra Cleaning Company",
  "/services": "Cleaning Services in Accra | Carlson Cleaning Services",
  "/service-areas": "Cleaning Service Areas in Accra | Carlson Cleaning Services",
  "/contact": "Contact Carlson Cleaning Services | Accra, Ghana",
  "/privacy-policy": "Privacy Policy | Carlson Cleaning Services",
  "/terms-and-conditions": "Terms & Conditions | Carlson Cleaning Services",
};
