export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Al Mouj Villa Interior",
    location: "Muscat, Oman",
    description: "Complete luxury interior design and custom furniture for a premium waterfront villa featuring modern aesthetics, elegant color palette, and bespoke joinery throughout. The project included custom kitchen cabinetry, bedroom wardrobes, and living room furniture.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design",
    beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Corporate Office Fit-Out",
    location: "Ghubra, Muscat",
    description: "Modern office space design with custom CNC workstations, meeting rooms, and premium joinery. Features include open-plan workspaces, executive offices, conference rooms, and a welcoming reception area with contemporary finishes.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out",
    beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Premium Kitchen & Wardrobes",
    location: "Barka, Oman",
    description: "Custom kitchen cabinetry and bedroom wardrobes with precision CNC joinery and premium finishes. The kitchen features soft-close drawers, integrated appliances, and a large island. Master bedroom includes walk-in wardrobe with custom lighting.",
    image: "https://i.pinimg.com/736x/40/b5/d3/40b5d327dc8955ade6be103a00773757.jpg",
    category: "Custom Furniture",
    beforeImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Boutique Hotel Lobby",
    location: "Muscat, Oman",
    description: "Luxury hotel lobby interior featuring custom reception desk, decorative ceiling elements, premium flooring, and bespoke furniture pieces. The design creates a welcoming atmosphere with sophisticated lighting and elegant material choices.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    category: "Hospitality"
  },
  {
    id: "5",
    title: "Residential Landscape Design",
    location: "Al Khoud, Muscat",
    description: "Complete outdoor living design for a residential property including garden planning, hardscaping, outdoor kitchen, pergola structure, and decorative lighting. The landscape integrates seamlessly with the interior design.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    category: "Landscape"
  },
  {
    id: "6",
    title: "Luxury Master Bedroom Suite",
    location: "Muscat, Oman",
    description: "Premium master bedroom design featuring custom bed frame, walk-in wardrobe with glass doors, dressing area, and ensuite bathroom. Includes decorative ceiling, mood lighting, and high-end finishes throughout.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design",
    beforeImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Restaurant Interior Fit-Out",
    location: "Muscat, Oman",
    description: "Complete restaurant fit-out including custom dining furniture, bar area, kitchen joinery, and decorative wall elements. The design balances functionality with aesthetic appeal, creating an inviting dining atmosphere.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out"
  },
  {
    id: "8",
    title: "Modern Kitchen Remodel",
    location: "Barka, Oman",
    description: "Complete kitchen remodeling with custom cabinetry manufactured in our CNC factory. Features include quartz countertops, integrated appliances, breakfast bar, and premium hardware. Modern clean-line design with maximum storage.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
    category: "Custom Furniture",
    beforeImage: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "9",
    title: "Executive Office Interior",
    location: "Muscat, Oman",
    description: "Luxury executive office design featuring custom desk, built-in shelving, meeting area, and premium finishes. The space combines functionality with prestige, including decorative ceiling, ambient lighting, and sophisticated color scheme.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design"
  },
  {
    id: "10",
    title: "Residential Villa Fit-Out",
    location: "Al Khuwair, Muscat",
    description: "Complete villa fit-out including all interior spaces from concept to completion. Custom furniture, wardrobes, kitchen, decorative ceilings, lighting, flooring, and bathroom finishes. Turnkey solution delivered on time.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "11",
    title: "Retail Store Interior",
    location: "Muscat, Oman",
    description: "Modern retail store interior design with custom display units, fitting rooms, checkout counter, and storage solutions. The design maximizes product visibility while creating an engaging shopping experience.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out"
  },
  {
    id: "12",
    title: "Luxury Bathroom Suite",
    location: "Muscat, Oman",
    description: "Premium bathroom design featuring custom vanity, marble finishes, walk-in shower, freestanding bathtub, and designer fixtures. Includes decorative lighting, heated flooring, and sophisticated tile work.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design"
  },
  {
    id: "13",
    title: "Custom Wardrobes & Closets",
    location: "Barka, Oman",
    description: "Multiple custom wardrobe installations featuring CNC-manufactured components with soft-close mechanisms, LED lighting, glass doors, and premium finishes. Maximizes storage with intelligent organization systems.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    category: "Custom Furniture"
  },
  {
    id: "14",
    title: "Commercial Office Building",
    location: "Muscat, Oman",
    description: "Multi-floor office building fit-out with reception areas, open workspaces, private offices, meeting rooms, and break areas. Includes custom furniture, decorative ceilings, modern lighting, and premium flooring.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out"
  },
  {
    id: "15",
    title: "Outdoor Entertainment Area",
    location: "Muscat, Oman",
    description: "Complete outdoor living space design including covered seating area, outdoor kitchen, dining space, fire feature, and landscape integration. Custom-built pergola with integrated lighting and ceiling fans.",
    image: "https://i.pinimg.com/1200x/9d/40/a7/9d40a764a60c83031968544d7570cbbf.jpg",
    category: "Landscape"
  },
  {
    id: "16",
    title: "Children's Bedroom Suite",
    location: "Muscat, Oman",
    description: "Custom children's bedroom design with built-in bed, study area, wardrobe, and creative storage solutions. Features playful colors, soft-close mechanisms for safety, and durable finishes designed for young users.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    category: "Custom Furniture"
  },
  {
    id: "17",
    title: "Luxury Living Room",
    location: "Muscat, Oman",
    description: "Elegant living room interior with custom entertainment unit, decorative ceiling with integrated lighting, premium flooring, and bespoke furniture pieces. Features sophisticated color palette and luxurious material selections.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    category: "Interior Design"
  },
  {
    id: "18",
    title: "Medical Clinic Fit-Out",
    location: "Muscat, Oman",
    description: "Complete medical clinic interior including reception, waiting area, consultation rooms, and treatment areas. Design prioritizes hygiene, functionality, and patient comfort with appropriate materials and finishes.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out"
  },
  {
    id: "19",
    title: "Custom Home Library",
    location: "Muscat, Oman",
    description: "Bespoke home library with floor-to-ceiling custom shelving, reading nook, rolling ladder, and integrated lighting. CNC-manufactured components ensure precision fit and premium finish throughout.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    category: "Custom Furniture"
  },
  {
    id: "20",
    title: "Café Interior Design",
    location: "Muscat, Oman",
    description: "Modern café interior with custom seating, service counter, display cases, and decorative elements. Design creates a welcoming atmosphere with Instagram-worthy aesthetics and functional layout for efficient service.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
    category: "Commercial Fit-Out"
  }
];
