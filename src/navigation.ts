import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '关于',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '导航',
      links: [
        { text: '首页', href: getPermalink('/') },
        { text: '博客', href: getBlogPermalink() },
        { text: '关于', href: getPermalink('/about') },
      ],
    },
    {
      title: '联系',
      links: [
        { text: 'GitHub', href: 'https://github.com/Tazmi-Asdes' },
        { text: '邮箱', href: 'mailto:2926238971@qq.com' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Tazmi-Asdes' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:2926238971@qq.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/' },
  ],
  footNote: `
    © 2025 林子航 (Tazmi) · 保留所有权利。
  `,
};
