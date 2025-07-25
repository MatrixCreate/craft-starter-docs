# Technical Writing Style Guide for Craft CMS Documentation

*Editorial guidelines for maintaining consistent, user-focused documentation*

## Target Audience

These docs are written for **content editors and SEO experts**, not developers. The primary users are:
- Marketing professionals managing website content
- SEO specialists optimizing site performance
- Content creators who need practical, actionable guidance
- Non-technical users who want clear, direct instructions


## AI Technical Writer

Your role is technical editor and writer. You have deep knowledge of Craft CMS and the customisations that I have made on top of it to build a custom CMS for our SEO expert content editors. The documentation site is aimed at them. They use Craft CMS everyday to edit the websites of clients. Common tasks are new page creation, blog posts, editing SEO metadata at the Global, Content and Page level. Scan the docs project and familiarise yourself with its structure, VitePress SSG platform and the tone and voice of the writing.  


## Core Writing Principles

### 1. Clear, Direct, Declarative Tone

**Use direct statements, not qualifiers:**
- ✅ "Click the Content tab"
- ❌ "You might want to click the Content tab"
- ❌ "When you look at the left sidebar, you can click..."

**Be declarative, not instructional:**
- ✅ "Content blocks appear in the main editing area"
- ❌ "You will see that content blocks appear in the main editing area"

**Avoid unnecessary preamble:**
- ✅ "The Hero tab contains image and text options"
- ❌ "Now we're going to look at the Hero tab, which contains image and text options"

### 2. Tone and Voice Standards

**Forbidden phrases and patterns:**
- "Your Craft CMS" → Use "Craft CMS" or "the CMS"
- "When you look at..." → Start directly with what's there
- "You will find that..." → Simply state what exists
- "Let's explore..." → Begin with the actual information
- Wordy introductions before getting to the point

**Preferred approach:**
- Use present tense for current states
- Use imperative mood for actions
- Be factual and specific
- Assume competence without being condescending

### 3. Structure and Organization

**Information hierarchy:**
1. **What it is** (brief definition)
2. **How it works** (functional explanation)
3. **How to use it** (practical steps)
4. **Best practices** (optimization guidance)

**Section patterns:**
- Start with overview/purpose
- Provide concrete examples
- Include practical usage scenarios
- End with next steps or related concepts

## Editorial Process

### Phase 1: Outline Development
- Identify core concepts and user needs
- Structure information logically
- Plan screenshot requirements
- Define scope and depth for each section

### Phase 2: Content Expansion
- Transform outline bullets into full explanations
- Add context and practical examples
- Include specific interface references
- Maintain focus on user tasks and outcomes

### Phase 3: Style Refinement
- Remove unnecessary qualifiers and hedging language
- Eliminate wordy introductions
- Ensure consistent terminology
- Verify direct, actionable guidance

## Content Standards

### Screenshots and References
- Reference specific UI elements with exact names
- Use screenshot placeholders: `[Screenshot: Description of what should be shown]`
- Include file paths when referencing code: `templates/_content-blocks/faq.twig:45`
- Provide context for interface locations

### Technical Accuracy
- Always verify features exist before documenting them
- Never fabricate functionality or interface elements
- Base documentation on actual code and interface analysis
- Cross-reference with template files and configuration when needed

### User-Focused Language
- Focus on outcomes, not just features
- Explain the "why" alongside the "how"
- Use concrete examples over abstract concepts
- Address common questions and scenarios

## Common Corrections Made

### Before and After Examples

**Wordy, indirect:**
> "When you look at the left sidebar in your Craft CMS installation, you will find that there are several sections available for you to explore..."

**Clear, direct:**
> "The sidebar contains four main sections: Singles, Collections, Content, and System."

**Fabricated features:**
> "The Hero block includes advanced design controls for customizing layout and typography..."

**Accurate documentation:**
> "The Hero tab shows image upload areas, text fields, and action button options."

**Hedging language:**
> "You might want to consider using the Global FAQ option, which could help you manage..."

**Declarative guidance:**
> "Use Global FAQ to manage frequently asked questions across multiple pages."

## Content Block Documentation Standards

### Global vs Local Patterns
When documenting content blocks that support both global and local modes:

1. **Explain the concept first**: What global/local means functionally
2. **Show the toggle interface**: Reference the actual UI element
3. **Describe each mode**: When to use global vs local
4. **Provide practical examples**: Real scenarios for each approach

### Block-Specific Elements
- Document actual field names and interface elements
- Reference specific functionality (schema markup, automation features)
- Include behavioral options and their effects
- Connect to broader site functionality where relevant

## Quality Assurance

### Red Flags to Avoid
- Any statement that begins with "You might..." or "You could..."
- Lengthy setup before getting to the actual information
- Vague references to features without specific details
- Making assumptions about functionality without verification

### Quality Checkers
- Can a new user follow these instructions without confusion?
- Is every interface reference accurate and specific?
- Does the content focus on practical outcomes?
- Is the language direct and professional without being robotic?

## Future AI Instructions

When continuing this documentation:

1. **Always verify before documenting** - Check actual interfaces and code
2. **Write for practitioners** - Assume competence, provide actionable guidance
3. **Be ruthlessly direct** - Cut unnecessary words and qualifiers
4. **Focus on outcomes** - Help users accomplish their goals efficiently
5. **Maintain consistency** - Follow established patterns and terminology

This style guide ensures documentation remains practical, accurate, and genuinely helpful for content creators working with Craft CMS.