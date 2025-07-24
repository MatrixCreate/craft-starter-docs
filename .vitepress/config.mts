import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Craft CMS Docs",
  description: "A VitePress Site",
  srcDir: './docs',
  cleanUrls: true,
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
          { text: 'Control Panel Tour', link: '/getting-started/dashboard-tour' },
          { text: 'Your First Edit', link: '/getting-started/first-edit' }
        ]
      },
      {
        text: 'Content Fundamentals',
        collapsed: true,
        items: [
          { text: 'Content Types', link: '/content-fundamentals/content-types' },
          { text: 'Block System', link: '/content-fundamentals/block-system' },
          { text: 'Page Structure', link: '/content-fundamentals/page-structure' },
          { text: 'Publishing', link: '/content-fundamentals/publishing' }
        ]
      },
      {
        text: 'Content Blocks',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/content-blocks/overview' },
          { text: 'Hero', link: '/content-blocks/hero' },
          { text: 'Text', link: '/content-blocks/text' },
          { text: 'Text & Image', link: '/content-blocks/text-image' },
          { text: 'Call to Action', link: '/content-blocks/call-to-action' },
          { text: 'Blog Listing', link: '/content-blocks/blog-listing' },
          { text: 'Testimonials', link: '/content-blocks/testimonials' },
          { text: 'FAQ Section', link: '/content-blocks/faq' },
          { text: 'USPs', link: '/content-blocks/usps' },
          { text: 'Entry Cards', link: '/content-blocks/entry-cards' },
          { text: 'Contact Form', link: '/content-blocks/contact-form' },
          { text: 'Contact Location', link: '/content-blocks/contact-location' },
          { text: 'Tabbed Navigator', link: '/content-blocks/tabbed-navigator' },
          { text: 'Video', link: '/content-blocks/video' }
        ]
      },
      {
        text: 'Page Management',
        collapsed: true,
        items: [
          { text: 'Creating Pages', link: '/page-management/creating-pages' },
          { text: 'Hero Sections', link: '/page-management/hero-sections' },
          { text: 'Footer Content', link: '/page-management/footer-content' },
          { text: 'Organization', link: '/page-management/organization' }
        ]
      },
      {
        text: 'Global Settings',
        collapsed: true,
        items: [
          { text: 'Site Config', link: '/global-settings/site-configuration' },
          { text: 'Global Content', link: '/global-settings/global-content' }
        ]
      },
      {
        text: 'SEO & Marketing',
        collapsed: true,
        items: [
          { text: 'Page SEO', link: '/seo-marketing/page-seo' },
          { text: 'Global SEO', link: '/seo-marketing/global-seo' },
          { text: 'Schema Markup', link: '/seo-marketing/schema' },
          { text: 'Social Media', link: '/seo-marketing/social-media' }
        ]
      },
      {
        text: 'Assets',
        collapsed: true,
        items: [
          { text: 'Images', link: '/assets/images' },
          { text: 'Documents', link: '/assets/documents' },
          { text: 'Brand Assets', link: '/assets/brand-assets' }
        ]
      },
      {
        text: 'Help & Support',
        collapsed: true,
        items: [
          { text: 'Global vs Local Content', link: '/help/global-vs-local' },
          { text: 'Common Issues', link: '/help/common-issues' },
          { text: 'WordPress Feature Guide', link: '/help/wordpress-mapping' },
          { text: 'Version Differences', link: '/help/version-differences' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MatrixCreate/craft-starter' }
    ]
  }
})
