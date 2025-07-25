---
prev:
  text: 'Help & Support'
  link: '/help/'
---

# Frequently Asked Questions

*Common questions about using Craft CMS and this documentation*

## Getting Started

### What's the difference between Craft CMS and WordPress?

Craft CMS uses a more structured approach to content. Instead of generic "Posts" and "Pages," content is organized into logical types like Blog posts, Team members, and Pages. Content is built using flexible blocks rather than a single text editor, giving you more control over layout and design.

### How do I log into the Control Panel?

Navigate to your site's admin URL (typically `/admin`) and use your username and password. The login screen will have fields for your credentials and a "Sign in" button.

### Where do I start editing content?

The **Entries** section in the left sidebar is your main workspace. It's organized into:
- **Singles**: Special pages like Homepage
- **Collections**: Reusable content like Blog posts and Team members  
- **Content**: Main site pages like About and Services
- **System**: Technical content like error pages

## Content Management

### How do I create a new page?

1. Go to **Entries → Content → Pages**
2. Click the **"+ New entry"** button
3. Fill in the Title field
4. Use the **Content** tab to add content blocks
5. Configure the **Hero**, **SEO**, and other tabs as needed
6. Click **Save** to publish

### What are Content Blocks?

Content Blocks are flexible building components for your pages. Instead of one large text editor, you can mix and match different block types:
- **Text**: Rich text content with formatting
- **Text & Image**: Combined text and image layouts
- **Call to Action**: Promotional sections with buttons
- **Blog Listing**: Display lists of blog posts
- **FAQ**: Accordion-style question sections

### How do I add images to my content?

When editing content blocks, look for image upload areas with "Add an image," "Upload a file," and "Search" options. You can upload new images or search existing ones from the Assets section.

### What's the difference between Global and Local content?

- **Global**: Content managed centrally that appears across multiple pages (like global call-to-action sections)
- **Local**: Content specific to individual pages
- Toggle switches in content blocks let you choose between global and local versions

## Page Structure

### What are all these tabs when editing a page?

Each page has multiple tabs for different purposes:
- **Content**: Your main page content using content blocks
- **Hero**: The main header section at the top of the page
- **Card Details**: How the page appears when featured in lists
- **Footer Content**: Page-specific footer elements
- **SEO**: Search engine optimization settings
- **Schema**: Structured data for search engines

### How do I change the page hierarchy?

In the page editor's right sidebar, use the **Parent** field to set a page's parent. This creates URL structures like `/about/team/` and helps organize your site navigation.

### How do I control when pages are published?

Use the **Status** section in the right sidebar:
- **Enabled**: Page is live and visible
- **Post Date**: When the page goes live
- **Expiry Date**: When the page is automatically hidden
- Save options include "Save and continue editing" and immediate publishing

## Global Settings

### Where do I update company information?

Go to **Globals → Company Info**. This has tabs for:
- **Contact Info**: Address, email, phone, map embed codes
- **Brand**: Logo uploads for different contexts
- **Opening Hours**: Business hours with schema markup
- **Social Networks**: Social media profile links

### How do I change site-wide settings?

**Globals → Site Config** contains:
- **Header & Footer**: Sticky header and global footer settings
- **Navigation**: Megamenu and mobile navigation options
- **Content Blocks**: Global styling defaults
- **Placeholders**: Default images for content types
- **Scripts**: Custom HTML and analytics codes

### What is Global Content?

**Globals → Global Content** manages reusable content elements:
- **Call to Action**: Site-wide promotional sections
- **Contact Form**: Global contact form configuration
- **FAQ**: Reusable question sections
- **USPs**: Unique selling points displayed across pages
- **Testimonials**: Customer testimonials
- **Newsletter Signup**: Email subscription forms

## Content Blocks

### Which content block should I use?

- **Text**: For paragraphs, lists, and formatted content
- **Text & Image**: When you need text alongside images
- **Call to Action**: For promotional sections with buttons
- **Blog Listing**: To display recent blog posts
- **Entry Cards**: To showcase related pages or content
- **Contact Form**: For inquiry forms (uses global settings)
- **FAQ**: For accordion-style questions
- **USPs**: For highlighting key benefits
- **Testimonials**: For customer reviews
- **Video**: For embedded videos with poster images

### How do I reorder content blocks?

Content blocks can be dragged and reordered within the Content tab. Each block has drag handles that let you move them up or down on the page.

### Can I copy content blocks between pages?

While there's no direct copy function, you can use Global versions of blocks (like Global Call to Action) that appear consistently across multiple pages, or recreate similar blocks manually.

## Navigation

### How do I update the main menu?

Go to **Navigation** in the main sidebar. You can:
- Edit the **Main Navigation** structure
- Set up **Mobile Main Navigation** 
- Configure **Footer Navigation** and **Legal Navigation**
- Manage **Action Buttons** in the header

### How do I create dropdown menus?

In the Navigation section, you can create parent-child relationships between menu items. Use the "Include All Children" toggle to automatically include child pages in navigation menus.

## SEO & Marketing

### How do I optimize pages for search engines?

Each page has an **SEO** tab with:
- **Meta title and description** override options
- **Social media preview** controls for Facebook and Twitter
- **Google search preview** to see how your page appears
- **Sitemap inclusion** settings

### What is Schema markup?

The **Schema** tab adds structured data to help search engines understand your content better. This can improve how your pages appear in search results with rich snippets.

### Are SEO settings automatic?

Yes, the SEOmatic plugin automatically generates meta titles, descriptions, and structured data based on your content. You only need to use the SEO tab when you want to override the defaults.

## Assets & Media

### Where do I manage images and files?

The **Assets** section has different volumes:
- **Images**: Photos and graphics for content
- **Documents**: PDFs, Word documents, etc.
- **Brand Assets**: Company logos (managed by administrators)
- **Placeholders**: Default images for content types

### How do I edit image details?

Click on any image in the Assets section to edit its title, alternative text, and view technical details like file size and dimensions.

### What's the Brand Assets volume for?

Brand Assets contains your company logos and is managed by administrators. These logos automatically appear in headers, footers, and email templates - you don't need to select them manually when creating content.

## Troubleshooting

### I can't find a specific content type

Check that you're looking in the right section:
- **Singles**: One-off pages like Homepage
- **Collections**: Blog posts, Team members, Testimonials
- **Content**: Main site pages
- **System**: Categories and error pages

### My changes aren't showing on the live site

Make sure you:
1. Clicked **Save** (not just preview)
2. Set the **Status** to **Enabled**
3. Check the **Post Date** isn't set in the future
4. Clear any caching if you have cache plugins

### I accidentally deleted something important

Contact your site administrator immediately. Craft CMS may have revision history that can help restore deleted content, but this requires administrator access.

### The interface looks different than the screenshots

Craft CMS interfaces can vary slightly based on version, installed plugins, and administrator customizations. The core concepts remain the same even if some buttons or sections appear different.

---

*Still have questions? Visit our [Contact Support](contact-support.md) page for direct assistance.*