# Planning Guide

A professional legal services website showcasing Ghuman Law Associates' expertise and services, with a focus on building trust through three decades of proven excellence.

**Experience Qualities**: 
1. **Professional** - The interface should communicate authority and competence through refined typography, structured layouts, and polished interactions
2. **Trustworthy** - Design choices should reinforce reliability through consistent visual language, clear hierarchy, and transparent information presentation with mandatory disclaimer
3. **Accessible** - Despite the formal nature, the experience should feel welcoming and serve both local clients and NRIs

**Complexity Level**: Content Showcase (information-focused)
This is primarily a presentation of legal services information - practice areas, professional profiles, contact information, and QR code generation for business cards - with basic state management for disclaimer acceptance.

## Essential Features

**Legal Disclaimer**
- Functionality: Modal dialog that appears on first visit requiring explicit agreement
- Purpose: Legal compliance and setting expectations for website use
- Trigger: Automatically on first page load
- Progression: Read disclaimer → Click Agree or Decline → Access site or exit
- Success criteria: Disclaimer persists across sessions using KV storage, cannot be bypassed

**Areas of Service**
- Functionality: Displays comprehensive list of legal specializations with descriptions
- Purpose: Helps potential clients quickly identify relevant expertise across 12+ practice areas
- Trigger: Visible on main page after hero section
- Progression: View grid of service areas → Read descriptions → Identify NRI services link
- Success criteria: All 12 service areas clearly visible with icons, NRI services prominently linked

**About Us**
- Functionality: Presents firm's 33-year history and commitment
- Purpose: Establishes credibility and legacy in Punjab, Haryana, and Chandigarh region
- Trigger: Accessible from navigation
- Progression: Read firm overview → Understand geographical coverage → Recognize experience level
- Success criteria: Complete story told compellingly with emphasis on client satisfaction

**Our Professionals**
- Functionality: Showcases three advocates with experience details
- Purpose: Builds personal connection and demonstrates team expertise
- Trigger: Visible in dedicated section
- Progression: View professional profiles → Note years in practice → Assess qualifications
- Success criteria: All three professionals clearly presented with experience timeline

**Submit a Query**
- Functionality: Detailed contact form with country/state fields
- Purpose: Capture detailed client information for consultation
- Trigger: Accessible from navigation and CTA buttons
- Progression: Fill name → Add email/phone → Specify location → Describe matter → Submit
- Success criteria: All required fields validated, clear submission confirmation

**Contact Information**
- Functionality: Displays multiple phone numbers, email, address, and interactive map
- Purpose: Provides multiple channels to reach the firm
- Trigger: Visible in dedicated section near footer
- Progression: View contact options → Choose preferred method → Initiate contact
- Success criteria: Three phone numbers, email, complete Chandigarh address, embedded map functional

**QR Code Generator**
- Functionality: Generates downloadable QR codes for both websites
- Purpose: Provides assets for business cards and marketing materials
- Trigger: Visible in dedicated section
- Progression: View QR codes → Download desired code → Use in print materials
- Success criteria: Two QR codes (main site and NRI subdomain) downloadable as PNG files

## Edge Case Handling

- **Disclaimer Rejection**: User clicking "Decline" redirects away from site
- **Form Validation**: All required fields in query form properly validated before submission
- **Mobile Navigation**: Long navigation menu (5 items) collapses appropriately on mobile
- **QR Code Downloads**: QR codes render properly and download correctly across browsers
- **Map Loading**: Embedded Google Map has fallback for slow connections
- **Long Practice Area List**: 12 service areas organized in responsive 3-column grid

## Design Direction

The design should evoke confidence, sophistication, and accessibility - the visual equivalent of a well-established law firm that has served the region for over three decades. The aesthetic should balance traditional legal gravitas with modern professionalism.

## Color Selection

A refined palette anchored in deep navy blues that communicate trust and authority, balanced with warm gold accents for approachability.

- **Primary Color**: Deep Navy (oklch(0.25 0.05 250)) - Represents authority, professionalism, and legal tradition. Used for headers, navigation, and key structural elements.
- **Secondary Colors**: 
  - Slate Gray (oklch(0.45 0.01 250)) - Supporting text and less prominent UI elements
  - Light Cream (oklch(0.97 0.01 85)) - Card backgrounds and subtle highlights
- **Accent Color**: Warm Gold (oklch(0.70 0.12 75)) - Call-to-action buttons, important highlights, and focus elements. Communicates success and premium service.
- **Foreground/Background Pairings**: 
  - Primary Navy (oklch(0.25 0.05 250)): White text (oklch(0.99 0 0)) - Ratio 12.1:1 ✓
  - Accent Gold (oklch(0.70 0.12 75)): Deep Navy text (oklch(0.25 0.05 250)) - Ratio 5.8:1 ✓
  - Background Cream (oklch(0.97 0.01 85)): Deep Navy text (oklch(0.25 0.05 250)) - Ratio 11.2:1 ✓
  - Background White (oklch(0.99 0 0)): Slate text (oklch(0.45 0.01 250)) - Ratio 7.8:1 ✓

## Font Selection

Typefaces should balance traditional legal gravitas with modern readability - serif for authority, sans-serif for clarity.

- **Primary Font**: Crimson Pro (serif) - For headings and major titles, communicating tradition and gravitas
- **Secondary Font**: Inter (sans-serif) - For body text and UI elements, ensuring excellent readability
- **Typographic Hierarchy**: 
  - H1 (Hero Title): Crimson Pro Bold/60px/tight letter spacing (-0.02em) with line breaks for emphasis
  - H2 (Section Headers): Crimson Pro SemiBold/40px/tight letter spacing (-0.01em)
  - H3 (Subsection Headers): Inter SemiBold/24px/normal letter spacing
  - Body (Main Content): Inter Regular/18px/relaxed line height (1.7)
  - Small (Details): Inter Medium/14px/normal line height (1.5)

## Animations

Animations should feel refined and purposeful - subtle transitions that guide attention without drawing focus to themselves. Use gentle fades for content appearance (600ms), smooth easing for hover states on interactive elements (200-300ms), and fluid page scrolling. The disclaimer modal should appear with a subtle fade. Motion should reinforce the sense of care and precision expected in legal work.

## Component Selection

- **Components**: 
  - Dialog: For mandatory legal disclaimer with no-close enforcement
  - Card: For practice areas, professional profiles, and contact information
  - Button: Primary (gold accent) for CTAs, secondary for navigation
  - Input/Textarea: For comprehensive query form with validation
  - Select: For country/state dropdowns if needed
  - Badge: For years of experience and specializations
  - Separator: For visual breaks between major sections
  
- **Customizations**: 
  - Hero section with multi-line headline emphasizing "Proven Excellence" and "Three Decades"
  - Custom QR code generator component with download functionality
  - Professional cards with placeholder for future photo integration
  - Embedded Google Maps iframe for office location
  - Disclaimer dialog with persistent storage using useKV
  - Practice area cards with distinctive icons from Phosphor
  - Two-column contact layout with form and information cards

- **States**: 
  - Buttons: Subtle scale transform on hover (1.05x), smooth color transition (300ms)
  - Cards: Gentle lift on hover (shadow increase), border color shift to accent gold
  - Form inputs: Focus ring with accent color, clear validation states
  - Disclaimer dialog: Cannot be dismissed without action, persists acceptance
  - Navigation: Mobile hamburger menu with smooth slide animation

- **Icon Selection**: 
  - Scales for logo and legal symbolism
  - Gavel for criminal laws
  - House for property matters
  - Users for family laws
  - HandHeart for matrimonial laws
  - ShieldCheck for consumer protection
  - Briefcase for service matters
  - Buildings for white collar crimes
  - FileText for constitutional matters
  - UserCircle for human rights
  - Globe for NRI services
  - Phone, Envelope, MapPin for contact
  - QrCode for QR code section
  - Download for QR code downloads

- **Spacing**: 
  - Section padding: py-20 px-4 (desktop), py-12 px-4 (mobile)
  - Card padding: p-8
  - Content max-width: max-w-6xl (max-w-7xl for navigation)
  - Grid gaps: gap-6 for cards, gap-4 for smaller elements
  - Consistent margin bottom between sections: mb-16

- **Mobile**: 
  - Navigation collapses to hamburger menu at 1024px (lg breakpoint) due to 5 items
  - Practice area grid: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
  - Hero text stacks with reduced font sizes
  - Contact form and info stack vertically
  - QR codes stack vertically on mobile
  - Professional profiles in single column on mobile
  - Touch-friendly button sizes (min-h-12) throughout
  - Full-screen mobile menu overlay
