export interface NavLink {
  text: string;
  href: string;
  colour: string;
}

export interface promotionsData {
    title: string;
    subject: string;
    buttonText: string;
    action: string;
}

export interface PageData {
  brandName: string;
  logoUrl: string;
  backgroundUrl: string,
  navLinks: NavLink[];
  promotions: promotionsData;
}