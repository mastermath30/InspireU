import type {
  Advisor,
  BoardMember,
  CharityEvent,
  Committee,
  ContactDetail,
} from "@/types/content";

export const SITE = {
  name: "InspireU",
  tagline: "Unlocking Potential, Building Dreams",
  email: "inspireu.upbd@gmail.com",
  phone: "425-956-3836",
  location: "Redmond, WA",
};

export const HOME_HERO = {
  imageLabel: "Hero: InspireU board group photo",
  title: "InspireU",
  subtitle: "Unlocking Potential, Building Dreams",
};

export const MISSION = {
  imageLabel: "Photo: Mission — InspireU team holding donation check",
  overlayTitle: "Mission",
  body: "We are dedicated to empowering underprivileged and underrepresented students worldwide.",
};

export const ABOUT_US = {
  imageLabel: "Photo: About Us — InspireU team at Dandiya event",
  overlayTitle: "About Us",
  body: "We are a group of high school students who came together, driven by the understanding of the privileges and opportunities we have been given. Our goal is to ensure that everyone around us has access to the same opportunities, fostering equality for all.",
};

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Arham Bhandari",
    school: "Bellevue High School, Class of 2028",
    role: "Co-President",
  },
  {
    name: "Saanvi Tiwari",
    school: "Lake Washington High School, Class of 2028",
    role: "Co-President",
    image: "/board/saanvi.jpeg",
  },
  {
    name: "Helan",
    school: "Tesla STEM High School, Class of 2028",
    role: "Vice President",
  },
  {
    name: "Malhar Pawar",
    school: "Tesla STEM High School, Class of 2028",
    role: "Secretary & Committee Manager",
    image: "/board/malhar.jpeg",
  },
  {
    name: "Niyandri",
    school: "Skyline High School, Class of 2027",
    role: "Social Media Manager",
  },
  {
    name: "Sanjana Cherukuri",
    school: "International Community School, Class of 2028",
    role: "Treasurer",
  },
  {
    name: "Reva",
    school: "Lakeside High School, Class of 2028",
    role: "Public Relations Officer",
    image: "/board/reva.jpeg",
  },
];

export const ADVISORS: Advisor[] = [
  { role: "Adult Advisor" },
  { name: "Siva Sunkara", title: "Microsoft", role: "Adult Advisor" },
  { role: "Adult Advisor" },
  {
    name: "Naga Praveena Manchikalapati",
    title: "Microsoft: Software Engineer",
    role: "Adult Advisor",
  },
];

export const CHARITY_EVENTS: CharityEvent[] = [
  {
    id: "everett-school-donation-24",
    title: "Everett School Donation 24'",
    layout: "split",
    body: "We provided a donation to the Everett Public Schools Foundation through Hopes and Smiles for Children and Stuff the Bus, aimed at facilitating the arrangement of backpacks and essential school supplies for students who are in need within the district.",
    images: [
      {
        label:
          "Screenshot: PayPal donation confirmation — $3,571.56 to Everett Public Schools Foundation",
        size: "large",
        aspect: "landscape",
      },
      {
        label: "Photo: InspireU team presenting check at Everett Public Schools",
        aspect: "square",
      },
      {
        label: "Photo: InspireU team presenting check at Everett Public Schools",
        aspect: "square",
      },
    ],
  },
  {
    id: "hopes-and-smiles-dandiya-24",
    title: "Hopes and Smiles Dandiya 24'",
    layout: "gallery",
    bodyLines: [
      "Hopes and Smiles Dandiya Event (Donation to the Seattle Children's Hospital for T-Cell Exhaustion (Cancer Research)) — $15,000",
      "For more images, visit the Hopes and Smile Facebook page: https://www.facebook.com/hopesandsmiles",
    ],
    images: [
      { label: "Photo: Dandiya event group photo", aspect: "landscape" },
      { label: "Photo: Dandiya event", aspect: "square" },
      { label: "Photo: Dandiya event", aspect: "square" },
      { label: "Photo: Dandiya event", aspect: "square" },
      { label: "Photo: Dandiya event", aspect: "square" },
      { label: "Photo: Dandiya event", aspect: "square" },
      { label: "Photo: Dandiya event", aspect: "square" },
    ],
  },
  {
    id: "sankara-nethralaya-mani-sharma-24",
    title:
      "Sankara Nethralaya — Mani Sharma Concert 24' (Youth Partnership)",
    layout: "gallery",
    images: [
      { label: "Photo: Mani Sharma concert performer", aspect: "landscape" },
      { label: "Photo: Concert audience", aspect: "landscape" },
      { label: "Photo: Mani Sharma concert", aspect: "landscape" },
      { label: "Photo: Mani Sharma concert", aspect: "landscape" },
      { label: "Photo: Concert backstage", aspect: "landscape" },
      { label: "Photo: Concert stage", aspect: "landscape" },
    ],
  },
  {
    id: "midnight-masquerade-2024",
    title:
      "Midnight Masquerade — Hopes & Smiles and InspireU New Year's Party — 2024",
    layout: "gallery",
    images: [
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
      { label: "Photo: Midnight Masquerade", aspect: "landscape" },
    ],
  },
];

const officersFor = (schoolShort: string): Committee["officers"] => [
  { role: `${schoolShort} President` },
  { role: `${schoolShort} Vice President` },
  { role: `${schoolShort} Secretary` },
  { role: `${schoolShort} Treasurer` },
];

export const COMMITTEES: Committee[] = [
  {
    id: "redmond",
    school: "Redmond High School Committee",
    officers: officersFor("Redmond"),
  },
  {
    id: "eastlake",
    school: "Eastlake High School Committee",
    officers: officersFor("Eastlake"),
  },
  {
    id: "lake-washington",
    school: "Lake Washington High School Committee",
    officers: officersFor("Lake Washington"),
  },
  {
    id: "tesla-stem",
    school: "Tesla STEM High School Committee",
    officers: officersFor("Tesla STEM"),
  },
  {
    id: "juanita",
    school: "Juanita High School Committee",
    officers: officersFor("Juanita"),
  },
  {
    id: "skyline",
    school: "Skyline High School Committee",
    officers: officersFor("Skyline"),
  },
];

export const COMMITTEE_WORK = {
  whyHeading: "Why start a committee?",
  whyBody:
    "Committee officers are students throughout Washington State who serve as key leaders of InspireU and oversee chapters at their respective schools. Acting as representatives for InspireU, you will recruit volunteers, coordinate and promote fundraisers, and assist in supporting large events and charitable activities.",
  howHeading: "How to start a committee & Requirements",
  howBody:
    "To start a committee, reach out to our board and let us know from what school you want to start the committee. Each committee should have a minimum of 2 and a maximum of 4 heads who will serve as the core organizers and leaders at their school.",
  ctaHeading: "Build Your Committee with Us.",
  ctaLabel: "Get Involved",
  ctaHref: "/contact-us",
};

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    label: "Location",
    value: SITE.location,
    iconKey: "location",
  },
  {
    label: "Email",
    value: SITE.email,
    iconKey: "email",
    href: `mailto:${SITE.email}`,
  },
  {
    label: "Phone",
    value: SITE.phone,
    iconKey: "phone",
    href: `tel:${SITE.phone.replace(/\D/g, "")}`,
  },
];

export const CONTACT_INTRO = {
  heading: "Contact Us",
  subtitle:
    "Find our contact details and get in touch with our team for any assistance or inquiries.",
};

export const GIVE_PAGE = {
  title: "Support InspireU",
  body: "Our donation portal is launching soon. In the meantime, reach out at inspireu.upbd@gmail.com to contribute.",
};
