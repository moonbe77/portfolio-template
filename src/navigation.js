import { getPermalink, getSocialLink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Timeline',
			href: getPermalink('/'),
      links: [      
      ],
    },
		{
			text: 'Contact',
			href: getPermalink('/contact'),
		},            
  ],
  actions: [{ text: 'Download CV', href: '#', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Menu',
      links: [
        { text: 'Timeline', href: '/' },
        { text: 'Contact', href: '/contact' },
        { text: 'Download CV', href: '/cv' },
        { text: 'Linkedin', href: getSocialLink('linkedin')  },        
        
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: getSocialLink('x') },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: getSocialLink('instagram') },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: getSocialLink('facebook') }, 
		{ ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: getSocialLink('linkedin') },    
  ],
  footNote: `
    
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://bmunz.dev/"> bmunz.dev</a> · All rights reserved.
  `,
};
