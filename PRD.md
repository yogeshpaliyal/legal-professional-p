# Planning Guide

A sophisticated digital portfolio showcasing a lawyer's expertise, experience, and professional achievements with an emphasis on credibility and trust.

**Experience Qualities**: 
1. **Professional** - The interface should communicate authority and competence through refined typography, structured layouts, and polished interactions
2. **Trustworthy** - Design choices should reinforce reliability through consistent visual language, clear hierarchy, and transparent information presentation
3. **Approachable** - Despite the formal nature, the experience should feel welcoming through warm accents, readable content, and intuitive navigation

**Complexity Level**: Content Showcase (information-focused)
This is primarily a presentation of professional information - practice areas, case results, credentials, and contact information - without complex application logic or state management.

## Essential Features

**Practice Areas Overview**
- Functionality: Displays areas of legal specialization with descriptions
- Purpose: Helps potential clients quickly identify relevant expertise
- Trigger: Visible on main page load
- Progression: View grid of practice areas → Read brief descriptions → Access detailed information if needed
- Success criteria: All practice areas clearly visible with concise, understandable descriptions

**Case Results / Portfolio**
- Functionality: Showcases notable case outcomes and achievements
- Purpose: Builds credibility through demonstrated success
- Trigger: Accessible from navigation or scrolling
- Progression: Browse case summaries → View outcome details → Understand expertise demonstrated
- Success criteria: Results presented professionally with appropriate confidentiality, clear outcomes visible

**Professional Biography**
- Functionality: Presents lawyer's background, education, and career history
- Purpose: Establishes credentials and builds personal connection
- Trigger: Accessible from navigation
- Progression: Read career overview → Review education and certifications → Understand specializations
- Success criteria: Complete professional story told compellingly and concisely

**Contact Information**
- Functionality: Provides clear pathways to reach the lawyer
- Purpose: Convert interest into consultation requests
- Trigger: Accessible from navigation and prominent placement
- Progression: View contact options → Choose preferred method → Initiate contact
- Success criteria: Multiple contact methods clearly presented, easy to use

**Credentials & Achievements**
- Functionality: Lists bar admissions, awards, publications, speaking engagements
- Purpose: Reinforces expertise and standing in legal community
- Trigger: Visible in dedicated section
- Progression: Scan credentials → Review specific achievements → Assess qualifications
- Success criteria: All credentials clearly organized and easy to verify

## Edge Case Handling

- **Long Practice Area Lists**: Use card grid layout that adapts to content, with consistent height treatment to maintain visual balance
- **Missing Contact Attempts**: Provide multiple contact methods (phone, email, contact form) so if one fails, alternatives exist
- **Mobile Viewing**: Responsive design ensures professional presentation on all devices, particularly important for clients researching on phones
- **Content Updates**: Structure allows easy addition of new cases, credentials, or practice areas without layout disruption

## Design Direction

The design should evoke confidence, sophistication, and accessibility - the visual equivalent of a well-appointed law office that feels prestigious yet welcoming. Think rich but not ostentatious, structured yet human.

## Color Selection

A refined palette anchored in deep navy blues that communicate trust and authority, balanced with warm gold accents for approachability.

- **Primary Color**: Deep Navy (oklch(0.25 0.05 250)) - Represents authority, professionalism, and legal tradition. Used for headers, primary buttons, and key structural elements.
- **Secondary Colors**: 
  - Slate Gray (oklch(0.45 0.01 250)) - Supporting text and less prominent UI elements
  - Light Cream (oklch(0.97 0.01 85)) - Card backgrounds and subtle highlights
- **Accent Color**: Warm Gold (oklch(0.70 0.12 75)) - Call-to-action buttons, important highlights, and moments requiring attention. Communicates success and premium service.
- **Foreground/Background Pairings**: 
  - Primary Navy (oklch(0.25 0.05 250)): White text (oklch(0.99 0 0)) - Ratio 12.1:1 ✓
  - Accent Gold (oklch(0.70 0.12 75)): Deep Navy text (oklch(0.25 0.05 250)) - Ratio 5.8:1 ✓
  - Background Cream (oklch(0.97 0.01 85)): Deep Navy text (oklch(0.25 0.05 250)) - Ratio 11.2:1 ✓
  - Background White (oklch(0.99 0 0)): Slate text (oklch(0.45 0.01 250)) - Ratio 7.8:1 ✓

## Font Selection

Typefaces should balance traditional legal gravitas with modern readability - serif for authority, sans-serif for clarity.

- **Primary Font**: Crimson Pro (serif) - For headings and lawyer name, communicating tradition and gravitas
- **Secondary Font**: Inter (sans-serif) - For body text and UI elements, ensuring excellent readability
- **Typographic Hierarchy**: 
  - H1 (Lawyer Name): Crimson Pro Bold/48px/tight letter spacing (-0.02em)
  - H2 (Section Headers): Crimson Pro SemiBold/36px/tight letter spacing (-0.01em)
  - H3 (Subsection Headers): Inter SemiBold/24px/normal letter spacing
  - Body (Main Content): Inter Regular/18px/relaxed line height (1.7)
  - Small (Credentials): Inter Medium/14px/normal line height (1.5)

## Animations

Animations should feel refined and purposeful - subtle transitions that guide attention without drawing focus to themselves. Use gentle fades for content appearance, smooth easing for hover states on interactive elements, and fluid page scrolling. Motion should reinforce the sense of care and precision expected in legal work.

## Component Selection

- **Components**: 
  - Card: For practice areas, case results, and credential displays with subtle shadows
  - Button: Primary (gold accent) for contact CTAs, secondary (navy) for navigation
  - Separator: For visual breaks between major sections
  - Badge: For specializations, certifications, and tags
  - Dialog: For expanded case details or credential information if needed
  - Scroll Area: For lengthy content sections while maintaining layout
  - Avatar: For professional headshot with refined presentation
  
- **Customizations**: 
  - Hero section with full-width layout and professional photo
  - Custom practice area cards with icon integration from Phosphor
  - Timeline component for career history (custom, not in shadcn)
  - Testimonial cards with subtle styling

- **States**: 
  - Buttons: Subtle scale transform on hover (1.02x), smooth color transition (200ms), pressed state with slight opacity
  - Cards: Gentle lift on hover (shadow increase), border color shift to accent gold
  - Links: Underline animation sliding in from left, color shift to accent gold

- **Icon Selection**: 
  - Scales (legal symbol) for logo/branding
  - Briefcase for practice areas
  - Trophy for achievements
  - GraduationCap for education
  - Phone, Envelope for contact methods
  - MapPin for office location
  - Award for credentials

- **Spacing**: 
  - Section padding: py-20 px-4 (desktop), py-12 px-4 (mobile)
  - Card padding: p-6
  - Content max-width: max-w-6xl
  - Grid gaps: gap-6 for cards, gap-4 for smaller elements
  - Consistent margin bottom between sections: mb-16

- **Mobile**: 
  - Navigation collapses to hamburger menu at 768px
  - Practice area grid: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
  - Hero layout stacks vertically on mobile with photo above text
  - Reduced typography scale (H1: 36px, H2: 28px on mobile)
  - Touch-friendly button sizes (min-h-12) throughout
  - Simplified navigation with full-screen overlay menu
