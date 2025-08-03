export interface NavLink {
  text: string;
  href: string;
  colour: string;
}

export interface PromotionData {
    id: number;
    title: string;
    subtitle: string;
    buttonText: string;
    action: string;
}

export interface PageData {
  brandName: string;
  logoUrl: string;
  backgroundUrl: string;
  navLinks: NavLink[];
  promotions: PromotionData[];
}