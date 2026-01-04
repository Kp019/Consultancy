export interface Project {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  location: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "riverdale-residence",
    title: "Riverdale Residence",
    category: "Residential",
    imageSrc: "/images/Project 1.webp",
    description: "A modern luxury home featuring sustainable materials and panoramic views.",
    location: "Riverdale, NY",
    year: "2023",
  },
  {
    id: "urban-loft",
    title: "Urban Loft",
    category: "Commercial",
    imageSrc: "/images/Project 2.webp",
    description: "A chic urban loft designed for modern living and working.",
    location: "Manhattan, NY",
    year: "2024",
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat",
    category: "Residential",
    imageSrc: "/images/Project 3.webp",
    description: "A cozy retreat nestled in the mountains, perfect for relaxation.",
    location: "Aspen, CO",
    year: "2023",
  },
  {
    id: "lakeside-villa",
    title: "Lakeside Villa",
    category: "Residential",
    imageSrc: "/images/Project 1.webp",
    description: "An elegant villa by the lake offering serene views and luxury amenities.",
    location: "Lake Tahoe, CA",
    year: "2022",
  },
  {
    id: "city-center-office",
    title: "City Center Office",
    category: "Commercial",
    imageSrc: "/images/Project 2.webp",
    description: "A state-of-the-art office space in the heart of the city.",
    location: "Downtown LA",
    year: "2024",
  },
  {
    id: "seaside-condo",
    title: "Seaside Condo",
    category: "Residential",
    imageSrc: "/images/Project 3.webp",
    description: "A luxurious condo with direct access to the beach and ocean views.",
    location: "Miami Beach, FL",
    year: "2023",
  },
];
