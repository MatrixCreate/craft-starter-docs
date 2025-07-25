import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Craft CMS Docs",
  description: "A VitePress Site",
  srcDir: './docs',
  cleanUrls: true,
  
  // Custom CSS
  vite: {
    css: {
      devSourcemap: true
    }
  },
  
  // Inline CSS for hero text styling
  head: [
    ['style', {}, `
      .VPHero .text {
        font-size: 32px !important;
        line-height: 1.2;
        font-weight: 600;
        max-width: none !important;
      }
      
      @media (min-width: 640px) {
        .VPHero .text {
          font-size: 32px !important;
        }
      }
      
      @media (min-width: 960px) {
        .VPHero .text {
          font-size: 36px !important;
        }
      }
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Content Blocks', link: '/content-blocks/' },
      { text: 'Help', link: '/help/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Welcome to Craft CMS', link: '/getting-started/welcome' },
          { text: 'Coming from WordPress', link: '/getting-started/coming-from-wordpress' },
          { text: 'Control Panel Tour', link: '/getting-started/control-panel-tour' },
          { text: 'Your First Edit', link: '/getting-started/first-edit' }
        ]
      },
      {
        text: 'Content Fundamentals',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/content-fundamentals/' },
          { text: 'Content Types', link: '/content-fundamentals/content-types' },
          { text: 'Page Structure', link: '/content-fundamentals/page-structure' },
          { text: 'Content Blocks', link: '/content-fundamentals/content-blocks' },
          { text: 'Hero', link: '/content-fundamentals/hero' },
          { text: 'Card Details', link: '/content-fundamentals/card-details' },
          { text: 'Footer Content', link: '/content-fundamentals/footer-content' },
        ]
      },
      {
        text: 'Page Management',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/page-management/' },
          { text: 'Creating Pages', link: '/page-management/creating-pages' },
          { text: 'Organization', link: '/page-management/organization' },
          { text: 'Publishing', link: '/page-management/publishing' },
        ]
      },
      {
        text: 'Content Blocks',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/content-blocks/' },
          { text: 'Text', link: '/content-blocks/text' },
          { text: 'Text & Image', link: '/content-blocks/text-image' },
          { text: 'Call to Action', link: '/content-blocks/call-to-action' },
          { text: 'Blog Listing', link: '/content-blocks/blog-listing' },
          { text: 'Testimonials', link: '/content-blocks/testimonials' },
          { text: 'FAQ', link: '/content-blocks/faq' },
          { text: 'USPs', link: '/content-blocks/usps' },
          { text: 'Entry Cards', link: '/content-blocks/entry-cards' },
          { text: 'Contact Form', link: '/content-blocks/contact-form' },
          { text: 'Contact Location', link: '/content-blocks/contact-location' },
          { text: 'Tabbed Navigator', link: '/content-blocks/tabbed-navigator' },
          { text: 'Video', link: '/content-blocks/video' }
        ]
      },
      {
        text: 'Global Settings',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/global-settings/' },
          { text: 'Company Info', link: '/global-settings/company-info' },
          { text: 'Site Config', link: '/global-settings/site-configuration' },
          { text: 'Global Content', link: '/global-settings/global-content' }
        ]
      },
      {
        text: 'Navigation',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/navigation/' },
          { text: 'Main Navigation', link: '/navigation/main-navigation' },
          { text: 'Footer Navigation', link: '/navigation/footer-navigation' },
          { text: 'Legal Navigation', link: '/navigation/legal-navigation' },
          { text: 'Action Buttons', link: '/navigation/action-buttons' },
        ]
      },
      {
        text: 'SEO & Marketing',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/seo-marketing/' },
          { text: 'Global SEO', link: '/seo-marketing/global-seo' },
          { text: 'Content SEO', link: '/seo-marketing/content-seo' },
          { text: 'Entry SEO', link: '/seo-marketing/entry-seo' },
          { text: 'Schema Markup', link: '/seo-marketing/schema' },
        ]
      },
      {
        text: 'Assets',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/assets/' },
          { text: 'Images', link: '/assets/images' },
          { text: 'Documents', link: '/assets/documents' },
          { text: 'Brand Assets', link: '/assets/brand-assets' }
        ]
      },
      {
        text: 'Help & Support',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/help/' },
          { text: 'FAQ', link: '/help/faq' },
          { text: 'Contact Support', link: '/help/contact-support' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MatrixCreate/craft-starter' }
    ]
  }
})
