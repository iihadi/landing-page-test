import type { PageData } from './types';

export const getPageData = async (): Promise<PageData> => {
  const mockData: PageData = {
    brandName: 'betway',
    logoUrl: 'https://betway.com/doc-centre/assets/betway-logo-white-sml.png',
    backgroundUrl: 'https://cdn.betwaygroup.com/medusa-production/1001/the-hunch-mobile.webp',
    /*more nav links can be added, set to # cause no extra pages exist, if longer than navbar component to handle scrolling */
    navLinks: [
      { text: 'sports', href: '#', colour: '#00a826' },
      { text: 'live & real', href: '#', colour: '#3B82F6' },
      { text: 'casino', href: '#', colour: '#F97316' },
      { text: 'esports', href: '#', colour: '#8B5CF6' },
      { text: 'vegas', href: '#', colour: '#EF4444' },
    ],
    /*can expand promotions, component extended to auto scroll or something */
    promotions: [
      {
        id: 0,
        title: 'Sports New Customer Offer',
        subtitle: 'Get up to £10 in Free Bets',
        buttonText: 'Join Now',
        action: 'joinNow()'
      }
    ],
  };

  return Promise.resolve(mockData);
};