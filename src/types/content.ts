export interface BoardMember {
  name: string;
  school: string;
  role: string;
  imageLabel?: string;
  image?: string;
  imagePosition?: string;
}

export interface Advisor {
  name?: string;
  title?: string;
  role: string;
  imageLabel?: string;
}

export interface EventImageSpec {
  label: string;
  size?: "large" | "small";
  aspect?: "square" | "video" | "landscape" | "portrait";
}

export interface CharityEvent {
  id: string;
  title: string;
  body?: string;
  bodyLines?: string[];
  layout: "split" | "gallery";
  images: EventImageSpec[];
}

export interface CommitteeOfficer {
  role: string;
  name?: string;
  imageLabel?: string;
}

export interface Committee {
  id: string;
  school: string;
  officers: CommitteeOfficer[];
}

export interface ContactDetail {
  label: string;
  value: string;
  iconKey: "location" | "email" | "phone";
  href?: string;
}
