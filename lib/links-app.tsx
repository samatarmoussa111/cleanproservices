type menuType = {
  title: string;
  path: string;
};

type serviceType = {
  id: number;
  title: string;
  description: string;
  src: string;
};

export const menus: menuType[] = [
  { title: "Home", path: "/#" },
  { title: "Blog", path: "/#" },
  { title: "About Us", path: "/#" },
  { title: "Contact Us", path: "/#" },
];

export const services: serviceType[] = [
  {
    id: 1,
    title: "Commercial Cleaning",
    description: "We mow lawns, edge, trim bushes, and blow off patios.",
    src: "/images/commercial_cleaning.jpg",
  },
  {
    id: 2,
    title: "Residential Cleaning",
    description: "We mow lawns, edge, trim bushes, and blow off patios.",
    src: "/images/rental_cleaning.jpg",
  },
  {
    id: 3,
    title: "Janitorial Cleaning",
    description: "We mow lawns, edge, trim bushes, and blow off patios.",
    src: "/images/janitorial_cleaning.jpg",
  },
];
